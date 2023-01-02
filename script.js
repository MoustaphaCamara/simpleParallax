// pointer mes images dans le HTML, via leur classes :
let japan = document.getElementsByClassName("japan-street");
let itaewon = document.getElementsByClassName("itaewon-street");
let desk = document.getElementsByClassName("desk");
// console.log(japan, itaewon, title);

new simpleParallax(japan);
// paramètres possibles --> https://simpleparallax.com/#settings
new simpleParallax(itaewon, { orientation: "left" });
new simpleParallax(desk, {
  orientation: "right",
  delay: 2,
  overflow: true,
});
