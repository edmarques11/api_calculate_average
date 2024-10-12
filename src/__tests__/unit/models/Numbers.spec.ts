import Numbers from "~/models/Numbers";

describe("Testes model Numbers", () => {
  test("deve ser possível calcular a média entre dois números", () => {
    const numbers = new Numbers();

    const data = [1, 2];
    const average = numbers.average(data);

    expect(average).toEqual(1.5);
  });

  test("deve ser possível calcular a média com um número", () => {
    const numbers = new Numbers();

    const data = [3];
    const average = numbers.average(data);

    expect(average).toEqual(3);
  });

  test("deve ser possível calcular a média entre 11 números", () => {
    const numbers = new Numbers();

    const data = [3, 1, 8, 9, 2, 4, 6, 12, 3, 4, 36];
    expect(data).toHaveLength(11);

    const average = numbers.average(data);

    expect(average).toEqual(8);
  });
});
