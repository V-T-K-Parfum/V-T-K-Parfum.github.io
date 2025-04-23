document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const subject = encodeURIComponent("V.T.K Parfum Buyer" + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: [Type your message here and/or purchase]`);

    window.location.href = `mailto:kum0503@dcds.edu,var0902@dcds.edu,kar145070@dcds.edu?subject=${subject}&body=${body}`;
});
// Handle appointment form submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('appt-name').value;
    const email = document.getElementById('appt-email').value;
    const date = document.getElementById('appt-date').value;
    const time = document.getElementById('appt-time').value;

    alert(`Thank you, ${name}! Your appointment is booked for ${date} at ${time}.`);
    // Here you could send the data to a server or email in a real app
});

// Simulate buying a product
function buyProduct(productName) {
    alert(`You selected to buy "${productName}". Please contact Vihaan, Tej, or Keshav to complete the order.`);
}
