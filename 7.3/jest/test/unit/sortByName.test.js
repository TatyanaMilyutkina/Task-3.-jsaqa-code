const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("No sorting", () => {
    expect(
      sorting.sortByName([
        "Старик и море",
        "Капитан Сорви голова",
        "Сказка странствий",
      ])
    ).toEqual(["Капитан Сорви голова", "Сказка странствий", "Старик и море"]);
  });
});