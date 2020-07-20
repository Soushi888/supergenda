<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Event;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    return [
        "name" => implode(" ", $faker->words()),
        "categorie" => $faker->word(),
        "date_debut" => $faker->dateTime(),
        "date_fin" => $faker->dateTime()
    ];
});
