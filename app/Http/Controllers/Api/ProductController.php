<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use App\Image;
use function GuzzleHttp\json_encode;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::with('imageble')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create($request->all());
        if ($request->imageble) {
            $product->imageble()->save(Image::find($request->imageble['id']));
        }

        $product->generatePath()->save();

        return $product->load('imageble');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        $product->generatePath()->save();
        if ($request->imageble) {

            if ($imageble = $product->imageble()->getResults()) {
                if ($imageble->id != $request->imageble['id']) {

                    $path = explode('/', $imageble->path);
                    Storage::delete('public/' . end($path));
                    $product->imageble()->delete();
                    $product->imageble()->save(Image::find($request->imageble['id']));
                }
            } else {
                $product->imageble()->save(Image::find($request->imageble['id']));
            }
        }
        return $product->load('imageble');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Success removed!']);
    }
    public function compare(Request $request)
    {
        $keys = json_decode($request->cookie('List'));
        if ($keys) {
            return Product::whereIn('id', $keys)->with('imageble')->get();
        } else {
            return [];
        }
    }
}
