PreloadState = function (game) {

};




PreloadState.prototype = {

    preload: function () {

        this.game.load.onFileComplete.add(this.fileComplete, this);



        this.loadBack = this.game.add.image(GAME_WIDTH/2,GAME_HEIGHT/2,"back_loading");
        this.loadBack.anchor.set(0.5,0.5);
        this.loadBack.scale.set(GAME_WIDTH/540,GAME_HEIGHT/960);
        /*this.loadText = this.game.add.text(GAME_WIDTH/2,GAME_HEIGHT*0.7,"0%", { font: "100px", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        this.loadText.anchor.set(0.5,0.5);*/

        this.startBar = this.game.add.image(GAME_WIDTH/2,GAME_HEIGHT/2+700,"start_bar");
        this.startBar.anchor.set(0.5,0.5);

        this.whiteBar = this.game.add.image(GAME_WIDTH/2-600/2,GAME_HEIGHT/2+700,"white");
        this.whiteBar.anchor.set(0,0.5);
        this.whiteBar.scale.set(600/100*0,0.2);

        this.heartClosed = this.game.add.image(GAME_WIDTH/2+1000,GAME_HEIGHT/2-50,"heart_closed");
        this.heartClosed.anchor.set(0.5,0.5);

        this.key = this.game.add.image(GAME_WIDTH/2-1000,GAME_HEIGHT/2,"key");
        this.key.anchor.set(0.5,0.5);


        this.game.scale.setUserScale(1, 1);

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;


        this.preloadText = game.add.text(GAME_WIDTH, GAME_HEIGHT, "a", { font: "40px robotoB", fill: "#FFEEDE", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });

        this.preloadText = game.add.text(GAME_WIDTH, GAME_HEIGHT, "a", { font: "40px robotoM", fill: "#FFEEDE", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });


        for (let i=0;i<5;i++)
        {

            game.load.image('tutorial'+(i+1), 'assets/tutorial'+(i+1)+'.png');
        }

        for (let i=0;i<8;i++)
        {
            
            game.load.image('math'+(i+1), 'assets/math'+(i+1)+'.png');
        }

        game.load.image('button_start','assets/button_start.png');
        game.load.image('button_next','assets/button_next.png');

        game.load.spritesheet('circle_small', 'assets/circle_small.png',90/2,45);

        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          };

        CATEGORIES.forEach(function(e){


            let arr = [1,2,3,4,5];


            shuffleArray(arr);

            for (let i=0;i<CATEGORIES_IMAGE_NUM;i++)
            {
                
                game.load.image(e+(i+1),'assets/questions_compressed/'+e+arr[i]+'.jpg');
            }
        }.bind(this));

        game.load.spritesheet('button_vote','assets/button_vote.png',310/2,155);
        game.load.image('bar_green','assets/bar_green.png');
        game.load.image('bar_grey','assets/bar_grey.png');
        game.load.image('button_help','assets/button_help.png');
        game.load.image('lock','assets/lock.png');
        game.load.image('heart','assets/heart.png');
        game.load.image('image_overlay','assets/image_overlay.png');


        //game.load.image('final_test','assets/final_test.jpg');

        game.load.image('final_back','assets/final_back.png');
        game.load.image('circle_overlay','assets/circle_overlay.png');
        game.load.image('password_rect','assets/password_rect.png');
        game.load.image('final_blue','assets/final_blue.png');
        game.load.image('final_rect','assets/final_rect.png');

        
        game.load.image('button_final','assets/button_final.png');
        game.load.image('button_share_big','assets/button_share_big.png');
        game.load.image('button_restart','assets/button_restart.png');

        game.load.spritesheet('button_share','assets/button_share.png',345/3,115);


        game.load.image('heart_opened', 'assets/heart_opened.png')

        
        game.load.image('final_white_rect','assets/final_white_rect.png');
        game.load.image('final_close','assets/final_close.png');
    }
    ,

    fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {

        this.loadBack.x = GAME_WIDTH/2;
        this.loadBack.y = GAME_HEIGHT/2;

        /*
        this.loadText.text = (progress) + '%'
        this.loadText.x = GAME_WIDTH/2;*/


        this.key.x = GAME_WIDTH/2-400*(100-progress)/100-105;
        this.heartClosed.x = GAME_WIDTH/2+400*(100-progress)/100;

        this.whiteBar.scale.set(600/100*progress/100,0.2);


    },

    create : function () {

        this.heartClosed.visible = false;
        this.key.visible = false;
        let heartOpened = game.add.image(GAME_WIDTH/2,GAME_HEIGHT/2,"heart_opened")
        heartOpened.anchor.set(0.45,0.60);

        
        let whiteOverlay = this.game.add.image(GAME_WIDTH/2,GAME_HEIGHT/2,"white");
        whiteOverlay.anchor.set(0.5,0.5);
        whiteOverlay.scale.set(2000/100,2000/100);
        whiteOverlay.alpha = 0;


        let tween = this.game.add.tween(heartOpened);
        tween.to({y:0},
                Phaser.Timer.SECOND,
                Phaser.Easing.Back.In
            );
        tween.onComplete.add(function () {
                
                
            }.bind(this));
        tween.start();

        
        ym(92442722,'reachGoal',"game_loaded")

        let tween2 = this.game.add.tween(whiteOverlay);
        tween2.to({alpha:1},
                Phaser.Timer.SECOND,
                Phaser.Easing.Circular.In
            );
        tween2.onComplete.add(function () {
                game.state.start('GameState');
                
            }.bind(this));
        tween2.start();

        //
    }
}