# CSS Cheat Sheet

### Reference:

*https://www.w3schools.com/cssref/css_selectors.asp
*https://css-tricks.com/almanac/

Cascading Style Sheets at the most basic level it indicates that the order of CSS rules matter. 


## .class
any element with a class field of this class will receive these properties

## #id 
this selects a specific ID, which is unique to a single element

## *
this one selects all elements, usually at the top of the CSS sheet

## element, element
listing elements separated by a comma will apply the properties to all elements of both types

## h2 p
all p elements within h2 elements will receive the properties, regardless of parent/child

## h2 > p
all p elements whose direct parent element is h2 will receive the properties

## h2 + p
all p elements that directly follow an h2 element will receive the properties
ex:
<h2></h2>
<p></p>

## :hover
pseudo-class that changes only properties you specify while the cursor hovers

## p:last-child
last child p within a container

## p:first-child
first child p within a container

## !important (not recommended)
this is used with properties and overrides all properties for the whole page

## What seletors win out in the cascade depends on:
- Specificity
the more specific something is, the more likely it is to win
- Importance
- Source Order
- - if there are multiple sources, the last one wins