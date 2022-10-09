import { Persona } from "./Persona";

export class Masajista extends Persona {
    protected contratado: boolean;
    protected ocupado: boolean;

    constructor(pNombre: string, pEdad: number) {
        super(pNombre, pEdad);
        this.ocupado = false;
    }

    public getContratado(): boolean {
        return this.contratado;
    }

    public contratar(): void {
        this.contratado = true;
    }

    public despedir(): void {
        this.contratado = false;
    }

    public comenzarMasaje(): void {
        this.ocupado = true;
    }

    public TerminarMasaje(): void {
        this.ocupado = false;
    }
}