# A JavaScript for to test mod, div and remainder

Taken from an article on Site Crafting: [Modulus And Remainder Are Not The Same](http://www.sitecrafting.com/blog/modulus-remainder/)

```javascript
function mod(num, mod) {
    var remain = num % mod;
    return Math.floor(remain >= 0 ? remain : remain + mod);
}

function remain(num, denom) {
    return Math[num > 0 ? 'floor' : 'ceil'](num % denom);
}

function div(num, denom) {
    return Math[num > 0 ? 'floor' : 'ceil'](num / denom);
}
```