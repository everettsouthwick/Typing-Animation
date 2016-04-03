### Typing animation
======

#### Setup
1. Download typinganimation.js.
2. Link the jQuery library and typinganimation.js on your page (The jQuery library *MUST* be linked *ABOVE* typinganimation.js).
3. Change the id of the targetElement variable to match the id of the element on your page, and modify any other options to your liking.



##### Example: 
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="scripts/typinganimation.js"></script>
```

#### Dependencies
jQuery (ver. 1.11.3)



#### Options

```javascript
var targetElement = "#caption";
```
The targetElement represents the id or the class of the element on the page that you wish to be used with typing animation. You *MUST* use CSS style syntax in this string, using # for ids and . for classes. 



```javascript
var captions = ["Cycle 1", "Cycle 2", "Cycle 3"];
```
The captions array represents the text that will be cycled through in the targetElement on the page.



```javascript
var cursorSpeed = 750;
var eraseSpeed = 50;
var typeSpeed = 100;
var timeBetweenCycle = 750;
var timeBetweenErase = 1500;
```
These values represent the speed and delay of the cursor, erasing, and typing. All values are in milliseconds.

