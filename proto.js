import { Vehicle } from "./car";

/*var name = prompt("What is your name");
console.log(typeof(name));
if (!isNaN(name)) {
    alert("yes");
} else {
    alert("no");

}

var str = 0.10;
var result = str.toExponential(0);
console.log(result);*/

/*var question = (prompt("What is your name"));
var ques2 = parseInt(prompt("What is your age"));
var ques3 = prompt("Enter your email");
console.log(question);
console.log(ques2);
console.log(ques3);

if (isNaN(ques2)) {
    alert("You are asked to enter a number");

} else {
    if (ques2 >= 18) {
        alert("Welcome");
    } else if (ques < 13) {
        alert("you are too young");
    }
}

var met = parseInt(prompt("please Enter a value"));
if (isNaN(met)) {
    alert("kindly please enter a value");
} else if (!isNaN(met)) {
    alert("THanks for entering a number");
} else {
    if (met >= 5) {
        alert("you just entered 5");
    } else {
        alert("You are a number below 5");
    }
}*/


//A program asking the user to Guess a number
/*var RandomNum = Math.ceil(Math.random() * 5);
var question = parseInt(prompt("Guess a number between (1-5)"));

if (RandomNum === question) {
    alert("You are correct");
} else if (isNaN(question)) {
    alert("pls enter a number");
} else {
    alert("keep trying");
}
console.log(RandomNum);*/





/*var ques;
var ques2;
var ques3;

//A program to get the biggest number 
var user = prompt("Would to like to get the biggest number of 3 numbers?\n y(yes) or n(no)");

if (user === "y" || user === "yes") {
    ques = parseInt(prompt("Enter a number"));
    ques2 = parseInt(prompt("Enter the second number"));
    ques3 = parseInt(prompt("Enter the third number"));
    alert("The biggest number is" + " " + Math.max(ques, ques2, ques));
} else if (user === "n" || user === "no") {
    alert("refresh the page if you want to play again");

}*/

//Date challenge
/*var date = new Date();
var today = date.getDay();
var res;
switch (today) {
    case 0:
        res = "sunday";
         break;
    case 1:
        res = "monday";
        break;
    case 2:
        res = "tuesday";
        break;
    case 3:
        res = "wednesday";
        break;
    case 4:
        res = "thursday";
        break;
    case 5:
        res = "friday";
        break;
    case 6:
        res = "saturday";
        break;
}

var guessDate = prompt("Guess the day of today").toLowerCase();
//guessDate = guessDate.toLowerCase();

if (guessDate === res) {
    alert("you won");
} else {
    alert("you loose");
}*/



//CHECK IF THE PRODUCT IS AVAILABLE
/*var request = prompt("Type '1' to check if the product is available \n Type'2' to list all the product\n Type anything to quit");
var products = ["mango", "orange", "pawpaw"];

if (request === '2') {
    console.log("The product available are : " + products);
} else if (request === "1") {
    var user = prompt("Enter the product").toLowerCase();
    if (products.indexOf(user) === -1) {
        // console.log("Sorry the product is not available");
        document.write("<p class=error>Sorry the product are not available</p>");
    } else {
        console.log("The product is available");
    }
}*/

//While loop
/*var i = 0;
while (i <= 10) {
    console.log(i);
    i++;

}*/

/*var i = 0;
while (i <= 10) {
    i++;
    if (i == 5) {
        continue;
    }
    console.log(i);
}*/

//The multiplication table
/*for (var i = 1; i < 10; i++) {
    console.log("The multiplication table for " + i);
    for (var j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + (i * j));



    }
}*/


//Generation of Random Number
/*var res = "";
for (var i = 0; i <= 1; i++) {
    var ans = Math.ceil(Math.random() * 9);
    console.log(ans);
}*/

//A program to ask the user to enter a particular number then log out the multiplication table
/*var ques = parseInt(prompt(("Enter a number to get the multiplication table")));
if (!isNaN(ques)) {
    for (var i = 0; i <= 10; i++) {
        console.log(ques + " * " + i + " = " + (ques * i));
    }
} else {
    alert("What you entered is not a number");
}*/


/*var user = parseInt(prompt("Enter the value n to get the odd and even number between 0 to n "));
var evencontainer = "<div class=even><h2>Even<ul></h2>";
var oddcontainer = "<div class=odd><h2>odd<ul></h2>";
var odd = "";
var even = "";
if (!isNaN(user)) {
    for (var i = 0; i <= user; i++) {
        if (i % 2 === 0) {
            even = "<li>" + i + " is even </li>";
            evencontainer += even;


        } else {

            odd = "<li>" + i + " is odd </li>";
            oddcontainer += odd;
        }

    }
}
oddcontainer += "<ul></div>";
evencontainer += "<ul></div>";*/

//Random Number Game
/*var randnum = Math.ceil(Math.random() * 5);
var chancesleft = 5;
do {
    var user = parseInt(prompt("Guess the number between(1-10)\n " + chancesleft + " chancesleft"));
    chancesleft--;

    if (randnum === user) {
        break;
    }

} while (chancesleft !== 0);
if (chancesleft === 0) {
    console.log("you loose");
} else {
    console.log("You won");
}*/



/*var arry = ["1", "shade", ["pelumi"]];
arry.unshift("shade");
console.log(arry);*/
/*var x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}*/



//ARRAY AND ITS METHOD
//var x = [
//  ["pelumi", "2"],
//  ["shade"]
//];
/*for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
        console.log(x[i][j]);

    }


}*/
//var X = ["5", "2"];
//var y = x[x.length - 1];
//var y = x.join(",");
//var y = x.concat(X);
//console.log(y);
//var f = parseInt(X[0]);
//console.log(f);
//var x = X.indexOf("7");
//console.log(x);

//x.forEach(function(e, s, f) {
// console.log(e + " at index " + s);
// console.log(f);
//});

//var x = ["40", "90", "100"];
//svar ans = x.forEach(function(e) {
//  console.log(e);
//});
//console.log(ans);


//Filter is used to return the number greater in an array or the length of an array greater
//var arry = [
//[1, 5, 7],
//  [1, 5]
//];
//var f = arry.filter(function(e) {
// return e.length > 2;
//});
//console.log(f);


//MAP METHOD ALLOW YOU TO ADD NUMBERS TO YOUR ARRAY AND ALSO RETURN STRING IN UPPERCASE
//var info = [1, 2, 3];
//var d = info.map(function(e) {
//return e + 5;
//});
//console.log(d);
//console.log(info);
//var alphabet = ["a", "b", "c"];
//var num = alphabet.map(function(e) {
//  return e.toUpperCase();
//});
//console.log(num);

//var NUM = [1, 3, 5, 6];
//var intial = NUM.reduce(function(acc, e) {
//  return acc + e;
//}, 0);
//console.log(intial);



//Reduce method allow you to sum up all the number in the array;
//var x = [1, 3, 5, 6, ];
//var Z = x.reduce(function(acc, e) {
//   if (e > 12) {
//     acc.push(e);
//     return acc;
//} else {
//  return acc;
//}
//}, []);
//console.log(Z);



/*var x = ["javascript", "python", "java", "rugby"];


var r = x.filter(function(e) {
    return e.length > 4;

});
r = r.map(function(e) {
    return e.toUpperCase();
});
//console.log(r);*/

/*var arry4 = [];
for (var i = 0; i <= 2; i++) {
    var user = prompt("Add an item to an array (it must be a number) \n" + "type exit to stop");
    if (!isNaN(user)) {
        arry4.push(user);
    } else if (user === "exit") {

    }
}

console.log(arry4);
var arry2 = [];
do {
    var user = prompt("Add an item to an array it must be a number\n" + "Type exit to stop");
    if (user.toLowerCase() === "exit") {
        break;
    }
    if (!isNaN(user)) {
        arry2.push(user);
    }
} while (true);

if (arry2.length === 0) {
    console.log("empty array");
} else {
    var res = arry2.reduce(function(acc, e) {
        if (e > acc) {
            return e;

        } else {
            return acc;
        }
    }, arry2[0]);
    console.log(res);
}
/*var arry = [];
do {
    var user = parseInt(prompt("Type in the maximum value you want to generate\nEx:if you type in 5,the machine will generate numbers between(1-5)\nThe value entered must be a number"));
} while (isNaN(user));

do {
    var user2 = parseInt(prompt("How many random number do you want to geneerate\nThe number entered must be a value"));
} while (isNaN(user2));

for (var i = 0; i < user2; i++) {
    var x = Math.ceil(Math.random() * user);
    arry.push(x);

}

do {
    var user3 = parseInt(prompt("Enter a number to see if the number is generated"));
} while (isNaN(user3));
if (arry.indexof(user3) === -1) {
    console.log("You loose");
} else {
    console.log("You won");
}*/



/*alert("The maximum no of courses is '10', Minimum is (6 and 8)");
alert("if you have reached the no of courses you be offering kindly click on the button 'Ok!'");
var courses = [];
for (var i = 1; i <= 10; i++) {
    var user = prompt("Enter the courses you offer " + " course" + i);
    if (!isNaN(user)) {
        alert("What you entered is not a course code");
        break;
    } else {
        courses.push(user);
    }

}
console.log(courses);

var unitarry = [];
for (var arry2 = 0; arry2 < courses.length; arry2++) {
    var user3 = parseInt(prompt("Enter the unit of " + courses[arry2]));
    if (isNaN(user3)) {
        alert("You asked to enter a number");
        break;

    } else {
        unitarry.push(user3);

    }

}
console.log(unitarry);
var ans = unitarry.reduce(function(acc, e) {
    return e + acc;
}, 0);
console.log(ans);



var scorearray = [];
for (var arry3 = 0; arry3 < courses.length; arry3++) {
    var user4 = parseInt(prompt("What did you score in" + courses[arry3]));
    if (isNaN(user4)) {
        alert("Kindly enter a number");
        break;

    } else {
        scorearray.push(user4);
    }
}
console.log(scorearray);



var A = 5;
var B = 4;
var C = 3;
var D = 2;
var E = 1;
var F = 0;
var totalarray = [];

if (courses.length === 10) {

    if (scorearray[0] >= 70) {
        totalarray.push(A * unitarry[0]);
    } else if (scorearray[0] < 70 && scorearray[0] >= 60) {
        totalarray.push(B * unitarry[9]);
    } else if (scorearray[0] >= 70) {
        totalarray.push(A * unitarry[0]);
    } else if (scorearray[0] < 70 && scorearray[0] >= 60) {
        totalarray.push(B * unitarry[0]);
    } else if (scorearray[0] > 50 && scorearray[0] < 60) {
        totalarray.push(C * unitarry[0]);
    } else if (scorearray[0] > 45 && scorearray[0] < 50) {
        totalarray.push(D * unitarry[0]);
    } else if (scorearray[0] > 40 && scorearray[0] < 45) {
        totalarray.push(E * unitarry[0]);
    } else {
        totalarray.push(F * unitarry[0]);
    }










    if (scorearray[1] >= 70) {
        totalarray.push(A * unitarry[1]);
    } else if (scorearray[1] >= 60 && scorearry[1] < 70) {
        totalarray.push(B * unitarry[1]);
    } else if (scorearray[1] > 50 && scorearray[1] < 60) {
        totalarray.push(C * unitarry[1]);
    } else if (scorearray[1] > 45 && scorearray[1] < 50) {
        totalarray.push(D * unitarry[1]);
    } else if (scorearray[1] > 40 && scorearray[1] < 45) {
        totalarray.push(E * unitarry[1]);
    } else {
        totalarray.push(F * unitarry[1]);
    }





    if (scorearray[2] >= 70) {
        totalarray.push(A * unitarry[2]);
    } else if (scorearray[2] < 70 && scorearray[2] >= 60) {
        totalarray.push(B * unitarry[2]);
    } else if (scorearray[2] > 50 && scorearray[2] < 60) {
        totalarray.push(C * unitarry[2]);
    } else if (scorearray[2] > 45 && scorearray[2] < 50) {
        totalarray.push(D * unitarry[2]);
    } else if (scorearray[2] > 40 && scorearray[2] < 45) {
        totalarray.push(E * unitarry[2]);
    } else {
        totalarray.push(F * unitarry[2]);
    }


    if (scorearray[3] >= 70) {
        totalarray.push(A * unitarry[3]);
    } else if (scorearray[3] < 70 && scorearray[3] >= 60) {
        totalarray.push(B * unitarry[3]);
    } else if (scorearray[3] > 50 && scorearray[3] < 60) {
        totalarray.push(C * unitarry[3]);
    } else if (scorearray[3] > 45 && scorearray[3] < 50) {
        totalarray.push(D * unitarry[3]);
    } else if (scorearray[3] > 40 && scorearray[3] < 45) {
        totalarray.push(E * unitarry[3]);
    } else {
        totalarray.push(F * unitarry[3]);
    }



    if (scorearray[4] >= 70) {
        totalarray.push(A * unitarry[4]);
    } else if (scorearray[4] < 70 && scorearray[4] >= 60) {
        totalarray.push(B * unitarry[4]);
    } else if (scorearray[4] > 50 && scorearray[4] < 60) {
        totalarray.push(C * unitarry[4]);
    } else if (scorearray[4] > 45 && scorearray[4] < 50) {
        totalarray.push(D * unitarry[4]);
    } else if (scorearray[4] > 40 && scorearray[4] < 45) {
        totalarray.push(E * unitarry[4]);
    } else {
        totalarray.push(F * unitarry[4]);
    }


    if (scorearray[5] >= 70) {
        totalarray.push(A * unitarry[5]);
    } else if (scorearray[5] < 70 && scorearray[5] >= 60) {
        totalarray.push(B * unitarry[5]);
    } else if (scorearray[5] > 50 && scorearray[5] < 60) {
        totalarray.push(C * unitarry[5]);
    } else if (scorearray[5] > 45 && scorearray[5] < 50) {
        totalarray.push(D * unitarry[5]);
    } else if (scorearray[5] > 40 && scorearray[5] < 45) {
        totalarray.push(E * unitarry[5]);
    } else {
        totalarray.push(F * unitarry[5]);
    }


    if (scorearray[6] >= 70) {
        totalarray.push(A * unitarry[6]);
    } else if (scorearray[6] < 70 && scorearray[6] >= 60) {
        totalarray.push(B * unitarry[6]);
    } else if (scorearray[6] > 50 && scorearray[6] < 60) {
        totalarray.push(C * unitarry[6]);
    } else if (scorearray[6] > 45 && scorearray[6] < 50) {
        totalarray.push(D * unitarry[6]);
    } else if (scorearray[6] > 40 && scorearray[6] < 45) {
        totalarray.push(E * unitarry[6]);
    } else {
        totalarray.push(F * unitarry[6]);
    }
    if (scorearray[7] >= 70) {
        totalarray.push(A * unitarry[7]);
    } else if (scorearray[7] < 70 && scorearray[7] >= 60) {
        totalarray.push(B * unitarry[7]);
    } else if (scorearray[7] > 50 && scorearray[7] < 60) {
        totalarray.push(C * unitarry[7]);
    } else if (scorearray[7] > 45 && scorearray[7] < 50) {
        totalarray.push(D * unitarry[7]);
    } else if (scorearray[7] > 40 && scorearray[7] < 45) {
        totalarray.push(E * unitarry[7]);
    } else {
        totalarray.push(F * unitarry[7]);
    }




    if (scorearray[8] >= 70) {
        totalarray.push(A * unitarry[8]);
    } else if (scorearray[8] < 70 && scorearray[8] >= 60) {
        totalarray.push(B * unitarry[8]);
    } else if (scorearray[8] > 50 && scorearray[8] < 60) {
        totalarray.push(C * unitarry[8]);
    } else if (scorearray[8] > 45 && scorearray[8] < 50) {
        totalarray.push(D * unitarry[8]);
    } else if (scorearray[8] > 40 && scorearray[8] < 45) {
        totalarray.push(E * unitarry[8]);
    } else {
        totalarray.push(F * unitarry[8]);
    }

    if (scorearray[1] >= 70) {
        totalarray.push(A * unitarry[1]);
    } else if (scorearray[1] < 70 && scorearray[1] >= 60) {
        totalarray.push(B * rry[9]);
    } else if (scorearray[9] > 50 && scorearray[9] < 60) {
        totalarray.push(C * unitarry[9]);
    } else if (scorearray[9] > 45 && scorearray[9] < 50) {
        totalarray.push(D * unitarry[9]);
    } else if (scorearray[9] > 40 && scorearray[9] < 45) {
        totalarray.push(E * unitarry[9]);
    } else {
        totalarray.push(F * unitarry[9]);
    }
    //console.log(totalarray);
    // var result = totalarray.reduce(function(acc, e) {
    // return acc + e;
    //}, 0);
} else if (courses.length === 8) {

    if (scorearray[0] >= 70) {
        totalarray.push(A * unitarry[0]);
    } else if (scorearray[0] < 70 && scorearray[0] >= 60) {
        totalarray.push(B * unitarry[0]);
    } else if (scorearray[0] >= 70) {
        totalarray.puish(A * unitarry[0]);
    } else if (scorearray[0] < 70 && scorearray[0] >= 60) {
        totalarray.push(B * unitarry[0]);
    } else if (scorearray[0] > 50 && scorearray[0] < 60) {
        totalarray.push(C * unitarry[0]);
    } else if (scorearray[0] > 45 && scorearray[0] < 50) {
        totalarray.push(D * unitarry[0]);
    } else if (scorearray[0] > 40 && scorearray[0] < 45) {
        totalarray.push(E * unitarry[0]);
    } else {
        totalarray.push(F * unitarry[0]);
    }


    if (scorearray[1] >= 70) {
        totalarray.push(A * unitarry[1]);
    } else if (scorearray[1] < 70 && scorearray[1] >= 60) {
        totalarray.push(B * unitarry[1]);
    } else if (scorearray[1] >= 70) {
        totalarray.push(A * unitarry[1]);
    } else if (scorearray[1] < 70 && scorearray[1] >= 60) {
        totalarray.push(B * unitarry[1]);
    } else if (scorearray[1] > 50 && scorearray[1] < 60) {
        totalarray.push(C * unitarry[1]);
    } else if (scorearray[1] > 45 && scorearray[1] < 50) {
        totalarray.push(D * unitarry[1]);
    } else if (scorearray[1] > 40 && scorearray[1] < 45) {
        totalarray.push(E * unitarry[1]);
    } else {
        totalarray.push(F * unitarry[1]);
    }



    if (scorearray[2] >= 70) {
        totalarray.push(A * unitarry[2]);
    } else if (scorearray[2] < 70 && scorearray[2] >= 60) {
        totalarray.push(B * unitarry[2]);
    } else if (scorearray[2] >= 70) {
        totalarray.push(A * unitarry[2]);
    } else if (scorearray[2] < 70 && scorearray[2] >= 60) {
        totalarray.push(B * unitarry[2]);
    } else if (scorearray[2] > 50 && scorearray[2] < 60) {
        totalarray.push(C * unitarry[1]);
    } else if (scorearray[2] > 45 && scorearray[2] < 50) {
        totalarray.push(D * unitarry[2]);
    } else if (scorearray[2] > 40 && scorearray[2] < 45) {
        totalarray.push(E * unitarry[2]);
    } else {
        totalarray.push(F * unitarry[2]);
    }


    if (scorearray[3] >= 70) {
        totalarray.push(A * unitarry[3]);
    } else if (scorearray[3] < 70 && scorearray[3] >= 60) {
        totalarray.push(B * unitarry[3]);
    } else if (scorearray[3] >= 70) {
        totalarray.push(A * unitarry[3]);
    } else if (scorearray[3] < 70 && scorearray[3] >= 60) {
        totalarray.push(B * unitarry[3]);
    } else if (scorearray[3] > 50 && scorearray[3] < 60) {
        totalarray.push(C * unitarry[3]);
    } else if (scorearray[3] > 45 && scorearray[3] < 50) {
        totalarray.push(D * unitarry[3]);
    } else if (scorearray[3] > 45 && scorearray[3] < 50) {
        totalarray.push(E * unitarry[3]);
    } else {
        totalarray.push(F * unitarry[3]);
    }


    if (scorearray[4] >= 70) {
        totalarray.push(A * unitarry[4]);
    } else if (scorearray[4] < 70 && scorearray[4] >= 60) {
        totalarray.push(B * unitarry[4]);
    } else if (scorearray[4] >= 70) {
        totalarray.push(A * unitarry[4]);
    } else if (scorearray[4] < 70 && scorearray[4] >= 60) {
        totalarray.push(B * unitarry[4]);
    } else if (scorearray[4] > 50 && scorearray[4] < 60) {
        totalarray.push(C * unitarry[4]);
    } else if (scorearray[4] > 45 && scorearray[4] < 50) {
        totalarray.push(D * unitarry[4]);
    } else if (scorearray[4] > 40 && scorearray[1] < 45) {
        totalarray.push(E * unitarry[4]);
    } else {
        totalarray.push(F * unitarry[4]);
    }



    if (scorearray[5] >= 70) {
        totalarray.push(A * unitarry[5]);
    } else if (scorearray[5] < 70 && scorearray[5] >= 60) {
        totalarray.push(B * unitarry[5]);
    } else if (scorearray[5] >= 70) {
        totalarray.push(A * unitarry[5]);
    } else if (scorearray[5] < 70 && scorearray[5] >= 60) {
        totalarray.push(B * unitarry[5]);
    } else if (scorearray[5] > 50 && scorearray[5] < 60) {
        totalarray.push(C * unitarry[5]);
    } else if (scorearray[5] > 45 && scorearray[5] < 50) {
        totalarray.push(D * unitarry[5]);
    } else if (scorearray[5] > 40 && scorearray[5] < 45) {
        totalarray.push(E * unitarry[5]);
    } else {
        totalarray.push(F * unitarry[5]);
    }

    if (scorearray[6] >= 70) {
        totalarray.push(A * unitarry[4]);
    } else if (scorearray[6] < 70 && scorearray[6] >= 60) {
        totalarray.push(B * unitarry[6]);
    } else if (scorearray[6] >= 70) {
        totalarray.push(A * unitarry[6]);
    } else if (scorearray[6] < 70 && scorearray[6] >= 60) {
        totalarray.push(B * unitarry[4]);
    } else if (scorearray[6] > 50 && scorearray[6] < 60) {
        totalarray.push(C * unitarry[6]);
    } else if (scorearray[6] > 45 && scorearray[6] < 50) {
        totalarray.push(D * unitarry[6]);
    } else if (scorearray[6] > 40 && scorearray[6] < 45) {
        totalarray.push(E * unitarry[6]);
    } else {
        totalarray.push(F * unitarry[6]);
    }


    if (scorearray[7] >= 70) {
        totalarray.push(A * unitarry[7]);
    } else if (scorearray[7] < 70 && scorearray[7] >= 60) {
        totalarray.push(B * unitarry[7]);
    } else if (scorearray[7] >= 70) {
        totalarray.push(A * unitarry[7]);
    } else if (scorearray[7] < 70 && scorearray[7] >= 60) {
        totalarray.push(B * unitarry[7]);
    } else if (scorearray[1] > 50 && scorearray[7] < 60) {
        totalarray.push(C * unitarry[7]);
    } else if (scorearray[7] > 45 && scorearray[7] < 50) {
        totalarray.push(D * unitarry[7]);
    } else if (scorearray[7] > 40 && scorearray[7] < 45) {
        totalarray.push(E * unitarry[7]);
    } else {
        totalarray.push(F * unitarry[7]);
    }
} else if (courses.length === 6) {

    if (scorearray[0] >= 70) {
        totalarray.push(A * unitarry[0]);
    } else if (scorearray[0] < 70 && scorearray[0] >= 60) {
        totalarray.push(B * unitarry[0]);
    } else if (scorearray[0] >= 70) {
        totalarray.puish(A * unitarry[0]);
    } else if (scorearray[0] < 70 && scorearray[0] >= 60) {
        totalarray.push(B * unitarry[0]);
    } else if (scorearray[0] > 50 && scorearray[0] < 60) {
        totalarray.push(C * unitarry[0]);
    } else if (scorearray[0] > 45 && scorearray[0] < 50) {
        totalarray.push(D * unitarry[0]);
    } else if (scorearray[0] > 40 && scorearray[0] < 45) {
        totalarray.push(E * unitarry[0]);
    } else {
        totalarray.push(F * unitarry[0]);
    }


    if (scorearray[1] >= 70) {
        totalarray.push(A * unitarry[1]);
    } else if (scorearray[1] < 70 && scorearray[1] >= 60) {
        totalarray.push(B * unitarry[1]);
    } else if (scorearray[1] >= 70) {
        totalarray.push(A * unitarry[1]);
    } else if (scorearray[1] < 70 && scorearray[1] >= 60) {
        totalarray.push(B * unitarry[1]);
    } else if (scorearray[1] > 50 && scorearray[1] < 60) {
        totalarray.push(C * unitarry[1]);
    } else if (scorearray[1] > 45 && scorearray[1] < 50) {
        totalarray.push(D * unitarry[1]);
    } else if (scorearray[1] > 40 && scorearray[1] < 45) {
        totalarray.push(E * unitarry[1]);
    } else {
        totalarray.push(F * unitarry[1]);
    }



    if (scorearray[2] >= 70) {
        totalarray.push(A * unitarry[2]);
    } else if (scorearray[2] < 70 && scorearray[2] >= 60) {
        totalarray.push(B * unitarry[2]);
    } else if (scorearray[2] >= 70) {
        totalarray.push(A * unitarry[2]);
    } else if (scorearray[2] < 70 && scorearray[2] >= 60) {
        totalarray.push(B * unitarry[2]);
    } else if (scorearray[2] > 50 && scorearray[2] < 60) {
        totalarray.push(C * unitarry[1]);
    } else if (scorearray[2] > 45 && scorearray[2] < 50) {
        totalarray.push(D * unitarry[2]);
    } else if (scorearray[2] > 40 && scorearray[2] < 45) {
        totalarray.push(E * unitarry[2]);
    } else {
        totalarray.push(F * unitarry[2]);
    }


    if (scorearray[3] >= 70) {
        totalarray.push(A * unitarry[3]);
    } else if (scorearray[3] < 70 && scorearray[3] >= 60) {
        totalarray.push(B * unitarry[3]);
    } else if (scorearray[3] >= 70) {
        totalarray.push(A * unitarry[3]);
    } else if (scorearray[3] < 70 && scorearray[3] >= 60) {
        totalarray.push(B * unitarry[3]);
    } else if (scorearray[3] > 50 && scorearray[3] < 60) {
        totalarray.push(C * unitarry[3]);
    } else if (scorearray[3] > 45 && scorearray[3] < 50) {
        totalarray.push(D * unitarry[3]);
    } else if (scorearray[3] > 45 && scorearray[3] < 50) {
        totalarray.push(E * unitarry[3]);
    } else {
        totalarray.push(F * unitarry[3]);
    }


    if (scorearray[4] >= 70) {
        totalarray.push(A * unitarry[4]);
    } else if (scorearray[4] < 70 && scorearray[4] >= 60) {
        totalarray.push(B * unitarry[4]);
    } else if (scorearray[4] >= 70) {
        totalarray.push(A * unitarry[4]);
    } else if (scorearray[4] < 70 && scorearray[4] >= 60) {
        totalarray.push(B * unitarry[4]);
    } else if (scorearray[4] > 50 && scorearray[4] < 60) {
        totalarray.push(C * unitarry[4]);
    } else if (scorearray[4] > 45 && scorearray[4] < 50) {
        totalarray.push(D * unitarry[4]);
    } else if (scorearray[4] > 40 && scorearray[1] < 45) {
        totalarray.push(E * unitarry[4]);
    } else {
        totalarray.push(F * unitarry[4]);
    }



    if (scorearray[5] >= 70) {
        totalarray.push(A * unitarry[5]);
    } else if (scorearray[5] < 70 && scorearray[5] >= 60) {
        totalarray.push(B * unitarry[5]);
    } else if (scorearray[5] >= 70) {
        totalarray.push(A * unitarry[5]);
    } else if (scorearray[5] < 70 && scorearray[5] >= 60) {
        totalarray.push(B * unitarry[5]);
    } else if (scorearray[5] > 50 && scorearray[5] < 60) {
        totalarray.push(C * unitarry[5]);
    } else if (scorearray[5] > 45 && scorearray[5] < 50) {
        totalarray.push(D * unitarry[5]);
    } else if (scorearray[5] > 40 && scorearray[5] < 45) {
        totalarray.push(E * unitarry[5]);
    } else {
        totalarray.push(F * unitarry[5]);
    }











































}







console.log(totalarray);
var result = totalarray.reduce(function(acc, e) {
    return acc + e;
}, 0);











console.log(result);

var final = result / ans;
alert("Your Grade point " + final);
console.log("You Grade point is " + final);



//Object and its method
/*var info = {
    name: "pelumi",
    email: "dgfgf",
    skills: ["javascript", "Rugby", "python"],
    display: function() {
        this.skills.forEach(function(e) {
            console.log(e);
        });
    }
};
info.display();
info.name = "seyi";
info.height = 20;
var property = "height";
console.log(info[property]);
console.log(info["na me"]);*/




/*var arry = [

    {
        name: "pelumi",
        skills: ["javascript"],
    },

    {
        name: "sekemi",
        class: 200,
        skills: ["Rugby"],
    },

    {
        name: "sile",
        class: 500,
        skills: ["python"],
    },
];


/*var res = arry.filter(function(e) {
    if (e.name.indexOf("pelumi") === -1) {
        return false;
    } else {
        return true;
    }
});
console.log(res);*/

/*var arry = {
    name: "pelumi",
    skills: [1, 2, 4, 5],
    display: function() {
        console.log("Hello world");

    }
};
for (var prop in arry) {
    console.log(arry[prop]);

}*/






/*var friends = [

    {
        name: "Seyi",
        email: "ohjay@gmail.com",
        Department: "Computer science",
        Profilepicture: "img/8.jfif",
        isOnline: false
    },

    {
        name: "Sola",
        email: "oluwadamilare@gmail.com",
        Department: "Mathematical Sciences",
        Profilepicture: "img/5.jpg",
        isOnline: true
    },

    {
        name: "seyi",
        email: "oerferjk@gmail.com",
        Department: "Political sciences",
        Profilepicture: "img/5.jfif",
        isOnline: false
    }

];*/



//Function and it properties and method

/*function display() {
    console.log("Hello world");
}

for (var i = 0; i < 100; i++) {
    display();
}*/


/*var arry = [1, 2, 3, 4];

function display() {
    var res = arry.reduce(function(acc, e) {
        return acc + e;
    }, 0);
    return res;
}
var final = display();
console.log(final);

function info() {
    var ans = arry.filter(function(e) {
        return e > 2;
    });
    return ans;
}
var fite = info();
console.log(fite);*/

/*(var num = [1, 2, 3, 4];
var num2 = [2, 345, 56];

function Sumarry(arry) {
    var res = arry.reduce(function(acc, e) {
        return acc + e;
    }, 0);
    return res;
}
var x = Sumarry(num);
var y = Sumarry(num2);
console.log(x);
console.log(y);*/

/*function name(arry) {
    return arry + 5;
}
var x = name(5);
console.log(x);

var a = "pelumi";

function ans() {
    console.log(a);
}
var f = ans();*/
//var a = 5;

/*function info() {
    var a = "pelumi";
    console.log(a);
}
info();
console.log(a);*/

/*var a = 5;

function name() {
    console.log(a);

}
name();*/
//function Statement
/*var greet = function() {
    var a = 5;
    console.log(a);

};

//Javascript Hoisting
greet2();

function greet2() {
    console.log("Hello world");
}

console.log(a);
var a = "pelumi";


//Default Argument


function argument(a, b) {
    console.log(a);
    console.log(b);
}
argument(5, 2);


/*function ans(a, b) {
    if (a === undefined && b === undefined) {
        return 0;
    } else if (b === undefined) {
        return a;
    } else {
        return a + b;
    }

}
console.log(ans(5, 2));*/

/*function language(lang) {
    if (lang === undefined) {
        lang = "en";
        console.log(lang);
    } else if (lang === "en") {
        console.log("hello");
    }
}
language();



function name(a, b) {
    console.log(arguments);

}
name(1, 2);*/


/*function exercise() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }
    return res;
}
var final = exercise(1, 2, 3, 4, 5);
console.log(final);*/
/*var num = [1, 2, 3];

function name(a) {
    var res = a.reduce(function(acc, e) {
        return acc + e;
    }, 0);
    return res;
}
var s = name(num);
console.log(s);*/


//Function Constructor

/*function MakePerson(name, level, Dept) {
    this.name = name;
    this.level = level;
    this.Dept = Dept;
}
var person = new MakePerson("pelumi", 200, "Computer science");
console.log(person);*/

/*var a = "pelumi";
console.log(this);

function make() {
    console.log(this);
}
var foo = new make();


function name(a, b) {}
console.log(name.length);


var ans = function() {};
console.log(ans  .length);*/


//Call and Applty Method

/*var person1 = {
    name: "pelumi",
    email: "orebayopelumi@gmail.com",
    display: function(a) {
        console.log(a);
        console.log(this.name);
    }
};
var person2 = {
    name: "Joshua",
    email: "olunfunsho@gmail.com",

};
person1.display.apply(person2, [1]);
var res = person1.display.bind(person2);
res(5, 2);*/


/*function problem(arry, item) {
    if (arry.indexOf(item) === -1) {
        console.log("Not in the array");
    } else {
        console.log("It is tne arry");
    }
}
var res = problem([1, 2, 5], 7);*/


/*function ConcatArry() {
    var res = [];
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].forEach(function(e) {
            if (res.indexOf(e) === -1) {
                res.push(e);
            }

        });

    }
    return res;

}
console.log(ConcatArry([1, 2, 3, 4], [4, 5, 7]));*/

/*function Smallestarry(arry) {
    var res = arry.reduce(function(acc, e) {

        if (e > acc) {
            return e;
        } else {
            return acc;
        }
    }, arry[0]);
    return res;
}
var x = Smallestarry([7, 4, 3]);
console.log(x);*/

/*function SmallestArry() {
    var res = Infinity;
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (arguments[i][j] < res) {
                res = arguments[i][j];
            }
        }

    }
    return res;
}


console.log(SmallestArry([1, 3, 5], [1, 2, 5]));
/*function Solve(arry, value) {
    if (value) {
        var res = arry.filter(function(e) {
            return e > value;

        });
        return res;
    } else {
        return arry;
    }

}
var x = Solve([12, 5, 6]);
console.log(x);*/



/*function Solve(arry, value) {
    if (value) {
        var res = arry.filter(function(e) {
            return e < value;

        });
        return res;
    } else {
        return arry;
    }

}
var x = Solve([12, 5, 6, 2], 3, 5);
console.log(x);*/


/*function isfalsy(arg) {
    if (arg) {
        return false;
    } else {
        return true;
    }
}
console.log(isfalsy(5));*/



/*function isfalsy(arg) {
    if (arg) {
        return false;
    } else {
        return true;
    }
}
console.log(isfalsy(1));


function isTruthy(arg) {
    return !isfalsy(arg);
}
console.log(isTruthy(1));


function Acceptance(arg) {
    var res = arg.filter(function(e) {
        return isTruthy(e);

    });
    return res;
}
console.log(Acceptance(["pelumi", 0, 1]));*/


//Function that accepts a callback

/*function callMe(callback) {
    callback();
}
callMe(function(e) {
    console.log("Hello  world");
});*/

/*function Sum(arry, callback) {
    var res = arry.reduce(function(acc, e) {
        return acc + e;
    }, 0);
    callback(res);
}
Sum([1, 2, 3], function(res) {
    console.log(res);
});
*/
/*function name(arry2, callback2) {
    var res = arry2.filter(function(e) {
        return e > 5;
    });
    callback2(res);
}
name([12, 5, 7], function(res) {
    console.log(res);
});*/


//CLOSURE
/*var i = 0;

function CallDog() {
    console.log(i);
    i++;

}
CallDog();


function counter() {
    var i = 0;

    return function() {

        i++;
        console.log(i);
    };
}

var Info = counter();
var Back = counter();*/


//IIFE(Immediately Involked function)

/*(function name(global, p1, p2) {
    console.log(p1);
    console.log(p2);
    var a = "pelumi";
    console.log(a);
    console.log("Hello");
    global.b = "dehjf";
})(window, 5, 2);
console.log(b);*/


//Passing rgument by refrence and by value
//Primitive value is passed by value while non primitive values are passed by reference
/*function info(a) {
    a = 5;
    console.log("from the function");
}
var num = 10;
info(num);
console.log(num);


function aim(obj) {
    obj.name = "Sekemi";
}
var obj = {
    name: "pelumi",
};

aim(obj);
console.log(obj);*/


///CHALLENGE

/*function Challenge(arry, value, callback) {
    var res = arry.filter(function(e) {
        return e > value;
    });
    callback(res);
}
Challenge([1, 3, 4, 9, 25], 7, function(res) {
    console.log(res);
});*/
/*function answer(callback, ceil, arry) {
    var arry1 = [];
    var sum = 0;
    if (!ceil) {
        ceil = 10;
    }
    if (!arry) {
        arry = 10;
    }

    for (var i = 0; i < arry; i++) {
        var res = Math.ceil(Math.random() * ceil);
        arry1.push(res);
        sum += res;
    }
    return {
        sum: sum,
        arry1: arry1,
    };
}
console.log(answer("", 5, 20));*/


//String Method

/*var name = "pelumi";
var ans = name.split("");
ans[0] = "s";
ans = ans.join(",");
console.log(ans);

var x = name.charAt(0);
console.log(x);*/

//Challe4nge under String
/*function answer(string, n) {
    var x = [];
    if (!n) {
        n = 5;
    }
    if (string.length > n) {
        x.push(string);
    }
    return x;

}*/


//console.log(answer("pelumi", 4));


/*function info(string, n) {
    var x = string.trim();
    return x.length > n;
}
console.log(info("  pelumi   ", 4));



function ReverseString(str) {
    var res = str.split("");
    res = res.reverse();
    res = res.join("");
    return res;
}
console.log(ReverseString("pelumi"));

//OR
function Reverseword(string) {
    return string.split("").reverse().join("");
}
console.log(Reverseword("seyi"));


function CapitaliseWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
//console.log(CapitaliseWord('Pelumi'));

function wordrequest(str) {
    var res = str.split(" ");
    res = res.map(function(e) {
        return CapitaliseWord(e);
    });
    return res.join(" ");
}
console.log(wordrequest("hello re you fine"));*/


//my solution
/*function name(str, n) {
    var s = str.trim();
    if (!n) {
        n = 5;
    }
    return s.length > n;
}
console.log(name("   pelumi   "));



function Islonger(str, n) {
    if (!n) {
        n = 5;
    }
    var res = str.split(" ");
    res = res.filter(function(e) {
        return e.length > n;
    });
    res = res.join(",");
    return res;

}
console.log(Islonger("pelumi Are Derf lofff", 5));



function Final(str) {
    var Bigwords = [
        "bigwords1",
        "pe",
        "bigwords2",
    ];

    var res = str.split(" ");
    res = res.map(function(e) {
        if (Bigwords.indexOf(e) !== -1) {
            return "#####";
        } else {
            return e;
        }
    });
    res = res.join(",");
    return res;
}
console.log(Final("bigwords1 pe bigwords2 "));


function limitString(str, n) {
    var res = str.slice(0, n) + ".....";
    return res;
}

console.log(limitString("pelumi Mimisola", 8));*/



//object vs primitive
/*var arry = [1, 2, 4, 5];
var arry2 = [1, 2, 4, 5];
if (15 === "15") {
    console.log(true);
} else {
    console.log(false);
}


console.log(Object.prototype.toString.call(arry));*/


//String method
//var res = String(null);
//console.log(res);//


/*var info = String({
    toString: function() {
        return "pelumi";
    }
});
console.log(info);*/



//Javascript object and prototype

/*var s = {
    name: "pelumi",
    age: 23,
    final: function(a, b) {
        console.log(a);
        console.log(b);
        console.log("Name:" + this.name);
    }
};

var f = {
    name: "seyi",
    age: 18,
};
//s.final.apply(f, [1, 5]);
s.final.call(f, 1, 2);
var res = s.final.bind(f);
res(5, 3);*/



//Prototype Inheritance

/*var obj = {
    name: "pelumi",
    age: 23
};

//console.dir(obj);

obj.__proto__.a = "pelumi";
//console.dir(obj);
//console.dir(obj.hasOwnProperty("name"));


var arry = [1, 2, 3];
//console.dir(arry);
var x = function() {

};
//console.dir(x);

var array = ["pelumi"];
console.dir(array.hasOwnProperty("0"));*/


//Shared Properies and methods

/*var person = function(name, age) {
    this.name = name;
    this.age = age;
    //this.log = function() {
    // console.log(
    //   this.name + " " + this.age
    //);
    //};
};

person.prototype.print = function() {
    console.log(this.name);
    console.log(this.age);

};
person.prototype.a = "Hello";
var person1 = new person("lolade", 23);
var person2 = new person("seyi", 23);
person1.__proto__.a = "Hi";
//person1.__proto__.a = "hi";
//console.log(person1.age);
//person1.log();
person1.print();
console.dir(person2);*/


//INHERITANCE IN JAVASCRIPT

/*var res = function(name, age, field) {
    this.name = name;
    this.age = age;
    this.field = field;
};

res.prototype.print = function() {
    console.log(this.name);
    console.log(this.age);
};
res.prototype.a = "hi";


var Student = function(name, age, field) {
    res.call(this, name, age, field);

};
Student.prototype =
    Object.create(res.prototype);
Student.prototype.logfield = function() {
    console.log(this.field);
};
var person = new res("pelumi", 23, "Agege");
person.__proto__.a = "Hello";

//var p2 = new person.constructor("pelumi", 18, "ikoyi");
var student1 = new Student("seyi", 18, "css");
student1.print();
person.print();
console.dir(student1);*/



//making properties private is refferd to as encapsulation

/*var Encapsulate = function(name, religion, country) {
    this.name = name;
    this.religion = religion;
    this.country = country;
    var score = 0;
    this.printscore = function() {
        console.log(score);
    };
};
var recent = new Encapsulate("pelumi", "Christian", "Nigeria");

//For in loop
function SchoolMaker(name, age, field) {
    this.name = name;
    this.age = age;
    this.field = field;
}
SchoolMaker.prototype.print = function() {
    console.log(this.name);
};
SchoolMaker.prototype.a = "hi";

function Studentmaker(name, age, field) {
    SchoolMaker.call(this, name, age, field);
}
Studentmaker.prototype = Object.create(SchoolMaker.prototype);

var info = new SchoolMaker("pelumi", 45, "agege Stadium");
for (var prop in info) {
    if (info.hasOwnProperty(prop)) {
        console.log(prop);
    }
}*/
//console.dir(info);
var arry = "pelumi";
var s = arry.split("");
s.reverse();


//console.log(s);


//Document Object
var final = document.getElementById("text");
//var s = document.getElementsByClassName("list2");
//console.log(s);

var h1 = document.getElementById("heading");
//var lis = document.getElementsByTagName("li");
//console.log(lis);


/*btn.addEventListener("click", function() {
    for (var i = 0; i < s.length; i++) {
        s[i].style.border = "2px solid red";
        s[i].style.backgroundColor = "purple";
    }
    final.addEventListener("keyup", function() {
        console.log(input.value);
    });*

    //final.style.backgroundColor = "cyan";
    btn.style.backgroundColor = "red";
    //alert("You are welcome ");
    h1.innerText = "Welcome";
    // lis[0].style.backgroundColor = "orange";




});*/
//var body1 = document.getElementsByTagName("body");
/*var body1 = document.getElementsByClassName("all");

var btn = document.getElementById("button");
btn.addEventListener("click", function() {
    h1.innerText = "Welcome";
    //body1[0].style.backgroundColor = "red";
    for (var i = 0; i < body1.length; i++) {
        body1[0].style.backgroundColor = "purple";
    }

});
final.addEventListener("keyup", function() {
    h1.innerText = final.value;
});*/

//var info = document.querySelectorAll(".first-class li");
//console.log(info);
//info[0].style.backgroundColor = "red";
//for (var i = 0; i < info.length; i++) {

//}//
//info[i].style.baddEventListener("click", function() {

//for (var i = 0; i < info.length; i++) {
// info[i].;


//var f = document.querySelector("li");

//e.removeChild(f);

//console.log(e.childNodes);
/*var s = document.querySelector("ul.first-class");

var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerText = "item 5";
    s.append(li);
});*/


/*var final = document.querySelector("ul");
console.log(final.parentElement.nextElementSibling);*/


/*var arry = [
    "item1",
    "item2",
    "item3",
    "Item4"
];
var final = document.getElementById("first-class");
console.log(final);

var btn = document.getElementById("button");
btn.addEventListener("click", function() {
    arry.forEach(function(e) {
        var li = document.createElement("li");
        li.innerText = e;
        final.append(li);
    });

});

//Clases
/*class Car {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    identify() {
        console.log("Name " + this.name);
    }
}
var car = new Car(123, "pelumi");
car.identify();
console.log(car);

function info(age, surname) {
    this.age = age;
    this.surname = surname;
    this.final = function(suffix) {
        console.log(this.age + suffix);
        console.log(this.surname);
    };
}
var ans = new info(23, "Adeogun");
console.log(ans.final("!!!"));*/


var obj = {
    name: "pelumi",
    level: 200,
    display: function(a, b) {
        console.log(this.level);
        console.log(this.name);
        console.log(a + b);

    }

};

var student = {
    name: "shile",
    level: 500
};
//var info = obj.display.call(student, 5, 3);
//var info = obj.display.apply(student, [1, 3]);
var info = obj.display.bind(student);
info(5, 3);


/*class Vehicle {
    constructor() {
        this.type = "car";
    }
    start() {
        console.log("Starting " + this.type);
    }
}
//var info = new Vehicle();
//console.log(info.start(5, 7));
class Car extends Vehicle {
    /* constructor() {
         super();
     }
    start() {
        console.log("in start" + super.start());
    }

}
var car = new Car();
car.start();
import { Car } from './models/car.js';
var car = new Car(23);
console.log(car.id);
*/