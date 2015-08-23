// Create the library function
function Game(title, genre, year){
  this.title = title;
  this.genre = genre;
  this.year = year;
}


// Render the games and append both games and names
Game.prototype.render = function(game){
  for(var name in game) {
  $('#games').append(game[name], ' ');
    }
    $('#games').append('<br>');
};

// Create an array of title and games
function GameLibrary(title, games){
    this.title = title;
    this.games = [];
}


GameLibrary.prototype.renderLibrary = function(){
  for(var i =0; i < this.games.length; i ++) {
   $('#gameLibrary').append(this.games[i].title + ' ' + this.games[i].genre + ' ' +this.games[i].year + '<br>');
console.log(this.games[i]);
  }
};

$(document).on('ready', function() {

zeldaLibrary = new GameLibrary('Zelda Games');

// Pushes the games
  $('form').on('submit', function(e){
    e.preventDefault();
    $('#gameLibrary').html('');
    var game1 = new Game($('.title').val(), $('.genre').val(), $('.year').val());
    zeldaLibrary.games.push(game1);
    zeldaLibrary.renderLibrary();
console.log(zeldaLibrary);
  });




});    //documentready

























