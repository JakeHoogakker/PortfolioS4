## PortfolioS4

# Css editor
This is an editor for changing css in a browser via key and mouse controls.

## Getting Started
This editor is made for an existing site in which you want to edit certain elements.

## Installing
To use this library download this file and link to the script in your site’s html.
Use
Left click: select or deselect an element.
Mouse moving: change the position of an element.
Buttons:
“1,2,3”: add a colour of the element (RGB)
“7,8,9”: reduce a colour of the element (RGB)
“4,5”: increase or reduce the opacity of the element.
“arrow keys”: change the dimensions of the element.
“space”: go in and out of “border” mode.

Border mode:
“arrow keys”: select which part of the border you want to change.
“-,=”: change the border style (solid or dotted).
The other previously mentioned key controls also work on the borders.

## Code explanation 
function getid is added to a click event and reads the id of the clicked object if it's not already selected into variable named Selement.

function getposition is linked to mouse movement whose position is read into the style of the selected objects if something is selected.

function keychanges works with the getKey function which read what key is pressed, depending on this the selected element's properties get changed. With space you change which variables get changed which is then implemented on a certain property of the element. 

## Notes
This editor is not finished yet and can’t save any made edits yet.

## Authors
Jake Hoogakker

