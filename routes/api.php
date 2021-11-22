<?php

use App\Http\Controllers\VendorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::apiResource('vendors', VendorController::class);
Route::post('/deactivate', [VendorController::class, 'deactivate']);
Route::get('/inactive-vendors', [VendorController::class, 'getDeletedVendors']);
Route::get('/total-amount', [VendorController::class, 'getTotalAmount']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
