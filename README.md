# centerThis.js

a simple jQuery plugin to Center an element in its parent.


_or_ Center an element to the browser. Good for Heros.
#### Center an element in its parent:
`$("section.yourElement").centerThis();`
#### Center an element in the browser:
`$("section.yourElement").centerThis("browser");`
How it works:
---
By grabbing the elements height and width, along with its parents; centerThis.js does some pretty simple math to calculate its center position... and sets the element there, setting it to `position: absolute` in the proccess.
