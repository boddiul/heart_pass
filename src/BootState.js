
BootState = function (game) {

};

BootState.prototype = {

    preload: function () {
        
        game.load.image('back_loading', 'assets/back_loading.jpg')
    },
    create: function () {

        game.state.start('PreloadState');
    }
}