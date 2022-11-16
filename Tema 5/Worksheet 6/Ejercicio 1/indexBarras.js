google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Partido', 'Numero de escaños', { role: 'style' }],
            ['PSOE',     120,"red"],
            ['Partido Popular',  88,"blue"],
            ['Vox', 52,"green"],
            ['Unidas Podemos',      33,"purple"],
            ['ERC', 13,"yellow"],
            ['Plural', 12, "green"],
            ['Mixto', 11, "gray"],
            ['Ciudadanos', 9,"orange"],
            ['EAJ-PNV', 6, "red"],
            ['EH-BILDU', 5, "green"],
          ]);

          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);
    
          var options = {
            title: 'Representación Congreso de los Diputados',
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
          };
          var chart = new google.visualization.ColumnChart(document.getElementById("barras"));
          chart.draw(view, options);
      }