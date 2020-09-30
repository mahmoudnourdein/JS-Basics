let shoeSize = prompt("What is your shoe size?");
let birthYear = prompt("What is your birth year ?");
let fun = () => {
  shoeSize * 2;
  shoeSize + 5;
  shoeSize * 50;
  shoeSize - birthYear;
  shoeSize + 1766;
  return shoeSize;
};
alert(fun());