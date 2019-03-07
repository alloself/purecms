<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Sitemap\SitemapGenerator;
use App\Page;
use Carbon\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public static function generate($pages, $sitemap, $priority)
    {

        foreach ($pages as $key => $value) {
            $sitemap->add(Url::create($value->path)
                ->setLastModificationDate(Carbon::today())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                ->setPriority($priority));

            if (isset($value->children) && $value->children->count() > 0) {
                $priority -= 0.1;

                self::generate($value->children, $sitemap, $priority);
            }
        }
    }
    public function index()
    {
        $priority = 1;
        $sitemap = Sitemap::create();
        self::generate(Page::get()->toTree(), $sitemap, $priority);
        $sitemap->writeToFile(public_path('sitemap.xml'));
        return response()->json('Success updated!', 200);
    }
}
