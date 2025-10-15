// start js barista
let question = prompt("would you like a cold or hot drink?");


if (question === "cold") {
  console.log("sorry, cold drinks are sold out.");
}


else if (question === "hot") {


  let PriceOfLatte = 180;
  let PriceOfCappuccino = 130;
  let PriceOfAmericano = 210;


  let choice = prompt("what's your favorit drink? (latte/cappuccino/americano)"); {


    if (choice === "latte" || choice === "cappuccino" || choice === "americano") {


      let order = Number(prompt("how many cups of " + choice + "?"));


      let TotalPrice;


      if (choice === "latte") {
        TotalPrice = order * PriceOfLatte;
      } else if (choice === "cappuccino") {
        TotalPrice = order * PriceOfCappuccino;
      } else if (choice === "americano") {
        TotalPrice = order * PriceOfAmericano;
      }


      if (order > 3) {
        TotalPrice = TotalPrice * 0.9;
        console.log("you get a 10% discount!");
      }


      console.log("Your order is: " + order + " " + choice);
      console.log("Total price: " + TotalPrice + "$");
    }


    else {
      console.log("We don't have that drink.");
    }
  }
}


let more = prompt("would you like anything else? (yes/no)");


if (more === "no") {
  console.log("thank you for choosing barista.");
}


else if (more === "yes") {


  let PriceOfLatte1 = 180;
  let PriceOfCappuccino2 = 130;
  let PriceOfAmericano3 = 210;


  let NewChoice = prompt("which one would you like? (latte/cappuccino/americano)"); {


    if (NewChoice === "latte" || NewChoice === "cappuccino" || NewChoice === "americano") {


      let NewOrder = Number(prompt("how many cups of " + NewChoice + "?"));


      let NewTotalPrice;


      if (NewChoice === "latte") {
        NewTotalPrice = NewOrder * PriceOfLatte1;
      } else if (NewChoice === "cappuccino") {
        NewTotalPrice = NewOrder * PriceOfCappuccino2;
      } else if (NewChoice === "americano") {
        NewTotalPrice = NewOrder * PriceOfAmericano3;
      }


      if (NewOrder > 3) {
        NewTotalPrice = NewTotalPrice * 0.9;
        console.log("you get a 10% discount!");
      }


      console.log("Your order is: " + NewOrder + " " + NewChoice);
      console.log("Total price: " + NewTotalPrice + "$");
      // console.log("Total price: " + NewTotalPrice + TotalPrice + "$");
      console.log("thank you for choosing barista.");
    }


    else {
      console.log("We don't have that drink.");
    }
  }
}
// end js barista
