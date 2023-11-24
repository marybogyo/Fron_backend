<?php

use App\Models\Kyra;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kyras', function (Blueprint $table) {
            $table->id('kyra_id');
            $table->string('name');
            $table->integer('kor');
            $table->string('neme');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kyras');
    }
};
