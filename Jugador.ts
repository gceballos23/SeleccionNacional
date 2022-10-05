import {Persona} from "./Persona";

export class Jugador extends Persona{
    protected posicion : string;
    protected convocado : boolean;
    protected lesionado : boolean;
    protected estado: string;


    constructor(pNombre : string, pEdad : number, pPosicion:string){
        super(pNombre,pEdad);
        this.posicion = pPosicion;
        this.lesionado = false;
        this.estado = ""; 

    }

    public getPosicion():string{
        return this.posicion;
    }

    public setPosicion(pPosicion : string): void{
        this.posicion = pPosicion;
    }

    public getConvocado():boolean{
        return this.convocado;
    }

    public setConvocado(pConvocado : boolean): void{
        this.convocado = pConvocado;
    }

    public getLesionado():boolean{
        return this.lesionado;
    }

    public setLesionado(pLesionado : boolean): void{
        this.lesionado = pLesionado;
    }

    public getEstado():string{
        return this.estado;
    }

    public setEstado(pEstado : string): void{
        this.estado = pEstado;
    }
}
