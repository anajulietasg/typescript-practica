import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";

describe("Materia", () => {
  test("se crea una materia con sus datos básicos", () => {
    const titular = new Profesor("García");
    const adjunto = new Profesor("López");
    const materia = new Materia("Matemática", 1, "Ingeniería", titular, adjunto);

    expect(materia.nombre).toBe("Matemática");
    expect(materia.anio).toBe(1);
    expect(materia.carrera).toBe("Ingeniería");
  });

  test("la materia guarda bien su profesor titular", () => {
    const titular = new Profesor("García");
    const adjunto = new Profesor("López");
    const materia = new Materia("Física", 2, "Ingeniería", titular, adjunto);

    expect(materia.titular.nombre).toBe("García");
  });

  test("una materia nueva arranca sin alumnos", () => {
    const titular = new Profesor("García");
    const adjunto = new Profesor("López");
    const materia = new Materia("Química", 1, "Ingeniería", titular, adjunto);

    expect(materia.alumnos.length).toBe(0);
  });

  test("se pueden agregar alumnos a la materia", () => {
    const titular = new Profesor("García");
    const adjunto = new Profesor("López");
    const materia = new Materia("Álgebra", 1, "Ingeniería", titular, adjunto);

    const juan = new Alumno("Juan", 18);
    const ana = new Alumno("Ana", 20);
    materia.alumnos.push(juan);
    materia.alumnos.push(ana);

    expect(materia.alumnos.length).toBe(2);
  });
});