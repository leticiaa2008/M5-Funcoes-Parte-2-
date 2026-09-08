function countToFive() {
    let count = 1;

    const interval = setInterval(function() {
        console.log(count);

        if (count === 5) {
            clearInterval(interval);
        }

        count++;
    }, 1000);
}

countToFive();
