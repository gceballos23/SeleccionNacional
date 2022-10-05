"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pEdad) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.telefono = "";
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (pTelefono) {
        this.nombre = pTelefono;
    };
    return Persona;
}());
exports.Persona = Persona;
