var page = require('webpage').create();

page.paperSize = {
  format: 'Letter',
  orientation: 'portrait',
  margin: '0px'
}

page.open('http://localhost:4000/people', function () {
  setTimeout(function() {
    page.render('people.pdf');
    console.log('rendered people.pdf')
    phantom.exit();
  }, 5000);
});
