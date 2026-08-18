export class Alumno {
  constructor(
    public nombre: string,
    public edad: number
  ) {}

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
