# Jquery-TAP-Events
Bind touch events to your existing click event structure (JQuery)


WHY?
This is useful if your page already utliizes a set of click events in Jquery that don't fire on mobile browsers because they don't trigger click events. This code will turn touch events into click events that triggers your existing click event structure.

How?
Include the code snippet i put in touch.js AND include "touchable" class on any element you want to add TAP functionality to. Modify names etc. to suit needs. 

The event is set to capture any TAP that bubbles up to body tag from a "touchable" element and creates an artificial click event for that element. Therefore the click event you have already bound to that element will be fired.

Why are there date objects in there?
Because a TAP event is really a combination of a touchstart and touchstop event that happen a within a certain time window. I have a settimeout function to delay the reading for 50ms and a condition of 300ms (no more) between the touchstart and touchend event. These can be tweeked for your needs but to me seem to adaquately capture intential taps. 
