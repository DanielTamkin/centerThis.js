# centerThis.js
a simple jQuery plugin to Center an element in its parent(_or_ in the browser window)

a simple jQuery plugin to Center an element in its parent,  a super simple [demo can be found here](http://danieltamkin.github.io/centerThis.js/).

#### Center an element in its parent:
`$("section.yourElement").centerThis();`
#### Center an element in the browser:
`$("section.yourElement").centerThis("browser");`

How it works:
Grabbing the elements height and width, Then its parents; centerThis.js does some pretty simple math to calculate its center position... and sets the element there, setting it to `position: absolute` in the proccess.
