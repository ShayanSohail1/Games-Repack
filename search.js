
const gamePages = {
    "black myth: wukong": "game-detail1.html?game=1",
    "grand theft auto v": "game-detail2.html?game=2",
    "resident evil 4 remake": "game-detail3.html?game=3",
    "days gone": "game-detail4.html?game=4",
    "ghost of tsushima": "game-detail5.html?game=5",
    "horizon zero dawn remastered": "game-detail6.html?game=6",
    "red dead redemption": "game-detail7.html?game=7",
    "farming simulator 25": "game-detail8.html?game=8",
    "goat simulator remastered": "game-detail9.html?game=9",
    "s.t.a.l.k.e.r. 2: heart of chornobyl": "game-detail10.html?game=10"
};


function searchGame() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    
   
    if (gamePages[query]) {
        
        window.location.href = gamePages[query];
    } else {
      
        alert("No game found. Please try another search.");
    }
}


document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchGame(); 
    }
});


document.getElementById('searchButton').addEventListener('click', function() {
    searchGame();  
});
console.log(gamePages[query]); 
window.location.href = gamePages[query];
