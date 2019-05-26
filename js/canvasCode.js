const XMAX = 300;
const YMAX = 200;
let canvas = document.getElementById("dibujo");
let c = canvas.getContext("2d");
colores = [
  "coral",
  "blue",
  "green",
  "red",
  "yellow",
  "gainsboro",
  "wheat",
  "orange",
  "crimson"
];

const NLINEAS = 5;
let lineas = [];


function randomVal(min, max) {
  return min + Math.random() * (max - min);
}

class Linea {
  constructor(
    x0,
    y0,
    x1,
    y1,
    vx0,
    vy0,
    vx1,
    vy1,
    cx0,
    cy0,
    cx1,
    cy1,
    color,
    contexto
  ) {
    this.p0 = { x: x0, y: y0 };
    this.p1 = { x: x1, y: y1 };
    this.v0 = { x: vx0, y: vy0 };
    this.v1 = { x: vx1, y: vy1 };
    this.caja = { x0: cx0, y0: cy0, x1: cx1, y1: cy1 };
    this.color = color;
    this.c = contexto;
  }

  refresca() {
    {
      if (!("c" in this)) return;
      this.mueveEnCaja(this.caja.x0, this.caja.y0, this.caja.x1, this.caja.y1);
      this.c.strokeStyle = this.color;
      this.c.beginPath();
      this.c.moveTo(this.p0.x, this.p0.y);
      this.c.lineTo(this.p1.x, this.p1.y);
      this.c.stroke();
    }
  }

  mueveEnCaja(x0, y0, x1, y1) {
    let res;
    res = this.aplicaFisica(this.p0.x, this.v0.x, x0, x1);
    this.p0.x = res.pos;
    this.v0.x = res.vel;
    res = this.aplicaFisica(this.p1.x, this.v1.x, x0, x1);
    this.p1.x = res.pos;
    this.v1.x = res.vel;
    res = this.aplicaFisica(this.p0.y, this.v0.y, y0, y1);
    this.p0.y = res.pos;
    this.v0.y = res.vel;
    res = this.aplicaFisica(this.p1.y, this.v1.y, y0, y1);
    this.p1.y = res.pos;
    this.v1.y = res.vel;
  }

  aplicaFisica(pos, vel, minPos, maxPos) {
    pos += vel;
    if (pos >= maxPos) {
      if (vel > 0) vel = -vel;
      pos = maxPos - 1;
    }
    if (pos <= minPos) {
      if (vel < 0) vel = -vel;
      pos = minPos + 1;
    }
    return { pos: pos, vel: vel };
  }
}


function empezar() {
  c.clearRect(0, 0, XMAX, YMAX);
  for (let i = 0; i < NLINEAS; i++) {
    lineas.push(
      new Linea(
        randomVal(0, XMAX),
        randomVal(0, YMAX),
        randomVal(0, XMAX),
        randomVal(0, YMAX),
        randomVal(-5, 5),
        randomVal(-5, 5),
        randomVal(-5, 5),
        randomVal(-5, 5),
        0,
        0,
        XMAX,
        YMAX,
        colores[i % colores.length],
        c
      )
    );
  }
  window.requestAnimationFrame(dibujaOtraVez);
}

function dibujaOtraVez() {
  c.fillStyle = "rgba(0,0,0,0.08)";
  c.fillRect(0, 0, XMAX, YMAX);
  for (let linea of lineas) linea.refresca();
  window.requestAnimationFrame(dibujaOtraVez);
}

empezar();