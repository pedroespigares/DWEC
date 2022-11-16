google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['País', 'Viajeros internacionales (millones)'],
      ['France', 89.400],
      ['Spain', 83.509],
      ['United States', 79.256],
      ['China', 65.700],
      ['Italy', 64.513],
      ['Turkey', 51.192],
      ['Mxxico', 45.024],
      ['Germany', 39.563],
      ['Japan', 32.182],
      ['Austria', 31.884],
      ['Greece', 31.348],
      ['Malasia', 26.101],
      ['Portugal', 24.600],
      ['Rusia', 24.419],
      ['Hong Kong (China)', 23.752],
      ['Canada', 22.145],
      ['Polonia', 21.155],
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('geographic'));

    chart.draw(data, options);
  }