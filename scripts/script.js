var gol;

window.onload = function () {
    var wrapper = document.querySelector('main .wrapper');
    gol = new GameOfLife(wrapper, 25, 40, document.body);
}

document.querySelector('input#run').onclick = function () {
    gol.simulate(200, 1);
}