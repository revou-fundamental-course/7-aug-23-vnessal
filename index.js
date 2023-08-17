document.addEventListener('DOMContentLoaded', function() {
    const calculateLBtn = document.getElementById('calculateLBtn');
    calculateLBtn.addEventListener('click', function() {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);

        if (!isNaN(base) && !isNaN(height)) {
            const area = 0.5 * base * height;
            const resultBase = `The result of the Base of the Triangle is ${area.toFixed(2)} cm2`;
            document.getElementById('resultBase').textContent = resultBase;
        } else {
            document.getElementById('resultBase').textContent = 'Please enter valid numbers for base and height!';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const calculateKBtn = document.getElementById('calculateKBtn');
    calculateKBtn.addEventListener('click', function() {
        const firstSide = parseFloat(document.getElementById('firstSide').value);
        const secondSide = parseFloat(document.getElementById('secondSide').value);
        const thirdSide = parseFloat(document.getElementById('thirdSide').value);

        if (!isNaN(firstSide) && !isNaN(secondSide) && !isNaN(thirdSide)) {
            const perimeter = firstSide + secondSide + thirdSide;
            const resultPerim = `The result of the perimeter of the triangle is ${perimeter.toFixed(2)} cm`;
            document.getElementById('resultPerim').textContent = resultPerim;
        } else {
            document.getElementById('resultPerim').textContent = 'Please enter valid numbers for all sides!';
        }
    });
});

