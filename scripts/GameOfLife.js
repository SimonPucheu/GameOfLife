class GameOfLife {
    constructor(wrapper, rowsNumber, colsNumber, style) {
        this.style = style;
        this.wrapper = wrapper;
        this.colsNumber = colsNumber;
        this.rowsNumber = rowsNumber;
        this.boxNumber = this.rowsNumber * this.colsNumber;
        style.style.setProperty('--colsNumber', this.colsNumber);
        style.style.setProperty('--rowsNumber', this.rowsNumber);
        style.style.setProperty('--width', (100 * (this.colsNumber / this.rowsNumber)) + 'vh');
        this.drawTable(this.wrapper, this.colsNumber, this.rowsNumber, this.table, true);

    }
    handleClick = (event) => {
        if (this.onSimulation) return;
        var div = event.target;
        div.classList.toggle('checked');
        var x = div.getAttribute('data-x');
        var y = div.getAttribute('data-y');
        this.table[y][x] = !this.table[y][x];
    }
    simulate = async (waitTime, period) => {
        this.onSimulation = true;
        var simulationTable = this.table;
        for (var i = 0; i < period; i++) {
            console.log('preiod:', i);
            simulationTable = this.applyRules(simulationTable, this.colsNumber, this.rowsNumber);
            this.drawTable(this.wrapper, this.colsNumber, this.rowsNumber, simulationTable);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        this.drawTable(this.wrapper, this.colsNumber, this.rowsNumber, this.table);
        this.onSimulation = false;
    }
    applyRules(table, colsNumber, rowsNumber) {
        console.log('table', table);
        var result = table;
        for (var y = 0; y < rowsNumber; y++) {
            for (var x = 0; x < colsNumber; x++) {
                // Compute the number of neighbours
                var line = {};
                line.above =
                    ((y - 1 >= 0 && x - 1 >= 0) ? table[y - 1][x - 1] : 0) +
                    (y - 1 >= 0 ? table[y - 1][x] : 0) +
                    ((y - 1 >= 0 && x + 1 < colsNumber) ? table[y - 1][x + 1] : 0);
                line.below =
                    ((y + 1 < rowsNumber && x - 1 >= 0) ? table[y + 1][x - 1] : 0) +
                    (y + 1 < rowsNumber ? table[y + 1][x] : 0) +
                    ((y + 1 < rowsNumber && x + 1 < colsNumber) ? table[y + 1][x + 1] : 0);
                line.center =
                    (x + 1 < colsNumber ? table[y][x + 1] : 0) +
                    (x - 1 >= 0 ? table[y][x - 1] : 0);
                var neighbours = line.center + line.above + line.below;
                // Living cell
                if (table[y][x]) {
                    console.log('alive ceil in:', y, x);
                    console.log('neighbours:', neighbours);
                    console.log('above :', line.above);
                    console.log('center:', line.center);
                    console.log('below :', line.below);
                    // Kill the cell
                    result[y][x] = false;
                    // Revive the cell if the number of neighbours is between 2 and 3
                    result[y][x] = (neighbours == 2 || neighbours == 3);
                }
                // Died cell
                if (!table[y][x]) {
                    // Kill the cell
                    result[y][x] = false;
                    // Revive the cell if the number of neighbours is between 2 and 3
                    result[y][x] = neighbours == 3;
                }
            }
        }
        return result;
    }
    drawTable(wrapper, colsNumber, rowsNumber, table, fillIfEmpty = false, emptyWrapper = true) {
        if (emptyWrapper) wrapper.innerHTML = '';
        for (var y = 0; y < rowsNumber; y++) {
            for (var x = 0; x < colsNumber; x++) {
                if (fillIfEmpty) {
                    if (!this.table[y])
                        this.table[y] = [];
                    if (!this.table[y][x])
                        this.table[y][x] = false;
                }
                var div = document.createElement('div');
                div.classList.add('box');
                if (table[y][x])
                    div.classList.add('checked');
                div.setAttribute('data-y', y);
                div.setAttribute('data-x', x);
                div.onclick = this.handleClick;
                wrapper.appendChild(div);
            }
        }
    }
    table = [];
    onSimulation = false;
}