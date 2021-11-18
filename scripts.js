let dados;
let graph;

fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json').then(function (response) {
	return response.json();
}).then(function (data) {
	dados = data;
  loadOptions(dados);
  loadChart(dados);
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});

function loadOptions(dados) {
  let value = dados.filter(e => e.data).map(e => e.data.split("/")[2]);
  var unique = value.filter((v, i, a) => a.indexOf(v) === i);

  var selectBox = document.getElementById('filtro');

  for(var i = 0, l = unique.length; i < l; i++){
    var option = unique[i];
    selectBox.options.add( new Option(option, option) );
  }
}

function loadChart(data) {
  graph = new Chart("chartBcb", {
    type: "line",
    data: {
      datasets: [
        {
          data: data,
          label: "Inflação",
          backgroundColor: ['#1e8bc7']
        },
      ],
    },
    options: {
      parsing: {
        xAxisKey: "data",
        yAxisKey: "valor",
      },
    },
  });
}

function filtro(event) {
  let ano = dados.filter(function (e) {
    return (e.data.split("/")[2] >= (+event.target.value)  ) && ((e.data.split("/")[2] < (+event.target.value+1)));
  });

  const canvas = document.querySelector('#chartBcb');
  canvas.parentNode.removeChild(canvas);

  const target = document.querySelector('.grafico');
  let newCanvas = document.createElement('canvas');
  newCanvas.setAttribute('id', 'chartBcb');
  target.appendChild(newCanvas);

  loadChart(ano);
}
