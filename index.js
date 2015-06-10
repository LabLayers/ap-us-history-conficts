var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test/businesscard.html', 'utf8')
var options = {
  filename: './output.pdf',
  format: 'Letter',
  orientation: 'portrait'
  // "height": "2.5in",        // allowed units: mm, cm, in, px
  // "width": "3.5in",            // allowed units: mm, cm, in, px
  // "footer": {
  // "height": "28mm",
  // "contents":
  //   "<footer>Squabble v1 Card {{page}} by Victor Lourng. All images are public domain.</footer>"
  // }
};

pdf.create(html, options).toFile(function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/tmp/html-pdf-8ymPV.pdf' }
});
