import {Jugador} from "./Jugador";
import {Masajista} from "./Masajista";
import {DirectorTecnico} from "./DirectorTecnico";
import {SeleccionNacional} from "./SeleccionNacional"

let dibu = new Jugador("DIBU MARTINEZ",29,"ARQUERO");
let Otamendi = new Jugador("OTAMENDI",36,"DEFENSOR");
let messi = new Jugador("MESSI",34,"DELANTERO");

let galindes = new Masajista("galindes",44);
let masajistaNuevo = new Masajista("masajistaNuevo",44);

let scaloni = new DirectorTecnico("SCALONI",46);
let argentina = new SeleccionNacional("ARGENTINA",[dibu,Otamendi],[galindes],[scaloni]);

// listar seleccion
console.log(argentina);

