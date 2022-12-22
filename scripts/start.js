function start()
{
    var d = -1;
    run();
    setInterval(run, speedInt);
    function run()
    {
        d++;
        if (d == 111)
        {
            alert('Clown');
        }
        for (var i = 0; i < btns.length; i++)
        {
            if (stts[i] == true)
            {
                btns[i].style.backgroundColor = 'red';
            }
            if (stts[i] == false)
            {
                btns[i].style.backgroundColor = 'white';
            }
        }
        for (var i = 0; i < btns.length; i++)
        {
            nghb[i] = 0;
            if (stts[i - 1] == true && i % w != 0)
            {
                nghb[i] += 1;
            }
            if (stts[i + 1] == true && (i + 1) % w != 0)
            {
                nghb[i] += 1;
            }
            if (stts[i - w] == true)
            {
                nghb[i] += 1;
            }
            if (stts[i + w] == true)
            {
                nghb[i] += 1;
            }
            if (stts[i - w - 1] == true && i % w != 0)
            {
                nghb[i] += 1;
            }
            if (stts[i - w + 1] == true && (i + 1) % w != 0)
            {
                nghb[i] += 1;
            }
            if (stts[i + w - 1] == true && i % w != 0)
            {
                nghb[i] += 1;
            }
            if (stts[i + w + 1] == true && (i + 1) % w != 0)
            {
                nghb[i] += 1;
            }
        }
        for (var i = 0; i < btns.length; i++)
        {
            if (nghb[i] == 3)
            {
                stts[i] = true;
            }
            if (nghb[i] <= 1)
            {
                stts[i] = false;
            }
            if (nghb[i] >= 4)
            {
                stts[i] = false;
            }
        }
    }
}