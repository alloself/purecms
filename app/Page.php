<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Image;
class Page extends Model
{
    use NodeTrait, Sluggable {
    NodeTrait::replicate as replicateNode;
    Sluggable::replicate as replicateSlug;
    }
    protected $fillable = ['parent_id', 'title', 'content', 'slug', 'keywords', 'description', 'side_bar', 'index_page', 'include_side_bar', 'full_height'];

    public function replicate(array $except = null)
    {
        $instance = $this->replicateNode($except);
        (new SlugService())->slug($instance, true);

        return $instance;
    }
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title',
                'onUpdate' => true
            ]
        ];
    }
    public function link()
    {
        return $this->morphOne(Menu::class, 'linkable');
    }
    public function imageble()
    {
        return $this->morphOne(Image::class, 'imageble');
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function generatePath()
    {
        if ($this->isRoot()) {
            $this->path = $this->slug;
        } else {
            if ($this->parent->path == '/') {
                $this->path = $this->slug;
            } else {
                $this->path = $this->parent->path . '/' . $this->slug;
            }
        }
        return $this;
    }
    public function uploadImage($image)
    {
        if ($image == null) {
            return;
        }
        if ($this->image != null)
        Storage::delete('public/uploads/' . $this->image);
        $filename = str_random(10) . '.' . $image->extension();
        $image->storeAs('public/uploads', $filename);
        $this->image = '/storage/uploads/' . $filename;
        $this->save();
    }
    public function remove()
    {
        Storage::delete('public/uploads/' . $this->image);
        $this->delete();
    }
    protected $casts = [
        'full_height' => 'integer',
        'index_page' => 'integer',
        'side_bar' => 'integer',
        'include_side_bar' => 'integer'
    ];
}
