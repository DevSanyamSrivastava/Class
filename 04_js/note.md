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
