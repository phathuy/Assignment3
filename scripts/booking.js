/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 35;              // Default daily rate
let days_selected = new Set();      // Use Set() to ensure days selected not duplicate

const day_buttons = document.querySelectorAll(".day-selector li");
const clear_btn = document.getElementById("clear-button");
const half_btn = document.getElementById("half");
const full_btn = document.getElementById("full");
const cost_value = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


day_buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {

        // Check if the button is clicked and contain class "clicked", if false, add class "clicked" to the button
        if (!btn.classList.contains("clicked")) {
            btn.classList.add("clicked");   // Apply class "clicked" to the button
            days_selected.add(btn.id);      // Add the button id to the Set days_selected
        }
        else {
            btn.classList.remove("clicked");// Remove "clicked" class from button
            days_selected.delete(btn.id);   // Remove the day button from set
        }
        calculateCost();  // Update cost
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_btn.addEventListener("click", function() {
    day_buttons.forEach(function(btn) {
        btn.classList.remove("clicked");
    });
    days_selected.clear();  // Clear all days selected from Set
    calculateCost();  // Update cost
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_btn.addEventListener("click", function() {
    if (!half_btn.classList.contains("clicked")) {
        cost_per_day = 20;
        half_btn.classList.add("clicked");
        full_btn.classList.remove("clicked");
        calculateCost();  // Update cost
    }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_btn.addEventListener("click", function() {
    if (!full_btn.classList.contains("clicked")) {
        cost_per_day = 35;
        full_btn.classList.add("clicked");
        half_btn.classList.remove("clicked");
        calculateCost();  // Update cost
    }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const cost = cost_per_day * days_selected.size; // cost = daily rate * (number of days in Set = Set size)
    cost_value.innerHTML = cost;                    // Display cost to html page
}