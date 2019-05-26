var datos = [144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var superficie = 
[5618, 71446, 73922, 57924, 73289, 247455, 1485, 151563, 5625, 123451, 30608, 63621, 20846, 78599, 22357, 58643, 4893, 27815, 64220, 93793, 34290, 11684, 42361, 60983, 57377, 179503, 24738, 80175, 3991, 71820, 39612, 75539];
var poblacion2015 =
[1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209];
var pob2010 =
[1184996, 3155070, 637026, 822441, 4796580, 3406465, 8851080, 2748391, 650555, 1632934, 5486372, 3388768, 2665018, 7350682, 15175862, 4351037, 1777227, 1084979, 4653458, 3801962, 5779829, 1827937, 1325578, 2585518, 2767761, 2662480, 2238603, 3268554, 1169936, 7643194, 1955577, 1490668];
var edo=
["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"];

var s = d3.scaleLinear().domain([0, d3.max(superficie)]).range ([0,500]);
var p15 = d3.scaleLinear().domain([0, d3.max(poblacion2015)]).range ([0,500]);
var p10 = d3.scaleLinear().domain([0, d3.max(pob2010)]).range ([0,500]);
var x = d3.scaleLinear().domain([0, d3.max(datos)]).range ([0,500]);
function graficar(){
    d3.select(".barras")
      .selectAll("div")
      .data(datos)
      .enter()
      .append("div")
      .style("height", function(d){
        return x(d)+"px";
    })
    .text(function(d){return d;})

}

function pob10(){
    /*d3.select('.mexico10').selectAll('div').data(pob2010).enter().append('div')
    .text(function(d){return d;}).style("background-color", "orange").style("color", "white")
    .style("padding", "3px").style("margin", "5px").style("text-align", "right")
    .style("height", function(d){return p10(d)+"px";})*/
    d3.select('.mexico10')
    .selectAll('div')
    .data(pob2010)
    .enter().append('div')
    .attr('class', 'barra')
    .style("height", function(d){
        return p10(d)+"px";
    })
    .text(function(d){return edo+d;})
}

function pob15(){
    /*d3.select('.mexico15').selectAll('div').data(poblacion2015).enter().append('div')
    .text(function(d){return d;}).style("background-color", "orange").style("color", "white")
    .style("padding", "3px").style("margin", "5px").style("text-align", "right")
    .style("width", function(d){return p15(d)+"px";})*/
    d3.select('.mexico15')
    .selectAll('div')
    .data(poblacion2015)
    .enter().append('div')
    .attr('class', 'barra')
    .style("height", function(d){
        return p15(d)+"px";
    })
    .text(function(d){return d;})
}
//extencion territorial
function grafmex2(){
    d3.select('.mexico2')
    .selectAll('div')
    .data(superficie)
    .enter().append('div')
    .attr('class', 'barra')
    .style("height", function(d){
        return s(d)+"px";
    })
    .text(function(d){return d;})
}