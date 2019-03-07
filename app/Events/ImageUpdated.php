<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Support\Facades\Storage;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use App\Image;

class ImageUpdated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $path;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Image $image)
    {
        $this->path =  explode('/', $image->path);
        Storage::delete('public/' . end($this->path));
    }
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
