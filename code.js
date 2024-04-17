const ASCII_A = 65;
const ASCII_Y = 89;

function generateTTOutputs(numVars) {
	let outputs = [];
  for (let i = 0; i < 2**numVars; i++)
  	outputs.push(Math.round(Math.random()))
   return outputs;
}

function generateTT(numVars) {
	outputs = generateTTOutputs(numVars);
  table = [];
  for (let i = 0; i < 2**numVars; i++) {
  	binary = i.toString(2);
    while (binary.length < numVars) binary = "0" + binary;
    row = binary.split("");
    row.push(outputs[i].toString(2));
    table.push(row);
	}
  return table;
}

function displayTT(numVars) {
	table = generateTT(numVars);
  dispTable = document.createElement('table');
  // Header
  for (let i = 0; i < numVars; i++) {
  	th = document.createElement('th');
    th.innerHTML = String.fromCharCode(ASCII_A + i);
    dispTable.appendChild(th);
  }
  
  outputTH = document.createElement('th');
  outputTH.innerHTML = String.fromCharCode(ASCII_Y);
  dispTable.appendChild(outputTH);
  
  // Cells
  for (const row of table) {
  	tr = document.createElement('tr');
    
    for (const cell of row) {
    	td = document.createElement('td');
      td.innerHTML = cell;
      tr.appendChild(td);
    }
    
    dispTable.appendChild(tr);
  }
  
  document.body.appendChild(dispTable);
}

window.addEventListener('load', function () {
    displayTT(3);
});
