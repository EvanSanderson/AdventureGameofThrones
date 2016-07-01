alert("In the Game of Thrones, you either win or you die.");
var playerHouse = prompt("Choose your house. ('Stark', 'Targaryen','Hogg')");

if (playerHouse === 'Stark') {
  alert("You chose the Starks of Winterfell. A noble house, with a somewhat strange obsession with wolves. What is up with that, anyway? The name is apropos, because you come from a cold land filled with dour people and lots of wolves. Did I mention the wolves? It's, like, wolfcity up in here.");
  var honorOrFamily = prompt("Do you fight for 'honor' or 'family'? Or wolves?");
} else if (playerHouse === 'Targaryen') {
  alert("Ooh, Targaryen. Nice. You do know your house has a tendency towards madness? Right? You didn't hear about that? Apparently, a bunch of Targaryens have gone crazy and burned/maimed/stabbed/eaten/tickled their subjects to death. But that's cool! Whatever. No judgement.")
  var madOrNotMad = prompt("Do you go 'mad' or are you 'not mad'?");
} else if (playerHouse === 'Hogg') {
  alert("House Hogg. A small hamstead in the north of the Riverlands. Proudest house moment: in 1041 House Hogg grew the largest zuchini in the history of Westeros. It was huge. King Valarian himself described it as 'really quite impressive.'");
  var whatToGrow = prompt("Do you cultivate 'honey' or do you switch production to 'iron'?");
};
