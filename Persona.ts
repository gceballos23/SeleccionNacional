export class Persona {
    protected nombre: string;
    protected edad: number;
    protected telefono: string;

    constructor(pNombre: string, pEdad: number) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.telefono = "";
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(pEdad: number): void {
        this.edad = pEdad;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(pTelefono: string): void {
        this.nombre = pTelefono;
    }
}