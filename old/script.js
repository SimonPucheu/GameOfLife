document.body.onresize = function()
{
    console.log('resize');
    // document.getElementById('scenarios').style.width = (document.body.clientWidth - (50 * w));
}

window.onload = function()
{
    var localSpeedInput = 200;
    if (localStorage.getItem('speed-input'))
    {
        localSpeedInput = localStorage.getItem('speed-input');
    }

    document.open();
    var style = 'html { font-family: \'Arial\'; } ul { display: flex; padding: 0; justify-content: space-around; } ul li { list-style-type: none; }'
    document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>' + style + '</style><title>LifeGame</title></head><body><div id="header"><label>\tSpeed (in milliseconds): </label><input id="speed-input" type="number" value="' + localSpeedInput + '"/><span>\t</span><input id="start-stop-input" type="button" value="Start"/><br/><label id="days-info" style="visibility: hidden;">Hello World !</label></div><br/><br/><div id="grid" style="width: ' + (50 * w) + 'px; float: left;">');
    var i = 0;
    for (var y = 0; y < h; y++)
    {
        document.write('<div style="margin: 0; padding: 0; height: 50px;">');
        for (var x = 0; x < w; x++)
        {
            document.write('<button id="b' + x + ':' + y + '" style="width: 50px; height: 50px; border: 1px solid black;          background-color: white; display: inline-block;" onclick="if (starting == false) { var btn = document.getElementById(\'b' + x + ':' + y + '\'); if (btn.style.backgroundColor == \'white\') { btn.style.backgroundColor = \'red\'; stts[' + i + '] = true; } else { btn.style.backgroundColor = \'white\'; stts[' + i + '] = false; } }"></button>');
            btns[i] = document.getElementById('b' + x + ':' + y);
            stts[i] = false;
            nghb[i] = 0;
            i++;
        }
        document.write('</div>');
    }
    document.write('</div>');
    
    var max = 4;
    var float = 'right';
    if ((document.body.clientWidth - (50 * w)) < (25 * 5 * max))
    {
        float = 'left';
        document.write('<br/><br/><br/><br/><br/>');
    }
    document.write('<div id="scenarios" style="width: ' + (document.body.clientWidth - (50 * w)) + 'px; float: ' + float + ';"><ul>');
    for (var e = 0; e < max; e++)
    {
        var func = 'bar';
        if (e == 1)
        {
            func = 'megabar';
        }
        if (e == 2)
        {
            func = 'spatialship';
        }
        if (e == 3)
        {
            func = 'flashingstar';
        }
        document.write('<li id="' + e + '"><div style="padding: 5px; border: 1px solid black; border-radius: 15px; background-color: white; display: inline-block;" onclick="' + func + '()"><div style="height: 15px;">');
        for (var i = 0; i < 35; i++)
        {
            if (i % 5 == 0 && i != 0)
            {
                document.write('</div><div style="height: 15px;">');
            }
            document.write('<button id="bm' + e + ':' + i + '" style="width: 15px; height: 15px; border: 1px solid black; background-color: white;"></button>');
            btnsMini[e][i] = document.getElementById('bm' + e + ':' + i);
        }
        buttonsMini(e);
        document.write('</div><p style="font-size: 10pt; text-align: center; width: ' + (15 * 5) + 'px; margin: 5px 0 0 0;">' + func + '</p></div></li>');
    }
    document.write('</ul></div></body></html>');
    document.close();

    daysInfo = document.getElementById('days-info');
    speedInput = document.getElementById('speed-input');
    startStopInput = document.getElementById('start-stop-input');

    startStopInput.onclick = function()
    {
        if (startStopInput.value == 'Start')
        {
            speedInput.disabled = true;
            startStopInput.value = 'Stop';
            starting = true;
            start();
        }
        else
        {
            window.location.href = window.location.href;
        }
    }

    speedInput.onchange = function()
    {
        localStorage.setItem('speed-input', speedInput.value);
    }
}