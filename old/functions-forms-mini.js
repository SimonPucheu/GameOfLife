function buttonsMini(n)
{
    var x = 5;
    if (n == 0)
    {
        for (var t = 1; t <= 3; t++)
        {
            var addr = x;
            addr += t;
            btnsMini[n][addr].style.backgroundColor = 'red';
        }
    }
    else if (n == 1)
    {
        for (var o = 0; o <= 6; o += 3)
        {
            for (var t = 1; t <= 3; t++)
            {
                var addr = o * x;
                addr += t;
                btnsMini[n][addr].style.backgroundColor = 'red';
            }
        }
    }
    else if (n == 2)
    {
        btnsMini[n][2 + x].style.backgroundColor = 'red';
        btnsMini[n][3 + x * 2].style.backgroundColor = 'red';
        btnsMini[n][1 + x * 3].style.backgroundColor = 'red';
        btnsMini[n][2 + x * 3].style.backgroundColor = 'red';
        btnsMini[n][3 + x * 3].style.backgroundColor = 'red';
    }
    else if (n == 3)
    {
        //
    }
}