<?php

namespace App\Http\Controllers;

use App\Models\Kyra;
use Illuminate\Http\Request;

class KyraController extends Controller
{
    //
    public function index(){
        
        return Kyra::all();
    }

    public function show($id){
        return Kyra::findOrFail($id);
    }

    public function store(Request $request){
        $masa = new Kyra();
        $masa->name = $request->input('name');
        $masa->kor = $request->input('kor');
        $masa->neme = $request->input('neme');
        $masa->save();
    }

    public function update(Request $request, $id){
        $masa = Kyra::findOrFail($id);
        $masa->name = $request->input('name');
        $masa->kor = $request->input('kor');
        $masa->neme = $request->input('neme');
        $masa->save();
    }

    public function destroy($id){
        Kyra::findOrFail($id)->delete();
    }

}
