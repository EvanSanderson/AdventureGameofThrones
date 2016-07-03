alert("In the Game of Thrones, you either win or you die.");
var playerHouse = prompt("Choose your house. ('Stark', 'Targaryen','Hogg')");

if (playerHouse === 'Stark') {
  alert("You chose the Starks of Winterfell. A noble house, with a somewhat strange obsession with wolves. What is up with that, anyway? The name is apropos, because you come from a cold land filled with dour people and lots of wolves. Did I mention the wolves? It's, like, wolfcity up in here.");
  var honorOrFamily = prompt("Do you fight for 'honor' or 'family'? Or wolves?");
} else if (playerHouse === 'Targaryen') {
  alert("The Targaryen house has a, let's call it, a tendency towards madness. Apparently, a bunch of Targaryen rulers have gone crazy and burned/maimed/stabbed/eaten/tickled their subjects to death. But that's cool! Whatever. No judgement.")
  var madOrNotMad = prompt("Do you go 'mad' or are you 'not mad'?");
  var targName = prompt("And what is your name?")
} else if (playerHouse === 'Hogg') {
  alert("House Hogg. A small hamstead in the north of the Riverlands. Proudest house moment: in 1041 House Hogg grew the largest zuchini in the history of Westeros. It was huge. King Valarian himself described it as 'really quite impressive.'");
  var whatToGrow = prompt("Do you cultivate 'honey' or do you switch production to 'iron'?");
} else if (playerHouse === 'Lannister') {
  alert("You picked the Lannisters? That's not even an option. Go play Candy Crush. The Lannisters. Hah.");
};

if (madOrNotMad === "mad") {
  targName = "Mad " + targName;
};

if (playerHouse === "Stark" && honorOrFamily === "honor") {
  var suicideOrHonor = prompt("It is evening. House Bolton's forces and the Lannisters have massed on the other side of the Blackwater for the final showdown. You could meet them tomorrow in 'honorable battle' or you could send men on a 'suicide mission' during the night to kill as many Bolton and Lannister men as possible.");
} else if (playerHouse === "Stark" && honorOrFamily === "family") {
  var firstFamily = prompt("Family is a noble thing to fight for. Please enter the name of your first family member.");
  var secondFamily = prompt("Please enter the name of your second family member.")
  var thirdFamily = prompt("Please enter the name of your final family member.")
} else if (playerHouse === "Stark" && honorOrFamily === "wolves") {
  alert("What is it with you guys and wolves?");
  alert("The wolves eat you and you die. There. Happy?");
};

var family = ["Whiskers the Cat", firstFamily, secondFamily, thirdFamily]

if (playerHouse === "Stark" && honorOrFamily === "family") {
  killFamily();
}

function killFamily() {
  for (i = family.length; i > 0; i--) {
  alert(thirdFamily + " catches a cold one night because you live in a frozen and dark castle. They die.");
  family.pop();
  alert("You have" + " " + family.length + " family members left.");
  var giveUp = prompt("Do you 'give up' or 'keep going'? ");
    if (giveUp === 'give up') {
      alert("You waste away from grief, and eventually get eaten by wolves. THE END.");
      return
    } else if (giveUp === "keep going") {
        alert("While at the funeral of " + thirdFamily + ", " + secondFamily + " is hit with an arrow during a surprise attack by raiders from across the Wall, and dies.");
        family.pop();
        alert("You have" + " " + family.length + " family members left.");
        var giveUp = prompt("Do you 'give up' or 'keep going'? ");
            if (giveUp === 'give up') {
                alert("You waste away from grief, and eventually get eaten by wolves. THE END.");
                return;
              } else if (giveUp === "keep going") {
                alert("Consumed by rage by the slaying of " + secondFamily + ", you march on the Wall. Upon arriving, you make your way to the top to survey the lands beyond. You think you here your name on the wind, and turn suddenly. Your sword sheath bumps into " + firstFamily + " who falls to their, persumable, death.");
                family.pop();
                alert("You have" + " " + family.length + " family members left.");
                var giveUp = prompt("Do you 'give up' or 'keep going'? ");
                    if (giveUp === 'give up') {
                        alert("You waste away from grief, and eventually get eaten by wolves. THE END.");
                        return;
                      } else if (giveUp === "keep going") {
                        alert("Whiskers, your beloved family cat, goes missing one day. You search, but cannot find him. One day, while ranging from the wall, you come across a grisly scene. Raiders torn apart, their weapons scattered. For a moment, you catch a glimpse of a feline face peering down at you from the trees. Could it be Whiskers?");
                        alert("You are so caught up in this that you don't notice that the rest of your party has left. You try to make your way back, but the snow is too thick. Just as you are about to give up, you feel a furry tail brush your leg through the snow. It's Whiskers!");
                        alert("You are too weak to continue. You can't make it back. You tell Whiskers: go. Live. Make our family proud. And take vengence on those who have wronged us. Seize the Iron Throne, Whiskers. You die, but Whiskers carries on the Stark. But that...is a story for another day. THE END.");
                        return;

              }
    }
  }
}
}

if (playerHouse === "Stark" && honorOrFamily === "honor" && suicideOrHonor === 'honorable battle') {
  alert("On the morrow, your forces prepare to meet in honorable battle. You lead the charge, screaming your battle cry, sure in your chances of victory. However, the devious Boltons dug a massive hole during the night and covered it with leaves, which you totally failed to notice because you were too busy sharpening your sword. Which, by the way, falls into the hole with you, impales your crotch and kills you. Whoops! THE END." );
} else if (playerHouse === "Stark" && honorOrFamily === "honor" && suicideOrHonor === 'suicide mission') {
  var menSent = prompt("You have 2000 soldiers at your disposal. How can you do you send?");
    if (menSent < 2000) {
      alert("You send as many soldiers as can be spared during the night. However, it doesn't prove to be enough. The next day, your forces are surrounded and the Lannisters capture you, attach you to a catapult, and fire you into a ravine. You die. THE END.");
    } else if (menSent >= 2000) {
      alert("You sent all of your guys? All of them? That's...intense. Jeez.");
      alert("Your entire force creeps into their camp at night, while you hang back and get some Zzz's. They do bloody work, and reduce the enemy force. All of them are killed, but Bolton's end up turning on the Lannisters in the morning, and the two sides cut each other to pieces. Only you are left, your path clear to the Iron Throne.");
      alert("Not so honorable now, are we? THE END");
    }
};


if (playerHouse === "Targaryen") {
  alert("All hail " + targName + ", King of the Andals, the Rhoyne, and the Firstman, Harrower of Men and Destroyer of Chains, Born of Dragon Blood. All hail.");
  var dragonEgg = prompt("A mysterious visitor enters your court and brings you a dragon egg. There is a 'blue', a 'green', and a 'black' - but you can only take one. Which do you take? ");
}

if (dragonEgg === "green") {
  alert("The green dragon egg turns out to be a giant ostrich egg. While you can't use it for battle or conquest, you can make a tasty omelette from it.");
  alert("You make a big breakfast the next morning - ostrich egg, bacon, the works. Your maester told you to watch your cholestrol but you take no heed. On the evenings ride, you keel over with heart pains, and the Dothraki leave you on the side of the road to get eaten by scorpions. You die. THE END");
} else if (dragonEgg ==="blue") {
  alert("While carrying the blue dragon egg back to your chambers, you notice something strange. The egg is actually made of elaborate paper mache. Someone spent a lot of time designing this thing, but it carries no practical or martial value.");
  alert("You're so angry, you set the thing on fire on the roof of your castle to make an example. An ember from the fire catches on the hay below, and the castle burns down around you while you sleep. You die. THE END")
} else if (dragonEgg === "black") {
  var unleashOrNay = prompt("The black egg pulsates in your hands as you take it. Years pass, and you raise the dragon that hatches from it as your own. Eventually, destiny leads you to a final battle at against the Others. Do you 'unleash' your dragon or 'keep her back'?");
};

if (dragonEgg === "black" && unleashOrNay === "keep her back") {
  alert("You decide to keep your dragon back from the battle. During the fighting, she breaks free, and scorches the entire battlefield. You confront her, and tell her: 'BAD DRAGON! BAD!' She looks at you, and snaps you up in her jaws. Dragons are not pets. Lesson learned. THE END." )
} else if (dragonEgg === "black" && unleashOrNay === "unleash") {
  alert("Now is the moment you've been waiting for. Time to let the beast off the chain. You unlock the dragons chains and simply point at the other end of the battlefield. She takes flight.");
    i = 1;
    while (i <= 3) {
      alert("In the" + i + "st" + " pass, your dragon takes care of" + Math.floor() + " wights.");
      i++;
    };
    alert("The path to the throne is clear, mostly because everyone else is dead. You fly off on your dragon, deciding to take a little vacation. You hear Dorne is nice this time of year. THE END");
};
