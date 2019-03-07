<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = ['linkable_type', 'linkable_id'];
    public function linkable()
    {
        return $this->morphTo();
    }
}
