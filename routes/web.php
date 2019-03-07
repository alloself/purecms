<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('Admin')->middleware('web')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/login', 'PageController@index');
        Route::middleware('web')->group(function () {
            Route::get('/{path?}', 'PageController@index')->where('path', '.*')->name('index');
        });
    });
});

Route::namespace('Site')->name('site.')->middleware('web')->group(function () {
    Route::get('/robots.txt', 'RobotsController')->name('robots');
    Route::get('/{path?}', 'PageController@index')->where('path', '.*')->name('index');
});
