import { expect, it } from "vitest";

import { slugifyString } from "./slugifyString";

it("Should remove accents and special characters, lowercase, trim and replace spaces with hyphen", () => {
    const string = "  NEW Risqué Game! ;) #naughty   ";

    expect(slugifyString(string)).toBe("new-risque-game-naughty");
})

it("Should trim trailling whitespace", () => {
    const string = "   string       ";

    expect(slugifyString(string)).toBe("string");
})

it("Should lowercase", () => {
    const string = "STRING";

    expect(slugifyString(string)).toBe("string");
})

it("Should replace space between characters with hyphen", () => {
    const string = "my string";

    expect(slugifyString(string)).toBe("my-string");
})

it("Should replace multiple spaces between words with only one hyphen", () => {
    const string = "my      string";

    expect(slugifyString(string)).toBe("my-string");
})

it("Should remove accents", () => {
    const string = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";

    expect(slugifyString(string)).toBe("aeiouaeiouaeiouaeioucc");
})

it("Should remove special characters", () => {
    const string = "/.,~!@#$%&_-";

    expect(slugifyString(string)).toBe("");
})