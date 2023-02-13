

GameState = function (game) {

};


GameState.prototype = {



    create : function () {



        game.stage.backgroundColor = '#ffffff';


        this.mainTutorialGroup = game.add.group();

        this.tutorialGroup = [];

        for (let i=0;i<5;i++)
        {
            let tg = game.add.group();
            this.mainTutorialGroup.add(tg);
            this.tutorialGroup.push(tg)
        }
            


        

        let tb = game.add.image(0,0,'tutorial1');
        tb.anchor.set(0.5,0.5);
        let tt = game.add.text(0, 570-30, "Мы покажем\n"+TEST_STEPS+" фотографий", { font: "70px robotoM", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        tt.anchor.set(0.5,0.5);

        this.tutorialGroup[0].add(tb);
        this.tutorialGroup[0].add(tt);

        tb = game.add.image(0,0,'tutorial2');
        tb.anchor.set(0.5,0.5);
        tt = game.add.text(0, 570, "Свайпайте вправо\nто, что нравится", { font: "70px robotoM", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        tt.anchor.set(0.5,0.5);

        this.tutorialGroup[1].add(tb);
        this.tutorialGroup[1].add(tt);
        
        tb = game.add.image(0,0,'tutorial3');
        tb.anchor.set(0.5,0.5);
        tt = game.add.text(0, 570, "И влево — то,\nчто не нравится", { font: "70px robotoM", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        tt.anchor.set(0.5,0.5);

        this.tutorialGroup[2].add(tb);
        this.tutorialGroup[2].add(tt);

        tb = game.add.image(0,-500,'tutorial4');
        tb.anchor.set(0.5,0.5);
        tt = game.add.text(0, 100, "Не раздумывайте\nнад ответами.\n\nДоверьтесь сердцу", { font: "70px robotoM", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        tt.anchor.set(0.5,0.5);

        this.tutorialGroup[3].add(tb);
        this.tutorialGroup[3].add(tt);

        tb = game.add.image(0,-500,'tutorial5');
        tb.anchor.set(0.5,0.5);
        tt = game.add.text(0, 0, "На основе этих ответов\nмы сгенерируем пароль\nот вашего сердечка", { font: "70px robotoM", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        tt.anchor.set(0.5,0.5);

        
        this.buttonStart = game.add.image(0,300,'button_start');
        this.buttonStart.anchor.set(0.5,0.5);

        this.tutorialGroup[4].add(tb);
        this.tutorialGroup[4].add(tt);
        this.tutorialGroup[4].add(this.buttonStart);


        this.circles = [];
        for (let i=0;i<5;i++)
        {
            let c = game.add.image(70*(i-2.5),750,'circle_small')
            

            c.anchor.set(0.5,0.5)
            this.circles.push(c);
            this.mainTutorialGroup.add(c)
        }

        this.buttonNext1 = game.add.image(300,750,'button_next')
        this.buttonNext1.anchor.set(0.5,0.5);
        this.mainTutorialGroup.add(this.buttonNext1)

        this.currentTutorial = 0;
        this.tutorialMoving = false;


        this.mainTestGroup = game.add.group();


        this.testGroup = [];

        this.cardPos = [];


        for (let i=0;i<TEST_STEPS;i++)
        {

            let gr = game.add.group();
            gr.alpha = 0
            this.testGroup.push(gr);

            this.cardPos.push({x:0,y:0});

        }

        
        for (let i=0;i<TEST_STEPS;i++)
        {
            this.mainTestGroup.add(this.testGroup[i]);
        }


        let qt = game.add.text(-440, -700, "Это вам по душе?", { font: "70px robotoM", fill: "#000000", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        this.mainTestGroup.add(qt);



        /*let testBack = game.add.image(0,0,'food1');
        testBack.anchor.set(0.5,0.5);
        testBack.scale.set(880/testBack.width,880/testBack.width)

        this.mainTestGroup.add(testBack);*/


        let likeButton = game.add.button(100,440,'button_vote',function(){

            if (this.canSelectCard)
                this.triggerVote("like")
        },this,0,0,0,0);
        likeButton.anchor.set(0.5,0.5);

        this.mainTestGroup.add(likeButton);
        let dislikeButton = game.add.button(-100,440,'button_vote',function(){

            if (this.canSelectCard)
                this.triggerVote("dislike")
        },this,1,1,1,1);
        dislikeButton.anchor.set(0.5,0.5);

        this.mainTestGroup.add(dislikeButton);


        this.stepText = game.add.text(-440, 690, "0/20", { font: "55px robotoM", fill: "#000000", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        this.mainTestGroup.add(this.stepText);


        this.barGrey = game.add.image(-440,800,"bar_grey")
        this.barGrey.anchor.set(0,0.5);
        this.mainTestGroup.add(this.barGrey);


        this.barGreen = game.add.image(-440,800,"bar_green")
        this.barGreen.anchor.set(0,0.5);
        this.mainTestGroup.add(this.barGreen);

        this.barFrom = -440;
        this.barTo = -440+700;

        this.lock = game.add.image(-420,790,"lock");
        this.lock.anchor.set(0.5,0.5);
        this.mainTestGroup.add(this.lock)

        let heart = game.add.image(440,800,"heart");
        heart.anchor.set(1,0.5);
        this.mainTestGroup.add(heart);


        this.testStep = 0;
        this.barStep = 0;

        this.rorWas = false;



        this.barMask = game.add.graphics(0, 0);
        this.barMask.beginFill(0xffffff);


        this.barMask.drawRect(0, 0, 700, 100);

        this.barGreen.mask = this.barMask;

        
        this.barMask.y = 750;
        this.mainTestGroup.add(this.barMask);

        
        this.mainTestGroup.visible = false;


        this.mainMathGroup = game.add.group();
        this.mainMathGroup.visible = false;

        this.mathObject = []

        for (let i=0;i<8;i++)
        {
            let mo = game.add.image(-300+Math.random()*600,-300+Math.random()*600,"math"+(i+1));
            mo.alpha = Math.random()
            mo.anchor.set(0.5,0.5);
            this.mainMathGroup.add(mo);

            this.mathObject.push({
                obj : mo,
                dir : Math.random()*360,
                spd : 1+Math.random(),
                ad : Math.random()
            })
        }


        this.mathTimer = 0;


        this.barGrey2 = game.add.image(0,400,"bar_grey")
        this.barGrey2.anchor.set(0.5,0.5);
        this.mainMathGroup.add(this.barGrey2);

        this.barGreen2 = game.add.image(0,400,"bar_green")
        this.barGreen2.anchor.set(0.5,0.5);
        this.mainMathGroup.add(this.barGreen2);


        this.barMask2 = game.add.graphics(0, 0);
        this.barMask2.beginFill(0xffffff);


        this.barMask2.drawRect(0, 0, 700, 100);

        this.barGreen2.mask = this.barMask2;

        
        this.barMask2.y = 400-50;
        this.mainMathGroup.add(this.barMask2);

        
        this.mathText = game.add.text(0, 520, "подбираем...", { font: "70px robotoB", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        this.mathText.anchor.set(0.5,0.5)
        this.mainMathGroup.add(this.mathText);


        this.mainFinalGroup = game.add.group();

        this.finalGroup1 = game.add.group();
        this.finalGroup2 = game.add.group();
        this.finalGroup2.y = 1400;

        this.mainFinalGroup.add(this.finalGroup1);
        this.mainFinalGroup.add(this.finalGroup2);



        let bm = game.add.image(0,0,"final_back");
        bm.anchor.set(0.5,0.5);

        this.finalGroup1.add(bm);

        let hh = -350;

        /*
        this.finalImage = game.add.image(0,hh,"final_test");
        this.finalImage.anchor.set(0.5,0.5);
        
        this.finalImage.scale.set(400/this.finalImage.width,400/this.finalImage.width)

        this.finalGroup1.add(this.finalImage);*/


        this.finalImageGroup = game.add.group();
        this.finalImageGroup.y = hh;
        this.finalGroup1.add(this.finalImageGroup);


        
        let cm = game.add.image(0,hh,"circle_overlay");
        cm.anchor.set(0.5,0.5);
        this.finalGroup1.add(cm);

        let ft1 = game.add.text(0, -84, "пароль от вашего сердечка:", { font: "50px robotoM", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        ft1.anchor.set(0.5,0.5)
        this.finalGroup1.add(ft1);

        let pb = game.add.image(0,40,"password_rect");
        pb.anchor.set(0.5,0.5);
        this.finalGroup1.add(pb);

        
        this.finalPassText = game.add.text(0, 40, "переноска_для_собак", { font: "50px robotoM", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        this.finalPassText.anchor.set(0.5,0.5)
        this.finalGroup1.add(this.finalPassText);



        this.finalCategoryText = game.add.text(0, 230, "вы чаще всего выбирали\nкатегории «путешествия»\nи «домашние животные»",
            { font: "40px robotoM", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
            this.finalCategoryText.anchor.set(0.5,0.5)
        this.finalGroup1.add(this.finalCategoryText);


        let xw = 150;

        this.restartButton = game.add.button(xw*1.5,440,'button_restart',function(){

            
            ym(92442722,'reachGoal',"click_restart")

            game.state.start('GameState');
        },this,0,0,0,0);
        this.restartButton.anchor.set(0.5,0.5);

        this.finalGroup1.add(this.restartButton);


        this.shareButton = [null,null,null];

        for (let i=0;i<3;i++)
        {
            this.shareButton[i] = game.add.button(xw*(-1.5+i),440+50,'button_share',function(){

                let url = "https://heartpass.ru/"
                let pass = "Мой пароль: "+this.showPass;


                if (i==0)
                {
                    this.openURL("http://vk.com/share.php?url="+url+"&title="+pass,"share_vk")
                }
                else if (i==1)
                {

                    this.openURL("https://connect.ok.ru/offer?url="+url,"share_ok")
                }
                else if (i==2)
                {
                    this.openURL("https://t.me/share/url?url="+url+"&text="+pass,"share_tg")
                }


            },this,i,i,i,i);
            this.shareButton[i].anchor.set(0.5,0.5);
    
            this.finalGroup1.add(this.shareButton[i]);

            this.shareButton[i].visible = false;
    
        }
 
        let shareBigPressed = false;
        this.shareBigI = 0;
        this.shareButtonBig = game.add.button(xw*(-0.5),440,'button_share_big',function(){


            if (!shareBigPressed)
            {
                ym(92442722,'reachGoal',"click_share")

                shareBigPressed = true;
                for (let i=0;i<3;i++)
                {
                    this.shareButton[i].alpha = 0;
                    this.shareButton[i].visible = true;
                    let tween1 = this.game.add.tween(this.shareButton[i]);
                    tween1.to({y:440,alpha:1},
                        Phaser.Timer.SECOND/2,
                        Phaser.Easing.Quartic.Out
                    );
                    tween1.onComplete.add(function () {
                        
                    }.bind(this));
                    tween1.start();
                }
                let tween2 = this.game.add.tween(this.shareButtonBig);
                tween2.to({y:440-50,alpha:0},
                    Phaser.Timer.SECOND/2,
                    Phaser.Easing.Quartic.Out
                );
                tween2.onComplete.add(function () {
                    this.shareButtonBig.visible = false;
                }.bind(this));
                tween2.start();
            }


        },this,0,0,0,0);
        this.shareButtonBig.anchor.set(0.5,0.5);

        this.finalGroup1.add(this.shareButtonBig);




        bm = game.add.image(0,0,"final_back");
        bm.anchor.set(0.5,0.5);

        this.finalGroup2.add(bm);

        let ft4 = game.add.text(-370, -540, "Не страшно, что ваш\nпароль от сердечка\nтакой простой.",
        { font: "60px robotoM", fill: "#000000", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        ft4.anchor.set(0,0)
        this.finalGroup2.add(ft4);

        let ft5 = game.add.text(-370, -300, "Главное, чтобы его знал нужный человек.",
        { font: "35px robotoM", fill: "#000000", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        ft5.anchor.set(0,0)
        this.finalGroup2.add(ft5);

        
        this.blueBack = [null,null,null,null];

        //0,-20 -390,-120,+150,+420 (+270)

        this.blueBack[0] = game.add.image(0,-20,"final_blue");
        this.blueBack[0].anchor.set(0.5,0.5);
        this.finalGroup2.add(this.blueBack[0]);

        this.blueBack[1] = game.add.image(0,-20,"final_blue");
        this.blueBack[1].anchor.set(0.5,0.5);
        this.finalGroup2.add(this.blueBack[1]);


        this.finalRect = [null,null,null,null];

        this.finalText = [null,null,null,null];

        let texts = [">12","cM1","!#%","2FA"];
        let textsData = ["Надёжный пароль — это\nминимум 12 символов.",
        "Используйте в пароле цифры\nи буквы разных регистров.\n«M» и «m» — это разные символы.",
        "Не забывайте про знаки препинания\nи спецсимволы. Это дополнительно\nусложняет пароль.",
        "Двухфакторная аутентфикация\nзащитит аккаунт, даже если\nзлоумышленники узнают пароль."];

        this.blueBack[2] = game.add.image(0,-20,"final_blue");
        this.blueBack[2].anchor.set(0.5,0.5);
        this.finalGroup2.add(this.blueBack[2]);

        for (let i=0;i<4;i++)
        {
                
            this.finalRect[i] = game.add.button(0,0,"final_rect",function(){

                if (!this.finalMoving && !this.finalWhiteGroup.visible)
                {

                    ym(92442722,'reachGoal',"click_more"+(i+1))

                    this.finalWhiteGroup.visible = true;
                    this.finalWhiteHeader.text = texts[i];
                    this.finalWhiteText.text = textsData[i];
                }
            },this);
            this.finalRect[i].anchor.set(0.5,0.5);
            this.finalGroup2.add(this.finalRect[i]);


            this.finalText[i] = game.add.text(0, 0, texts[i],
            { font: "75px robotoM", fill: "#ffffff", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
            this.finalText[i].anchor.set(0,0)
            this.finalGroup2.add(this.finalText[i]);
        }

        this.finalWhiteGroup = game.add.group();
        this.finalWhiteGroup.y = -20;
        this.finalWhiteGroup.visible = false;

        this.finalWhiteBack = game.add.image(0,0,"final_white_rect")
        this.finalWhiteBack.anchor.set(0.5,0.5);
        this.finalWhiteGroup.add(this.finalWhiteBack);
        

        
        this.finalClose = game.add.button(315,-165,"final_close",function(){
            this.finalWhiteGroup.visible = false;
        },this);
        this.finalClose.anchor.set(0.5,0.5);
        this.finalWhiteGroup.add(this.finalClose);

        
        this.finalWhiteHeader = game.add.text(-330, -190, ">12",
            { font: "90px robotoM", fill: "#0077FF", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        this.finalWhiteHeader.anchor.set(0,0)
        this.finalWhiteGroup.add(this.finalWhiteHeader);

        
        this.finalWhiteText = game.add.text(-330, -70, "Надёжный пароль — это\nминимум 12 символов.",
            { font: "35px robotoM", fill: "#000000", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        this.finalWhiteText.anchor.set(0,0)
        this.finalWhiteGroup.add(this.finalWhiteText);

        this.finalGroup2.add(this.finalWhiteGroup);
        
        this.blueBack[3] = game.add.image(0,-20,"final_blue");
        this.blueBack[3].anchor.set(0.5,0.5);
        this.finalGroup2.add(this.blueBack[3]);


        this.introFinalText = game.add.text(-370, -180, "Но пароли от аккаунтов\nдолжны быть гораздо\nсложнее",
        { font: "60px robotoM", fill: "#ffffff", align: "left", boundsAlignH: "center", boundsAlignV: "middle" });
        this.introFinalText.anchor.set(0,0)
        this.finalGroup2.add(this.introFinalText);



        this.openFinalK = 0;

        this.finalMoving = false;

        this.finalButton = game.add.button(300,70,'button_final',function(){

            if (!this.finalMoving)
            {
                ym(92442722,'reachGoal',"click_more")

                this.finalMoving = true;

                this.finalWhiteGroup.visible = false;


                let moveTo = 1-this.openFinalK;
                

                let tween = this.game.add.tween(this);
                tween.to({openFinalK:moveTo},
                    Phaser.Timer.SECOND/2,
                    Phaser.Easing.Quartic.Out
                );
                tween.onComplete.add(function () {
                    this.finalMoving = false;
                }.bind(this));
                tween.start();

            }
            
        },this,0,0,0,0);
        this.finalButton.anchor.set(0.5,0.5);

        this.finalGroup2.add(this.finalButton);

        this.finalShowPos = 0;



        this.finalOffset = 0;
        this.finalStartPos = 0;



        this.mainFinalGroup.visible = false;
        

            

        this.canSelectCard = false;



        this.startClickPos = {x:0,y:0}
        this.clickActive = false;

        this.currentCardId = null;
        
        game.input.onDown.add(this.onDown, this);
        game.input.onUp.add(this.onUp, this);

        this.categoryScore = {};
        this.categoryPool = {};


        CATEGORIES.forEach(function(e){

            this.categoryScore[e] = 0;
            this.categoryPool[e] = [];

            for (let i=0;i<CATEGORIES_IMAGE_NUM;i++)
            {
                this.categoryPool[e].push(e+(i+1))
            }
        }.bind(this));


        
        let whiteOverlay = this.game.add.image(GAME_WIDTH/2,GAME_HEIGHT/2,"white");
        whiteOverlay.anchor.set(0.5,0.5);
        whiteOverlay.scale.set(2000/100,2000/100);
        whiteOverlay.alpha = 1;

        let tween = this.game.add.tween(whiteOverlay);
        tween.to({alpha:0},
                Phaser.Timer.SECOND/2,
                Phaser.Easing.Circular.Out
            );
        tween.onComplete.add(function () {
                whiteOverlay.visible = false;
            }.bind(this));
        tween.start();

        //this.showMath();

    },

    onDown : function() {



        this.finalStartPos = this.finalOffset;
        this.clickActive = true;
        this.startClickPos = {x:game.input.x,y:game.input.y}


        if (!this.tutorialMoving && this.currentTutorial<5)
        {

            let transitionLength = Phaser.Timer.SECOND/2;


            this.tutorialMoving = true;
            
            let tween = this.game.add.tween(this);
            tween.to({currentTutorial:this.currentTutorial+1},
                transitionLength,
                Phaser.Easing.Quartic.InOut
            );
            tween.onComplete.add(function () {
                this.tutorialMoving = false

                if (this.currentTutorial==5)
                {
                    
                    this.startTest();
                    this.mainTutorialGroup.visible = false
                }
                
            }.bind(this));
            tween.start();


            
            if (this.currentTutorial===3)
            {
                let tween2 = this.game.add.tween(this.buttonNext1);
                tween2.to({x:1000},
                    transitionLength/2,
                    Phaser.Easing.Back.In
                );
                tween2.start();
            }

            if (this.currentTutorial===4)
            {
                
                let tween3 = this.game.add.tween(this.buttonStart.scale);
                tween3.to({x:1.5,y:1.5},
                    transitionLength,
                    Phaser.Easing.Back.In
                );
                tween3.start();
            }
        }

    },

    onUp : function()
    {
        this.startClickPos = {x:0,y:0}
        
        this.clickActive = false;


        if (this.canSelectCard)
        {
            
            if (this.cardPos[this.testStep].x<-0.3)
            {
                this.triggerVote("like")
            }
            else if (this.cardPos[this.testStep].x>0.3)
            {

                this.triggerVote("dislike")
            }
        }
    },


    triggerVote : function(type) 
    {

        if (type==="like")
        {
            
            let catName = this.currentCardId.slice(0, -1);

            this.categoryScore[catName]+=1;
        }


        this.canSelectCard = false;
        let new_x = type === "like" ? -1 : 1;


        let tween = this.game.add.tween(this.cardPos[this.testStep]);
        tween.to({x:new_x*1.5},
            Phaser.Timer.SECOND/2,
            Phaser.Easing.Quartic.Out
        );
        tween.onComplete.add(function () {
            
        }.bind(this));
        tween.start();

        this.testStep +=1;
        if (this.testStep<TEST_STEPS)
        {

            this.showCard();
        }
        else
        {

            let tween = this.game.add.tween(this.mainTestGroup);
            tween.to({alpha:0},
                Phaser.Timer.SECOND/2,
                Phaser.Easing.Circular.InOut
            );
            tween.onComplete.add(function () {
    
            }.bind(this));
            tween.start();

            this.showMath();

        }

    },

    showMath : function()
    {

        
        ym(92442722,'reachGoal',"test_end")

        this.mainMathGroup.visible = true;

        let tween = this.game.add.tween(this);
        tween.to({mathTimer:1},
            Phaser.Timer.SECOND*4,
            Phaser.Easing.Linear.None
        );
        tween.onComplete.add(function () {

            this.showFinal();

            let tween3 = this.game.add.tween(this.mainMathGroup);
            tween3.to({alpha:0},
                Phaser.Timer.SECOND/3,
                Phaser.Easing.Circular.InOut
            );
            tween3.onComplete.add(function () {
    
                
    
            }.bind(this));
            tween3.start();
        }.bind(this));
        tween.start();

        let tween2 = this.game.add.tween(this.mainMathGroup);
        tween2.to({alpha:1},
            Phaser.Timer.SECOND*2,
            Phaser.Easing.Circular.InOut
        );
        tween2.onComplete.add(function () {

            

        }.bind(this));
        tween2.start();



        let arr = [];
        CATEGORIES.forEach(function(e)
        {
            if (e!=="ror")
                arr.push([e,this.categoryScore[e]]);
        }.bind(this));

        arr = arr.sort(function(a,b) {

            return -((a[1] < b[1]) ? -1 : ((a[1] > b[1]) ? 1 : 0));

        })



        let cat1 = arr[0][0];
        let cat2 = arr[1][0];

        this.showId = null;
        this.showPass = null;


        for (let i=0;i<FINAL_DATA.length;i++)
            if ((cat1===FINAL_DATA[i]["Theme1"] && cat2===FINAL_DATA[i]["Theme2"]) || (cat1===FINAL_DATA[i]["Theme2"] && cat2===FINAL_DATA[i]["Theme1"]))
                {
                    this.showId = FINAL_DATA[i]["image_id"];
                    this.showPass = FINAL_DATA[i]["name"];
                }
        
        this.showPass = this.showPass.replace(/ /g,'_');  

        this.showCategory = "вы чаще всего выбирали\nкатегории «"+CATEGORIES_NAME[cat1]+"» и «"+CATEGORIES_NAME[cat2]+"»";


        if (arr[0][1]===0 && arr[1][1]===0)
        {
            this.showId = "zero";
            this.showPass = "любопытный_тестировщик"
            this.showCategory = "Наверняка вам что-то всё-таки\nпонравилось. Пройдите тест\nзаново и выберите что-нибудь"
        
            
            ym(92442722,'reachGoal',"tester")
        }
        else
        {
            
            ym(92442722,'reachGoal',"has_"+cat1)
            ym(92442722,'reachGoal',"has_"+cat2)
        }

        game.load.image(this.showId,"assets/final_compressed/"+this.showId+".jpg");
        game.load.start();


    },


    showFinal : function() 
    {


        ym(92442722,'reachGoal',"result_loaded")

        this.finalImage = game.add.image(0,0,this.showId);
        this.finalImage.anchor.set(0.5,0.5);
        
        this.finalImage.scale.set(400/this.finalImage.width,400/this.finalImage.width)

        this.finalImageGroup.add(this.finalImage);

        this.finalPassText.text = this.showPass;

        this.finalCategoryText.text = this.showCategory;


        
        this.mainFinalGroup.visible = true;
        let tween = this.game.add.tween(this);
        tween.to({finalShowPos:1},
            Phaser.Timer.SECOND*1,
            Phaser.Easing.Circular.Out
        );
        tween.onComplete.add(function () {

        }.bind(this));
        tween.start();
    },
    startTest : function()
    {


        ym(92442722,'reachGoal',"test_start")

        this.mainTestGroup.visible = true;
        this.mainTestGroup.alpha = 0;
        let tween = this.game.add.tween(this.mainTestGroup);
        tween.to({alpha:1},
            Phaser.Timer.SECOND/2,
            Phaser.Easing.Quartic.In
        );
        tween.onComplete.add(function () {
            this.showCard()
        }.bind(this));
        tween.start();


        
    },


    popNextCardId : function()
    {
        let fullList = [];

        CATEGORIES.forEach(function(e)
        {
            if (e==="ror" && this.rorWas)
                return;
            for (let i=0;i<this.categoryPool[e].length;i++)
            {
                fullList.push(this.categoryPool[e][i]);
            }
        }.bind(this))

        
        let cId = fullList[Math.floor(Math.random()*fullList.length)];

      
        let catName = cId.slice(0, -1);
        //let catNum = cId.charAt(cId.length-1);


        let index = this.categoryPool[catName].indexOf(cId);
        
        this.categoryPool[catName].splice(index, 1);

        if (catName==="ror")
            this.rorWas = true;

        return cId


    },

    showCard : function()
    {


        this.currentCardId = this.popNextCardId();


        let im = game.add.image(0,0,this.currentCardId);
        im.anchor.set(0.5,0.5);
        im.scale.set(880/im.width,880/im.width)

        this.testGroup[this.testStep].add(im);

        let imo = game.add.image(0,0,"image_overlay");
        imo.anchor.set(0.5,0.5);

        this.testGroup[this.testStep].add(imo);


        let tween = this.game.add.tween(this.cardPos[this.testStep]);
        tween.to({y:1},
            Phaser.Timer.SECOND/2,
            Phaser.Easing.Circular.Out
        );
        tween.onComplete.add(function () {

            this.canSelectCard = true;
        }.bind(this));
        tween.start();


        //this.mainTestGroup.add(im);
        




    },

    update : function () {

        if (this.mainFinalGroup.visible)
        {
            if (this.clickActive)
            {

                this.finalOffset = this.finalStartPos - (this.startClickPos.y - game.input.y)*1.5;


                if (this.finalOffset>0)
                    this.finalOffset = 0;
                if (this.finalOffset<-1400)
                    this.finalOffset = -1400;
            }
        }
        

        this.mainTutorialGroup.x = GAME_WIDTH/2;
        this.mainTutorialGroup.y = GAME_HEIGHT/2;

        
        this.mainTestGroup.x = GAME_WIDTH/2;
        this.mainTestGroup.y = GAME_HEIGHT/2;

        
        this.mainMathGroup.x = GAME_WIDTH/2;
        this.mainMathGroup.y = GAME_HEIGHT/2-400;

        
        this.mainFinalGroup.x = GAME_WIDTH/2;
        this.mainFinalGroup.y = GAME_HEIGHT/2+this.finalOffset+(1-this.finalShowPos)*2000;


        for (let i=0;i<5;i++)
        {
            this.tutorialGroup[i].x = -(Math.min(this.currentTutorial,4)-i)*GAME_WIDTH;

            let aa = Math.abs(this.currentTutorial-i);
            if (aa>1)
                aa = 1;

            this.tutorialGroup[i].alpha = 1-aa;

            let sc = 0.5+(1-aa)/2;

            this.circles[i].scale.set(sc,sc);

            
            if (this.currentTutorial>0.5 && this.currentTutorial<2.5)
                this.circles[i].frame = 1;
            else
                this.circles[i].frame = 0;



        }
        if (this.currentTutorial>1 && this.currentTutorial<2)
            game.stage.backgroundColor = '#212121';
        else
            game.stage.backgroundColor = '#ffffff';



       

        if (this.canSelectCard)
        {   
            
            

            if (this.clickActive)
            {
                let offx = 0;
                offx = (this.startClickPos.x - game.input.x)/GAME_WIDTH;

                this.cardPos[this.testStep].x = offx;
            }
            else
            {
                let tt = 1/10;
                if (this.cardPos[this.testStep].x>tt*1.5)
                    this.cardPos[this.testStep].x-=tt;
                else if (this.cardPos[this.testStep].x<-tt*1.5)
                    this.cardPos[this.testStep].x+=tt;
                else 
                    this.cardPos[this.testStep].x=0;

            }
        }

        for (let i=0;i<TEST_STEPS;i++)
        {
            let aa = this.cardPos[i].y;

            if (Math.abs(this.cardPos[i].x)>0.2)
            {
                aa -= Math.abs(this.cardPos[i].x)-0.2
            }

            if (aa<0)
                aa = 0;
            if (aa>1)
                aa = 1;
            this.testGroup[i].alpha = aa;
            this.testGroup[i].y = 150*(1-this.cardPos[i].y)

            this.testGroup[i].x = -900*(this.cardPos[i].x)

            this.testGroup[i].rotation = -Math.PI/10*this.cardPos[i].x;

            
        }




        this.stepText.text = (this.testStep) +"/"+TEST_STEPS;


        if (this.barStep<this.testStep)
            this.barStep+=5/60

        this.lock.x = this.barFrom+20 + (this.barTo-20-this.barFrom-20)*this.barStep/TEST_STEPS

        this.barMask.x = this.barFrom+(this.barTo-this.barFrom)*(-1+this.barStep/TEST_STEPS);


        if (this.mainMathGroup.visible)
        {

            
            this.barMask2.x = -700/2+700*(-1+this.mathTimer);

            for (let i=0;i<8;i++)
                {
                    let aa = this.mathObject[i].dir/180*Math.PI;
                    let spd = this.mathObject[i].spd;

                    this.mathObject[i].obj.x += Math.cos(aa)*spd;
                    this.mathObject[i].obj.y += Math.sin(aa)*spd;


                    if (Math.abs(this.mathObject[i].obj.x)>300 || Math.abs(this.mathObject[i].obj.y)>300)
                    {
                        this.mathObject[i].obj.x = 0;
                        this.mathObject[i].obj.y = 0;
                        this.mathObject[i].obj.alpha = 0;
                        this.mathObject[i].ad = 0.25+Math.random()/2;
                    }

                    let ka = 0.025;

                    if (this.mathObject[i].obj.alpha<this.mathObject[i].ad-ka)
                        this.mathObject[i].obj.alpha+=ka
                    if (this.mathObject[i].obj.alpha>this.mathObject[i].ad+ka)
                        this.mathObject[i].obj.alpha-=ka;

                    let rr = 1;

                    if (Math.abs(this.mathObject[i].obj.x)>250 || Math.abs(this.mathObject[i].obj.y)>250)
                        rr = Math.min(300-Math.abs(this.mathObject[i].obj.x),300-Math.abs(this.mathObject[i].obj.y))/50;


                    this.mathObject[i].obj.alpha = Math.min(this.mathObject[i].obj.alpha,rr)

                    if (Math.random()<1/(60*3))
                    {

                        this.mathObject[i].ad = 0.1+Math.random()*0.8;
                        this.mathObject[i].dir = Math.random()*360;
                    }
                    
                }

            let ss = "подбираем"

            for (let i=0;i<Math.floor(this.mathTimer*10) % 4;i++)
            {
                ss+=".";
            }

            this.mathText.text = ss;
        }


        this.shareBigI+=1;

        let sc = 1+Math.cos(this.shareBigI/20)/20;

        this.shareButtonBig.scale.set(sc,sc);


        if (this.openFinalK>0)
            this.finalButton.scale.set(1,-1)
        else
            this.finalButton.scale.set(1,1);


        for (let i=0;i<4;i++)
        {
            this.introFinalText.y = -180 - 360*this.openFinalK;

            
            this.blueBack[i].y = -20 + this.openFinalK*(-390+270*i);

            this.finalButton.y = 70+400*this.openFinalK;


            
            this.finalRect[i].visible = this.openFinalK>0;

            this.finalRect[i].x = (-1+2*(i%2))*200*this.openFinalK;

            
            this.finalRect[i].y = -20+ (-1+2*(Math.floor(i/2)))*120*this.openFinalK;

            this.finalText[i].x = this.finalRect[i].x-130;
            this.finalText[i].y = this.finalRect[i].y-80;
        }


    },

    openURL : function (url,goal) {



        ym(92442722,'reachGoal',goal)

        let gameCanvas = document.getElementsByTagName('canvas')[0];

            if (gameCanvas !== null)  {
                let endInteractFunction = function() {
                    window.open(url, this.mode, this.mode === '' ? `width=${this.width},height=${this.height}` : '');
                    gameCanvas.onmouseup = null;
                    gameCanvas.ontouchend = null;
                }

                gameCanvas.ontouchend = endInteractFunction;
                gameCanvas.onmouseup = endInteractFunction;
            }

    }


}
