<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Page;
use App\Image;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class PageController extends Controller
{
    public function index()
    {
        return Page::with('imageble', 'link')->get()->toTree();
    }
    public function indexForProduct()
    {
        return Page::all();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->parent) {

            $page = Page::create($request->all(), Page::where('id', $request->parent['id'])->first());
        } else {
            $page = Page::create($request->all());
        }
        if ($request->link) {
            $page->link()->create();
        }
        if ($request->imageble) {
            $page->imageble()->save(Image::find($request->imageble['id']));
        }
        if ($request->has('index_page')) {
            $page->path = '/';
            $page->save();
        } else {
            $page->generatePath()->save();
        }
        return response()->json([
            'message' => "Страница успешно создана",
            'page' => $page->load('imageble', 'link', 'descendants.imageble')
        ], 201);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Page $page)
    {
        $page->update($request->all());
        if ($request->link) {
            if ($request->link == 1 && !$page->link) {
                $page->link()->create();
            }
        } elseif ($page->link) {
            $page->link()->delete();
        }

        if ($request->index_page == 0) {
            $page->generatePath()->save();
        } else {
            $page->path = '/';
            if (!$page->save()) {
                $page->index_page = 0;
                $page->save();
            }
        }
        if ($request->imageble) {

            if ($imageble = $page->imageble()->getResults()) {
                if ($imageble->id != $request->imageble['id']) {

                    $path = explode('/', $imageble->path);
                    Storage::delete('public/' . end($path));
                    $page->imageble()->delete();
                    $page->imageble()->save(Image::find($request->imageble['id']));
                }
            } else {
                $page->imageble()->save(Image::find($request->imageble['id']));
            }
        }

        return response()->json([
            'message' => "Страница успешно обновлена",
            'page' => $page->load('imageble', 'link')
        ], 200);
    }
    public function destroy(Page $page)
    {
        $page->link()->delete();
        $page->delete();
        return response()->json([
            'message' => "Страница успешно удалена",
        ], 200);
    }
}
