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
        $event->date_debut = "2020-07-27 10:00:00";
        $event->date_fin = "2020-07-27 12:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Rust";
        $event->date_debut = "2020-07-29 14:00:00";
        $event->date_fin = "2020-07-29 16:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Piano";
        $event->date_debut = "2020-07-30 13:00:00";
        $event->date_fin = "2020-07-30 14:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Coffe and Code";
        $event->categorie = "réseautage";
        $event->date_debut = "2020-07-31 08:00:00";
        $event->date_fin = "2020-07-31 10:30:00";
        $event->save();
    }
}
