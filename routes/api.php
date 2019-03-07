<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */




Route::namespace('Api')->group(function () {
    Route::get('/compare', 'ProductController@compare')->name('compare');
    Route::post('/login', 'UserController@login')->name('login');
    Route::post('/order', 'OrderController@store')->name('order');
    Route::prefix('auth')->middleware('auth:api', 'admin')->group(function () {
        Route::get('/details', 'UserController@details')->name('details');
        Route::resource('/orders', 'OrderController');
        Route::get('/sitemap', 'SitemapController@index')->name('sitemap');
        Route::resource('/users', 'UserController');
        Route::resource('/pages', 'PageController');
        Route::get('/products/pages', 'PageController@indexForProduct');
        Route::resource('/images', 'ImageController');
        Route::resource('/products', 'ProductController');
        Route::post('/logout', 'AuthController@logout')->name('logout');
    });
});
