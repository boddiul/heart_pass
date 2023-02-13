

ROOM_WIDTH =2048;
ROOM_HEIGHT = 1284;

CATEGORIES = ["fashion","food","games","love","money","movies","music","pets","sport","travel","ror"]

CATEGORIES_NAME = 
{
    "fashion" : "мода",
    "food" : "еда",
    "games" : "игры",
    "love" : "любовь",
    "money" : "деньги",
    "movies" : "кино",
    "music" : "музыка",
    "pets" : "животные",
    "sport" : "спорт",
    "travel" : "путешествия",

}

CATEGORIES_IMAGE_NUM = 3;

TEST_STEPS = 25;

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'game');

console.log(game)
game.state.add("BootState", new BootState());
game.state.add("PreloadState", new PreloadState());
game.state.add("GameState", new GameState());
game.state.start("BootState");



FINAL_DATA = [
    {
      "Theme1": "food",
      "Theme2": "movies",
      "name": "попкорн",
      "image_id": "popcorn"
    },
    {
      "Theme1": "food",
      "Theme2": "travel",
      "name": "гастротур",
      "image_id": "gastrotour"
    },
    {
      "Theme1": "food",
      "Theme2": "games",
      "name": "крошки в клавиатуре",
      "image_id": "keyboard"
    },
    {
      "Theme1": "food",
      "Theme2": "music",
      "name": "Мулен Руж",
      "image_id": "rouge"
    },
    {
      "Theme1": "food",
      "Theme2": "money",
      "name": "Мистер Крабс",
      "image_id": "krabs"
    },
    {
      "Theme1": "food",
      "Theme2": "sport",
      "name": "бодибилдер",
      "image_id": "body"
    },
    {
      "Theme1": "food",
      "Theme2": "fashion",
      "name": "хипстер",
      "image_id": "hipster"
    },
    {
      "Theme1": "food",
      "Theme2": "pets",
      "name": "Рататуй",
      "image_id": "ratatoille"
    },
    {
      "Theme1": "food",
      "Theme2": "love",
      "name": "ужин на двоих",
      "image_id": "foodtwo"
    },
    {
      "Theme1": "movies",
      "Theme2": "travel",
      "name": "Евротур",
      "image_id": "euro"
    },
    {
      "Theme1": "movies",
      "Theme2": "games",
      "name": "Кодзима Гений",
      "image_id": "kodzima"
    },
    {
      "Theme1": "movies",
      "Theme2": "music",
      "name": "Ханс Циммер",
      "image_id": "zimmer"
    },
    {
      "Theme1": "movies",
      "Theme2": "money",
      "name": "Волк с Уолл Стрит",
      "image_id": "wolf"
    },
    {
      "Theme1": "movies",
      "Theme2": "sport",
      "name": "Движение вверх",
      "image_id": "up"
    },
    {
      "Theme1": "movies",
      "Theme2": "fashion",
      "name": "Эмили в Париже",
      "image_id": "emily"
    },
    {
      "Theme1": "movies",
      "Theme2": "pets",
      "name": "Хатико",
      "image_id": "hatiko"
    },
    {
      "Theme1": "movies",
      "Theme2": "love",
      "name": "Титаник",
      "image_id": "titanic"
    },
    {
      "Theme1": "travel",
      "Theme2": "games",
      "name": "курьер из Death Stranding",
      "image_id": "death"
    },
    {
      "Theme1": "travel",
      "Theme2": "music",
      "name": "групи",
      "image_id": "groupie"
    },
    {
      "Theme1": "travel",
      "Theme2": "money",
      "name": "турфирма",
      "image_id": "tour"
    },
    {
      "Theme1": "travel",
      "Theme2": "sport",
      "name": "сборная",
      "image_id": "team"
    },
    {
      "Theme1": "travel",
      "Theme2": "fashion",
      "name": "чемодан Луи Виттон",
      "image_id": "louis"
    },
    {
      "Theme1": "travel",
      "Theme2": "pets",
      "name": "перевозка для собак",
      "image_id": "transpet"
    },
    {
      "Theme1": "travel",
      "Theme2": "love",
      "name": "номер на двоих",
      "image_id": "fortwo"
    },
    {
      "Theme1": "games",
      "Theme2": "music",
      "name": "Mick Gordon",
      "image_id": "gordon"
    },
    {
      "Theme1": "games",
      "Theme2": "money",
      "name": "Гейб Ньюэлл",
      "image_id": "gabe"
    },
    {
      "Theme1": "games",
      "Theme2": "sport",
      "name": "киберспорт",
      "image_id": "cyber"
    },
    {
      "Theme1": "games",
      "Theme2": "fashion",
      "name": "Томми Версетти",
      "image_id": "vercetti"
    },
    {
      "Theme1": "games",
      "Theme2": "pets",
      "name": "Stray",
      "image_id": "stray"
    },
    {
      "Theme1": "games",
      "Theme2": "love",
      "name": "парный контроллер",
      "image_id": "dual"
    },
    {
      "Theme1": "music",
      "Theme2": "money",
      "name": "продюсер",
      "image_id": "producer"
    },
    {
      "Theme1": "music",
      "Theme2": "sport",
      "name": "радио Энерджи",
      "image_id": "radio"
    },
    {
      "Theme1": "music",
      "Theme2": "fashion",
      "name": "Дэвид Боуи",
      "image_id": "bowie"
    },
    {
      "Theme1": "music",
      "Theme2": "pets",
      "name": "канарейка",
      "image_id": "cannary"
    },
    {
      "Theme1": "music",
      "Theme2": "love",
      "name": "романтик коллекшн 99",
      "image_id": "roman"
    },
    {
      "Theme1": "money",
      "Theme2": "sport",
      "name": "Лионель Месси",
      "image_id": "messi"
    },
    {
      "Theme1": "money",
      "Theme2": "fashion",
      "name": "шопоголизм",
      "image_id": "shopping"
    },
    {
      "Theme1": "money",
      "Theme2": "pets",
      "name": "заводчик",
      "image_id": "breeder"
    },
    {
      "Theme1": "money",
      "Theme2": "love",
      "name": "Папик",
      "image_id": "papa"
    },
    {
      "Theme1": "sport",
      "Theme2": "fashion",
      "name": "Найк Эйр Джордан",
      "image_id": "nikes"
    },
    {
      "Theme1": "sport",
      "Theme2": "pets",
      "name": "собачий тренер",
      "image_id": "trainer"
    },
    {
      "Theme1": "sport",
      "Theme2": "love",
      "name": "теннис",
      "image_id": "tennis"
    },
    {
      "Theme1": "fashion",
      "Theme2": "pets",
      "name": "животный стилист",
      "image_id": "petcut"
    },
    {
      "Theme1": "fashion",
      "Theme2": "love",
      "name": "Victorias Secret",
      "image_id": "victoria"
    },
    {
      "Theme1": "pets",
      "Theme2": "love",
      "name": "волонтёрство",
      "image_id": "volon"
    }
  ]
