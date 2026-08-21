import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {
  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25);
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Franco", 17);
    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("un alumno de 20 años tiene estado Mayor de edad", () => {
    const alumno = new Alumno("Lucia", 20);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 15 años tiene estado Menor de edad", () => {
    const alumno = new Alumno("Mateo", 15);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });
});
