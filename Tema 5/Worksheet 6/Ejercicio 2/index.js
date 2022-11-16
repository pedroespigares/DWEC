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
            width: 700,
            height: 500,
            animation:{
                duration: 1000,
                easing: 'out',
            },
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
          };
          var chart = new google.visualization.ColumnChart(document.getElementById("barras"));
          chart.draw(view, options);

          setInterval(() => {
            data.setValue(0,1, Math.floor(120 * 1.1));
            data.setValue(1,1, Math.floor(88 * 1.1));
            data.setValue(2,1, Math.floor(52 * 1.1));
            data.setValue(3,1, Math.floor(33 * 1.1));
            data.setValue(4,1, Math.floor(13 * 1.1));
            data.setValue(5,1, Math.floor(12 * 1.1));
            data.setValue(6,1, Math.floor(11 * 1.1));
            data.setValue(7,1, Math.floor(11 * 1.1));
            data.setValue(8,1, Math.floor(9 * 1.1));
            data.setValue(8,1, Math.floor(6 * 1.1));
            data.setValue(9,1, Math.floor(5 * 1.1));
            var view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                { calc: "stringify",
                  sourceColumn: 1,
                  type: "string",
                  role: "annotation" },
                2]);
            chart.draw(view, options);
          }, 5000);
      }