<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Supergenda</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md">
                <h1>Supergenda</h1>
            </div>
            <div>
                <div id="event_list">
                    <h2>Liste des événements</h2>
                    <ul>
                    </ul>
                </div>
                <div id="selection-semaine">
                    <input type="date" id="datepicker">
                    <p>Semaine du <span></span></p>
                </div>
                <table class="agenda">
                    <thead>
                        <tr>
                            <th>Heure</th>
                            <th class="lundi">Lundi <span></span></th>
                            <th class="mardi">Mardi <span></span></th>
                            <th class="mercredi">Mercredi <span></span></th>
                            <th class="jeudi">Jeudi <span></span></th>
                            <th class="vendredi">Vendredi <span></span></th>
                            <th class="samedi">Samedi <span></span></th>
                            <th class="dimanche">Dimanche <span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="modele">
                            <td class="heure"></td>
                            <td class="lundi"></td>
                            <td class="mardi"></td>
                            <td class="mercredi"></td>
                            <td class="jeudi"></td>
                            <td class="vendredi"></td>
                            <td class="samedi"></td>
                            <td class="dimanche"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="http://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>