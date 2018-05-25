gdprCookieNotice({
  locale: 'en', //This is the default value
  timeout: 500, //Time until the cookie bar appears
  expiration: 30, //This is the default value, in days
  domain: '.alt-3.uk', //If you run the same cookie notice on all subdomains, define the main domain starting with a .
  implicit: true, //Allow cookies on scroll
  statement: '/cookies.html', //Link to your cookie statement page
//  performance: ['mathjax'], //Cookies in the performance category.
  analytics: ['statcounter'], //Cookies in the analytics category.
//  marketing: ['lang'] //Cookies in the marketing category.
});

