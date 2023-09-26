
const unroll = require("./unroll");

let square;
let smallerSquare;

describe("#unroll", function () {
  beforeEach(() => {
    square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
  
    smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
  });

  it("checks validity of unroll on square", function () {
    let num4 = square[0][3];
    expect(unroll(square)[3]).toEqual(num4);
  });

  it("checks validity of unroll on square #2", function () {
    let num10 = square[2][1];
    expect(unroll(square)[15]).toEqual(num10);
  });

  it("checks validity of unroll on square #3", function () {
    let num10 = square[2][1];
    expect(unroll(square)[3]).not.toEqual(num10);
  });

  it("checks validity of unroll on smallerSquare", function () {
    let c = smallerSquare[0][2];
    expect(unroll(smallerSquare)[2]).toEqual(c);
  });

  it("checks validity of unroll on smallerSquare #2", function () {
    let h = smallerSquare[2][1];
    expect(unroll(smallerSquare)[5]).toEqual(h);
  });

  it("checks validity of unroll on smallerSquare #3", function () {
    let g = smallerSquare[2][0];
    expect(unroll(smallerSquare)[5]).not.toEqual(g);
  });

});
