for (var i = 1; i <= 100; i++) {
    var msg = '';
    if (i % 3 === 0) {
        msg += 'Fizz';
    }
    if (i % 5 === 0) {
        msg += 'Buzz';
    }
    // empty strings evaluate to false
    console.log(msg || i);
}