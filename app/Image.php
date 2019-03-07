<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    protected $fillable = ['image_type', 'image_id', 'path'];

    public function imageble()
    {
        return $this->morphTo();
    }


    /**
     * Get url
     *
     * @return string|null
     */
    public function getPathAttribute($variable)
    {
        if (!empty($variable) && Storage::exists($variable)) {
            $path = explode('/', $variable);
            return  '/storage/' . end($path); // /static/public/
        } else {
            return null;
        }
    }
    protected $dispatchesEvents = [
        'deleting' => ImageUpdated::class,
    ];
}
