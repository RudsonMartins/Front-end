
function generateLetterButtons() {
    const container = document.getElementById('letter-buttons');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-primary mx-1';
        button.innerText = letter.toUpperCase();
        button.onclick = () => fetchDrinks(letter);
        container.appendChild(button);
    });
}

function fetchDrinks(letter) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(response => response.json())
        .then(data => displayDrinks(data.drinks))
        .catch(error => console.error('Erro ao buscar drinks:', error));
}


function displayDrinks(drinks) {
    const drinkList = document.getElementById('drinkList');
    drinkList.innerHTML = ''; 
    if (drinks) {
        drinks.forEach(drink => {
            const drinkCard = document.createElement('div');
            drinkCard.className = 'col-md-4 mb-4';
            drinkCard.innerHTML = `
                <div class="card h-100">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
                    <div class="card-body">
                        <h5 class="card-title">${drink.strDrink}</h5>
                        <p class="card-text">${drink.strInstructions || 'Sem descrição disponível.'}</p>
                    </div>
                </div>
            `;
            drinkList.appendChild(drinkCard);
        });
    } else {
        drinkList.innerHTML = '<p class="text-center">Nenhum drink encontrado.</p>';
    }
}


window.onload = generateLetterButtons;