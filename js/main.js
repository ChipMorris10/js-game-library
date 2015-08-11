// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

function Game(title, genre, year) {
    this.title = title;
    this.genre = genre;
    this.year = year;
}
galaga = new Game('Galaga ', 'space ', 1985);
console.log(galaga);

Game.prototype.render = function(game) {
    for (var x in game) {
    $('#games').append(game[x]);
    }

};

galaga.render(galaga);
















}); // end of code
