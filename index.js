function scuberGreetingForFeet(someNumber){
  let message;
  if (someNumber <= 400)
    message = 'This one is on me!';
  else if (someNumber <= 2500)
    message = 'I will gladly take your thirty bucks.';
  else
    message = 'No can do.';
  return message;
}

function ternaryCheckCity(someCity){
  let message;
  someCity == 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.'
  return message;
}

function switchOnCharmFromTip(tipAmt){
  let message;
  if (tipAmt == 'generous')
    message = 'Thank you so much.';
  else if (tipAmt == 'not as generous')
    message = 'Thank you.';
  else
    message = 'Bye.';
  return message;
}
