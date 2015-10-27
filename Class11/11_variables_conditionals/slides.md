![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Variables Conditionals

---
##Objectives

* Define variables and identify best cases to use them.
* Differentiate between strings, integers and floats.
* Apply conditionals to change the program's control flow.

---

##Agenda

* Reivew jQuery
* Variables
* Data Types
* Conditionals
* Lab Time

---

##Review

* Programming is more about solving problems than coding.
* Pseudocode helps you think through the steps of a problem - like planning a recipe before you cook it.
* Javascript is used for page interactions, applications and more.
* jQuery is javascript - it's called a library.
  * If javascript is an email, jQuery is a text message.
---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##jQuery DOM Selector

---

##Syntax

Why do we use `var` and what are those quotes for? 


But first...

--

##Remeber How Computers Think

They don't.


Buuut, they pretend to by sequentially executing simple instructions. 

--

##For a Computer, There is Only Data

You can read data, modify data, create new data - but anything that isn't data simply does not exist.

--

##Computers Read in Bits

Any piece of information can be reduced to a sequence of zeros and ones. For example, the number 13:


`0 0 0 0 1 1 0 1`

`128 64 32 16 8 4 2 1`


So that's the binary number `00001101`, or `8 + 4 + 1`, which equals `13`.

-- 

##But Nobody Wants to Convert to Bits

To be able to work with such quantities of bits without getting lost, you can separate them into chunks that represent pieces of information. 


In JavaScript, those chunks are called values.

```
var a = 13;

```

---

##Six Types of Values in Javascript

* _Numbers_
* _Strings_
* _Booleans_
* Objects
* Functions
* Undefined Values

--

##Values Aren't Created From Thin Air

If you want to use a value, you need to store it somewhere.

Enter variables. 

```
var a = 2;
var b = a + 1;

console.log(b); // 3
```

---

##If Javascript is a Recipe

Variables are your ingredients.

---

##Variables

* We can tell our program to remember values for us to use later on. 

* The action of saving a value to memory is called assignment.

* The entity we use to store the value is called a variable.

--


##Variables

* The action of getting the value from a variable is called accessing the variable.

* We can store values into variables, and generate new values using existing variables.

```
a = 21;
b = a * 2;

console.log( b ); // 42
```

--

##Variables Declaration

Declaration: ```var age;```

Assignment: ```age = 21;```

Both at the same time: ```var age = 21;```

--

##Variable Re-Assignment

```var name = "Jo";```

```name = Amir;```

Name was Jo and is now Amir.

--

##Variable Conventions

* Variables start with a lower case letter

* If they contain multiple words, subsequent words start with an upper case letter.

    var numberOfStudents = 10;

---

##Variables & Data Types 

What can you store in a variables? Values!

---

##Data Types

The types of different values we support include:
  
* __String__ text
* __int__, __float__ numbers
* __Boolean__ true or false

--

##When to Use Data Types

* __When you need to do math__, you want a number.
* __When you need to print a value on the screen__, you need a string (one or more characters, words, sentences).
* __When you need to make a decision__ in your program, you need a boolean (true or false).

```
"I am a string";
'I am also a string';

42;

true;
false;
```

---


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Score Keeper

---

##Strings

* Stores text
* They are written by enclosing content in quotes

```
"How is the weather today?"

'Warm'
```

--

##Strings

Double vs single quoted strings:

```
'They "purchased" it'

"It's a beautiful day"
```

--

##Strings
Escaping
"They \"purchased\" it"

'It\'s a beautiful day'

---

##Numbers

Represent numerical data

__int__ (whole number):         42

__float__ (decimal):      3.14159265

--

##Numbers

Signed

int:         +6

float:      -8.2

Can perform arithmetic on number data types

---

##Conversion: String To Number

```
var intString = "4";
var intNumber = parseInt(intString, 10);

var floatString = "3.14159";
var floatNumber = parseFloat(floatString);
```

Note:
Why would you need to convert datatypes?

--

##Conversion: Number To String

```
var number = 4;
number.toString(); => "4"
```

__OR__
```
number + ""; => "4"
```

Note:
Why would you need to convert datatypes?

---

##Arithmetic In JavaScript

![](../../img/unit_1/arithmetic.jpg)

---

##Conditionals

![](../../img/unit_1/cfDiagram.png)

---

##Making Decisions

It's either TRUE or FALSE (like booleans)

If you are greater than 18 
you are an adult

  if (age > 18){
    document.write("You are an adult");
  }

---


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Compare That

---


##Comparisons - Equality

Are two things equal?

```
10 === 10 //true
10 === 5 //false
"hi" === "hi" //true
```
---


##Logical Operators

![](../../img/unit_1/logical_operators.png)

---

##Conditional Syntax

```
if(condition is true) {  
  //Do cool stuff
}
```

--

##Conditional Syntax

```
  if(condition is true) {
    //Do cool stuff
  }else{
    //Do other cool stuff
  } 
```

--

##Conditional Syntax

```
  var topic = "JS";
  if (topic == "JS") {
    console.log("You're learning JavaScript");
  } else if(topic == "JavaScript") {
    console.log("You're still learning JavaScript");
  } else {
  console.log("You're learning something else");
}
```

---

##Multiple Conditions

```
if (name == "GA"  && password == "YellowPencil"){
  //Allow access to internet
}
```

---


##The Truth Table

```
if (name == "GA"  && password == "YellowPencil"){
  //Allow access to internet
}
```

--

##The Truth Table

![](../../img/unit_1/and_table.png)

--

##The Truth Table

```
if (day == "Tuesday"  || day == "Thursday"){
  //We have class today
}
```

--

##The Truth Table


![](../../img/unit_1/or_table.png)

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Blackout

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Temp Converter

---

##Homework

* Start coding your final projects - HTML and CSS

--

##Exit Survey 

Class 11 Exit Ticket: http://goo.gl/forms/0pEh2Vyx2Y
