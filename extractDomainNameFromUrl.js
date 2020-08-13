/**
 * Instructions:
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 */

// My solution:
function domainName(url){
    // Initialize variables to hold results of three different regular expression match statements. Could not think of one regular expression that would handle all scenarios.
    let x = url.match(/(?<=\/\/www\.)+.*?(?=\.)/);
    let y = url.match(/(?<=\/\/|www\.)+.*?(?=\.)/);
    let z = url.match(/.*?(?=\.)/);
    
    // Chained conditional using the ternary operator to see which regular expression returned a match.
    var ans = (x != null) ? x[0].toString() : (y != null) ? y[0].toString() : (z != null) ? z[0].toString() : 0;
    
    // Return the matched value.
    return ans;
}

// Best practices:
// Not the most readable code unless you know regular expressions very well.
function domainNameTwo(url){
return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// Clever but if the url has a subdomain, it would return the subdomain. Granted, the other solutions would have the same problem. 
function domainNameThree(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };