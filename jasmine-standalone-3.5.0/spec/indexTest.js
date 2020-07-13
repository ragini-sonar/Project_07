var fixture;
var inputLabel;

beforeEach(function () {
  inputLabel = "<table><tr><td id='inputLabel'>0</td></tr></table>";
  fixture_equal = "<button id='equal'>=</button>";
  fixture_clear = "<button id='clear'>AC</button>";
  fixture_number = "<button id='num'>64</button>";
  fixture_appendNum = "<button id='appendNum'>1</button>";
  document.body.insertAdjacentHTML("afterbegin", inputLabel);
});

describe("Calculator Functions", function () {
  it("Checked equals to function", function () {
    document.getElementById("inputLabel").innerHTML = "12+48";
    document.body.insertAdjacentHTML("afterbegin", fixture_equal);
    pushBtn(document.getElementById("equal"));
    expect(document.getElementById("inputLabel").innerHTML).toEqual("60");
  });

  it("Checked clear all function", function () {
    document.getElementById("inputLabel").innerHTML = "45";
    document.body.insertAdjacentHTML("afterbegin", fixture_clear);
    pushBtn(document.getElementById("clear"));
    expect(document.getElementById("inputLabel").innerHTML).toEqual("0");
  });

  it("Checked if input label is empty the put a number", function () {
    document.getElementById("inputLabel").innerHTML = "0";
    document.body.insertAdjacentHTML("afterbegin", fixture_number);
    pushBtn(document.getElementById("num"));
    expect(document.getElementById("inputLabel").innerHTML).toEqual("64");
  });

  it("Check if input label has number then append the number", function () {
    document.getElementById("inputLabel").innerHTML = "3";
    document.body.insertAdjacentHTML("afterbegin", fixture_appendNum);
    pushBtn(document.getElementById("appendNum"));
    expect(document.getElementById("inputLabel").innerHTML).toEqual("31");
  });
});

describe("Calculator Operations", function () {
  it("Checked divide by zero, shows infinity", function () {
    document.getElementById("inputLabel").innerHTML = "12/0";
    document.body.insertAdjacentHTML("afterbegin", fixture_equal);
    pushBtn(document.getElementById("equal"));
    expect(document.getElementById("inputLabel").innerHTML).toEqual("Infinity");
    // expect(document.getElementById("inputLabel").innerHTML).toBeLessThan("0");
    // expect(document.getElementById("inputLabel").innerHTML).toBeGreaterThan("0");
  });

  it("Multiple Operations", function () {
    document.getElementById("inputLabel").innerHTML = "5+9-2";
    document.body.insertAdjacentHTML("afterbegin", fixture_equal);
    pushBtn(document.getElementById("equal"));
    expect(document.getElementById("inputLabel").innerHTML).toEqual("12");
  });
});
