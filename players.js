$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1oOnMO6otmoFJgK6KGX9XFrB9skeMwFFoIkn5bVzSVrw/values/player+data?alt=json&key=AIzaSyBe5ljVM5E_KYygkK1erX0cBX8ARu0GuJ4", function (data) {
    for (i = 1; i < data['values'].length; i++) {
        let name = data['values'][i][0];
        let url = data['values'][i][1];
        let icon = data['values'][i][4];

        document.getElementById('player-container').innerHTML += ('<div class="player"><div class="player-img"><a href="./players/' + url + '" title="' + name + '"><img src="' + icon + '"></a></div><div class="player-name"><a href="./players/' + url + '" title="' + name + '">' + name + '</a></div>');
    }
});