
   
    const searchInput = document.getElementById('search');
    
    
    const gamesData = {
        1: { title: 'Black Myth: Wukong', description: 'Black Myth: Wukong features a Monkey King protagonist...', price: '$39.99' },
        2: { title: 'Grand Theft Auto V', description: 'Grand Theft Auto V is an open-world action-adventure game...', price: '$49.50' },
        3: { title: 'Resident Evil 4 Remake', description: 'Resident Evil 4 Remake updates the survival horror...', price: '$43.39' },
        4: { title: 'Days Gone', description: 'Days Gone follows Deacon St. John in a post-apocalyptic world...', price: '$59.99' },
        5: { title: 'Ghost Of Tsushima', description: 'Ghost of Tsushima is set in feudal Japan...', price: '$44.80' },
        6: { title: 'Horizon Zero Dawn Remastered', description: 'Horizon Zero Dawn is an action RPG set in a post-apocalyptic world...', price: '$75.00' },
        7: { title: 'Red Dead Redemption', description: 'Red Dead Redemption is set in the American frontier...', price: '$20.99' },
        8: { title: 'Farming Simulator 25', description: 'Farming Simulator 25 lets you manage a farm...', price: '$17.89' },
        9: { title: 'Goat Simulator Remastered', description: 'Goat Simulator offers a quirky open-world experience...', price: '$36.10' },
        10: { title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', description: 'S.T.A.L.K.E.R. 2 is a first-person survival horror...', price: '$59.99' }
    };

   
    function searchGames() {
        const query = searchInput.value.trim().toLowerCase();  

      
        for (const gameId in gamesData) {
            const game = gamesData[gameId];
            if (game.title.toLowerCase().includes(query)) {
               
                window.location.href = `game-detail1.html?game=${gameId}`;  
                return; 
            }
        }

       
        if (query) {
            alert('No game found. Please try another search.');
        }
    }

   
    searchInput.addEventListener('input', searchGames); 
 
    const gamesData = {
        1: { title: 'Black Myth: Wukong', description: 'Black Myth: Wukong features a Monkey King protagonist...', price: '$39.99', trailer: 'Black-Myth-Wukong-Trailer.mp4.webm' },
        2: { title: 'Grand Theft Auto V', description: 'GTA V is an open-world action-adventure game...', price: '$49.50', trailer: 'Grand Theft Auto V on Steam.webm' },
        3: { title: 'Resident Evil 4 Remake', description: 'Resident Evil 4 Remake updates the survival horror experience...', price: '$43.39', trailer: 'Resident Evil 4 on Steam.webm' },
        4: { title: 'Days Gone', description: 'Days Gone is a post-apocalyptic action-adventure...', price: '$59.99', trailer: 'Days Gone on Steam.webm' },
        5: { title: 'Ghost Of Tsushima', description: 'Ghost of Tsushima is set in feudal Japan...', price: '$44.80', trailer: 'ghost of tsushima on steam.webm' },
        6: { title: 'Horizon Zero Dawn Remastered', description: 'Horizon Zero Dawn is an action RPG...', price: '$75.00', trailer: 'Horizon on steam.webm' },
        7: { title: 'Red Dead Redemption', description: 'Red Dead Redemption is an open-world action-adventure...', price: '$20.99', trailer: 'Red Dead Redemption on Steam.webm' },
        8: { title: 'Farming Simulator 25', description: 'Farming Simulator 25 is a simulation game...', price: '$17.89', trailer: 'Farming Simulator 25 on Steam.webm' },
        9: { title: 'Goat Simulator Remastered', description: 'Goat Simulator is a quirky chaotic sandbox...', price: '$36.10', trailer: 'Goat Simulator- Remastered on Steam.webm' },
        10: { title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', description: 'S.T.A.L.K.E.R. 2 is a survival horror game...', price: '$59.99', trailer: 'Pre-purchase S.T.A.L.K.E.R. 2- Heart of Chornobyl on Steam.webm' }
    };

   
    function loadGameDetails(gameId) {
        if (gamesData[gameId]) {
            const game = gamesData[gameId];
            document.getElementById('gameTitle').textContent = game.title;
            document.getElementById('gameDescription').textContent = game.description;
            document.getElementById('gamePrice').textContent = `Price: ${game.price}`;
            document.getElementById('trailerSrc').src = game.trailer;
            
           
            const gameButtonContainer = document.getElementById('gameButtonContainer');
            gameButtonContainer.innerHTML = `<a href="buy.html?game=${gameId}"><button class="buyBtn">Buy Now</button></a>`;
        } else {
          
            document.getElementById('gameTitle').textContent = 'Game not found';
            document.getElementById('gameDescription').textContent = 'Sorry, we could not find the game you were looking for.';
            document.getElementById('gamePrice').textContent = '';
            document.getElementById('gameTrailer').innerHTML = '';
        }
    }

  
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('game');
    if (gameId) {
        loadGameDetails(gameId);
    }
    function loadGameDetails(gameId) {
        console.log('Game ID:', gameId);  
        if (gamesData[gameId]) {
            const game = gamesData[gameId];
            document.getElementById('gameTitle').textContent = game.title;
            document.getElementById('gameDescription').textContent = game.description;
            document.getElementById('gamePrice').textContent = `Price: ${game.price}`;
            document.getElementById('trailerSrc').src = game.trailer;
    
            
            const gameButtonContainer = document.getElementById('gameButtonContainer');
            gameButtonContainer.innerHTML = `<a href="buy.html?game=${gameId}"><button class="buyBtn">Buy Now</button></a>`;
        } else {
            
            document.getElementById('gameTitle').textContent = 'Game not found';
            document.getElementById('gameDescription').textContent = 'Sorry, we could not find the game you were looking for.';
            document.getElementById('gamePrice').textContent = '';
            document.getElementById('gameTrailer').innerHTML = '';
        }
    }
    