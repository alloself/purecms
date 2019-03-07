<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\Storage;
use function GuzzleHttp\json_decode;

class Product extends Model
{
    use Sluggable;

    protected $fillable = ['page_id', 'title', 'description', 'price', 'pageble', 'slug', 'params', 'path'];
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
    public function generatePath()
    {
        if ($this->page) {
            if ($this->page->path != '/') {
                $this->path = $this->page->path . '/' . $this->slug;
            } else {
                $this->path = $this->page->path . $this->slug;
            }
        }
        return $this;
    }
    public function imageble()
    {
        return $this->morphOne(Image::class, 'imageble');
    }
    public function page()
    {
        return $this->belongsTo(Page::class);
    }
    protected $casts = [
        'pageble' => 'integer',
    ];
}
