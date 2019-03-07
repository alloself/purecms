<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $http = new \GuzzleHttp\Client;

        try {
            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->username,
                    'password' => $request->password

                ]
            ]);
            return $response;
        } catch (\GuzzleHttp\Exception\BadResponseException $error) {
            if ($error->getCode() == 400) {
                return response()->json('Invalid Request. Please enter a username or a password.', $error->getCode());
            } elseif ($error->getCode() == 401) {
                return response()->json('Your credentials are incorrect. Please try again.', $error->getCode());
            }
            return response()->json('Something went wrong on the server.', $error->getCode());
        }
    }
    public function logout()
    {
       Auth::user()->tokens->each(function($token,$key){
            $token->delete();
       });
       return response()->json('Logged out soccessfully',200);
    }
    public function user()
    {
       return response()->json(Auth::user(),200);
    }
}
