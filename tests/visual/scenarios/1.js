casper.start('http://localhost:9002/css.html')
.then(function() {
  phantomcss.screenshot('#content', 'Main app');
})

.then(function() {
  casper.click('.navbar-nav > li:nth-child(2) > a:nth-child(1)');

  phantomcss.screenshot('#content', 'Page component');
});