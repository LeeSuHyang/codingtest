function passwordDecode() {
  let code = [
    "   + -- + - + -   ",
    "   + --- + - +   ",
    "   + -- + - + -   ",
    "   + - + - + - +   ",
  ];

  let result = "";

  for (var s of code) {
    result += String.fromCharCode(
      parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/\-/g, "0"), 2)
    );
  }

  for (var s in code) {
    console.log("for in", s);
  }

  for (var s of code) {
    console.log("for of", s);
  }

  console.log(result);
}

passwordDecode();
