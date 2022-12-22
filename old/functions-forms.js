function bar()
{
    for (var t = w / 2 - 2; t <= (w / 2); t++)
    {
        var addr = w * (w / 2 - 1);
        addr += t;
        stts[addr] = true;
        btns[addr].style.backgroundColor = 'red';
    }
}

function megabar()
{
    for (var o = Math.round(w / 3 - 1); o <= (Math.round(w / 3) + 5); o += 3)
    {
        for (var t = w / 2 - 2; t <= (w / 2); t++)
        {
            var addr = o * w;
            addr += t;
            stts[addr] = true;
            btns[addr].style.backgroundColor = 'red';
        }
    }
}

function spatialship()
{
    stts[2 + w] = true;
    stts[3 + w * 2] = true;
    stts[1 + w * 3] = true;
    stts[2 + w * 3] = true;
    stts[3 + w * 3] = true;
    
    btns[2 + w].style.backgroundColor = 'red';
    btns[3 + w * 2].style.backgroundColor = 'red';
    btns[1 + w * 3].style.backgroundColor = 'red';
    btns[2 + w * 3].style.backgroundColor = 'red';
    btns[3 + w * 3].style.backgroundColor = 'red';
}

// IN PROGRESS

function flashingstar()
{
    // for (var c = w / 3 - 2; c < (w / 3 + 10); c += 6)
    // {
    //     for (var t = w / 3 - 5; t <= (w / 3 - 3); t++)
    //     {
    //         var addr = (t + c) * w;
    //         addr += Math.round(w / 2) - 1;
    //         stts[addr] = true;
    //         btns[addr].style.backgroundColor = 'red';
    //     }
    // }
    // for (var c = 0; c < 12; c += 6)
    // {
    //     for (var t = w / 3 - 2; t <= (w / 3); t++)
    //     {
    //         var addr = (Math.round(w / 2) - 1) * w;
    //         addr += t + c;
    //         stts[addr] = true;
    //         btns[addr].style.backgroundColor = 'red';
    //     }
    // }
    for (var c = 0; c < 2; c++)
    {
        for (var t = 0; t < 3; t++)
        {
            var addr = (c * 6 + Math.round(w / 3) - 2 + t) * w;
            addr += Math.round(w / 2) - 1;
            stts[addr] = true;
            btns[addr].style.backgroundColor = 'red';
        }
    }
    for (var c = 0; c < 2; c++)
    {
        for (var t = 0; t < 3; t++)
        {
            var addr = Math.round(w / 2) - 1 * w;
            addr += (c * 6 + Math.round(w / 3) - 2 + t);
            stts[addr] = true;
            btns[addr].style.backgroundColor = 'red';
        }
    }
}