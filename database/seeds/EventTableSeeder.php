<?php

use App\Event;
use Illuminate\Database\Seeder;

class EventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(Event::class, 3)->create();

        $event = new Event;
        $event->name = "Cours de Javascript";
        $event->date_debut = "2020-07-20 10:00:00";
        $event->date_fin = "2020-07-20 12:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Rust";
        $event->date_debut = "2020-07-22 14:00:00";
        $event->date_fin = "2020-07-22 16:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Piano";
        $event->date_debut = "2020-07-23 13:00:00";
        $event->date_fin = "2020-07-23 14:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Coffe and Code";
        $event->categorie = "réseautage";
        $event->date_debut = "2020-07-24 08:00:00";
        $event->date_fin = "2020-07-24 10:30:00";
        $event->save();
    }
}
