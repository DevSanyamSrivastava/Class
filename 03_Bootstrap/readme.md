Bootstrap
        Bootstrap is the frame-work of CSS

# Bootstrap Layout: `container`, `container-fluid`, `row`, and `col-*`

## 1. `.container`

A **fixed-width responsive container**.

-   Has left and right padding.





### Width Behavior

  Screen Size   Container Width
  ------------- -----------------
  Mobile        100%
  ≥576px        540px
  ≥768px        720px
  ≥992px        960px
  ≥1200px       1140px
  ≥1400px       1320px

------------------------------------------------------------------------

## 2. `.container-fluid`

A **full-width container**.

-   Takes **100% width** on every device.
-   Stretches from the left edge to the right edge of the screen.

### Example

``` html
<div class="container-fluid bg-warning">
    Full Width Content
</div>
```

### Difference

    .container
    -------------------------
            Content
    -------------------------

    .container-fluid
    ----------------------------------------------
                   Content
    ----------------------------------------------

------------------------------------------------------------------------

## 3. `.row`

A row is used to **arrange columns horizontally**.

-   Must be placed inside a `.container` or `.container-fluid`.
-   Uses **Flexbox**.
-   All `.col-*` elements should be inside a `.row`.

### Structure

``` html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
    </div>
</div>
```

Hierarchy:

    Container
        ↓
      Row
        ↓
    Columns

------------------------------------------------------------------------

## 4. `.col`

Bootstrap divides every row into **12 equal columns**.

Example:

``` html
<div class="col-6"></div>
<div class="col-6"></div>
```

    6 + 6 = 12

Another example:

``` html
<div class="col-4"></div>
<div class="col-4"></div>
<div class="col-4"></div>
```

    4 + 4 + 4 = 12

------------------------------------------------------------------------

## 5. Bootstrap Breakpoints

  Class       Minimum Screen Width
  ----------- -----------------------
  `col`       Extra Small (default)
  `col-sm`    576px
  `col-md`    768px
  `col-lg`    992px
  `col-xl`    1200px
  `col-xxl`   1400px

------------------------------------------------------------------------

## 6. `.col-sm-*`

Applies from **576px and above**.

Below 576px, columns stack vertically.

``` html
<div class="row">
    <div class="col-sm-6 bg-danger">Left</div>
    <div class="col-sm-6 bg-success">Right</div>
</div>
```

Output:

    Mobile (<576px)

    Left
    Right

    Desktop (≥576px)

    Left     Right

------------------------------------------------------------------------

## 7. `.col-md-*`

Applies from **768px and above**.

``` html
<div class="row">
    <div class="col-md-4">A</div>
    <div class="col-md-4">B</div>
    <div class="col-md-4">C</div>
</div>
```

Output:

    Mobile

    A
    B
    C

    Tablet/Desktop

    A | B | C

------------------------------------------------------------------------

## 8. `.col-lg-*`

Applies from **992px and above**.

``` html
<div class="row">
    <div class="col-lg-3">1</div>
    <div class="col-lg-3">2</div>
    <div class="col-lg-3">3</div>
    <div class="col-lg-3">4</div>
</div>
```

Output:

    Mobile

    1
    2
    3
    4

    Desktop

    1 | 2 | 3 | 4

------------------------------------------------------------------------

## 9. Responsive Example

``` html
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 bg-danger">Box 1</div>
        <div class="col-sm-12 col-md-6 col-lg-3 bg-primary">Box 2</div>
        <div class="col-sm-12 col-md-6 col-lg-3 bg-success">Box 3</div>
        <div class="col-sm-12 col-md-6 col-lg-3 bg-warning">Box 4</div>
    </div>
</div>
```

Output:

### Mobile

    Box1
    Box2
    Box3
    Box4

### Tablet

    Box1   Box2
    Box3   Box4

### Desktop

    Box1   Box2   Box3   Box4

------------------------------------------------------------------------

## 10. Grid Rule

Always follow this structure:

``` html
<div class="container">
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4"></div>
    </div>
</div>
```

Hierarchy:

    Container
       ↓
     Row
       ↓
    Columns

> **Note:** Never place `.col-*` directly inside a `.container` without
> a `.row`. The `.row` provides the proper Flexbox layout and spacing.

navbar
header

footer
