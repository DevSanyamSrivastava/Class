# Tailwind CSS vs Bootstrap --- Class Comparison Cheat Sheet

A practical side-by-side reference for developers moving between
**Bootstrap** and **Tailwind CSS**.

> **Important:** Bootstrap uses predefined component and utility
> classes. Tailwind uses small utility classes that are composed
> directly in your HTML/JSX.

------------------------------------------------------------------------

## 1. Container

  Purpose                Bootstrap           Tailwind
  ---------------------- ------------------- ---------------------
  Responsive container   `container`         `container mx-auto`
  Full width             `container-fluid`   `w-full`
  Center horizontally    `mx-auto`           `mx-auto`

### Example

**Bootstrap**

``` html
<div class="container">
    Content
</div>
```

**Tailwind**

``` html
<div class="container mx-auto">
    Content
</div>
```

------------------------------------------------------------------------

## 2. Grid System

Bootstrap has a **12-column grid** using `row` and `col-*`.

  Bootstrap    Tailwind
  ------------ ------------------------------
  `row`        `grid grid-cols-*` or `flex`
  `col-12`     `col-span-12`
  `col-6`      `col-span-6`
  `col-md-6`   `md:col-span-6`
  `col-lg-4`   `lg:col-span-4`
  `g-3`        `gap-3`

### Bootstrap

``` html
<div class="row">
    <div class="col-md-6">Left</div>
    <div class="col-md-6">Right</div>
</div>
```

### Tailwind

``` html
<div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-6">Left</div>
    <div class="col-span-12 md:col-span-6">Right</div>
</div>
```

### Simple equal columns

**Bootstrap**

``` html
<div class="row">
    <div class="col">A</div>
    <div class="col">B</div>
    <div class="col">C</div>
</div>
```

**Tailwind**

``` html
<div class="grid grid-cols-3 gap-4">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

------------------------------------------------------------------------

# 3. Display

  Bootstrap          Tailwind
  ------------------ ----------------
  `d-none`           `hidden`
  `d-block`          `block`
  `d-inline`         `inline`
  `d-inline-block`   `inline-block`
  `d-flex`           `flex`
  `d-inline-flex`    `inline-flex`
  `d-grid`           `grid`

### Responsive display

  Bootstrap             Tailwind
  --------------------- -------------------
  `d-none d-md-block`   `hidden md:block`
  `d-block d-md-none`   `block md:hidden`
  `d-flex d-lg-none`    `flex lg:hidden`

------------------------------------------------------------------------

# 4. Flexbox

  Bootstrap                   Tailwind
  --------------------------- -------------------
  `d-flex`                    `flex`
  `flex-row`                  `flex-row`
  `flex-column`               `flex-col`
  `justify-content-start`     `justify-start`
  `justify-content-center`    `justify-center`
  `justify-content-end`       `justify-end`
  `justify-content-between`   `justify-between`
  `justify-content-around`    `justify-around`
  `justify-content-evenly`    `justify-evenly`
  `align-items-start`         `items-start`
  `align-items-center`        `items-center`
  `align-items-end`           `items-end`
  `flex-wrap`                 `flex-wrap`
  `flex-nowrap`               `flex-nowrap`
  `gap-*`                     `gap-*`

### Example

**Bootstrap**

``` html
<div class="d-flex justify-content-between align-items-center">
    ...
</div>
```

**Tailwind**

``` html
<div class="flex justify-between items-center">
    ...
</div>
```

------------------------------------------------------------------------

# 5. Spacing --- Margin

Bootstrap uses `m`, `mt`, `mb`, `ms`, `me`, `mx`, `my`.

Tailwind uses the same general idea but has more granular utility
classes.

  Bootstrap   Tailwind
  ----------- -----------
  `m-0`       `m-0`
  `m-1`       `m-1`
  `m-2`       `m-2`
  `m-3`       `m-3`
  `m-4`       `m-4`
  `mt-3`      `mt-3`
  `mb-3`      `mb-3`
  `ms-3`      `ms-3`
  `me-3`      `me-3`
  `mx-auto`   `mx-auto`
  `my-3`      `my-3`

### Important difference

The numbers do **not always represent the same pixel value**.

For example:

``` text
Bootstrap:
p-3 = 1rem

Tailwind:
p-3 = 0.75rem
```

So don't blindly replace spacing numbers one-to-one.

------------------------------------------------------------------------

# 6. Padding

  Bootstrap   Tailwind
  ----------- ----------
  `p-0`       `p-0`
  `p-1`       `p-1`
  `p-2`       `p-2`
  `p-3`       `p-3`
  `p-4`       `p-4`
  `pt-3`      `pt-3`
  `pb-3`      `pb-3`
  `ps-3`      `ps-3`
  `pe-3`      `pe-3`
  `px-3`      `px-3`
  `py-3`      `py-3`

Again, check the actual spacing scale before assuming the same size.

------------------------------------------------------------------------

# 7. Width

  Bootstrap   Tailwind
  ----------- --------------
  `w-25`      `w-1/4`
  `w-50`      `w-1/2`
  `w-75`      `w-3/4`
  `w-100`     `w-full`
  `mw-100`    `max-w-full`

### Tailwind gives more options

``` html
w-full
w-1/2
w-1/3
w-1/4
w-screen
w-fit
w-auto
w-[500px]
```

------------------------------------------------------------------------

# 8. Height

  Bootstrap   Tailwind
  ----------- ----------
  `h-25`      `h-1/4`
  `h-50`      `h-1/2`
  `h-75`      `h-3/4`
  `h-100`     `h-full`

Tailwind:

``` html
h-auto
h-full
h-screen
h-fit
h-64
h-[500px]
```

------------------------------------------------------------------------

# 9. Text Alignment

  Bootstrap       Tailwind
  --------------- ---------------
  `text-start`    `text-left`
  `text-center`   `text-center`
  `text-end`      `text-right`

Responsive:

  Bootstrap          Tailwind
  ------------------ ------------------
  `text-md-center`   `md:text-center`
  `text-lg-end`      `lg:text-right`

------------------------------------------------------------------------

# 10. Font Size

  Bootstrap   Tailwind
  ----------- -------------
  `fs-1`      `text-4xl`
  `fs-2`      `text-3xl`
  `fs-3`      `text-2xl`
  `fs-4`      `text-xl`
  `fs-5`      `text-lg`
  `fs-6`      `text-base`

> These are approximate mappings, not exact pixel equivalents.

Tailwind also supports arbitrary values:

``` html
text-[18px]
text-[1.2rem]
```

------------------------------------------------------------------------

# 11. Font Weight

  Bootstrap       Tailwind
  --------------- ---------------------------------
  `fw-light`      `font-light`
  `fw-normal`     `font-normal`
  `fw-medium`     `font-medium`
  `fw-semibold`   `font-semibold`
  `fw-bold`       `font-bold`
  `fw-bolder`     `font-extrabold` / `font-black`

------------------------------------------------------------------------

# 12. Text Color

Bootstrap:

``` html
text-primary
text-secondary
text-success
text-danger
text-warning
text-info
text-dark
text-light
text-body
text-muted
```

Tailwind:

``` html
text-blue-600
text-gray-500
text-green-600
text-red-600
text-yellow-500
text-cyan-500
text-gray-900
text-gray-100
```

### Important

Bootstrap:

``` html
text-primary
```

Tailwind:

``` html
text-blue-600
```

Tailwind normally requires choosing a specific color shade.

With a design-token setup, prefer semantic classes such as:

``` html
text-primary
bg-primary
border-primary
```

through your own CSS variables/theme configuration instead of scattering
hardcoded colors throughout the application.

------------------------------------------------------------------------

# 13. Background Color

  Bootstrap        Tailwind
  ---------------- -----------------
  `bg-primary`     `bg-blue-600`
  `bg-secondary`   `bg-gray-600`
  `bg-success`     `bg-green-600`
  `bg-danger`      `bg-red-600`
  `bg-warning`     `bg-yellow-500`
  `bg-info`        `bg-cyan-500`
  `bg-dark`        `bg-gray-900`
  `bg-light`       `bg-gray-100`
  `bg-white`       `bg-white`

------------------------------------------------------------------------

# 14. Border

  Bootstrap          Tailwind
  ------------------ -------------------
  `border`           `border`
  `border-0`         `border-0`
  `border-top`       `border-t`
  `border-bottom`    `border-b`
  `border-start`     `border-s`
  `border-end`       `border-e`
  `border-primary`   `border-blue-600`
  `border-danger`    `border-red-600`

------------------------------------------------------------------------

# 15. Border Radius

  Bootstrap          Tailwind
  ------------------ ----------------
  `rounded-0`        `rounded-none`
  `rounded-1`        `rounded-sm`
  `rounded-2`        `rounded`
  `rounded-3`        `rounded-lg`
  `rounded-circle`   `rounded-full`
  `rounded-pill`     `rounded-full`

Tailwind:

``` html
rounded-none
rounded-sm
rounded
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-full
```

------------------------------------------------------------------------

# 16. Shadow

  Bootstrap       Tailwind
  --------------- ---------------
  `shadow-none`   `shadow-none`
  `shadow-sm`     `shadow-sm`
  `shadow`        `shadow`
  `shadow-lg`     `shadow-lg`

Tailwind also provides:

``` html
shadow-xl
shadow-2xl
```

------------------------------------------------------------------------

# 17. Position

  Bootstrap             Tailwind
  --------------------- ------------
  `position-static`     `static`
  `position-relative`   `relative`
  `position-absolute`   `absolute`
  `position-fixed`      `fixed`
  `position-sticky`     `sticky`

### Top / bottom / left / right

Bootstrap:

``` html
top-0
bottom-0
start-0
end-0
```

Tailwind:

``` html
top-0
bottom-0
left-0
right-0
inset-0
```

------------------------------------------------------------------------

# 18. Z-Index

  Bootstrap   Tailwind
  ----------- ----------
  `z-0`       `z-0`
  `z-1`       `z-10`
  `z-2`       `z-20`
  `z-3`       `z-30`

Tailwind also supports:

``` html
z-40
z-50
z-[9999]
```

------------------------------------------------------------------------

# 19. Overflow

  Bootstrap            Tailwind
  -------------------- --------------------
  `overflow-auto`      `overflow-auto`
  `overflow-hidden`    `overflow-hidden`
  `overflow-visible`   `overflow-visible`
  `overflow-scroll`    `overflow-scroll`

Directional:

``` html
overflow-x-auto
overflow-y-auto
```

------------------------------------------------------------------------

# 20. Visibility

  Bootstrap     Tailwind
  ------------- -------------
  `visible`     `visible`
  `invisible`   `invisible`
  `d-none`      `hidden`

### Important: `hidden` vs `invisible`

``` html
hidden
```

means:

``` css
display: none;
```

The element does not occupy layout space.

``` html
invisible
```

means:

``` css
visibility: hidden;
```

The element remains in the layout but is not visible.

------------------------------------------------------------------------

# 21. Cursor

Bootstrap:

``` html
<!-- Bootstrap does not have the same complete cursor utility system by default -->
```

Tailwind:

``` html
cursor-pointer
cursor-default
cursor-not-allowed
cursor-wait
cursor-text
cursor-move
```

------------------------------------------------------------------------

# 22. Opacity

  Bootstrap       Tailwind
  --------------- ---------------
  `opacity-25`    `opacity-25`
  `opacity-50`    `opacity-50`
  `opacity-75`    `opacity-75`
  `opacity-100`   `opacity-100`

Tailwind also supports arbitrary values:

``` html
opacity-[0.35]
```

------------------------------------------------------------------------

# 23. Buttons

### Bootstrap

``` html
<button class="btn btn-primary">
    Save
</button>
```

### Tailwind

``` html
<button class="px-4 py-2 rounded-md bg-blue-600 text-white">
    Save
</button>
```

### Key difference

Bootstrap:

``` html
btn btn-primary
```

is a **component class**.

Tailwind:

``` html
px-4 py-2 rounded-md bg-blue-600 text-white
```

is a collection of **utility classes**.

------------------------------------------------------------------------

# 24. Button Sizes

  Bootstrap   Tailwind
  ----------- -----------------------
  `btn-sm`    `px-3 py-1.5 text-sm`
  Default     `px-4 py-2`
  `btn-lg`    `px-5 py-3 text-lg`

Tailwind doesn't have a universal `btn` class unless you create one
yourself.

------------------------------------------------------------------------

# 25. Alerts

### Bootstrap

``` html
<div class="alert alert-success">
    Successfully saved!
</div>
```

### Tailwind

``` html
<div class="rounded-md bg-green-100 p-4 text-green-800">
    Successfully saved!
</div>
```

Bootstrap provides the component.

Tailwind provides the building blocks.

------------------------------------------------------------------------

# 26. Cards

### Bootstrap

``` html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Student</h5>
        <p class="card-text">Student information.</p>
    </div>
</div>
```

### Tailwind

``` html
<div class="rounded-lg border bg-white p-6 shadow-sm">
    <h5 class="text-xl font-semibold">Student</h5>
    <p class="mt-2 text-gray-600">
        Student information.
    </p>
</div>
```

------------------------------------------------------------------------

# 27. Forms

  Bootstrap            Tailwind
  -------------------- -----------------------------
  `form-control`       Custom utility combination
  `form-label`         `block text-sm font-medium`
  `form-select`        Custom utility combination
  `form-check`         Custom utility combination
  `form-check-input`   Custom utility combination

### Bootstrap

``` html
<label class="form-label">Name</label>
<input class="form-control" type="text">
```

### Tailwind

``` html
<label class="mb-1 block text-sm font-medium">
    Name
</label>

<input
    type="text"
    class="w-full rounded-md border px-3 py-2"
/>
```

------------------------------------------------------------------------

# 28. Responsive Breakpoints

Bootstrap:

  Breakpoint    Bootstrap
  ------------- -----------
  Extra small   `<576px`
  Small         `sm`
  Medium        `md`
  Large         `lg`
  Extra large   `xl`
  XXL           `xxl`

Tailwind default breakpoints:

  Breakpoint    Tailwind
  ------------- ----------
  Small         `sm`
  Medium        `md`
  Large         `lg`
  Extra large   `xl`
  2XL           `2xl`

### Example

Bootstrap:

``` html
<div class="d-none d-md-block">
    Desktop/tablet content
</div>
```

Tailwind:

``` html
<div class="hidden md:block">
    Desktop/tablet content
</div>
```

------------------------------------------------------------------------

# 29. Responsive Width

Bootstrap:

``` html
<div class="col-12 col-md-6 col-lg-4">
```

Tailwind:

``` html
<div class="w-full md:w-1/2 lg:w-1/3">
```

Or with CSS Grid:

``` html
<div class="col-span-12 md:col-span-6 lg:col-span-4">
```

------------------------------------------------------------------------

# 30. Flex Grow / Shrink

  Bootstrap         Tailwind
  ----------------- ------------
  `flex-grow-1`     `grow`
  `flex-shrink-1`   `shrink`
  `flex-grow-0`     `grow-0`
  `flex-shrink-0`   `shrink-0`

------------------------------------------------------------------------

# 31. Order

  Bootstrap       Tailwind
  --------------- ---------------
  `order-1`       `order-1`
  `order-2`       `order-2`
  `order-first`   `order-first`
  `order-last`    `order-last`

Responsive:

``` html
md:order-first
lg:order-last
```

------------------------------------------------------------------------

# 32. Gap

Bootstrap:

``` html
gap-1
gap-2
gap-3
gap-4
gap-5
```

Tailwind:

``` html
gap-1
gap-2
gap-3
gap-4
gap-5
```

Directional:

``` html
gap-x-4
gap-y-2
```

------------------------------------------------------------------------

# 33. Text Decoration

  Bootstrap                        Tailwind
  -------------------------------- ----------------
  `text-decoration-none`           `no-underline`
  `text-decoration-underline`      `underline`
  `text-decoration-line-through`   `line-through`

------------------------------------------------------------------------

# 34. Text Transform

  Bootstrap           Tailwind
  ------------------- --------------
  `text-lowercase`    `lowercase`
  `text-uppercase`    `uppercase`
  `text-capitalize`   `capitalize`

------------------------------------------------------------------------

# 35. Font Style

  Bootstrap      Tailwind
  -------------- --------------
  `fst-italic`   `italic`
  `fst-normal`   `not-italic`

------------------------------------------------------------------------

# 36. User Select

Bootstrap:

``` html
user-select-none
user-select-auto
```

Tailwind:

``` html
select-none
select-text
select-auto
select-all
```

------------------------------------------------------------------------

# 37. Object Fit

Bootstrap:

``` html
<img class="object-fit-cover">
```

Tailwind:

``` html
<img class="object-cover">
```

  Purpose      Tailwind
  ------------ ---------------------
  Cover        `object-cover`
  Contain      `object-contain`
  Fill         `object-fill`
  None         `object-none`
  Scale down   `object-scale-down`

------------------------------------------------------------------------

# 38. Image Width

Bootstrap:

``` html
<img class="img-fluid">
```

Tailwind:

``` html
<img class="h-auto max-w-full">
```

------------------------------------------------------------------------

# 39. List Styles

Bootstrap:

``` html
list-unstyled
list-inline
```

Tailwind:

``` html
list-none
list-disc
list-decimal
```

------------------------------------------------------------------------

# 40. Common Utility Conversion Cheat Sheet

  Bootstrap                Tailwind
  ------------------------ -------------------
  `d-none`                 `hidden`
  `d-block`                `block`
  `d-flex`                 `flex`
  `d-grid`                 `grid`
  `position-relative`      `relative`
  `position-absolute`      `absolute`
  `position-fixed`         `fixed`
  `position-sticky`        `sticky`
  `text-start`             `text-left`
  `text-center`            `text-center`
  `text-end`               `text-right`
  `fw-bold`                `font-bold`
  `fst-italic`             `italic`
  `text-uppercase`         `uppercase`
  `text-decoration-none`   `no-underline`
  `rounded`                `rounded`
  `rounded-circle`         `rounded-full`
  `shadow`                 `shadow`
  `overflow-hidden`        `overflow-hidden`
  `visible`                `visible`
  `invisible`              `invisible`
  `opacity-50`             `opacity-50`
  `flex-grow-1`            `grow`
  `flex-shrink-0`          `shrink-0`
  `gap-3`                  `gap-3`
  `mx-auto`                `mx-auto`
  `w-100`                  `w-full`
  `h-100`                  `h-full`

------------------------------------------------------------------------

# 41. Bootstrap Components vs Tailwind Utilities

This is the biggest conceptual difference.

## Bootstrap

Bootstrap gives you ready-made components:

``` html
btn
card
alert
navbar
modal
dropdown
accordion
carousel
badge
pagination
```

Example:

``` html
<button class="btn btn-primary">
    Add Student
</button>
```

You get styling by using Bootstrap's predefined component classes.

## Tailwind

Tailwind gives you utilities:

``` html
px-4
py-2
rounded-md
bg-primary
text-white
font-medium
shadow-sm
```

Example:

``` html
<button class="rounded-md bg-primary px-4 py-2 font-medium text-white shadow-sm">
    Add Student
</button>
```

You compose the design yourself.

------------------------------------------------------------------------

# 42. Bootstrap `row` / `col` vs Tailwind Grid

### Bootstrap

``` html
<div class="row g-4">
    <div class="col-md-4">A</div>
    <div class="col-md-4">B</div>
    <div class="col-md-4">C</div>
</div>
```

### Tailwind

``` html
<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

This Tailwind version is often easier to read because the responsive
behavior is visible directly in the class list.

------------------------------------------------------------------------

# 43. Bootstrap `d-flex` Patterns vs Tailwind

### Center everything

Bootstrap:

``` html
<div class="d-flex justify-content-center align-items-center">
```

Tailwind:

``` html
<div class="flex items-center justify-center">
```

### Space between

Bootstrap:

``` html
<div class="d-flex justify-content-between">
```

Tailwind:

``` html
<div class="flex justify-between">
```

### Vertical layout

Bootstrap:

``` html
<div class="d-flex flex-column">
```

Tailwind:

``` html
<div class="flex flex-col">
```

### Wrap

Bootstrap:

``` html
<div class="d-flex flex-wrap">
```

Tailwind:

``` html
<div class="flex flex-wrap">
```

------------------------------------------------------------------------

# 44. Important Tailwind Pattern

Tailwind responsive classes are **mobile-first**.

``` html
text-sm md:text-base lg:text-lg
```

Means:

``` text
Mobile → small text
Tablet → normal text
Desktop → large text
```

Similarly:

``` html
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

Means:

``` text
Mobile  → 1 column
Tablet  → 2 columns
Desktop → 4 columns
```

------------------------------------------------------------------------

# 45. Quick Mental Conversion Rules

When moving from Bootstrap to Tailwind, remember:

``` text
Bootstrap                  Tailwind

d-*                        display utilities
text-*                     text utilities
bg-*                       background utilities
m-*                        margin
p-*                        padding
w-*                        width
h-*                        height
border-*                   border utilities
rounded-*                  border radius
shadow-*                   shadow
position-*                 position
justify-content-*          justify-*
align-items-*              items-*
flex-column                flex-col
fw-*                       font-*
fs-*                       text-*
```

The syntax is often similar, but **the scales and available values are
not always identical**.

------------------------------------------------------------------------

# 46. Bootstrap → Tailwind Thinking

Instead of thinking:

> "What is the Tailwind equivalent of this Bootstrap component?"

Think:

> "What CSS properties does this Bootstrap class represent?"

For example:

``` html
<div class="d-flex justify-content-center align-items-center p-3 rounded shadow">
```

Break it down:

``` text
d-flex                 → flex
justify-content-center → justify-center
align-items-center     → items-center
p-3                    → p-3
rounded                → rounded
shadow                 → shadow
```

Result:

``` html
<div class="flex items-center justify-center p-3 rounded shadow">
```

This way of thinking makes Tailwind much easier to learn.

------------------------------------------------------------------------

# 47. Most Important Classes to Learn First

If you already know Bootstrap, focus on these Tailwind utilities first:

### Layout

``` text
container
block
inline-block
flex
grid
hidden
```

### Flexbox

``` text
flex-row
flex-col
items-center
items-start
items-end
justify-center
justify-between
justify-start
justify-end
flex-wrap
gap-*
```

### Spacing

``` text
m-*
mt-*
mb-*
mx-*
my-*

p-*
pt-*
pb-*
px-*
py-*
```

### Sizing

``` text
w-full
w-1/2
w-1/3
h-full
h-screen
max-w-*
```

### Typography

``` text
text-sm
text-base
text-lg
text-xl
font-normal
font-medium
font-semibold
font-bold
text-left
text-center
text-right
```

### Styling

``` text
bg-*
text-*
border
rounded
shadow
opacity-*
```

### Responsive

``` text
sm:*
md:*
lg:*
xl:*
2xl:*
```

------------------------------------------------------------------------

# 48. Final Summary

  --------------------------------------------------------------------------
  Concept                 Bootstrap               Tailwind
  ----------------------- ----------------------- --------------------------
  Philosophy              Components + utilities  Utility-first

  Grid                    `row` + `col-*`         `grid` + `grid-cols-*`

  Flex                    `d-flex`                `flex`

  Display none            `d-none`                `hidden`

  Margin                  `m-*`                   `m-*`

  Padding                 `p-*`                   `p-*`

  Width                   `w-*`                   `w-*`

  Height                  `h-*`                   `h-*`

  Font size               `fs-*`                  `text-*`

  Font weight             `fw-*`                  `font-*`

  Text alignment          `text-*`                `text-left/center/right`

  Background              `bg-*`                  `bg-*`

  Border radius           `rounded-*`             `rounded-*`

  Shadow                  `shadow-*`              `shadow-*`

  Responsive              `md:*`                  `md:*`

  Components              Built-in                Usually composed/custom

  Customization           Override/custom CSS     Utility
                                                  composition/config/theme
  --------------------------------------------------------------------------

## The main idea

**Bootstrap:**

``` html
class="btn btn-primary"
```

**Tailwind:**

``` html
class="px-4 py-2 rounded-md bg-primary text-white"
```

Bootstrap says:

> **Use this predefined component.**

Tailwind says:

> **Compose the component from utilities.**
