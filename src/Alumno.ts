import {Persona} from "./Persona";
export class Alumno extends Persona {
  constructor(
     nombre: string,
    public edad: number
  ) {super(nombre)}

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  obtenerEstado(): string {
    if (this.edad >= 18) {
      return "Mayor de edad";
    } else {
      return "Menor de edad";
    }
  }
}
