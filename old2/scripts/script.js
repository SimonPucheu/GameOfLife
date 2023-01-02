window.onload = function()
{
    speedInput = 200;

    document.open();
    var style = 'html { font-family: \'Arial\'; padding: 0; margin: 0; } body { padding: 0; margin: 0; } ul { display: flex; padding: 0; justify-content: space-around; } ul li { list-style-type: none; } html::-webkit-scrollbar { display: none; } ::-webkit-scrollbar { width: 12px; height: 12px; } ::-webkit-scrollbar-thumb { background-color: #dddddd; border-radius: 6px; } ::-webkit-scrollbar-corner { display: none; } ::-webkit-scrollbar-button { display: none; }';
    
    document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>' + style + '</style><title>Game of Life - Infinity</title></head><body><div id="container" style="overflow: scroll; margin: 0; padding: 0; max-height: ' + window.innerHeight + 'px;">');

    // startStopInput = document.getElementById('start-stop-input');

    //width: ' + window.innerWidth + 'px; height: ' + window.innerHeight + 'px;"
    // <input id="start-stop-input" type="button" value="Start"/>

    var i = 0;
    for (var y = 0; y < h; y++)
    {
        document.write('<div style="margin: 0; padding: 0; height: ' + (btnh - 2) + 'px; min-width: ' + (btnw * w) + 'px">');
        for (var x = 0; x < w; x++)
        {
            document.write('<span role="button" id="b' + x + ':' + y + '" style="width: ' + (btnw - 2) + 'px; height: ' + (btnh - 2) + 'px; border: 1px solid black; background-color: white; float: left;" onclick="if (starting == false) { var btn = document.getElementById(\'b' + x + ':' + y + '\'); if (btn.style.backgroundColor == \'white\') { btn.style.backgroundColor = \'red\'; stts[' + i + '] = true; } else { btn.style.backgroundColor = \'white\'; stts[' + i + '] = false; } }" onkeydown="alert(\'hhhhhhhhhhhhhhhhh\');"></span>');
            btns[i] = document.getElementById('b' + x + ':' + y);
            stts[i] = false;
            nghb[i] = 0;
            i++;
        }
        document.write('</div>');
    }
    document.write('</div></body></html>');
    document.close();

    document.onkeydown = startStop;
}

function startStop (event)
{
    if (event.key == 'q')
    {
        if (starting == false)
        {
            if (confirm('The program will start, are you sure?'))
            {
                starting = true;
                start();
            }
        }
        else
        {
            if (confirm('The program will stop, are you sure?'))
            {
                window.location.href = window.location.href;
            }
        }
    }
    else if (event.key == 's' && starting == false)
    {
        var oldSpeedInt = speedInt;
        var speedStr = prompt('Please enter a number for the program speed (in milliseconds): ');
        speedInt = parseInt(speedStr);
        if (isNaN(speedInt) && speedStr != null)
        {
            while (isNaN(speedInt) && speedStr != null)
            {
                speedStr = prompt('Your entry is not correct. Please enter a NUMBER for the program speed (in milliseconds): ');
                speedInt = parseInt(speedStr);
            }
            if (speedStr == 'null')
            {
                speedInt = oldSpeedInt;
            }
        }
        else if (speedStr == 'null')
        {
            speedInt = oldSpeedInt;
        }
    }
    else if (event.key == 'd')
    {
        alert('List of controls keys:\n    -    \'Q\': Start/Stop program\n    -    \'S\': Change program speed (in millisecond)\n    -    \'D\': Show all control keys\n    -    \'Y\': Move the display area to the up\n    -    \'H\': Move the display area to the left\n    -    \'B\': Move the display area to the down\n    -    \'G\': Move the display area to the right');
    }
    else if (event.key == 'y')
    {
        document.getElementById('container').scrollBy(0, btnh - (btnh * 2));
    }
    else if (event.key == 'h')
    {
        document.getElementById('container').scrollBy(btnw, 0);
    }
    else if (event.key == 'b')
    {
        document.getElementById('container').scrollBy(0, btnh);
    }
    else if (event.key == 'g')
    {
        document.getElementById('container').scrollBy(btnw - (btnw * 2), 0);
    }
}