// Playing around with the basics of functional programming for fun.
function hotdogOrNot(p1, p2) {
    return function(a) {
        return p1(a) + " " + p2(a);
    }
}

function hotdog(a) {
    return a == 'hotdog' ? "It's a hotdog!" : "Awesome, it's not a hotdog!"
}

function areNasty(a) {
    return a == 'hotdog' ? "Hotdogs are nasty." : `Mmmm...${a}...delicious.`
}

var isItHotdog = hotdogOrNot(hotdog, areNasty);