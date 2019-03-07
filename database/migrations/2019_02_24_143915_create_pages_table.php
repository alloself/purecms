<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug')->unique();
            $table->string('title')->unique();
            $table->nestedSet();
            $table->string('description')->nullable();
            $table->string('image')->nullable();
            $table->boolean('full_height')->default(0);
            $table->boolean('index_page')->default(0);
            $table->boolean('side_bar')->default(0);
            $table->boolean('include_side_bar')->default(0);
            $table->string('keywords')->nullable();
            $table->string('path')->unique()->nullable();
            $table->longText('content')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
