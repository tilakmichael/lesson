function accept(proptvar) {
  var name = prompt(proptvar);
  return name;
}

function first() {
  /*
   console.log("Hello World!");
  console.log("Welcome to JavaScript");
  */
  //   alert("Hello World!");
  var nameObj;
  var ageObj;
  var name;
  var age;

  var nameObj2;
  var ageObj2;

  nameObj = document.getElementById("_idname");
  ageObj = document.getElementById("_idage");
  name = nameObj.value;
  age = ageObj.value;

  nameObj2 = document.getElementById("_idname2");
  ageObj2 = document.getElementById("_idage2");
  nameObj2.value = name;
  ageObj2.value = age;

  // gender
  var genderObj = document.getElementById("_idselect");
  var gender = genderObj.options[genderObj.selectedIndex].value;

  var mora;
  if (age >= 60) {
    mora = "You are an Senior";
  } else if (age >= 58 && gender == "F") {
    mora = "You are an Senior";
  } else if (age >= 18) {
    mora = "You are a Adult";
  } else {
    mora = "You are a Minor";
  }

  /* and OR 
  AND 

  T & T   = T 
  T & F   = F 
  F & T   = F 
  F & F   = F 

  OR 

  T & T   = T 
  T & F   = T 
  F & T   = T 
  F & F   = F 

  */

  var h4obj = document.getElementById("_idh4");
  h4obj.innerHTML = mora;
  //alert(name + " / " + age);
  //   name = prompt("Please Enter Name:");
  //   age = prompt("Please Enter Age of " + name);
  //   alert(name + " is " + age);
}

function selectweekday() {
  var wday = document.getElementById("_idwdat").value;

  // switch (Number(wday)) {
  //   case 1:
  //     alert("this is week end");
  //     break;
  //   case 2:
  //     alert("this first day of the week");
  //     break;
  //   case 3:
  //   case 4:
  //   case 5:
  //     alert("this is a week day");
  //     break;
  //   case 6:
  //     alert("ready for end of the week");
  //     break;
  //   case 7:
  //     alert("enjo the week end");
  //     break;
  //   default:
  //     alert("unknown day selected!!!!");
  //     break;
  // }

  switch (true) {
    case wday == 1 || wday == 7:
      alert("enjo the week end");
      break;
    case wday > 1 && wday < 7:
      alert("this is a week day");
      break;
    default:
      alert("unknown day selected!!!!");
  }
}
