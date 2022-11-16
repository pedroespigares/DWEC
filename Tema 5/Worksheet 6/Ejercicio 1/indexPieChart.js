google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Partido', 'Numero de escaños'],
          ['PSOE',     120],
          ['Unidas Podemos',      33],
          ['Partido Popular',  88],
          ['Vox', 52],
          ['ERC',    13],
          ['Plural',    12],
          ['Ciudadanos',    9],
          ['EAJ-PNV',    6],
          ['EH-BILDU',    5],
          ['Mixto',    11],
        ]);

        var options = {
          title: 'Representación Congreso de los Diputados',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }