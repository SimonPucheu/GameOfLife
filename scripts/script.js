var gol;
var run = document.querySelector('input#run');
var reset = document.querySelector('input#reset');
var importConf = document.querySelector('input#importConf');
var form = document.querySelector('form');

window.onload = function () {
    var wrapper = document.querySelector('main .wrapper');
    gol = new GameOfLife(wrapper, 25, 40, document.body);
}

form.onsubmit = async function () {
    var formData = new FormData(form);
    run.disabled = true;
    await gol.simulate(formData.get('waitTime'), formData.get('iterationNumber'));
    run.classList.add('hide');
    reset.disabled = false;
    reset.classList.remove('hide');
}

reset.onclick = function () {
    run.disabled = false;
    run.classList.remove('hide');
    reset.disabled = true;
    reset.classList.add('hide');
    gol.drawTable(gol.wrapper, gol.colsNumber, gol.rowsNumber, gol.table);
}

function handleClick(elem) {
    gol.changeCSSVariable(elem.name, elem.value);
}

importConf.oninput = function () {
    const reader = new FileReader();
    reader.onload = function () {
        var json = parseJSON(reader.result);
        json ? gol.table = json : alert('The json file you imported is not valid');
    }
    reader.readAsText(importConf.files[0]);
}

function parseJSON(str) {
    try {
        var result = JSON.parse(str);
    } catch (e) {
        return false;
    }
    return result;
}
