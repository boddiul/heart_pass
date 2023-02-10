
BootState = function (game) {

};

BootState.prototype = {

    preload: function () {
        
        game.load.image('back_loading', 'assets/back_loading.jpg')
        game.load.image('heart_closed', 'assets/heart_closed.png')
        game.load.image('key', 'assets/key.png')
        game.load.image('start_bar', 'assets/start_bar.png')
        game.load.image('white', 'assets/white.png')
    },
    create: function () {

        game.state.start('PreloadState');
    }
}