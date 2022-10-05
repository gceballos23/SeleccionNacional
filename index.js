"use strict";
exports.__esModule = true;
var Jugador_1 = require("./Jugador");
var Masajista_1 = require("./Masajista");
var DirectorTecnico_1 = require("./DirectorTecnico");
var SeleccionNacional_1 = require("./SeleccionNacional");
var dibu = new Jugador_1.Jugador("DIBU MARTINEZ", 29, "ARQUERO");
var Otamendi = new Jugador_1.Jugador("OTAMENDI", 36, "DEFENSOR");
var messi = new Jugador_1.Jugador("MESSI", 34, "DELANTERO");
var galindes = new Masajista_1.Masajista("galindes", 44);
var masajistaNuevo = new Masajista_1.Masajista("masajistaNuevo", 44);
var scaloni = new DirectorTecnico_1.DirectorTecnico("SCALONI", 46);
var argentina = new SeleccionNacional_1.SeleccionNacional("ARGENTINA", [dibu, Otamendi], [galindes], [scaloni]);
// listar seleccion
console.log(argentina);
