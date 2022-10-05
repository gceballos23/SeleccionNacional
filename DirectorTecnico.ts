import {Persona} from "./Persona";

export class DirectorTecnico extends Persona{
    protected contratado : boolean;


    constructor(pNombre : string, pEdad : number){
        super(pNombre,pEdad);
        this.contratado = false;
    
    }



    public getContratado():boolean{
        return this.contratado;
    }

    public setContratado(pContradado : boolean): void{
        this.contratado = pContradado;
    }

}