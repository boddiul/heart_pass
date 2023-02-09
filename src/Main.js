

ROOM_WIDTH =2048;
ROOM_HEIGHT = 1284;

CATEGORIES = ["fashion","food","games","love","money","movies","music","pet","sport","travel"]

CATEGORIES_NAME = 
{
    "fashion" : "Мода",
    "food" : "Еда",
    "games" : "Игры",
    "love" : "Любовь",
    "money" : "Деньги",
    "movies" : "Кино",
    "music" : "Музыка",
    "pet" : "Животные",
    "sport" : "Спорт",
    "travel" : "Путешествия",

}

CATEGORIES_IMAGE_NUM = 5;

TEST_STEPS = 20;

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'game');

console.log(game)
game.state.add("BootState", new BootState());
game.state.add("PreloadState", new PreloadState());
game.state.add("GameState", new GameState());
game.state.start("BootState");

