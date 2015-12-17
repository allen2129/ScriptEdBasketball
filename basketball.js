function promptForPlayerName(Player1) {
    var name =  prompt("What is " + (Player1) + " name");
    if(name.length >= 15){
    alert("Wow! Thats a long name");
    }else{
    return name;
    }
}

function promptForPlayerName(Player2) {
    var name2 = prompt("what is" + (Player2) + "name");
    if(name2.length >= 15){
    alert("Wow! Thats a long name");
    }else{
    return name2;
    }
}

function tryTwoPointShot() {
    var name = Math.random();
    var name2 = Math.random();
    if(name > 0.2 || name2 > 0.2){
    return true;
    }else{
      return false;  
    }
}

function tryThreePointShot() {
    var name = Math.random();
    var name2 = Math.random();
    if(name >= 0.2 && name2 >= 0.8){
        return true;
    }else{
        return false;
    }
}

function getShotString(team, shotnumber, goodbad) 
{
if (goodbad) {
    return team + "attemped " + shotnumber + " pointer. It was good!";
} else {
    return team + "attemped " + shotnumber + " pointer. It was bad!";
}
}

function updateScore(goodbad,currentnumber,shotnumber){
    if (goodbad) {
        return shotnumber + currentnumber;
    }else{
        return currentnumber;
    }
}

function isEndOfGame(currentnumber,team){ 
    if (currentnumber >= 20){
        alert ("The game is over,won!");
        return true;
    }else{
        return false;
    }
}