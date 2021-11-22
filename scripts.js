let dados;
let graph;

fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json').then((response) => {
	return response.json();
}).then((data) => {
	dados = data;
  loadOptions(dados);
  loadChart(dados);
}).catch((err) => {
	console.warn('Houve um erro no carregamento.', err);
});

function loadOptions(dados) {
  let value = dados.filter(e => e.data).map(e => e.data.split("/")[2]);
  const unique = value.filter((v, i, a) => a.indexOf(v) === i);

  const selectBox = document.getElementById('filtro');

  for(let i = 0, l = unique.length; i < l; i++){
    const option = unique[i];
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

function filterChart(event) {
  if (event.target.value == 0) {
    resetChart();

    loadChart(dados);
  } else {
    let ano = dados.filter((e) => {
      return (e.data.split("/")[2] >= (+event.target.value)  ) && ((e.data.split("/")[2] < (+event.target.value+1)));
    });
  
    resetChart();
  
    loadChart(ano);
  }

  function resetChart() {
    const canvas = document.querySelector('#chartBcb');
    canvas.parentNode.removeChild(canvas);
  
    const target = document.querySelector('.grafico');
    let newCanvas = document.createElement('canvas');
    newCanvas.setAttribute('id', 'chartBcb');
    target.appendChild(newCanvas);
  }
}
