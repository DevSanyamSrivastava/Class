# JavaScript Notes

## Introduction

- **JavaScript** was invented by **Brendan Eich** in **May 1995** while working at **Netscape Communications Corporation**.
- **ECMAScript (ES)** is the official standard and specification for JavaScript.

---

# Real-Life Analogy of Web Design

Think of a website like the human body:

| Technology | Human Body Analogy | Purpose |
|------------|--------------------|---------|
| **HTML** | Skeleton | Provides the structure of the webpage |
| **CSS** | Appearance | Adds styling and design |
| **JavaScript** | Muscles & Nervous System | Adds functionality and interactivity |

---

# Variables

A **variable** is a named storage location in computer memory that stores a value or data.

> Variables are like containers used to store data.

### Example

```javascript
let name = "John";
let age = 25;
```

---

# Data Types

## 1. Primitive Data Types

- `null`
- `number`
- `boolean`
- `bigint`
- `string`
- `symbol`
- `undefined`

## 2. Non-Primitive Data Type

- `object`

---

# Variable Naming Rules

- ✅ Do not use special characters.
- ✅ Do not start a variable name with a number.
- ✅ Do not use reserved keywords.
- ✅ Variable names are case-sensitive.

Example:

```javascript
userName
Username
UserName
```

These are **three different variables**.

- ✅ Do not use spaces.

❌ Invalid:

```javascript
user name
user@name
```

✅ Valid:

```javascript
userName
user_name
userName123
```

---

# JavaScript Reserved Keywords

```text
abstract     arguments     async*        await*
boolean      break         byte          case
catch        char          class*        const*
continue     debugger      default       delete
do           double        else          enum*
eval         export*       extends*      false
final        finally       float         for
function     goto          if            implements
import*      in            instanceof    int
interface    let*          long          native
new          null          package       private
protected    public*       return        short
static*      super*        switch        synchronized
this         throw         throws        transient
true         try           typeof        using*
var          void          volatile      while
with         yield
```

> **Note:** Keywords marked with `*` are introduced in newer versions of ECMAScript.

---

# Task

Create the following object structure in JavaScript.

## Required Keys

- `companyName`
- `industry`
- `department`
  - `name`
  - `location`
  - `manager`
    - `name`
    - `employeeId`
    - `contact`
      - `email`
      - `phone`

## Expected Object Structure

```javascript
const company = {
  companyName: "",
  industry: "",
  department: {
    name: "",
    location: "",
    manager: {
      name: "",
      employeeId: "",
      contact: {
        email: "",
        phone: ""
      }
    }
  }
};
```

 # JavaScript Operators

## What is an Operator?

An **operator** is a symbol that performs an operation on one or more
values (operands).

**Example:**

``` javascript
let a = 10;
let b = 5;

console.log(a + b);
```

-   `+` → Operator
-   `a` and `b` → Operands

------------------------------------------------------------------------

# 1. Arithmetic Operators

Used for mathematical calculations.

  Operator   Description           Example    Output
  ---------- --------------------- ---------- --------
  `+`        Addition              `10 + 5`   `15`
  `-`        Subtraction           `10 - 5`   `5`
  `*`        Multiplication        `10 * 5`   `50`
  `/`        Division              `10 / 5`   `2`
  `%`        Modulus (Remainder)   `10 % 3`   `1`
  `**`       Exponent              `2 ** 3`   `8`



------------------------------------------------------------------------

# 2. Assignment Operators

Used to assign or update values.

  Operator   Example    Result
  ---------- ---------- -------------
  `=`        `x = 10`   Assigns 10
  `+=`       `x += 5`   `x = x + 5`
  `-=`       `x -= 5`   `x = x - 5`
  `*=`       `x *= 2`   `x = x * 2`
  `/=`       `x /= 2`   `x = x / 2`
  `%=`       `x %= 2`   `x = x % 2`





------------------------------------------------------------------------

# 3. Comparison Operators

Used to compare two values.

  Operator   Description                   Example         Output
  ---------- ----------------------------- --------------- ---------
  `==`       Equal (Value only)            `10 == "10"`    `true`
  `===`      Strict Equal (Value & Type)   `10 === "10"`   `false`
  `!=`       Not Equal                     `10 != 5`       `true`
  `!==`      Strict Not Equal              `10 !== "10"`   `true`
  `>`        Greater Than                  `10 > 5`        `true`
  `<`        Less Than                     `10 < 5`        `false`
  `>=`       Greater Than or Equal         `10 >= 10`      `true`
  `<=`       Less Than or Equal            `5 <= 10`       `true`


------------------------------------------------------------------------

# 4. Logical Operators

Used to combine conditions.

  Operator   Description   Example             Output
  ---------- ------------- ------------------- ---------
  `&&`       AND           `true && true`      `true`
  `\|\|`     OR            `true \|\| false`   `true`
  `!`        NOT           `!true`             `false`

``` javascript
let age = 20;

console.log(age > 18 && age < 30);
console.log(age < 18 || age == 20);
console.log(!(age > 18));
```

------------------------------------------------------------------------

# 5. Increment and Decrement Operators

  Operator   Description
  ---------- ---------------------
  `++`       Increase value by 1
  `--`       Decrease value by 1

``` javascript
let a = 5;

a++;
console.log(a);

a--;
console.log(a);
```

**Output**

    6
    5

------------------------------------------------------------------------


# 6. Ternary Operator

Short form of `if...else`.

**Syntax**

``` javascript
condition ? value1 : value2;
```

**Example**

``` javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

**Output**

    Adult

------------------------------------------------------------------------

# Summary

  Operator Type         Operators
  --------------------- ------------------------------------------------
  Arithmetic            `+`, `-`, `*`, `/`, `%`, `**`
  Assignment            `=`, `+=`, `-=`, `*=`, `/=`, `%=`
  Comparison            `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  Logical               `&&`, `||`, `!`
  Increment/Decrement   `++`, `--`

  Ternary               `condition ? value1 : value2`


# DOM Manipulation Basics

---

## 1. getElementById()

Selects a single element using its **id**.

### HTML

```html
<h1 id="title">Hello</h1>
```

### JavaScript

```javascript
const heading = document.getElementById("title");

heading.innerText = "Welcome";
```

---

## 2. getElementsByClassName()

Selects all elements with the same **class**.

### HTML

```html
<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>
```

### JavaScript

```javascript
const para = document.getElementsByClassName("text");

para[0].innerText = "Hello";
```

---

## 3. innerHTML

Used to get or set **HTML content**.

### HTML

```html
<div id="box"></div>
```

### JavaScript

```javascript
document.getElementById("box").innerHTML = "<h1>Hello</h1>";
```

---

## 4. innerText

Used to get or set **visible text**.

### JavaScript

```javascript
document.getElementById("title").innerText = "Welcome";
```

---

## 5. textContent

Gets all text, including hidden text.

### HTML

```html
<div id="box">
    Hello
    <span style="display:none;">World</span>
</div>
```

### JavaScript

```javascript
const box = document.getElementById("box");

console.log(box.textContent);
```

---

## 6. querySelector()

Returns the **first matching element**.

### Select by ID

```html
<h1 id="title">Hello</h1>
```

```javascript
const heading = document.querySelector("#title");

heading.style.color = "red";
```

### Select by Class

```html
<p class="text">Hello</p>
```

```javascript
const para = document.querySelector(".text");

para.style.color = "blue";
```

---

## 7. querySelectorAll()

Returns **all matching elements**.

### HTML

```html
<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>
```

### JavaScript

```javascript
const para = document.querySelectorAll(".text");

for (let i = 0; i < para.length; i++) {
    para[i].style.color = "green";
}
```

---

# Event Listener

`addEventListener()` is used to perform an action when an event occurs (click, input, keypress, etc.).

### Example: Change Background Color

```html
<!DOCTYPE html>
<html>
<body>

<button id="red">Red</button>
<button id="blue">Blue</button>
<button id="green">Green</button>
<button id="purple">Purple</button>

<script>

document.getElementById("red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

document.getElementById("blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});

document.getElementById("green").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
});

document.getElementById("purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
});

</script>

</body>
</html>
```

---

## Syntax

```javascript
element.addEventListener("event", function () {
    // Code to execute
});
```

### Common Events

- `click`
- `dblclick`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`
- `input`
- `change`
- `submit`
- `focus`
- `blur`


# Common DOM Events

---

## 1. click

Runs when an element is clicked.

```html
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked");
});
</script>
```

---

## 2. dblclick

Runs when an element is double-clicked.

```html
<button id="btn">Double Click</button>

<script>
document.getElementById("btn").addEventListener("dblclick", function () {
    alert("Double Clicked");
});
</script>
```

---

## 3. mouseover

Runs when the mouse enters an element.

```html
<div id="box">Hover Me</div>

<script>
document.getElementById("box").addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
});
</script>
```

---

## 4. mouseout

Runs when the mouse leaves an element.

```html
<div id="box">Move Mouse Away</div>

<script>
document.getElementById("box").addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
});
</script>
```

---

## 5. keydown

Runs when a key is pressed.

```html
<input id="name" placeholder="Type">

<script>
document.getElementById("name").addEventListener("keydown", function () {
    console.log("Key Pressed");
});
</script>
```

---

## 6. keyup

Runs when a pressed key is released.

```html
<input id="name" placeholder="Type">

<script>
document.getElementById("name").addEventListener("keyup", function () {
    console.log(this.value);
});
</script>
```

---

## 7. input

Runs whenever the input value changes.

```html
<input id="name" placeholder="Type">

<script>
document.getElementById("name").addEventListener("input", function () {
    console.log(this.value);
});
</script>
```

---

## 8. change

Runs when the value changes and loses focus.

```html
<input id="name">

<script>
document.getElementById("name").addEventListener("change", function () {
    alert(this.value);
});
</script>
```

---

## 9. submit

Runs when a form is submitted.

```html
<form id="form">
    <input>
    <button>Submit</button>
</form>

<script>
document.getElementById("form").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form Submitted");
});
</script>
```

---

## 10. focus

Runs when an input gets focus.

```html
<input id="name">

<script>
document.getElementById("name").addEventListener("focus", function () {
    this.style.backgroundColor = "lightyellow";
});
</script>
```

---

## 11. blur

Runs when an input loses focus.

```html
<input id="name">

<script>
document.getElementById("name").addEventListener("blur", function () {
    this.style.backgroundColor = "white";
});
</script>
```

---

# Most Used Events

| Event | When It Runs |
|--------|--------------|
| `click` | User clicks an element |
| `dblclick` | User double-clicks |
| `mouseover` | Mouse enters element |
| `mouseout` | Mouse leaves element |
| `keydown` | Key is pressed |
| `keyup` | Key is released |
| `input` | Input value changes |
| `change` | Value changes and focus leaves |
| `submit` | Form is submitted |
| `focus` | Input gets focus |
| `blur` | Input loses focus |