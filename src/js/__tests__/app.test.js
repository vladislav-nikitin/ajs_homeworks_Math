import Character from "../app";

const daemon = new Character("daemon");
const magician = new Character("magician");

test("create character", () => {
  const daemon = new Character("daemon");
  expect(daemon).toEqual({
    //
  });
});
