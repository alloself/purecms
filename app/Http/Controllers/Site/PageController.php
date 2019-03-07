<?php

namespace App\Http\Controllers\Site;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Page;

class PageController extends Controller
{
    public function index($path = '/')
    {
        $page = Page::wherePath($path)->first();
        if ($page !== null) {
            if ($path == '/') {
                $pages = $page->children()->with('imageble')->get();
                return view('pages.index', [
                    'page' => $page,
                    'pages' => $pages
                ]);
            } else {
                $breadcrumbs = $page->ancestors()->get()->pluck('title', 'path');
                $pages = $page->children()->with('imageble', 'products.imageble')->get()->toTree();
                return view('pages.page', [
                    'breadcrumbs' => $breadcrumbs,
                    'page' => $page,
                    'pages' => $pages
                ]);
            }
        } else {
            return response(view('pages.404'), 404) ;
        }
    }
    public function notFound()
    {
        return view('pages.404');
    }
}
