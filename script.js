document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const subject = encodeURIComponent("New Contact from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: [Type your message here]`);

    window.location.href = `mailto:kum0503@dcds.edu,var0902@dcds.edu,kar145070@dcds.edu?subject=${subject}&body=${body}`;
});
