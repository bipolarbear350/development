# Development

### Link to Deployed Website
this is `https://bipolarbear350.github.io/development/`

### Goal and Value of the Application

The goal of the application is basically a meal planning
app for when you have guests over. You can select items to add to your plan based on what they are, who can eat them, and how long they'll take to make. Each item card aso contains the link to the recipe, so all of the stuff you need to cook is in one place.

### Usability Principles Considered

My vision for this app was basically an online version of having a little box of recipe cards, taking advantage of sorting and states to be abel to navigate quicker. Because of this, the main information that is important (picture, title, short descriptors) are present for each item, and the details are deeper in them (clicking the link here, liek turning the card over in real life). The user gets to scoll through the cards, add what they think they'll want to do, and at the end get to reconsider once they see all the items in their plan.

### Organization of Components

The main usage of components list of variables whose states would be tracked (for example, the list of items displayed, or the status of whether or not boxes are checked) changes that different items reference. In terms of objects used in organization, the main object is the recipe card object and its variation that appears in the final plan, and the rest is inline stuff in App.js

### How Data is Passed Down Through Components

Data is passed using States, so that lists that display will actively update when certain actions are taken, like clicking buttons or checking boxes. For example, checking the gluten-free box changes the state of that variable to true. Then, when components like the recipe cards who call on that state are updates, they are updated differently so that only items that are gluten free show up

### How the User Triggers State Changes

The user triggers state changes in two main ways: checking the boxes to alter the displayed items, or clicking the buttons in the recipe cards themselves, either for adding in the main display, or removing in the plan section.