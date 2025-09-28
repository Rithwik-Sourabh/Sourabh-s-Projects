document.getElementById('nav-home').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('nav-about').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('nav-projects').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});