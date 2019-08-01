function scuberGreetingForFeet(somevalue){
  // Write your code here!

  if (somevalue <= 400) {
    return 'This one is on me!';
  } else if (somevalue > 2000 && somevalue < 2499) {
    return 'I will gladly take your thirty bucks.'
  } else if (somevalue > 2500) {
    return 'No can do.';
  }

}

function ternaryCheckCity(city){
  // Write your code here!

  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.';
  }

}