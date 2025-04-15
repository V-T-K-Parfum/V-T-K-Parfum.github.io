document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('E-mail Vihaan,Tej, or Keshav, ' + document.getElementById('name').value + '!');
});
