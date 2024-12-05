// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get submit-button
const submit_btn = document.getElementById("submit-button");

// Add event click to submit-button
submit_btn.addEventListener("click", function() {
    const message = "Thank you for your message!";

    // Create new p tag contain the message
    const p_new = document.createElement('p');
    p_new.textContent = message;
    p_new.style.fontSize = '24px';

    // Remove content of <main> element with id "contact-page", and add the <p> element that contains the message.
    document.getElementById("contact-page").innerHTML = '';
    document.getElementById("contact-page").appendChild(p_new);
});