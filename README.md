# centerThis.js

a simple jQuery plugin to Center an element to its parent, _or_ the browser,  a super simple [demo can be found here](http://danieltamkin.github.io/centerThis.js/).

``` javascript
$("element").centerThis({
  browser: false, // center to the browser or the parent element
  offsetTop: 0, // offset the math of the center
  destructive: false // true will switch to using padding, not left and top positions
});
```

How it works:
---
By grabbing the elements height and width, along with its parents; centerThis.js does some pretty simple math to calculate its center position... and sets the element there, setting it to `position: absolute` in the process.
