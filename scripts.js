const dados = [
  { data: "01/01/1992", valor: "26.18" },
  { data: "01/02/1992", valor: "22.40" },
  { data: "01/03/1992", valor: "21.25" },
  { data: "01/04/1992", valor: "18.96" },
  { data: "01/05/1992", valor: "25.52" },
  { data: "01/06/1992", valor: "19.72" },
  { data: "01/07/1992", valor: "21.79" },
  { data: "01/08/1992", valor: "20.31" },
  { data: "01/09/1992", valor: "25.02" },
  { data: "01/10/1992", valor: "24.41" },
  { data: "01/11/1992", valor: "21.73" },
  { data: "01/12/1992", valor: "23.51" },
  { data: "01/01/1993", valor: "31.38" },
  { data: "01/02/1993", valor: "24.79" },
  { data: "01/03/1993", valor: "27.84" },
  { data: "01/04/1993", valor: "25.63" },
  { data: "01/05/1993", valor: "27.81" },
  { data: "01/06/1993", valor: "29.20" },
  { data: "01/07/1993", valor: "28.05" },
  { data: "01/08/1993", valor: "32.91" },
  { data: "01/09/1993", valor: "35.81" },
  { data: "01/10/1993", valor: "32.21" },
  { data: "01/11/1993", valor: "34.40" },
  { data: "01/12/1993", valor: "35.79" },
  { data: "01/01/1994", valor: "44.63" },
  { data: "01/02/1994", valor: "42.46" },
  { data: "01/03/1994", valor: "44.59" },
  { data: "01/04/1994", valor: "40.55" },
  { data: "01/05/1994", valor: "43.09" },
  { data: "01/06/1994", valor: "44.62" },
  { data: "01/07/1994", valor: "9.02" },
  { data: "01/08/1994", valor: "5.67" },
  { data: "01/09/1994", valor: "4.04" },
  { data: "01/10/1994", valor: "3.73" },
  { data: "01/11/1994", valor: "4.03" },
  { data: "01/12/1994", valor: "2.64" },
  { data: "01/01/1995", valor: "3.89" },
  { data: "01/02/1995", valor: "2.67" },
  { data: "01/03/1995", valor: "3.55" },
  { data: "01/04/1995", valor: "3.64" },
  { data: "01/05/1995", valor: "4.44" },
  { data: "01/06/1995", valor: "2.51" },
  { data: "01/07/1995", valor: "2.08" },
  { data: "01/08/1995", valor: "1.76" },
  { data: "01/09/1995", valor: "1.34" },
  { data: "01/10/1995", valor: "1.32" },
  { data: "01/11/1995", valor: "1.91" },
  { data: "01/12/1995", valor: "1.73" },
  { data: "01/01/1996", valor: "2.39" },
  { data: "01/02/1996", valor: "1.77" },
  { data: "01/03/1996", valor: "1.32" },
  { data: "01/04/1996", valor: "1.23" },
  { data: "01/05/1996", valor: "1.62" },
  { data: "01/06/1996", valor: "1.10" },
  { data: "01/07/1996", valor: "1.08" },
  { data: "01/08/1996", valor: "0.73" },
  { data: "01/09/1996", valor: "0.67" },
  { data: "01/10/1996", valor: "0.28" },
  { data: "01/11/1996", valor: "0.45" },
  { data: "01/12/1996", valor: "0.39" },
  { data: "01/01/1997", valor: "1.18" },
  { data: "01/02/1997", valor: "1.01" },
  { data: "01/03/1997", valor: "0.83" },
  { data: "01/04/1997", valor: "0.46" },
  { data: "01/05/1997", valor: "0.31" },
  { data: "01/06/1997", valor: "0.10" },
  { data: "01/07/1997", valor: "-0.01" },
  { data: "01/08/1997", valor: "0.07" },
  { data: "01/09/1997", valor: "-0.08" },
  { data: "01/10/1997", valor: "0.22" },
  { data: "01/11/1997", valor: "-0.01" },
  { data: "01/12/1997", valor: "0.23" },
  { data: "01/01/1998", valor: "0.76" },
  { data: "01/02/1998", valor: "0.61" },
  { data: "01/03/1998", valor: "0.47" },
  { data: "01/04/1998", valor: "0.30" },
  { data: "01/05/1998", valor: "0.74" },
  { data: "01/06/1998", valor: "-0.18" },
  { data: "01/07/1998", valor: "-0.35" },
  { data: "01/08/1998", valor: "-0.40" },
  { data: "01/09/1998", valor: "-0.35" },
  { data: "01/10/1998", valor: "0.02" },
  { data: "01/11/1998", valor: "-0.16" },
  { data: "01/12/1998", valor: "0.02" },
  { data: "01/01/1999", valor: "0.77" },
  { data: "01/02/1999", valor: "-0.15" },
  { data: "01/03/1999", valor: "0.45" },
  { data: "01/04/1999", valor: "-0.01" },
  { data: "01/05/1999", valor: "-0.02" },
  { data: "01/06/1999", valor: "-0.11" },
  { data: "01/07/1999", valor: "-0.13" },
  { data: "01/08/1999", valor: "0.15" },
  { data: "01/09/1999", valor: "0.12" },
  { data: "01/10/1999", valor: "0.12" },
  { data: "01/11/1999", valor: "0.20" },
  { data: "01/12/1999", valor: "0.23" },
  { data: "01/01/2000", valor: "0.85" },
  { data: "01/02/2000", valor: "0.37" },
  { data: "01/03/2000", valor: "0.15" },
  { data: "01/04/2000", valor: "1.11" },
  { data: "01/05/2000", valor: "-0.11" },
  { data: "01/06/2000", valor: "-0.15" },
  { data: "01/07/2000", valor: "0.01" },
  { data: "01/08/2000", valor: "0.57" },
  { data: "01/09/2000", valor: "0.40" },
  { data: "01/10/2000", valor: "0.42" },
  { data: "01/11/2000", valor: "0.17" },
  { data: "01/12/2000", valor: "-0.12" },
  { data: "01/01/2001", valor: "0.71" },
  { data: "01/02/2001", valor: "0.78" },
  { data: "01/03/2001", valor: "0.63" },
  { data: "01/04/2001", valor: "1.06" },
  { data: "01/05/2001", valor: "0.36" },
  { data: "01/06/2001", valor: "0.05" },
  { data: "01/07/2001", valor: "0.42" },
  { data: "01/08/2001", valor: "0.58" },
  { data: "01/09/2001", valor: "0.13" },
  { data: "01/10/2001", valor: "0.34" },
  { data: "01/11/2001", valor: "0.21" },
  { data: "01/12/2001", valor: "0.31" },
  { data: "01/01/2002", valor: "0.59" },
  { data: "01/02/2002", valor: "0.97" },
  { data: "01/03/2002", valor: "0.45" },
  { data: "01/04/2002", valor: "0.51" },
  { data: "01/05/2002", valor: "0.30" },
  { data: "01/06/2002", valor: "0.07" },
  { data: "01/07/2002", valor: "0.73" },
  { data: "01/08/2002", valor: "0.36" },
  { data: "01/09/2002", valor: "0.48" },
  { data: "01/10/2002", valor: "0.38" },
  { data: "01/11/2002", valor: "1.26" },
  { data: "01/12/2002", valor: "1.14" },
  { data: "01/01/2003", valor: "1.53" },
  { data: "01/02/2003", valor: "1.54" },
  { data: "01/03/2003", valor: "1.10" },
  { data: "01/04/2003", valor: "0.58" },
  { data: "01/05/2003", valor: "0.00" },
  { data: "01/06/2003", valor: "-0.04" },
  { data: "01/07/2003", valor: "0.05" },
  { data: "01/08/2003", valor: "0.22" },
  { data: "01/09/2003", valor: "0.31" },
  { data: "01/10/2003", valor: "0.17" },
  { data: "01/11/2003", valor: "0.43" },
  { data: "01/12/2003", valor: "0.58" },
  { data: "01/01/2004", valor: "0.97" },
  { data: "01/02/2004", valor: "1.64" },
  { data: "01/03/2004", valor: "0.68" },
  { data: "01/04/2004", valor: "0.24" },
  { data: "01/05/2004", valor: "0.35" },
  { data: "01/06/2004", valor: "0.31" },
  { data: "01/07/2004", valor: "0.47" },
  { data: "01/08/2004", valor: "0.97" },
  { data: "01/09/2004", valor: "0.00" },
  { data: "01/10/2004", valor: "0.14" },
  { data: "01/11/2004", valor: "0.29" },
  { data: "01/12/2004", valor: "0.60" },
  { data: "01/01/2005", valor: "0.78" },
  { data: "01/02/2005", valor: "1.68" },
  { data: "01/03/2005", valor: "0.50" },
  { data: "01/04/2005", valor: "0.53" },
  { data: "01/05/2005", valor: "0.43" },
  { data: "01/06/2005", valor: "0.16" },
  { data: "01/07/2005", valor: "0.33" },
  { data: "01/08/2005", valor: "0.11" },
  { data: "01/09/2005", valor: "0.27" },
  { data: "01/10/2005", valor: "0.31" },
  { data: "01/11/2005", valor: "0.73" },
  { data: "01/12/2005", valor: "0.36" },
  { data: "01/01/2006", valor: "0.90" },
  { data: "01/02/2006", valor: "0.97" },
  { data: "01/03/2006", valor: "0.32" },
  { data: "01/04/2006", valor: "0.28" },
  { data: "01/05/2006", valor: "-0.03" },
  { data: "01/06/2006", valor: "-0.26" },
  { data: "01/07/2006", valor: "0.25" },
  { data: "01/08/2006", valor: "0.21" },
  { data: "01/09/2006", valor: "0.25" },
  { data: "01/10/2006", valor: "0.43" },
  { data: "01/11/2006", valor: "0.37" },
  { data: "01/12/2006", valor: "0.25" },
  { data: "01/01/2007", valor: "0.80" },
  { data: "01/02/2007", valor: "1.23" },
  { data: "01/03/2007", valor: "0.66" },
  { data: "01/04/2007", valor: "0.13" },
  { data: "01/05/2007", valor: "0.04" },
  { data: "01/06/2007", valor: "0.32" },
  { data: "01/07/2007", valor: "0.09" },
  { data: "01/08/2007", valor: "0.51" },
  { data: "01/09/2007", valor: "0.29" },
  { data: "01/10/2007", valor: "0.81" },
  { data: "01/11/2007", valor: "0.64" },
  { data: "01/12/2007", valor: "0.97" },
  { data: "01/01/2008", valor: "1.02" },
  { data: "01/02/2008", valor: "1.24" },
  { data: "01/03/2008", valor: "0.44" },
  { data: "01/04/2008", valor: "0.43" },
  { data: "01/05/2008", valor: "0.69" },
  { data: "01/06/2008", valor: "0.75" },
  { data: "01/07/2008", valor: "0.52" },
  { data: "01/08/2008", valor: "0.31" },
  { data: "01/09/2008", valor: "0.37" },
  { data: "01/10/2008", valor: "0.46" },
  { data: "01/11/2008", valor: "0.28" },
  { data: "01/12/2008", valor: "0.37" },
  { data: "01/01/2009", valor: "0.71" },
  { data: "01/02/2009", valor: "1.36" },
  { data: "01/03/2009", valor: "0.30" },
  { data: "01/04/2009", valor: "0.45" },
  { data: "01/05/2009", valor: "0.27" },
  { data: "01/06/2009", valor: "0.16" },
  { data: "01/07/2009", valor: "0.04" },
  { data: "01/08/2009", valor: "0.56" },
  { data: "01/09/2009", valor: "0.34" },
  { data: "01/10/2009", valor: "0.17" },
  { data: "01/11/2009", valor: "0.59" },
  { data: "01/12/2009", valor: "0.45" },
  { data: "01/01/2010", valor: "0.75" },
  { data: "01/02/2010", valor: "1.54" },
  { data: "01/03/2010", valor: "1.03" },
  { data: "01/04/2010", valor: "0.87" },
  { data: "01/05/2010", valor: "0.52" },
  { data: "01/06/2010", valor: "-0.01" },
  { data: "01/07/2010", valor: "-0.04" },
  { data: "01/08/2010", valor: "0.01" },
  { data: "01/09/2010", valor: "0.28" },
  { data: "01/10/2010", valor: "0.88" },
  { data: "01/11/2010", valor: "0.60" },
  { data: "01/12/2010", valor: "0.63" },
  { data: "01/01/2011", valor: "1.10" },
  { data: "01/02/2011", valor: "1.78" },
  { data: "01/03/2011", valor: "1.05" },
  { data: "01/04/2011", valor: "0.52" },
  { data: "01/05/2011", valor: "0.50" },
  { data: "01/06/2011", valor: "0.32" },
  { data: "01/07/2011", valor: "0.23" },
  { data: "01/08/2011", valor: "0.47" },
  { data: "01/09/2011", valor: "0.47" },
  { data: "01/10/2011", valor: "0.44" },
  { data: "01/11/2011", valor: "0.67" },
  { data: "01/12/2011", valor: "0.73" },
  { data: "01/01/2012", valor: "1.13" },
  { data: "01/02/2012", valor: "1.17" },
  { data: "01/03/2012", valor: "0.49" },
  { data: "01/04/2012", valor: "0.82" },
  { data: "01/05/2012", valor: "0.27" },
  { data: "01/06/2012", valor: "0.39" },
  { data: "01/07/2012", valor: "0.90" },
  { data: "01/08/2012", valor: "0.55" },
  { data: "01/09/2012", valor: "0.43" },
  { data: "01/10/2012", valor: "0.43" },
  { data: "01/11/2012", valor: "0.57" },
  { data: "01/12/2012", valor: "1.00" },
  { data: "01/01/2013", valor: "1.35" },
  { data: "01/02/2013", valor: "1.58" },
  { data: "01/03/2013", valor: "0.69" },
  { data: "01/04/2013", valor: "0.90" },
  { data: "01/05/2013", valor: "0.52" },
  { data: "01/06/2013", valor: "0.32" },
  { data: "01/07/2013", valor: "0.13" },
  { data: "01/08/2013", valor: "0.20" },
  { data: "01/09/2013", valor: "0.23" },
  { data: "01/10/2013", valor: "0.47" },
  { data: "01/11/2013", valor: "0.61" },
  { data: "01/12/2013", valor: "1.13" },
  { data: "01/01/2014", valor: "0.54" },
  { data: "01/02/2014", valor: "1.23" },
  { data: "01/03/2014", valor: "1.54" },
  { data: "01/04/2014", valor: "0.62" },
  { data: "01/05/2014", valor: "0.17" },
  { data: "01/06/2014", valor: "0.52" },
  { data: "01/07/2014", valor: "-0.42" },
  { data: "01/08/2014", valor: "0.23" },
  { data: "01/09/2014", valor: "0.59" },
  { data: "01/10/2014", valor: "0.48" },
  { data: "01/11/2014", valor: "0.59" },
  { data: "01/12/2014", valor: "1.11" },
  { data: "01/01/2015", valor: "1.35" },
  { data: "01/02/2015", valor: "1.12" },
  { data: "01/03/2015", valor: "0.81" },
  { data: "01/04/2015", valor: "0.74" },
  { data: "01/05/2015", valor: "0.42" },
  { data: "01/06/2015", valor: "0.69" },
  { data: "01/07/2015", valor: "0.40" },
  { data: "01/08/2015", valor: "-0.01" },
  { data: "01/09/2015", valor: "0.38" },
  { data: "01/10/2015", valor: "0.34" },
  { data: "01/11/2015", valor: "0.85" },
  { data: "01/12/2015", valor: "1.26" },
  { data: "01/01/2016", valor: "1.28" },
  { data: "01/02/2016", valor: "1.07" },
  { data: "01/03/2016", valor: "0.51" },
  { data: "01/04/2016", valor: "0.67" },
  { data: "01/05/2016", valor: "0.47" },
  { data: "01/06/2016", valor: "0.24" },
  { data: "01/07/2016", valor: "0.54" },
  { data: "01/08/2016", valor: "0.46" },
  { data: "01/09/2016", valor: "0.01" },
  { data: "01/10/2016", valor: "0.25" },
  { data: "01/11/2016", valor: "0.21" },
  { data: "01/12/2016", valor: "0.47" },
  { data: "01/01/2017", valor: "0.25" },
  { data: "01/02/2017", valor: "0.57" },
  { data: "01/03/2017", valor: "0.41" },
  { data: "01/04/2017", valor: "0.69" },
  { data: "01/05/2017", valor: "-0.18" },
  { data: "01/06/2017", valor: "0.14" },
  { data: "01/07/2017", valor: "0.16" },
  { data: "01/08/2017", valor: "-0.29" },
  { data: "01/09/2017", valor: "0.25" },
  { data: "01/10/2017", valor: "0.40" },
  { data: "01/11/2017", valor: "-0.02" },
  { data: "01/12/2017", valor: "0.54" },
  { data: "01/01/2018", valor: "0.58" },
  { data: "01/02/2018", valor: "0.61" },
  { data: "01/03/2018", valor: "0.18" },
  { data: "01/04/2018", valor: "0.17" },
  { data: "01/05/2018", valor: "0.11" },
  { data: "01/06/2018", valor: "0.38" },
  { data: "01/07/2018", valor: "-0.13" },
  { data: "01/08/2018", valor: "-0.31" },
  { data: "01/09/2018", valor: "0.40" },
  { data: "01/10/2018", valor: "0.40" },
  { data: "01/11/2018", valor: "0.64" },
  { data: "01/12/2018", valor: "0.84" },
  { data: "01/01/2019", valor: "0.65" },
  { data: "01/02/2019", valor: "0.85" },
  { data: "01/03/2019", valor: "0.94" },
  { data: "01/04/2019", valor: "0.45" },
  { data: "01/05/2019", valor: "-0.53" },
  { data: "01/06/2019", valor: "0.06" },
  { data: "01/07/2019", valor: "0.35" },
  { data: "01/08/2019", valor: "-0.19" },
  { data: "01/09/2019", valor: "-0.29" },
  { data: "01/10/2019", valor: "0.03" },
  { data: "01/11/2019", valor: "-0.01" },
  { data: "01/12/2019", valor: "1.01" },
  { data: "01/01/2020", valor: "0.37" },
  { data: "01/02/2020", valor: "0.71" },
  { data: "01/03/2020", valor: "0.18" },
  { data: "01/04/2020", valor: "0.68" },
  { data: "01/05/2020", valor: "-0.29" },
  { data: "01/06/2020", valor: "-0.22" },
  { data: "01/07/2020", valor: "-0.33" },
  { data: "01/08/2020", valor: "-0.39" },
  { data: "01/09/2020", valor: "0.33" },
  { data: "01/10/2020", valor: "0.63" },
  { data: "01/11/2020", valor: "0.67" },
  { data: "01/12/2020", valor: "0.78" },
  { data: "01/01/2021", valor: "0.30" },
  { data: "01/02/2021", valor: "0.45" },
  { data: "01/03/2021", valor: "0.05" },
  { data: "01/04/2021", valor: "0.14" },
  { data: "01/05/2021", valor: "-0.07" },
  { data: "01/06/2021", valor: "0.16" },
  { data: "01/07/2021", valor: "0.80" },
  { data: "01/08/2021", valor: "0.67" },
];

let graph;

loadChart(dados);

function loadChart(data) {
  graph = new Chart("chartBcb", {
    type: "line",
    data: {
      datasets: [
        {
          data: data,
          label: "Inflação",
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
    
    return   (e.data.split("/")[2] >= (+event.target.value)  ) && ((e.data.split("/")[2] < (+event.target.value+1)))
    ;
  });

  const canvas = document.querySelector('#chartBcb');
  canvas.parentNode.removeChild(canvas);

  const target = document.querySelector('.grafico');
  let newCanvas = document.createElement('canvas');
  newCanvas.setAttribute('id', 'chartBcb');
  target.appendChild(newCanvas);

  loadChart(ano);
}
