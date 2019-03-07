<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all(), 200);
    }
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            return response()->json($user->createToken('WebApp')->accessToken, 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
    public function details()
    {
        return response()->json(Auth::user(), 200);
    }
    public function logout()
    {
        Auth::user()->tokens->each(function ($token) {
            $token->delete();
        });
        return response()->json('Logged out soccessfully', 200);
    }
    public function destroy(User $user)
    {
        if ($user->delete()) {
            return response()->json(['message' => 'Пользователь успешно удалён'], 200);
        }
    }
}
