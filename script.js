alert("In the Game of Thrones, you either win or you die.");
var playerHouse = prompt("Choose your house. ('Stark', 'Targaryen','Hogg')");

if (playerHouse === 'Stark') {
  alert("You chose the Starks of Winterfell. A noble house, with a somewhat strange obsession with wolves. What is up with that, anyway? The name is apropos, because you come from a cold land filled with dour people and lots of wolves. Did I mention the wolves? It's, like, wolfcity up in here.");
  var honorOrFamily = prompt("Do you fight for 'honor' or 'family'? Or wolves?");
} else if (playerHouse === 'Targaryen') {
  alert("The Targaryen house has a, let's call it, a tendency towards madness. Apparently, a bunch of Targaryen rulers have gone crazy and burned/maimed/stabbed/eaten/tickled their subjects to death. But that's cool! Whatever. No judgement.")
  var madOrNotMad = prompt("Do you go 'mad' or are you 'not mad'?");
} else if (playerHouse === 'Hogg') {
  alert("House Hogg. A small hamstead in the north of the Riverlands. Proudest house moment: in 1041 House Hogg grew the largest zuchini in the history of Westeros. It was huge. King Valarian himself described it as 'really quite impressive.'");
  var whatToGrow = prompt("Do you cultivate 'honey' or do you switch production to 'iron'?");
} else if (playerHouse === 'Lannister') {
  alert("You picked the Lannisters? That's not even an option. I guess we can do that.")
  var debtOrNo = prompt("Do you pay your debts? Y/N");
};

if (playerHouse === "Stark" && honorOrFamily === "honor") {
  var suicideOrHonor = prompt("It is evening. House Bolton's forces have massed on the other side of the Blackwater. You could meet them tomorrow in 'honorable battle' or you could send men on a 'suicide mission' during the night to kill as many Bolton men as possible.");
} else if (playerHouse === "Stark" && honorOrFamily === "family") {
  var numberOfFamily = ["Rob ", "Ned ", "Whiskers the Cat "];
  alert("Your family consists of" + " " + numberOfFamily);
} else if (playerHouse === "Stark" && honorOrFamily === "wolves") {
  alert("What is it with you guys and wolves?");
  alert("The wolves eat you and you die. There. Happy?");
};

if ()
// if (playerHouse === "Stark" && honorOrFamily === "family") {
//   var numberOfFamily = [" Ned", " Rob", " Whiskers the Cat"];
//   while (numberOfFamily.length !== 0) {
//     var saveFirst = prompt("Who do you save first? ('Rob', 'Ned', or 'Whiskers')");
//       if (saveFirst === 'Rob') {
//         alert("Rob dies.");
//         array.splice(1,1);
//       }
//   }
// }

// for (i=0; i<=starkFamily.length;i++) {
//   if ()
// }
