import { Persona } from "./Persona";
import { Jugador } from "./Jugador";
import { Masajista } from "./Masajista";
import { DirectorTecnico } from "./DirectorTecnico";

export class SeleccionNacional {
    protected pais: string;
    protected jugadores: Jugador[];
    protected masajistas: Masajista[];
    protected entrenador: DirectorTecnico[];

    constructor(pPais: string, pJugadores: Jugador[],
        pMasajistas: Masajista[], pDirectorTecnico: DirectorTecnico[]) {
        this.pais = pPais;
        this.jugadores = pJugadores;
        this.masajistas = pMasajistas;
        this.entrenador = pDirectorTecnico;
    }

    public getPais(): string {
        return this.pais;
    }

    public setPais(pPais: string): void {
        this.pais = pPais;
    }

    public listarJuagadores() {
        return this.jugadores;
    }

    public convocarJugador(pJugador: Jugador): void {
        pJugador.setConvocado(true);
        this.jugadores.push(pJugador);
        console.log("Se convoco  al siguiente Jugador " + pJugador.getNombre());
    }

    public desvincularJugador(pJugador: Jugador): void {
        let control: number = 0;
        for (let i: number = 0; i < this.jugadores.length; i++) {
            if (pJugador.getNombre() === this.jugadores[i].getNombre()) {
                pJugador.setConvocado(false);
                this.jugadores.splice(i, 1);
                console.log("Se Despidio el siguiente Jugador " + pJugador.getNombre());
                control = 1;
                break;
            }
        }

        if (control === 0) {
            console.log("No se encontro Jugador");
        }
    }

    public listarMasajista() {
        return this.masajistas;
    }

    public contratarMasajista(pMasajista: Masajista): void {
        pMasajista.contratar();
        this.masajistas.push(pMasajista);
        console.log("Se contrato el siguiente Masajista " + pMasajista.getNombre());
    }

    public despedirMasajista(pMasajista: Masajista): void {
        let control: number = 0;
        for (let i: number = 0; i < this.masajistas.length; i++) {
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
    }

    public listarEntrenador() {
        return this.entrenador;
    }

    public contratarEntrenador(pEntrenador: DirectorTecnico): void {
        this.entrenador.push(pEntrenador);
        console.log("Se contrato el siguiente Entrenador " + pEntrenador.getNombre());
    }

    public despedirEntrenador(pEntrenador: DirectorTecnico): void {
        let control: number = 0;
        for (let i: number = 0; i < this.entrenador.length; i++) {
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
    }
}
