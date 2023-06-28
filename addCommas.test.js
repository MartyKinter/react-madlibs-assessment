const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("adds commas to a positive integer", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("adds commas to a large positive integer", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("returns the same string for a small integer", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("adds commas to a negative integer", () => {
    expect(addCommas(-1234)).toBe("-1,234");
  });

  test("check that '-' is not counted as i[0] in loop", () => {
    //making sure it doesn't give "-,123,456"
    expect(addCommas(-123456)).toBe("-123,456");
  });

  test("adds commas to a number with decimal places", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
  });

  test("adds commas to a negative number with decimal places", () => {
    expect(addCommas(-311592.65)).toBe("-311,592.65");
  });
});

