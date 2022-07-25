function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting;
  if (feet > 2500) {
    greeting = 'No can do.';
  } else if (feet > 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet <= 400) {
    greeting = 'This one is on me!';
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  let msg;
  city == "NYC" ? msg = "Ok, sounds good." : msg = "No go."
  return msg;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let msg;
  switch (tip) {
    case "generous":
      msg = "Thank you so much."
      break;
    case "not as generous":
      msg = "Thank you."
      break;
    default:
      msg = "Bye."
  }
  return msg;
}
