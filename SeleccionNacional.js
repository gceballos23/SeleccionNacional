"use strict";
exports.__esModule = true;
exports.SeleccionNacional = void 0;
var SeleccionNacional = /** @class */ (function () {
    function SeleccionNacional(pPais, pJugadores, pMasajistas, pDirectorTecnico) {
        this.pais = pPais;
        this.jugadores = pJugadores;
        this.masajistas = pMasajistas;
        this.entrenador = pDirectorTecnico;
    }
    SeleccionNacional.prototype.getPais = function () {
        return this.pais;
    };
    SeleccionNacional.prototype.setPais = function (pPais) {
        this.pais = pPais;
    };
    SeleccionNacional.prototype.listarJuagadores = function () {
        return this.jugadores;
    };
    SeleccionNacional.prototype.convocarJugador = function (pJugador) {
        this.jugadores.push(pJugador);
        pJugador.setConvocado(true);
        console.log("Se convoco  al siguiente Jugador " + pJugador.getNombre());
    };
    SeleccionNacional.prototype.desvincularJugador = function (pJugador) {
        var control = 0;
        for (var i = 0; i < this.jugadores.length; i++) {
            if (pJugador.getNombre() === this.jugadores[i].getNombre()) {
                pJugador.setConvocado(false);
                this.jugadores.splice(i, 1);
                console.log("Se Despidio el siguiente Masajista " + pJugador.getNombre());
                control = 1;
                break;
            }
        }
        if (control === 0) {
            console.log("No se encontro Jugador");
        }
    };
    SeleccionNacional.prototype.listarMasajista = function () {
        return this.masajistas;
    };
    SeleccionNacional.prototype.contratarMasajista = function (pMasajista) {
        this.masajistas.push(pMasajista);
        pMasajista.contratar();
        console.log("Se contrato el siguiente Masajista " + pMasajista.getNombre());
    };
    SeleccionNacional.prototype.despedirMasajista = function (pMasajista) {
        var control = 0;
        for (var i = 0; i < this.masajistas.length; i++) {
            if (pMasajista.getNombre() === this.masajistas[i].getNombre()) {
                pMasajista.despedir();
                this.masajistas.splice(i, 1);
                console.log("Se Despidio el siguiente Masajista " + pMasajista.getNombre());
                control = 1;
                break;
            }
        }
        if (control === 0) {
            console.log("No se encontro Masajista");
        }
    };
    SeleccionNacional.prototype.listarEntrenador = function () {
        return this.entrenador;
    };
    SeleccionNacional.prototype.contratarEntrenador = function (pEntrenador) {
        this.entrenador.push(pEntrenador);
        console.log("Se contrato el siguiente Entrenador " + pEntrenador.getNombre());
    };
    SeleccionNacional.prototype.despedirEntrenador = function (pEntrenador) {
        var control = 0;
        for (var i = 0; i < this.entrenador.length; i++) {
            if (pEntrenador.getNombre() === this.entrenador[i].getNombre()) {
                this.entrenador.splice(i, 1);
                console.log("Se Despidio el siguiente Entrenador " + pEntrenador.getNombre());
                control = 1;
                break;
            }
        }
        if (control === 0) {
            console.log("No se encontro Entrenador");
        }
    };
    return SeleccionNacional;
}());
exports.SeleccionNacional = SeleccionNacional;
