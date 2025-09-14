# Ans to the qn no: 01

## 1. getElementById()

Used to select an element by its ID.
Always returns only one element (the one with that ID).

Example:
```javascript
<span id="icon"></span>
document.getElementById("icon");

```

## 2. getElementsByClassName()

Used to select multiple elements by their class name.Returns an HTMLCollection of all matching elements.

Example:
```javascript
<span class="icon"></span>
<span class="icon"></span>
document.getElemenstByClassName("icon");

```

## 3. querySelector()

Used to find the first element that matches a given selector. It returns the first matching element.

Example:
```javascript
<span class="icon"></span>
<span class="icon"></span>
document.querySelector(".icon");

```

## 4. querySelectorAll()

 Returns a NodeList of all elements that match the given selector.

Example:
```javascript
<span class="icon"></span>
<span class="icon"></span>
document.querySelectorAll(".icon");

```

# Ans to the qn no: 02

1.Create a new element using document.createElement().
2.Add content to the element using textContent or innerHTML.
3.Select the parent element where to insert.
4.Insert the new element using appendChild().

Example:

```javascript
const newElement = document.createElement("div"); 
newElement.textContent = "New DOM!";
newElement.setAttribute("id", "newDiv");  
document.body.appendChild(newElement);     

```


# Ans to the qn no: 03

When an event happens on an element, it moves up from that element to its parent, then to the parent’s parent, and so on, up to the document.
Order: Innermost element → outer parent elements → document.


# Ans to the qn no: 04

## Definition:
Event Delegation is a technique where a single event listener is attached to a parent element to handle events on its child elements. Instead of adding separate listeners to each child, the parent listens and controls the events of all its children, making the code simpler and more efficient.

## Importancy:
1.Less code: One listener on the parent handles all children, no need for many separate listeners.
2.Better performance: Fewer listeners use less memory and reduce browser load.
3.Works for dynamic elements: New child elements added later are automatically handled.
4.Clean & maintainable: Code stays simple, easier to manage when elements change.


# Ans to the qn no: 05

## preventDefault():

This method is used to stop an element’s default behavior.

Example:

```javascript  
document.querySelector("a").addEventListener("click", function(e) {
  event.preventDefault();
}); 

```

## stopPropagation():
This method keeps the event confined only to the element where it occurred and does not allow it to propagate upwards to its parent elements. In other words, it stops Event Bubbling.

Example:

```javascript  
const child = document.getElementById('child');
child.addEventListener("click", function(event) {
  event.stopPropagation();
});

```
