$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1oOnMO6otmoFJgK6KGX9XFrB9skeMwFFoIkn5bVzSVrw/values/stage+data?alt=json&key=AIzaSyBe5ljVM5E_KYygkK1erX0cBX8ARu0GuJ4", function (data) {
    for (i = 1; i < data['values'][0].length; i++) {
        let title = data['values'][0][i];
        let link = data['values'][1][i];
        let thumbnail = data['values'][2][i];

        document.getElementById('stage-container').innerHTML += ('<div class="stage"><a class="stage-thumb" href="' + link + '" title="' + title + '"><img src="' + thumbnail + '" alt="' + title + '"></a><a href="' + link + '" title="' + title + '">' + title + '</a></div>');
    }
});