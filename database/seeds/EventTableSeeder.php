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
        // Semaine du 27 juillet 2020
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

        // Semaine du 03 août 2020
        $event = new Event;
        $event->name = "Cours de Javascript";
        $event->date_debut = "2020-08-03 10:00:00";
        $event->date_fin = "2020-08-03 12:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Rust";
        $event->date_debut = "2020-08-04 14:00:00";
        $event->date_fin = "2020-08-04 16:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Piano";
        $event->date_debut = "2020-08-06 13:00:00";
        $event->date_fin = "2020-08-06 14:30:00";
        $event->save();

        $event = new Event;
        $event->name = "Coffe and Code";
        $event->categorie = "réseautage";
        $event->date_debut = "2020-08-08 08:00:00";
        $event->date_fin = "2020-08-08 10:30:00";
        $event->save();

        // Semaine du 10 août 2020
        $event = new Event;
        $event->name = "Cours de Javascript";
        $event->date_debut = "2020-08-11 10:00:00";
        $event->date_fin = "2020-08-11 12:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Rust";
        $event->date_debut = "2020-08-12 14:00:00";
        $event->date_fin = "2020-08-12 16:00:00";
        $event->save();

        $event = new Event;
        $event->name = "Cours de Piano";
        $event->date_debut = "2020-08-13 13:00:00";
        $event->date_fin = "2020-08-13 14:30:00";
        $event->save();

        $event = new Event;
        $event->name = "Coffe and Code";
        $event->categorie = "réseautage";
        $event->date_debut = "2020-08-15 08:00:00";
        $event->date_fin = "2020-08-15 10:30:00";
        $event->save();
    }
}
