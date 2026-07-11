CSS-->Cascading style  sheet
1.)Inline CSS
    This is use inside html tags.
2.)Internal CSS
        This type CSS we use into style tag.
3.)Externel CSS
    We make a seprate file for it then embedd using link tag


Selecter In CSS
    1.)Universal slecter (*)
    2.)Class slecter (.)
    3.)ID Selecter (#)
    4.)Element Selecter ()


Casing in Programming--
1. camelCase -->fontSize
2. snake_case--->font_size
3. kebab-case-->font-size
4. PascalCase --->FontSize

Priority Wise External CSS---->Internal CSS---->Inline CSS

color

   /* margin-top:10px ;
          margin-bottom: 20px;
          margin-right: 5px;
          margin-left: 10px; */

          or we use shorthand property
          margin: 10px 40px 30px 20px;
          order-->Top,Right, Bottom, Left
          margin: 10px 40px;
          order:(Top, bottom),(Left, Right)
          margin:10px;
          order: All four dimension 
background-color

height
width
margin
padding
border-width
border-style
border-color

Shorthand
 border:4px dashed red;
 border-width, border-style, border-color

 border-radius

 Dropdown radio
 cheackbox




 # Important CSS Background Properties

## 1. background-color

Used to set the background color of an element.

```css
div{
    background-color: yellow;
}
```

---

## 2. background-image

Used to set an image as the background.

```css
div{
    background-image: url("image.jpg");
}
```

---

## 3. background-repeat

Controls whether the background image repeats.

```css
div{
    background-repeat: no-repeat;
}
```

Values:

* repeat
* no-repeat
* repeat-x
* repeat-y

---

## 4. background-position

Sets the position of the background image.

```css
div{
    background-position: center;
}
```

Values:

* left
* right
* top
* bottom
* center

---

## 5. background-size

Controls the size of the background image.

```css
div{
    background-size: cover;
}
```

Values:

* auto
* cover
* contain

---

# Background Shorthand Property

Instead of writing multiple properties separately:

```css
div{
    background-color: lightblue;
    background-image: url("bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
```

We can write:

```css
div{
    background: lightblue url("bg.jpg") no-repeat center;
    background-size: cover;
}
```

Or:

```css
div{
    background: lightblue url("bg.jpg") no-repeat center/cover;
}
```

# Most Common Example

```css
.hero{
    background: url("banner.jpg") no-repeat center/cover;
    height: 500px;
}
```
# Important CSS Font Properties

## 1. font-family

Used to change the font style.

```css
p{
    font-family: Arial, sans-serif;
}
```

Example Fonts:

* Arial
* Times New Roman
* Verdana
* Georgia
* Courier New

---

## 2. font-size

Used to set the size of text.

```css
p{
    font-size: 20px;
}
```

Common Units:

* px
* em
* rem
* %

---

## 3. font-weight

Used to make text bold or control thickness.

```css
p{
    font-weight: bold;
}
```

Values:

```css
font-weight: normal;
font-weight: bold;
font-weight: 100;
font-weight: 400;
font-weight: 700;
```

---

## 4. font-style

Used to make text italic.

```css
p{
    font-style: italic;
}
```

Values:

* normal
* italic
* oblique

---

## 5. font (Shorthand Property)

Combines multiple font properties in one line.

```css
p{
    font: italic bold 20px Arial, sans-serif;
}
```

Syntax:

```css
font: font-style font-weight font-size font-family;
```

---

# Complete Example

```css
h1{
    font-family: Arial, sans-serif;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
}
```
# Important CSS Font Properties

## 1. font-family

Used to change the font style.

```css
p{
    font-family: Arial, sans-serif;
}
```

Example Fonts:

* Arial
* Times New Roman
* Verdana
* Georgia
* Courier New

---

## 2. font-size

Used to set the size of text.

```css
p{
    font-size: 20px;
}
```

Common Units:

* px (pixels): Fixed unit. 1px equals one screen pixel. It does not change based on parent or screen size.
* em: Relative unit. It is based on the font size of the parent element. For example, if parent font-size is 16px, then 1em = 16px.
* rem (root em): Relative unit based on the root (html) element's font size. If html font-size is 16px, then 1rem = 16px, regardless of parent.
* % (percentage): Relative unit based on the parent element's size. For font-size, it depends on the parent’s font size.

---

## 3. font-weight

Used to make text bold or control thickness.

```css
p{
    font-weight: bold;
}
```

Values:

```css
font-weight: normal;
font-weight: bold;
font-weight: 100;
font-weight: 400;
font-weight: 700;
```

---

## 4. font-style

Used to make text italic.

```css
p{
    font-style: italic;
}
```

Values:

* normal
* italic
* oblique

---

## 5. font (Shorthand Property)

Combines multiple font properties in one line.

```css
p{
    font: italic bold 20px Arial, sans-serif;
}
```

Syntax:

```css
font: font-style font-weight font-size font-family;
```

---

# Complete Example

```css
h1{
    font-family: Arial, sans-serif;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
}
```


# CSS Flexbox Properties

---

# Flex Container Properties (Parent)

## 1. flex-direction

**Default Value:** `row`

### Values

| Value | Description |
|--------|-------------|
| row | Items are arranged horizontally (Left → Right). |
| row-reverse | Items are arranged horizontally (Right → Left). |
| column | Items are arranged vertically (Top → Bottom). |
| column-reverse | Items are arranged vertically (Bottom → Top). |

---

## 2. flex-wrap

**Default Value:** `nowrap`

### Values

| Value | Description |
|--------|-------------|
| nowrap | All items stay on one line. |
| wrap | Items move to the next line if needed. |
| wrap-reverse | Items wrap in reverse order. |

---

## 3. flex-flow (Shorthand)

**Default Value:** `row nowrap`

### Syntax

```css
flex-flow: <flex-direction> <flex-wrap>;
```

### Examples

```css
flex-flow: row nowrap;
flex-flow: row wrap;
flex-flow: row wrap-reverse;

flex-flow: row-reverse nowrap;
flex-flow: row-reverse wrap;
flex-flow: row-reverse wrap-reverse;

flex-flow: column nowrap;
flex-flow: column wrap;
flex-flow: column wrap-reverse;

flex-flow: column-reverse nowrap;
flex-flow: column-reverse wrap;
flex-flow: column-reverse wrap-reverse;
```

---

## 4. justify-content

**Default Value:** `flex-start`

### Values

| Value | Description |
|--------|-------------|
| flex-start | Items start from the beginning of the main axis. |
| flex-end | Items move to the end of the main axis. |
| center | Items are centered. |
| space-between | Equal space between items. |
| space-around | Equal space around each item. |
| space-evenly | Equal space before, between and after items. |

---

## 5. align-items

**Default Value:** `stretch`

### Values

| Value | Description |
|--------|-------------|
| stretch | Items stretch to fill the container. |
| flex-start | Items align at the start of the cross axis. |
| flex-end | Items align at the end of the cross axis. |
| center | Items align at the center. |
| baseline | Items align according to text baseline. |

---

## 6. align-content

**Default Value:** `stretch`

> Works only when **flex-wrap: wrap** and there are multiple rows.

### Values

| Value | Description |
|--------|-------------|
| stretch | Rows stretch to fill the container. |
| flex-start | Rows align at the start. |
| flex-end | Rows align at the end. |
| center | Rows align at the center. |
| space-between | Equal space between rows. |
| space-around | Equal space around rows. |
| space-evenly | Equal space before, between and after rows. |

---

## 7. gap

**Default Value:** `0`

### Values

```css
gap: 10px;
gap: 20px;
gap: 1rem;
gap: 2em;
```

### Related Properties

```css
row-gap: 20px;
column-gap: 30px;
```

---

# Flex Item Properties (Children)

## 1. order

**Default Value:** `0`

### Values

```css
order: -2;
order: -1;
order: 0;
order: 1;
order: 2;
order: 10;
```

**Description**

- Smaller value appears first.
- Larger value appears later.

---

## 2. flex-grow

**Default Value:** `0`

### Values

```css
flex-grow: 0;
flex-grow: 1;
flex-grow: 2;
flex-grow: 3;
```

**Description**

- 0 → No growing.
- 1 → Grow equally.
- 2 → Grow twice as much as an item with value 1.

---

## 3. flex-shrink

**Default Value:** `1`

### Values

```css
flex-shrink: 0;
flex-shrink: 1;
flex-shrink: 2;
flex-shrink: 3;
```

**Description**

- 0 → Never shrink.
- 1 → Normal shrinking.
- 2 → Shrinks twice as much.

---

## 4. align-self

**Default Value:** `auto`

### Values

| Value | Description |
|--------|-------------|
| auto | Uses parent's align-items value. |
| stretch | Stretch the item. |
| flex-start | Align item at the start. |
| flex-end | Align item at the end. |
| center | Align item at the center. |
| baseline | Align item according to text baseline. |

---

# Quick Revision

## Flex Container

| Property | Default Value | Available Values |
|----------|---------------|------------------|
| flex-direction | row | row, row-reverse, column, column-reverse |
| flex-wrap | nowrap | nowrap, wrap, wrap-reverse |
| flex-flow | row nowrap | Any combination of direction + wrap |
| justify-content | flex-start | flex-start, flex-end, center, space-between, space-around, space-evenly |
| align-items | stretch | stretch, flex-start, flex-end, center, baseline |
| align-content | stretch | stretch, flex-start, flex-end, center, space-between, space-around, space-evenly |
| gap | 0 | Any length (10px, 20px, 1rem, etc.) |

---

## Flex Items

| Property | Default Value | Available Values |
|----------|---------------|------------------|
| order | 0 | Any integer (-2, -1, 0, 1, 2, 10...) |
| flex-grow | 0 | 0, 1, 2, 3... |
| flex-shrink | 1 | 0, 1, 2, 3... |
| align-self | auto | auto, stretch, flex-start, flex-end, center, baseline |



Animation
Tranformation
Transition
Media Query-----As a Theory