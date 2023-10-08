import { expect, test } from "vitest";
import getFlagEmoji from "./getFlagEmoji";

test("Israel Emoji", () => {
  expect(getFlagEmoji("IL")).toBe("🇮🇱");
});

test("US Emoji", () => {
  expect(getFlagEmoji("US")).toBe("🇺🇸");
});
