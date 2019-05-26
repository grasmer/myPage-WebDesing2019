var edo =
["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"];
var indice =
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
var pob2015 =
[1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209];
var pob2010 =
[1184996, 3155070, 637026, 822441, 4796580, 3406465, 8851080, 2748391, 650555, 1632934, 5486372, 3388768, 2665018, 7350682, 15175862, 4351037, 1777227, 1084979, 4653458, 3801962, 5779829, 1827937, 1325578, 2585518, 2767761, 2662480, 2238603, 3268554, 1169936, 7643194, 1955577, 1490668];
var superficie =
[5618, 71446, 73922, 57924, 73289, 247455, 1485, 151563, 5625, 123451, 30608, 63621, 20846, 78599, 22357, 58643, 4893, 27815, 64220, 93793, 34290, 11684, 42361, 60983, 57377, 179503, 24738, 80175, 3991, 71820, 39612, 75539];

function comparacion(){
    var p2010 = {
        y: pob2010, 
        x: edo, 
        fill: 'tozeroy', 
        type: 'scatter',
        mode: 'none'
      };
      
    var p2015 = {
        y: pob2015, 
        x: edo, 
        fill: 'tonexty', 
        type: 'scatter',
        mode: 'none'
    };
      
    var layout = {
        title: 'Overlaid Chart Without Boundary Lines'
    };
      
    var data = [p2010, p2015];
      
    Plotly.newPlot('pob', data, layout, {showSendToCloud:true});
}

function dist(){
    var data = [
        {
          x: edo,
          y: superficie,
          type: 'bar'
        }
      ];      
      Plotly.newPlot('km', data);    
}

function graficar()  {
    var trace1 = {
        x: edo,
        y: pob2010,
        type: 'scatter',
      };
      
      
      var data = [trace1];
      
      Plotly.newPlot('pob10', data, {}, {showSendToCloud: true})
}