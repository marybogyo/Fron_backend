<?php

use App\Http\Controllers\KyraController;
use App\Models\Kyra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('kyras', [KyraController::class, 'index']);
Route::get('kyras/{id}', [KyraController::class, 'show']);
Route::put('kyras/{id}', [KyraController::class, 'update']);
Route::post('kyras', [KyraController::class, 'store']);
Route::delete('kyras/{id}', [KyraController::class, 'destroy']);