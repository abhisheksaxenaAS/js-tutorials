const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const Height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#weight').value)
    const Result = document.querySelector('#result')

    if (Height === '' || Height < 0 || isNaN(Height)) {
        Result.innerHTML = `Enter a valid height ${Height}`
    }
    else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
        Result.innerHTML = `Enter a valid weight ${Weight}`
    }
    else {
        const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2)
        Result.innerHTML = `<span>${bmi}</span>`
    }

})