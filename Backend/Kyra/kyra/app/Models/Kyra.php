<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kyra extends Model
{
    use HasFactory;
    protected $primaryKey = "kyra_id";
    protected $fillable = [
        'name',
        'kor',
        'neme',
    ];
}
