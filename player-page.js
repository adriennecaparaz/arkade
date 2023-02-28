$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1oOnMO6otmoFJgK6KGX9XFrB9skeMwFFoIkn5bVzSVrw/values/player+data?alt=json&key=AIzaSyBe5ljVM5E_KYygkK1erX0cBX8ARu0GuJ4", function (data) {
    let index;

    for (i = 1; i < data['values'].length; i++) {
        if (data['values'][i][0] == player) {
            index = i;
            break;
        }
    }

    let name = data['values'][index][0];
    let url = data['values'][index][1];
    let title = data['values'][index][2];
    let pronouns = data['values'][index][3];
    let icon = data['values'][index][4];
    let zodiac = data['values'][index][5];
    let mbti = data['values'][index][6];
    let ults = data['values'][index][7];
    let ig = data['values'][index][8];

    document.getElementById('player-icon').innerHTML += ('<img src="' + icon + '" alt="' + name + ' piccrew">')

    document.getElementById('name').innerHTML += (name);

    if (title != '') {
        document.getElementById('stats').innerHTML += ('<span class="' + url + '">' + title + '</span><br>');
    }

    document.getElementById('stats').innerHTML += ('<span class="quick-facts">' + pronouns + ', ☀ ' + zodiac + ', ' + mbti + '</span><br><strong>ULTS:</strong> ' + ults);

    if (ig != '') {
        document.getElementById('stats').innerHTML += ('<br><strong>INSTAGRAM: </strong><a href="https://www.instagram.com/' + ig + '">@' + ig + '</a>');
    }
});

$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1oOnMO6otmoFJgK6KGX9XFrB9skeMwFFoIkn5bVzSVrw/values/stage+data?alt=json&key=AIzaSyBe5ljVM5E_KYygkK1erX0cBX8ARu0GuJ4", function (data) {
    let player_index;
    for (i = 3; i < data['values'].length; i++) {
        if (data['values'][i][0] == player) {
            player_index = i;
            break;
        }
    }
    for (i = 1; i < data['values'][0].length; i++) {
        if (data['values'][player_index][i] == 'TRUE') {
            let title = data['values'][0][i];
            let link = data['values'][1][i];
            let thumbnail = data['values'][2][i];

            document.getElementById('stage-container').innerHTML += ('<div class="stage"><a class="stage-thumb" href="' + link + '" title="' + title + '"><img src="' + thumbnail + '" alt="' + title + '"></a><a href="' + link + '" title="' + title + '">' + title + '</a></div>');
        }
    }
});