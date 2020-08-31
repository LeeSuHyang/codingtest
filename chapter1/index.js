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

  console.log(result);
}

passwordDecode();
