import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {
  test("se crea un profesor con su nombre", () => {
    const profesor = new Profesor("García");
    expect(profesor.nombre).toBe("García");
  });

  test("un profesor nuevo arranca con legajo vacío", () => {
    const profesor = new Profesor("López");
    expect(profesor.legajo).toBe("");
  });

  test("se le puede asignar un legajo después de crearlo", () => {
    const profesor = new Profesor("Pérez");
    profesor.legajo = "500";
    expect(profesor.legajo).toBe("500");
  });
});