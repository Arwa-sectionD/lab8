document.addEventListener('DOMContentLoaded', () => {
    const catFactElement = document.getElementById('catFact');
    const newFactBtn = document.getElementById('newFactBtn');

    const fetchCatFact = async () => {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            if (!response.ok) {
                throw new Error('Failed to fetch cat fact');
            }
            const data = await response.json();
            displayCatFact(data.fact);
        } catch (error) {
            console.error('Error fetching cat fact:', error);
            catFactElement.innerHTML = '<p>Failed to fetch cat fact.</p>';
        }
    };

    const displayCatFact = (fact) => {
        catFactElement.innerHTML = `<p>${fact}</p>`;
    };

    newFactBtn.addEventListener('click', fetchCatFact);

    fetchCatFact();

    const textMovement = {
        newTextSize: 30,

        init: function () {
            this.textMovement();
        },

        textMovement: function () {
            const h1 = document.querySelector('h1');
            const h1Text = h1.textContent;
            const oldTextSize = window.getComputedStyle(h1).fontSize;
            const textLength = h1Text.length;
            let newTextSize = '';
            let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFD7'];

            for (let i = 0; i < textLength; i++) {
                if (h1Text.charAt(i) === ' ') {
                    newTextSize += ' ';
                } else {
                    newTextSize += `<span>${h1Text.charAt(i)}</span>`;
                }
            }

            h1.innerHTML = newTextSize;

            h1.addEventListener('mouseover', function (event) {
                if (event.target.tagName.toLowerCase() === 'span') {
                    event.target.style.fontSize = textMovement.newTextSize + 'px';
                    event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
                }
            });

            h1.addEventListener('mouseout', function (event) {
                if (event.target.tagName.toLowerCase() === 'span') {
                    event.target.style.fontSize = oldTextSize;
                    event.target.style.color = 'white';
                }
            });
        }
    };

    textMovement.init();
});
