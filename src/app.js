let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(who, action, what, when) {
  numWho = Math.floor(Math.random() * who.length);
  numAction = Math.floor(Math.random() * action.length);
  numWhat = Math.floor(Math.random() * what.length);
  numWhen = Math.floor(Math.random() * when.length);
  return (
    who[numWho] +
    " " +
    action[numAction] +
    " " +
    what[numWhat] +
    " " +
    when[numWhen]
  );
}
function onLoad() {
  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}
window.onload = onLoad;
