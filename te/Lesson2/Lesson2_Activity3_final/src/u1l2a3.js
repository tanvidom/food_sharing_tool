 window.onload = function()
 {
 var background;
  var count_no_of_attempts = 0;
  var count_no_of_attempts_1 = 0;
  var count_no_of_attempts_2 = 0;
 var question_text_upper;
 var question_text_lower;
 var instruction_text;
 var answer_text1;
 var groups = [];
var number_of_pieces = [];
 var linkofdemo;
  var tips = [];
   var yay_sound;
 var click_sound;
 var cutting_board;
 var plates = [];
 var workers1 = [];
 var cutting_board;
 var plates1 = [];
 var paratha_no;
 var check = [];
 var parathas_on_board = [];
 var workers2 = [];
 var plates2 = [];
 var parathas1 = [];
 var input_answer1;
 var parathas2= [];
 var paratha_num;
 var parathas2_num;
 var sharing_done_btn;
 var reset_btn;
 var radio_buttons = [];
 var radio_texts = [];
 var selected = false;
 var rotis = [];
 var workers = [];
 var rect = [];
 var style3;
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
var buttons_hover = ['1_MOUSE_OVER','2_MOUSE_OVER','3_MOUSE_OVER','4_MOUSE_OVER','5_MOUSE_OVER','6_MOUSE_OVER'];
var buttons_down = ['1_MOUSE_DOWN','2_MOUSE_DOWN','3_MOUSE_DOWN','4_MOUSE_DOWN','5_MOUSE_DOWN','6_MOUSE_DOWN'];
 var worker_names = ['sprite121','sprite115','sprite129','sprite147','sprite143','sprite114','sprite136','sprite144','sprite122','sprite138','sprite130'];
 var p1 = 0;
 var reg={};
 var help_button;
 var game = new Phaser.Game(800, 640);
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
 var rect = [];
 var done_button;
 var playGame = function(game){}
 playGame.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.image('background','assets/full_background.png');
    game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
    game.load.webfont('tahoma','Tahoma');
    game.load.atlasJSONHash('m1','assets/l2a1_m1.png','assets/l2a1_m1.json');
    game.load.atlasJSONHash('m2','assets/modals_l2a3.png','assets/modals_l2a3.json');
    game.load.image('close_button','assets/close_button_normal.png');

  },
  create : function()
  {
       reg.modal = new gameModal(game);
        this.createModals();
    background = game.add.sprite(0,0,'background');
    var style = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(185,15,' సమూహం -ఎ లో 4 మంది పనివారికి నేను 5 పరాటాలు ఇచ్చాను మరియు సమూహం -బి  లోని 5 మంది పనివారికి 4 పరాటాలు ఇచ్చాను. కావున రెండు సమూహాలలో 4 మరియు 5 అవే సంఖ్యలు.',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 500;
    groups[0] = game.add.sprite(30,95,'lesson2','WORKER_BACK_GROUP_A');
    groups[1] = game.add.sprite(30,310,'lesson2','WORKER_BACK_GROUP_B');
    plates[0] = game.add.sprite(29,207,'lesson2','FOOD_PLATE');
    plates[1] = game.add.sprite(29,423,'lesson2','FOOD_PLATE');
    for (var i =0; i<9; i++)
    {
      if(i<5)
      {
       rotis[i] = game.add.sprite(240 + (i*70), 220,'lesson2','PARATHA');
      }
      if(i >=5)
      {
        rotis[i] = game.add.sprite(180 + ((i-4)*70), 435,'lesson2','PARATHA');
      }
    }
    for(var j = 0;j<9;j++)
    {
      if(j<4)
      {
      workers[j] = game.add.sprite(200 + (j*110),127,'lesson2',worker_names[j]);
      }
      if(j>=4)
      {
       workers[j] = game.add.sprite(250 + ((j-5)*110),342,'lesson2',worker_names[j]);
      }
    }
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,550,'పరాటాలను సరియైన విధంగా పంచారని మీరు అనుకుంటున్నారా?',style4);
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,569,'క్రింది ఎంపికలలో ఒకటి ఎన్నుకోండి మరియు చేయడమైనది క్లిక్ చేయండి.',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(339,569,'Done ',style2);
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,590,'lesson2','radio-highlighted');
    radio_texts[0] = game.add.text(92,593,'అవును',style3);
    radio_texts[1] = game.add.text(197,593,'లేదు',style3);
    //radio_texts[2] = game.add.text(306,593,'Workers in both groups got the same share',style3);
    //radio_texts[3] = game.add.text(642,593,'I do not know',style3);
    radio_buttons[1] = game.add.sprite(176,590,'lesson2','radio-highlighted');
    //radio_buttons[2] = game.add.sprite(285,590,'lesson2','radio-highlighted');
    //radio_buttons[3] = game.add.sprite(623,590,'lesson2','radio-highlighted');
    for(var i=0;i<2;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }

     done_button = game.add.button(77,618,'lesson2',this.done_Action,this,'sprite128','sprite132','sprite125');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;

  },
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'m1',
            content : 'sprite2'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 205,
            offsetY: -83,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite105',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p1');

          }

        },
          ]

    });
   },
    showModal1:function() {
    reg.modal.showModal("modal1");
},
  done_Action : function()
  {
    if(radio_buttons[0].selectedcheck == true)
    {
      this.showModal1();
    }
    else if(radio_buttons[1].selectedcheck == true)
    {
//      this.showModal1();
     game.state.start('question_two');
	}
  },
  input_function : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<2;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('lesson2','radio-highlighted');
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('lesson2','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
    },
    input_function1 : function(item)
    {

    }
 }
 var question_two = function(game){}
 question_two.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.image('background','assets/full_background.png');
    game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
    game.load.webfont('tahoma','Tahoma');
    game.load.image('scrnshot','assets/scrensht_a3.png');
    game.load.image('lower_band','assets/lower.png');

  },
  create : function()
  {
    var screenshot = game.add.sprite(0,0,'scrnshot');
    var lowerband = game.add.sprite(0,508,'lower_band');
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,550,'ఏ సమూహంలోని పనివారు ఆహారాన్ని ఎక్కువ వాటా పొందారు?',style4);
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,569,'క్రింది ఎంపికలలో ఒకటి ఎన్నుకోండి మరియు చేయడమైనది క్లిక్ చేయండి.',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(339,569,'Done ',style2);
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,590,'lesson2','radio-highlighted');
    radio_texts[0] = game.add.text(92,593,'సమూహం- ఏ  ',style3);
    radio_texts[1] = game.add.text(197,593,'సమూహం -బి  ',style3);
    radio_texts[2] = game.add.text(306,593,'రెండు సమూహాలలోని పనివారు ఒకే వాటాని పొందారు.',style3);
    radio_texts[3] = game.add.text(642,593,'నాకు తెలియదు ',style3);
    radio_buttons[1] = game.add.sprite(176,590,'lesson2','radio-highlighted');
    radio_buttons[2] = game.add.sprite(285,590,'lesson2','radio-highlighted');
    radio_buttons[3] = game.add.sprite(623,590,'lesson2','radio-highlighted');
     for(var i=0;i<4;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function1,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }

     done_button = game.add.button(77,618,'lesson2',this.done_Action1,this,'sprite128','sprite132','sprite125');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;


  },
  done_Action1 : function()
  {
     game.state.start('question_three');
  },
  input_function1 : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<4;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('lesson2','radio-highlighted');
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('lesson2','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
  }
}
  var a1_p1 = function(game){}
  a1_p1.prototype=
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
   game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
   game.load.webfont('tahoma','Tahoma');
   game.load.image('top','assets/top.png');
  },
  create : function()
  {
   //reg.modal = new gameModal(game);
        //this.createModals();
    background = game.add.sprite(0,0,'top');
    var style = { font: "12px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(125,5,'ఒక్కో సమూహానికి పరాటాలు పంచండి మరియు ఒక్కొక్కరి వాటాను కనుగొనండి.',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style1 = { font: "italic 11px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(130,20,'1. సమూహం-ఎ కొరకు  ఆహారం పంచడం  క్లిక్ చేసి ప్రారంభించండి.  ',style1);
    var style2 = { font: "bold 11px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(240,28,'Share Food Packets  ',style2);
    var instruction_text2 = game.add.text(130,35,'2. సమూహం-ఎ కి మీరు ఆహారం పంచడం పూర్తి చేసిన తరువాత, సమూహం బి కొరకు ఆహారం పంచడం  క్లిక్ చేయండి మరియు సమూహం- బి కి పంచడం పూర్తి చేయండి.',style1);
    instruction_text2.wordWrap = true;
    instruction_text2.wordWrapWidth = 540;
    instruction_text2.lineSpacing = -5;

    //var instruction_text3 = game.add.text(445,42,' Share Food Packets  ',style2);
    groups[0] = game.add.sprite(30,95,'lesson2','WORKER_BACK_GROUP_A');
    groups[1] = game.add.sprite(30,380,'lesson2','WORKER_BACK_GROUP_B');
    plates[0] = game.add.sprite(29,207,'lesson2','FOOD_PLATE');
    plates[1] = game.add.sprite(29,493,'lesson2','FOOD_PLATE');
     for (var i =0; i<9; i++)
    {
      if(i<5)
      {
       rotis[i] = game.add.sprite(230 + (i*70), 220,'lesson2','PARATHA');
      }
      if(i >=5)
      {
        rotis[i] = game.add.sprite(200 + ((i-4)*70), 510,'lesson2','PARATHA');
      }
    }
    for(var j = 0;j<9;j++)
    {
      if(j<4)
      {
      workers[j] = game.add.sprite(200 + (j*110),127,'lesson2',worker_names[j]);
      }
      if(j>=4)
      {
       workers[j] = game.add.sprite(150 + ((j-4)*110),414,'lesson2',worker_names[j]);
      }
    }
    share_button_A = game.add.button(303,300,'lesson2',this.share_a_function,this,'sprite145','sprite141','sprite146');
    share_button_B = game.add.sprite(303,580,'lesson2','SHARE_FOOD_PACKET_BUTTON_DEACTIVATE');
  },
  share_a_function : function()
  {
    game.state.start('a1_p2');
  }

  }
  var question_three = function(game){}
  question_three.prototype =
  {
    init : function()
    {
      game.load = new CustomLoader(game);
    },
    preload : function()
    {
     game.load.webfont('tahoma','Tahoma');
    game.load.image('scrnshot','assets/scrensht_a3.png');
    game.load.image('lower_band','assets/lower.png');
    game.add.plugin(PhaserInput.Plugin);
    },
    create : function()
    {
       reg.modal = new gameModal(game);
        this.createModals();
    var screenshot = game.add.sprite(0,0,'scrnshot');
    var lowerband = game.add.sprite(0,508,'lower_band');
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,545,'ఈ ముగింపుని మీరు ఎలా చేసారు?',style4);
    instruction_text = game.add.text(78,560,'మీ జవాబు క్రింద నమోదు చేయండి మరియు చేయడమైనది క్లిక్ చేయండి. ',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(280,560,'Done ',style2);
    var input_answer = game.add.inputField(78, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 550,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0EC2F5',
    borderRadius: 6,

});
    done_button = game.add.button(77,618,'lesson2',this.showModal1,this,'sprite128','sprite132','sprite125');
     done_button.scale.setTo(0.7,0.7);



    },
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'m1',
            content : 'sprite2'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 205,
            offsetY: -83,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite105',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p1');
          }

        },
          ]

    });
   },
    showModal1:function()
  {
    reg.modal.showModal("modal1");
  },

  }
   var videoScreen = function(game){}
    videoScreen.prototype =
    {
      preload : function()
      {
        game.add.image('back','assets/back-button.png')
        game.load.video('demo','assets/demo.mp4');
      },
      create : function()
      {
        game.stage.backgroundColor = '#232323';
        video = game.add.video('demo');
        var sprite = video.addToWorld(0, 40, 0, 0);
        var style2 = { font: "bold 20px tahoma", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
        var back_text = game.add.text(690,10,'BACK',style2);
        back_text.inputEnabled = true;
        back_text.events.onInputDown.add(this.back_function,this);

        //var image4 = game.add.image(550,590,'back',this.back_function,this);


    //  true = loop
       video.play(true);

       game.input.onDown.add(this.pause, this);
      },
      pause : function()
      {

      video.paused = (video.paused) ? false : true;

      },
      video_stop : function()
      {

      },
      back_function : function()
      {
        game.state.start('a1_p2');
      }

    }

  var a1_p2 = function(game){}
  a1_p2.prototype=
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
    game.load.atlasJSONHash('m12','assets/modals_l2a3.png','assets/modals_l2a3.json');
   game.load.image('back','assets/BG_SCREEN_4_6.png');
   game.load.image('top','assets/top_band.png');
   game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
   game.load.webfont('tahoma','Tahoma');
   game.load.image('lower','assets/lower.png');
   game.load.atlasJSONHash('buttons','assets/spritesheet_112.png','assets/sprites_112.json');
   game.load.image('cookie1/2','assets/images/2/1.png');
    game.load.image('cookie1/3','assets/images/3/1.png');
    game.load.image('cookie1/4','assets/images/4/3.png');
    game.load.image('cookie1/5','assets/images/5/3.png');
    game.load.image('cookie1/6','assets/images/6/1.png');
    game.load.image('close_button','assets/close_button_normal.png');
    game.add.plugin(PhaserInput.Plugin);
     game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
    game.load.audio('cutting_board1','assets/sounds/cutting_board_sound_chop3.wav');

  },
  create : function()
  {
    reg.modal = new gameModal(game);
        this.createModals();
         cutting_sound = game.add.audio('cutting_board1');
        yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');
   background = game.add.sprite(0,0,'back');
  var upper = game.add.sprite(70,0,'top');
  var lower = game.add.sprite(0,500,'lower');
  var label = game.add.sprite(229,87,'lesson2','GROUP_A_LABLE');
  var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(66,545,'సమూహం-ఎ వాటా ఎంత?   ',style4);
    instruction_text = game.add.text(110,24,'పరాటాలను చిక్క ముక్కలుగా చేయడానికి కటింగ్ టూల్ ఉపయోగించండి మరియు పరాటాలు లేదా ముక్కలను ఒక్కో పని వారికి డ్రాగ్ చేసి మరియు డ్రాప్ చేయండి. ',style1);
    instruction_text.wordWrap = true;
    instruction_text.wordWrapWidth = 520;
    instruction_text.lineSpacing = -5;
    var style2 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(155,24,'Cutting Tool ',style2);
    question_text_upper = game.add.text(110,6,'సమూహం ఎలో 4మంది పనివారికి సరియైన విధంగా 5పరాటాలు పంచండి మరియు ఒక్కో పనివారి వాటాను కనుగొనండి.',style4);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style11 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text_lower = game.add.text(66,560,'మీ జవాబుని ఒక పూర్ణ సంఖ్య లేదా ఒక భిన్నం రూపంలో నమోదు చేయండి మరియు మీ జవాబు సరైందో కాదో చూసుకొనుటకు పంచుట అయినది క్లిక్ చేయండి ',style11);
    //var instruction_text_lower1 = game.add.text(450,560,' Sharing Done',style2);
    cutting_board = game.add.sprite(10,325,'lesson2','sprite126');
    var demo_bg = game.add.sprite(32,445,'lesson2','VIEW_DEMO_LINK_BG');
   rect[0] = game.add.sprite(10,325,null);
   game.physics.enable(rect[0],Phaser.Physics.ARCADE);
   rect[0].body.setSize(196,90,0,0);
   //adding workers
   for(var i=0;i<4;i++)
   {
    if(i<2)
    {
    workers1[i] = game.add.sprite(380 + (i*190),135,'lesson2',worker_names[i]);
    plates1[i] = game.add.sprite(350 + (i*190),200,'lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
    plates1[i].sum = 0;
    rect[i+1] = game.add.sprite(plates1[i].x,plates1[i].y,null);
    game.physics.enable(rect[i+1],Phaser.Physics.ARCADE);
    rect[i+1].body.setSize(108,70,0,0);
    }
    else
    {
    workers1[i] = game.add.sprite(380 + ((i-2)*190),325,'lesson2',worker_names[i]);
    plates1[i] = game.add.sprite(350 + ((i-2)*190),388,'lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
    plates1[i].sum = 0;
    rect[i+1] = game.add.sprite(plates1[i].x,plates1[i].y,null);
    game.physics.enable(rect[i+1],Phaser.Physics.ARCADE);
    rect[i+1].body.setSize(108,70,0,0);
    }
   }

   var style1 = { font: "bold 13px tahoma", fill: "#005DBA", boundsAlignH: "center", boundsAlignV: "middle" };
   linkofdemo = game.add.text(35,448,'యొక్క డెమో చూడండి కట్టింగ్ టూల్',style1);
   linkofdemo.inputEnabled = true;
   linkofdemo.events.onInputDown.add(this.linkofdemo_function,this);
   var graphics = game.add.graphics(34,464);
   graphics.beginFill("0x005DBA");
   graphics.lineStyle(1,"0x005DBA",1);
   graphics.lineTo(150,0)
   graphics.endFill();
   sharing_done_btn = game.add.button(66,615, 'lesson2',this.sharing_done_function,this,'sprite85','sprite87','sprite86');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.85,0.85);
   reset_btn = game.add.button(210, 615,'lesson2',this.reset_function,this,'sprite99','sprite97','sprite103');
   reset_btn.scale.setTo(0.85,0.85);
   for(var i=0;i<6;i++)
   {
   number_of_pieces[i] = game.add.button(20+(i*30),412,'buttons',this.cutting_function,this, buttons_hover[i],buttons[i],buttons_down[i]);
   number_of_pieces[i].num = i;

   }
    for(var i=0;i<5;i++)
    {
     parathas1[i] = game.add.sprite(84,107 + (i*35),'lesson2','PARATHA');
     parathas1[i].inputEnabled = true;
    parathas1[i].input.enableDrag(true);
   // parathas1[i].achor.x = 0.5;
    parathas1[i].weight = 1;
    parathas1[i].number = i;
    //parathas1[i].events.onDragStart.add(this.addGreenTiles, this);
    //parathas1[i].input.enableSnap(50,50, false, true);
    parathas1[i].anchor.setTo(0,0);

    game.physics.enable(parathas1[i],Phaser.Physics.ARCADE);
    parathas1[i].events.onDragStop.add(this.stopDrag,this);
    parathas1[i].originalPosition = parathas1[i].position.clone();
    }
    paratha_num = i +1;
   parathas1[4].loadTexture('lesson2','PARATHA_WITH_GLOW');
   parathas1[4].x = 80;
   help_button = game.add.sprite(720,5,'lesson2','HELP_mouse_over');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
   input_answer1 = game.add.inputField(66, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 50,
    height : 9,
    padding: 8,
    borderWidth: 2,
    borderColor: '#0EC2F5',
    borderRadius: 6,

});
   var answer_text1 = game.add.text(140,590,'parathas.',style4);

  },
  update : function()
{
  if ((/(^(\+|-)?\d+|-?\d+\/-?\d+)$/.test(input_answer1.value)) == false)
  {
            sharing_done_btn.tint = 0x666677;
            sharing_done_btn.inputEnabled = false;
        }
        else
        {
          sharing_done_btn.tint = 0xffffff;
           sharing_done_btn.inputEnabled = true;
        }
},
    linkofdemo_function : function()
  {
    console.log('hi');
     game.state.start('videoScreen');
  },
  cutting_function : function(item)
  {
     cutting_sound.play('',0,1);
   for(var i=0; i<parathas1.length; i++)
   {
     var check_cake_on_board = game.physics.arcade.overlap(parathas1[i],rect[0]);
     console.log(check_cake_on_board);
     if(check_cake_on_board == true)
     {

       parathas_on_board.push(parathas1[i]);
     }

   }
   console.log('hi');
   var num_of_pieces = item.num+1;
   console.log(num_of_pieces);
   if(parathas_on_board.length >0)
   {
   cutting_board.loadTexture('lesson2','sprite126');
   switch(num_of_pieces)
   {

    case 1:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    parathas1[paratha_num] = game.add.sprite(70,340, 'lesson2','PARATHA');
    parathas1[paratha_num].events.onDragStart.add(this.startDrag_1,this);
    parathas1[paratha_num].events.onDragStop.add(this.stopDrag_1,this);
    parathas1[paratha_num].inputEnabled = true;
    parathas1[paratha_num].input.enableDrag(true);
    parathas1[paratha_num].weight = 1;
    parathas1[paratha_num].number = paratha_num;
    game.physics.enable(parathas1[paratha_num],Phaser.Physics.ARCADE);
    for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    paratha_num++;
    break;
    case 2:
     for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,2,'cookie1/2',1.1,0.5);
    for(var x1=0; x1 < 6; x1++)
    {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 3:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,3,'cookie1/3',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
    {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 4:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,4,'cookie1/4',-0.1,-0.1);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 5:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,5,'cookie1/5',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 6:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,6,'cookie1/6',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;

   }
 }
  else
  {
    console.log("Please put cookie on board");
  }
  },
   circle: function(x1,y1,cuts,sprite,anx,any){
    var angle =90;
    var NoOfSection = cuts;
    var divisonangle = (360/NoOfSection);
    console.log(divisonangle);
    for (p=0;p < NoOfSection; p++) {
      var x =x1
      var y =y1
      parathas1[paratha_num] = game.add.sprite(x,y,sprite);
      parathas1[paratha_num].anchor.setTo(anx,any);
      parathas1[paratha_num].inputEnabled = true;
      parathas1[paratha_num].input.enableDrag(true);
      parathas1[paratha_num].weight = 1/NoOfSection;
      parathas1[paratha_num].number = paratha_num;
      game.physics.enable(parathas1[paratha_num],Phaser.Physics.ARCADE);
      parathas1[paratha_num].events.onDragStart.add(this.startDrag_1,this);
      parathas1[paratha_num].events.onDragStop.add(this.stopDrag_1,this);
       parathas1[paratha_num].originalPosition = parathas1[paratha_num].position.clone();
      console.log(angle);
      if(parathas1[paratha_num].weight == '0.5')
      {
        tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: "1/2",
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
    });
      }
        if(parathas1[paratha_num].weight == '0.3333333333333333')
        {
        tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: "1/3",
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        if(parathas1[paratha_num].weight == '0.25')
        {
        tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/4',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        if(parathas1[paratha_num].weight == '0.20')
        {
          tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/5',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        console.log("weight" + parathas1[paratha_num].weight);
        if(parathas1[paratha_num].weight == '0.16666666666666666')
        {
          tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont',
        //atlasParent :'atlas2', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/6',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
    console.log(tips[paratha_num]);
      parathas1[paratha_num].angle = angle;
      angle += divisonangle;
      console.log(angle);
      paratha_num++;
      p1++;
      }
},
  help_function : function()
  {
   window.open("./assets/fraction-chart_copywrite.png");
  },
  stopDrag : function(item)
  {
     click_sound.play('',0,1);
    paratha_no = item.number;
    var c =0;

    for(var i=0;i<5;i++)
    {
      var pos;
      //game.physics.arcade.enable(parathas1[cake_no]);
      check[i]=game.physics.arcade.overlap(parathas1[paratha_no],rect[i]);
      //check[i] = Phaser.Rectangle.containsRect(parathas1[cake_no].body, rect[i].body);
      console.log(rect[i]);
      console.log(check[i]);

      if(check[i] == true)
      {
        if(check[0] == true)
        {
            for(var i=0;i<parathas1.length;i++)
            {
              if(i !== paratha_no)
              {
              var check_paratha_on_board1 = game.physics.arcade.overlap(parathas1[i],rect[0]);
               if(check_paratha_on_board1 == true)
               {
                  parathas1[paratha_no].position.copyFrom(parathas1[paratha_no].originalPosition);
               }
            }  }
         }
        pos = i;
        c++;
      }

    }
    if(c>=1)
    {

      parathas1[paratha_no].loadTexture('lesson2','PARATHA');
       for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = true;
    }
      //parathas1[cake_no - 1].loadTexture('atlas1','CAKE_WITH_GLOW');
      //glow plates
      if(pos == 0)
      {

      for(var x1=0;x1<5;x1++)
      {
        cutting_board.loadTexture('lesson2','sprite126');
        plates1[x1].loadTexture('lesson2','PLATE_WITH_GLOW');

      }
    }
    if(paratha_no == 0)
        {
          sharing_done_btn.inputEnabled = true;
        }

    }

    else
    {
      parathas1[paratha_no].position.copyFrom(parathas1[paratha_no].originalPosition);
    }

  },
  startDrag_1 : function(item)
  {
    click_sound.play('',0,1);
  },
   stopDrag_1 : function(item)
 {
   click_sound.play('',0,1);
   var paratha_position = item.number;
   for(var i=1;i<5;i++)
   {
    var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[paratha_position],rect[i]);
    //console.log(check_cake_on_plate);
    if(check_paratha_on_plate == true)
    {
      //make all plates go glowless
      for(var j=0; j<4; j++)
      {
        plates1[j].loadTexture('lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
      }
    }

   }

 },
  linkofdemo_function : function()
  {
     game.state.start('videoScreen');
  },
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'m12',
            content : 'sprite1'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -90,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite120',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p3');
          }

        },
         {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite12',
          offsetX : 20,
          offsetY:  - 140,
        },

          ]

    });
     //modal 2
        reg.modal.createModal({
        type: "modal2",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'m12',
            content : 'sprite3'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 205,
            offsetY: -110,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 130,
          offsetY: 38,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 30,
          offsetY:  -160,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite6'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 147,
            offsetY: -80,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 95,
          offsetY: 25,
          callback: function()
          {
            reg.modal.hideModal("modal3");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 20,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal4",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite8'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 186,
            offsetY: -100,
            callback: function(){
                      reg.modal.hideModal("modal4");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite119',
          offsetX : 110,
          offsetY: 45,
          callback: function()
          {
            reg.modal.hideModal("modal4");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
            reg.modal.createModal({
        type: "modal5",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal5");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal5");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
             reg.modal.createModal({
        type: "modal6",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal6");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal6");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
        reg.modal.createModal({
        type: "modal7",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 700,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal7");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 120,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal7");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal8",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal8");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
  },
  showModal1:function() {
      yay_sound.play('',0,1);
    console.log('modal1');
    reg.modal.showModal("modal1");
},
showModal2:function() {
  console.log('modal2');
    reg.modal.showModal("modal2");
},
showModal3:function() {
   console.log('modal3');
    reg.modal.showModal("modal3");
},
showModal4:function() {
  console.log('modal4');
    reg.modal.showModal("modal4");
},
showModal5:function() {
    console.log('modal5');
    reg.modal.showModal("modal5");
},
showModal6:function() {
    console.log('modal6');
    reg.modal.showModal("modal6");
},
showModal7:function() {
    console.log('modal7');

    reg.modal.showModal("modal7");
},
showModal8 : function()
{
  reg.modal.showModal("modal8");
},
division : function(a,b,c,d)
 {
   console.log(a/b);
   console.log(c/d);
   var and = a/b;
   var mans = c/d;
    var value;
    if (and == mans)
    {
      value = true;
    }
    else
    {
      value = false;
    }

    return value;
},
  sharing_done_function : function()
  {
   count_no_of_attempts = count_no_of_attempts + 1;
  if(count_no_of_attempts < 4)
  {
    var splitted_text = [];
  var expected_sum = 1.25;
  var l = 0;
  var k =0;
  var check_cake_on_plate;
  if(input_answer1.value == '')
  {
    //please enter answer in textbox
    this.showModal3();
  }
  else
  {
    var cd = input_answer1.value;
  splitted_text = cd.split("/");
  console.log("a : " + splitted_text[0] );
  console.log("b :" + splitted_text[1] );
  var is_ans_true = this.division(splitted_text[0],splitted_text[1],5,4);
  for(var i=0;i<4;i++)
  {
    plates1[i].sum = 0;
    for(var j=0;j<parathas1.length;j++)
    {
     var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[j],rect[i+1]);
     console.log(check_cake_on_plate);
     if(check_paratha_on_plate == true)
     {
      plates1[i].sum = plates1[i].sum + parathas1[j].weight;
     }
    }
    console.log(expected_sum);
    console.log(plates1[i].sum);
    if(plates1[i].sum == expected_sum)
    {
     l=l+1;
    }
    if(plates1[i].sum == 0)
    {
      k=k+1;
    }
  }
    if(k == 4 && input_answer1.value!== null)
    {
     this.showModal5();
    }

    else if(l == 4 && (input_answer1.value == '5/4' || is_ans_true == true))
    {
      this.showModal1();
    }
    else if(l==4 && (input_answer1.value == '1.25' || is_ans_true == true))
    {
      this.showModal1();
      console.log('correct answer but please enter fractional value in textbox');
    }
    else if( l==4 && (input_answer1.value!=='5/4' || is_ans_true == false))
    {
      this.showModal2();
    }
    else if( l!==4 && (input_answer1.value == '5/4' || is_ans_true == true))
    {
      if(count_no_of_attempts == 1)
      {
        this.showModal6();
      }
      else if(count_no_of_attempts >= 2 || count_no_of_attempts == 3)
      {
        this.showModal6();
      }
      else
      {
        this.showModal8();
      }

    }
    else
    {
      this.showModal4();
    }
 } }
 else
 {
  game.state.start('answer_screen');

 }
},
  reset_function : function()
  {
    count_no_of_attempts = 0;
  game.state.start('a1_p2');
  }
  }
  var answer_screen = function(game){}
    answer_screen.prototype =
    {

      preload : function()
      {
       game.load.image('answer1','assets/l2a3_q1.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');

      },
      create : function()
      {
       game.stage.backgroundColor = "#00000";
       var answer_screen1 = game.add.sprite(100,100,'answer1');
       answer_screen1.scale.setTo(1, 1);
       var style = { font: "14px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'ఇది సరియైన విధంగా పంచే ఒక విధానం.4 మంది పనివారిలో 5 పరాటాలను సరియైనట్లు పంచే ఇతర మార్గాలను ఆలోచించండి.',style);
       var style1 = { font: "14px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text2= game.add.text(20,45,'కొనసాగడానికి  తరువాత క్లిక్ చేయండి.',style1);


       text1.wordWrap = true;
       text1.wordWrapWidth = 800;
       var next_button = game.add.sprite(550,580,'lesson2','sprite120');
       next_button.inputEnabled = true;
       next_button.events.onInputDown.add(this.next1_function,this);

      },
      next1_function : function()
      {
        game.state.start('a1_p3');
      }
    }
   var videoScreen_2 = function(game){}
    videoScreen_2.prototype =
    {
      preload : function()
      {
        game.add.image('back','assets/back-button.png')
        game.load.video('demo','assets/demo.mp4');
      },
      create : function()
      {
        game.stage.backgroundColor = '#232323';
        video = game.add.video('demo');
        var sprite = video.addToWorld(0, 40, 0, 0);
        var style2 = { font: "bold 20px tahoma", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
        var back_text = game.add.text(690,10,'BACK',style2);
        back_text.inputEnabled = true;
        back_text.events.onInputDown.add(this.back_function,this);

        //var image4 = game.add.image(550,590,'back',this.back_function,this);


    //  true = loop
       video.play(true);

       game.input.onDown.add(this.pause, this);
      },
      pause : function()
      {

      video.paused = (video.paused) ? false : true;

      },
      video_stop : function()
      {

      },
      back_function : function()
      {
        game.state.start('a1_p4');
      }

    }

  var a1_p3 = function(game){}
  a1_p3.prototype =
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
   game.load.image('top','assets/top.png');
   game.load.image('scrnsht','assets/scrnshot.png');
   game.load.webfont('tahoma','Tahoma');
  },
  create : function()
  {
    background = game.add.sprite(0,0,'top');
    var style = { font: "12px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(125,5,'ఒక్కో సమూహానికి పరాటాలు పంచండి మరియు ఒక్కొక్కరి వాటాను కనుగొనండి.',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style1 = { font: "italic 11px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(130,20,'1. సమూహం-ఎ కొరకు  ఆహారం పంచడం  క్లిక్ చేసి ప్రారంభించండి.  ',style1);
    var style2 = { font: "bold 11px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(240,28,'Share Food Packets  ',style2);
    var instruction_text2 = game.add.text(130,35,'2. సమూహం-ఎ కి మీరు ఆహారం పంచడం పూర్తి చేసిన తరువాత, సమూహం బి కొరకు ఆహారం పంచడం  క్లిక్ చేయండి మరియు సమూహం- బి కి పంచడం పూర్తి చేయండి.',style1);
    instruction_text2.wordWrap = true;
    instruction_text2.wordWrapWidth = 600;
    //var instruction_text3 = game.add.text(445,42,' Share Food Packets  ',style2);
    var scrnn = game.add.sprite(0,74,'scrnsht');
    share_button_B = game.add.button(303,530,'lesson2',this.share_b_function,this,'sprite145','sprite141','sprite146');

  },
  share_b_function : function()
  {
    game.state.start('a1_p4');
  }

  }
  var a1_p4 = function(game){}
  a1_p4.prototype =
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
    game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
    game.load.atlasJSONHash('m1','assets/l2a1_m1.png','assets/l2a1_m1.json');
   game.load.image('back','assets/BG_SCREEN_4_6.png');
   game.load.image('top','assets/top_band.png');
   game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
   game.load.webfont('tahoma','Tahoma');
   game.load.image('lower','assets/lower.png');
   game.load.atlasJSONHash('buttons','assets/spritesheet_112.png','assets/sprites_112.json');
   game.load.image('cookie1/2','assets/images/2/1.png');
    game.load.image('cookie1/3','assets/images/3/1.png');
    game.load.image('cookie1/4','assets/images/4/3.png');
    game.load.image('cookie1/5','assets/images/5/3.png');
    game.load.image('cookie1/6','assets/images/6/1.png');
    game.add.plugin(PhaserInput.Plugin);
    game.load.image('close_button','assets/close_button_normal.png');
     game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
    game.load.audio('cutting_board1','assets/sounds/cutting_board_sound_chop3.wav');

  },
  create : function()
  {
    reg.modal = new gameModal(game);
        this.createModals();
        count_no_of_attempts =0;
        cutting_sound = game.add.audio('cutting_board1');
        yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');
   background = game.add.sprite(0,0,'back');
  var upper = game.add.sprite(70,0,'top');
  var lower = game.add.sprite(0,500,'lower');
  var label = game.add.sprite(229,87,'lesson2','GROUP_B_LABLE');
  var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(66,545,'సమూహం-బి వాటా ఎంత?',style4);
    instruction_text = game.add.text(110,24,'పరాటాలను చిక్క ముక్కలుగా చేయడానికి కటింగ్ టూల్ ఉపయోగించండి మరియు పరాటాలు లేదా ముక్కలను ఒక్కో పని వారికి డ్రాగ్ చేసి మరియు డ్రాప్ చేయండి. ',style1);
    instruction_text.wordWrap = true;
    instruction_text.wordWrapWidth = 520;
    instruction_text.lineSpacing = -5;
    var style2 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
   // var instruction_text1 = game.add.text(155,24,'Cutting Tool ',style2);
    question_text_upper = game.add.text(110,6,'సమూహం బిలో 5 మంది పనివారికి సరియైన విధంగా 4 పరాటాలు పంచండి మరియు ఒక్కో పనివారి వాటాను కనుగొనండి.',style4);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style11 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text_lower = game.add.text(66,560,'మీ జవాబుని ఒక పూర్ణ సంఖ్య లేదా ఒక భిన్నం రూపంలో నమోదు చేయండి మరియు మీ జవాబు సరైందో కాదో చూసుకొనుటకు  పంచుట అయినది క్లిక్ చేయండి ',style11);
    //var instruction_text_lower1 = game.add.text(450,560,' Sharing Done',style2);
    cutting_board = game.add.sprite(10,325,'lesson2','sprite126');
    var demo_bg = game.add.sprite(32,445,'lesson2','VIEW_DEMO_LINK_BG');
   rect[0] = game.add.sprite(10,325,null);
   game.physics.enable(rect[0],Phaser.Physics.ARCADE);
   rect[0].body.setSize(196,90,0,0);
   //adding workers
   for(var i=0;i<5;i++)
   {
    if(i<3)
    {
    workers1[i] = game.add.sprite(295 + (i*180),135,'lesson2',worker_names[i]);
    plates1[i] = game.add.sprite(275 + (i*180),210,'lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
    plates1[i].sum = 0;
    rect[i+1] = game.add.sprite(plates1[i].x,plates1[i].y,null);
    game.physics.enable(rect[i+1],Phaser.Physics.ARCADE);
    rect[i+1].body.setSize(108,70,0,0);
    }
    else
    {
    workers1[i] = game.add.sprite(386 + ((i-3)*180),295,'lesson2',worker_names[i]);
    plates1[i] = game.add.sprite(358 + ((i-3)*180),368,'lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
    plates1[i].sum = 0;
    rect[i+1] = game.add.sprite(plates1[i].x,plates1[i].y,null);
    game.physics.enable(rect[i+1],Phaser.Physics.ARCADE);
    rect[i+1].body.setSize(108,70,0,0);
    }
   }

   var style1 = { font: "bold 13px tahoma", fill: "#005DBA", boundsAlignH: "center", boundsAlignV: "middle" };
   linkofdemo = game.add.text(35,448,'యొక్క డెమో చూడండి కట్టింగ్ టూల',style1);
   linkofdemo.inputEnabled = true;
   linkofdemo.events.onInputDown.add(this.linkofdemo_function,this);
   var graphics = game.add.graphics(34,464);
   graphics.beginFill("0x005DBA");
   graphics.lineStyle(1,"0x005DBA",1);
   graphics.lineTo(150,0)
   graphics.endFill();
   sharing_done_btn = game.add.button(66,615, 'lesson2',this.sharing_done_function,this,'sprite85','sprite87','sprite86');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.85,0.85);
   reset_btn = game.add.button(210, 615,'lesson2',this.reset_function,this,'sprite99','sprite97','sprite103');
   reset_btn.scale.setTo(0.85,0.85);
   for(var i=0;i<6;i++)
   {
   number_of_pieces[i] = game.add.button(20+(i*30),412,'buttons',this.cutting_function,this, buttons_hover[i],buttons[i],buttons_down[i]);
   number_of_pieces[i].num = i;

   }
    for(var i=0;i<4;i++)
    {
     parathas1[i] = game.add.sprite(84,120 + (i*30),'lesson2','PARATHA');
     parathas1[i].inputEnabled = true;
    parathas1[i].input.enableDrag(true);
   // parathas1[i].achor.x = 0.5;
    parathas1[i].weight = 1;
    parathas1[i].number = i;
    //parathas1[i].events.onDragStart.add(this.addGreenTiles, this);
    //parathas1[i].input.enableSnap(50,50, false, true);
    parathas1[i].anchor.setTo(0,0);

    game.physics.enable(parathas1[i],Phaser.Physics.ARCADE);
    parathas1[i].events.onDragStop.add(this.stopDrag,this);
    parathas1[i].originalPosition = parathas1[i].position.clone();
    }
    paratha_num = i +1;
   parathas1[3].loadTexture('lesson2','PARATHA_WITH_GLOW');
   parathas1[3].x = 80;
   help_button = game.add.sprite(720,5,'lesson2','HELP_mouse_over');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
   input_answer1 = game.add.inputField(66, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 50,
    height : 9,
    padding: 8,
    borderWidth: 2,
    borderColor: '#0EC2F5',
    borderRadius: 6,

});
   var answer_text1 = game.add.text(140,590,'పరాటాలు.',style4);

  },
  update : function()
{
  if ((/(^(\+|-)?\d+|-?\d+\/-?\d+)$/.test(input_answer1.value)) == false)
  {
            sharing_done_btn.tint = 0x666677;
            sharing_done_btn.inputEnabled = false;
        }
        else
        {
          sharing_done_btn.tint = 0xffffff;
           sharing_done_btn.inputEnabled = true;
        }
},
division : function(a,b,c,d)
 {
   console.log(a/b);
   console.log(c/d);
   var and = a/b;
   var mans = c/d;
    var value;
    if (and == mans)
    {
      value = true;
    }
    else
    {
      value = false;
    }

    return value;
},
  cutting_function : function(item)
  {
     cutting_sound.play('',0,1);
   for(var i=0; i<parathas1.length; i++)
   {
     var check_cake_on_board = game.physics.arcade.overlap(parathas1[i],rect[0]);
     console.log(check_cake_on_board);
     if(check_cake_on_board == true)
     {

       parathas_on_board.push(parathas1[i]);
     }

   }
   console.log('hi');
   var num_of_pieces = item.num+1;
   console.log(num_of_pieces);
   if(parathas_on_board.length >0)
   {
   cutting_board.loadTexture('lesson2','sprite126');
   switch(num_of_pieces)
   {

    case 1:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    parathas1[paratha_num] = game.add.sprite(70,340, 'lesson2','PARATHA');
    parathas1[paratha_num].events.onDragStart.add(this.startDrag_1,this);
    parathas1[paratha_num].events.onDragStop.add(this.stopDrag_1,this);
    parathas1[paratha_num].inputEnabled = true;
    parathas1[paratha_num].input.enableDrag(true);
    parathas1[paratha_num].weight = 1;
    parathas1[paratha_num].number = paratha_num;
    game.physics.enable(parathas1[paratha_num],Phaser.Physics.ARCADE);
    for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    paratha_num++;
    break;
    case 2:
     for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,2,'cookie1/2',1.1,0.5);
    for(var x1=0; x1 < 6; x1++)
    {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 3:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,3,'cookie1/3',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
    {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 4:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,4,'cookie1/4',-0.1,-0.1);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 5:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,5,'cookie1/5',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;
    case 6:
    for(var i = 0; i <parathas_on_board.length; i++)
    {
      parathas_on_board[i].destroy();
    }
    this.circle(95,370,6,'cookie1/6',0.5,-0.2);
     for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = false;
    }
    break;

   }
 }
  else
  {
    console.log("Please put cookie on board");
  }
  },
   circle: function(x1,y1,cuts,sprite,anx,any){
    var angle =90;
    var NoOfSection = cuts;
    var divisonangle = (360/NoOfSection);
    console.log(divisonangle);
    for (p=0;p < NoOfSection; p++) {
      var x =x1
      var y =y1
      parathas1[paratha_num] = game.add.sprite(x,y,sprite);
      parathas1[paratha_num].anchor.setTo(anx,any);
      parathas1[paratha_num].inputEnabled = true;
      parathas1[paratha_num].input.enableDrag(true);
      parathas1[paratha_num].weight = 1/NoOfSection;
      parathas1[paratha_num].number = paratha_num;
      game.physics.enable(parathas1[paratha_num],Phaser.Physics.ARCADE);
      parathas1[paratha_num].events.onDragStart.add(this.startDrag_1,this);
      parathas1[paratha_num].events.onDragStop.add(this.stopDrag_1,this);
       parathas1[paratha_num].originalPosition = parathas1[paratha_num].position.clone();
      console.log(angle);
      if(parathas1[paratha_num].weight == '0.5')
      {
        tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: "1/2",
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
    });
      }
        if(parathas1[paratha_num].weight == '0.3333333333333333')
        {
        tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: "1/3",
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        if(parathas1[paratha_num].weight == '0.25')
        {
        tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/4',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        if(parathas1[paratha_num].weight == '0.20')
        {
          tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/5',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
        console.log("weight" + parathas1[paratha_num].weight);
        if(parathas1[paratha_num].weight == '0.16666666666666666')
        {
          tips[p1] = new Phasetips(game,{
        targetObject: parathas1[paratha_num],
        font : 'fractionfont',
        //atlasParent :'atlas2', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/6',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top"
        });
        }
    console.log(tips[paratha_num]);
      parathas1[paratha_num].angle = angle;
      angle += divisonangle;
      console.log(angle);
      paratha_num++;
      p1++;
      }
},
  help_function : function()
  {
   window.open("./assets/fraction-chart_copywrite.png");
  },
  stopDrag : function(item)
  {
     click_sound.play('',0,1);
    paratha_no = item.number;
    var c =0;

    for(var i=0;i<6;i++)
    {
      var pos;
      //game.physics.arcade.enable(parathas1[cake_no]);
      check[i]=game.physics.arcade.overlap(parathas1[paratha_no],rect[i]);
      //check[i] = Phaser.Rectangle.containsRect(parathas1[cake_no].body, rect[i].body);
      console.log(rect[i]);
      console.log(check[i]);

      if(check[i] == true)
      {
        if(check[0] == true)
        {
            for(var i=0;i<parathas1.length;i++)
            {
              if(i !== paratha_no)
              {
              var check_paratha_on_board1 = game.physics.arcade.overlap(parathas1[i],rect[0]);
               if(check_paratha_on_board1 == true)
               {
                  parathas1[paratha_no].position.copyFrom(parathas1[paratha_no].originalPosition);
               }
            }  }
         }
        pos = i;
        c++;
      }

    }
    if(c>=1)
    {

      parathas1[paratha_no].loadTexture('lesson2','PARATHA');
       for(var x1=0; x1 < 6; x1++)
     {
      number_of_pieces[x1].inputEnabled = true;
    }
      //parathas1[cake_no - 1].loadTexture('atlas1','CAKE_WITH_GLOW');
      //glow plates
      if(pos == 0)
      {

      for(var x1=0;x1<5;x1++)
      {
        cutting_board.loadTexture('lesson2','sprite126');
        plates1[x1].loadTexture('lesson2','PLATE_WITH_GLOW');

      }
    }
    if(paratha_no == 0)
        {
          sharing_done_btn.inputEnabled = true;
        }

    }

    else
    {
      parathas1[paratha_no].position.copyFrom(parathas1[paratha_no].originalPosition);
    }

  },
  startDrag_1 : function(item)
  {
     click_sound.play('',0,1);
  },
   stopDrag_1 : function(item)
 {
   click_sound.play('',0,1);
   var paratha_position = item.number;
   for(var i=1;i<6;i++)
   {
    var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[paratha_position],rect[i]);
    //console.log(check_cake_on_plate);
    if(check_paratha_on_plate == true)
    {
      //make all plates go glowless
      for(var j=0; j<5; j++)
      {
        plates1[j].loadTexture('lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
      }
    }

   }

 },
  linkofdemo_function : function()
  {
     game.state.start('videoScreen_2');
  },
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite9'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 160,
            offsetY: -90,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite120',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
           game.state.start('a1_p5');
          }

        },
         {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite12',
          offsetX : 20,
          offsetY:  - 140,
        },

          ]

    });
     //modal 2
        reg.modal.createModal({
        type: "modal2",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'m1',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 225,
            offsetY: -90,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 130,
          offsetY: 34,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite6'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 147,
            offsetY: -80,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 95,
          offsetY: 25,
          callback: function()
          {
            reg.modal.hideModal("modal3");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 20,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal4",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite8'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 186,
            offsetY: -100,
            callback: function(){
                      reg.modal.hideModal("modal4");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite119',
          offsetX : 110,
          offsetY: 45,
          callback: function()
          {
            reg.modal.hideModal("modal4");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
            reg.modal.createModal({
        type: "modal5",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal5");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal5");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
             reg.modal.createModal({
        type: "modal6",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal6");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal6");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
        reg.modal.createModal({
        type: "modal7",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 700,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal7");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 120,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal7");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
           reg.modal.createModal({
        type: "modal8",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'modals11',
            content : 'sprite5'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 146,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal8");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
  },
  showModal1:function() {
      yay_sound.play('',0,1);
    reg.modal.showModal("modal1");
},
showModal2:function() {
    reg.modal.showModal("modal2");
},
showModal3:function() {
    reg.modal.showModal("modal3");
},
showModal4:function() {
    reg.modal.showModal("modal4");
},
showModal5:function() {
    reg.modal.showModal("modal5");
},
showModal6:function() {
    reg.modal.showModal("modal6");
},
showModal7:function() {
    reg.modal.showModal("modal7");
},
showModal8 : function()
{
  reg.modal.showModal("modal8");
},
  sharing_done_function : function()
  {
   count_no_of_attempts = count_no_of_attempts + 1;
  if(count_no_of_attempts < 4)
  {
    var splitted_text = [];
  var expected_sum = 0.8;
  var l = 0;
  var k =0;
  var check_cake_on_plate;
  if(input_answer1.value == '')
  {
    //please enter answer in textbox
    this.showModal3();
  }
  else
  {
    var cd = input_answer1.value;
  splitted_text = cd.split("/");
  console.log("a : " + splitted_text[0] );
  console.log("b :" + splitted_text[1] );
  var is_ans_true = this.division(splitted_text[0],splitted_text[1],4,5);
  for(var i=0;i<5;i++)
  {
    plates1[i].sum = 0;
    for(var j=0;j<parathas1.length;j++)
    {
     var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[j],rect[i+1]);
     console.log(check_cake_on_plate);
     if(check_paratha_on_plate == true)
     {
      plates1[i].sum = plates1[i].sum + parathas1[j].weight;
     }
    }
    console.log(expected_sum);
    console.log(plates1[i].sum);
    if(plates1[i].sum == expected_sum)
    {
     l=l+1;
    }
    if(plates1[i].sum == 0)
    {
      k=k+1;
    }
  }
    if(k == 5 && input_answer1.value!== null)
    {
     this.showModal5();
    }

    else if(l == 5 && (input_answer1.value == '4/5' || is_ans_true == true))
    {
      this.showModal1();
    }
    /*else if(l==5 && input_answer1.value == '0.8')
    {
      console.log('correct answer but please enter fractional value in textbox');
    }*/
    else if( l==5 && (input_answer1.value!=='4/5' || is_ans_true == false))
    {
      this.showModal2();
    }
    else if( l!==5 && (input_answer1.value == '4/5' || is_ans_true == true))
    {
      if(count_no_of_attempts == 1)
      {
        this.showModal6();
      }
      else if(count_no_of_attempts >= 2 || count_no_of_attempts == 3)
      {
        this.showModal6();
      }
      else
      {
        this.showModal8();
      }

    }
    else
    {
      this.showModal4();
    }
 } }
 else
 {
  game.state.start('answer_screen_2');

 }
},
  reset_function : function()
  {
    count_no_of_attempts = 0;
  game.state.start('a1_p4');
  }

  }
   var videoScreen = function(game){}
    videoScreen.prototype =
    {
      preload : function()
      {
        game.add.image('back','assets/back-button.png')
        game.load.video('demo','assets/demo.mp4');
      },
      create : function()
      {
        game.stage.backgroundColor = '#232323';
        video = game.add.video('demo');
        var sprite = video.addToWorld(0, 40, 0, 0);
        var style2 = { font: "bold 20px tahoma", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
        var back_text = game.add.text(690,10,'BACK',style2);
        back_text.inputEnabled = true;
        back_text.events.onInputDown.add(this.back_function,this);

        //var image4 = game.add.image(550,590,'back',this.back_function,this);


    //  true = loop
       video.play(true);

       game.input.onDown.add(this.pause, this);
      },
      pause : function()
      {

      video.paused = (video.paused) ? false : true;

      },
      video_stop : function()
      {

      },
      back_function : function()
      {
        game.state.start('a1_p2');
      }

    }

   var answer_screen_2 = function(game){}
    answer_screen_2.prototype =
    {

      preload : function()
      {
       game.load.image('answer1','assets/answerscreen1.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');

      },
      create : function()
      {
       game.stage.backgroundColor = "#00000";
       var answer_screen1 = game.add.sprite(100,100,'answer1');
       answer_screen1.scale.setTo(1, 1);
       var style = { font: "14px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'ఇది సరియైన విధంగా పంచే ఒక విధానం.4 మంది పనివారిలో 5 పరాటాలను సరియైనట్లు పంచే ఇతర మార్గాలను ఆలోచించండి.',style);
       var style1 = { font: "14px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text2= game.add.text(20,45,'కొనసాగడానికి  తరువాత క్లిక్ చేయండి.',style1);


       text1.wordWrap = true;
       text1.wordWrapWidth = 800;
       var next_button = game.add.sprite(550,580,'lesson2','sprite120');
       next_button.inputEnabled = true;
       next_button.events.onInputDown.add(this.next1_function,this);

      },
      next1_function : function()
      {
        game.state.start('a1_p5');
      }
    }
    var a1_p5 = function(game){}
    a1_p5.prototype =
    {
      init : function()
       {
     game.load = new CustomLoader(game);
      },

      preload : function()
      {
       game.load.image('answer21','assets/final.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
       game.load.atlasJSONHash('sprite111', 'assets/l2a3_final.png', 'assets/l2a3_final.json');
       game.load.image('lower','assets/lower.png');
       game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
       game.load.image('close_button','assets/close_button_normal.png');
       game.load.webfont('tahoma','Tahoma');

      },
      create : function()
      {
       reg.modal = new gameModal(game);
        this.createModals();
       var answer_screen1 = game.add.sprite(0,0,'answer21');
       answer_screen1.scale.setTo(1,0.98);
       var lowerband = game.add.sprite(0,500,'lower');
       lowerband.scale.setTo(1,0.9);
        var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        question_text_lower = game.add.text(78,540,'ఏ సమూహంలో వ్యక్తికి ఎక్కువ ఆహారాన్ని అందుకున్నారు?',style4);
        var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,560,'డ్రాప్‌డౌన్  జాబితా నుండి ఎంపికలలో ఒకటి ఎన్నుకోండి మరియు  చేయడమైనది  క్లిక్ చేయండి.',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
   // var instruction_text1 = game.add.text(340,560,'Done ',style2);
    radio_buttons[0] = game.add.sprite(77,578,'lesson2','radio-highlighted');
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_texts[0] = game.add.text(92,580,'సమూహం -ఏ  ',style3);
    radio_texts[1] = game.add.text(197,580,'సమూహం -బి  ',style3);
    radio_texts[2] = game.add.text(306,580,'రెండు సమూహాలలోని పనివారు ఒకే మొత్తంలో ఆహారం అందుకున్నారు.',style3);
    radio_buttons[1] = game.add.sprite(176,578,'lesson2','radio-highlighted');
    radio_buttons[2] = game.add.sprite(285,578,'lesson2','radio-highlighted');

    for(var i=0;i<3;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function1,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }

     done_button = game.add.button(77,607,'lesson2',this.next11_function,this,'sprite128','sprite132','sprite125');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;


  },
  input_function1 : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<3;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('lesson2','radio-highlighted');
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('lesson2','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
  },
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'sprite111',
            content : 'sprite2'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 150,
            offsetY: -90,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite120',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p6');
          }

        },
         {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite12',
          offsetX : 20,
          offsetY:  - 140,
        },

          ]

    });
     //modal 2
        reg.modal.createModal({
        type: "modal2",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'sprite111',
            content : 'sprite3'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -90,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 130,
          offsetY: 34,
          callback: function()
          {
            reg.modal.hideModal("modal2");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'sprite111',
            content : 'sprite4'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 255,
            offsetY: -150,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'lesson2',
          content: 'sprite107',
          offsetX : 95,
          offsetY: 30,
          callback: function()
          {
            game.state.start('a1_p6');
          }

        },
        {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite11',
          offsetX : 20,
          offsetY:  - 190,
        },
          ]
    });
        },
        showModal1:function() {
            yay_sound.play('',0,1);
    console.log('modal1');
    reg.modal.showModal("modal1");
},
showModal2:function() {
   console.log('modal2');
    reg.modal.showModal("modal2");
},
showModal3:function() {
   console.log('modal3');
    reg.modal.showModal("modal3");
},


      next11_function : function()
      {
        count_no_of_attempts_2 = count_no_of_attempts_2 + 1;
        if(count_no_of_attempts_2 < 3)
        {
        if(radio_buttons[0].selectedcheck == true)
        {
          this.showModal1();
        }
        else if(radio_buttons[1].selectedcheck == true)
        {
          this.showModal2();
        }
        else if(radio_buttons[2].selectedcheck == true)
        {
         this.showModal2();
        }
        }
        else
        {
         this.showModal3();
        }
      },
    }
    var a1_p6 = function(game){}
    a1_p6.prototype =
    {
      init : function()
  {
     game.load = new CustomLoader(game);
  },

      preload : function()
      {
        game.load.image('answer21','assets/final.png');
       //game.load.image('answer2','assets/last_q_2.png');
       game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json');
       game.load.image('lower','assets/lower.png');
       game.add.plugin(PhaserInput.Plugin);
       game.load.image('close_button','assets/close_button_normal.png');
       game.load.webfont('tahoma','Tahoma');
       game.load.atlasJSONHash('sprite111', 'assets/l2a3_final.png', 'assets/l2a3_final.json');

      },
      create : function()
      {
       reg.modal = new gameModal(game);
        this.createModals();
       var answer_screen1 = game.add.sprite(0,0,'answer21');
       answer_screen1.scale.setTo(1,0.98);
       var lowerband = game.add.sprite(0,500,'lower');
       lowerband.scale.setTo(1,0.95);
        var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        question_text_lower = game.add.text(78,540,'వ్యక్తికి ఎక్కువ ఆహారం ఏ సమూహం అందుకున్నారో మీరు ఎలా నిర్ణయించారు?',style4);
        var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,560,'క్రింద మీ జవాబు టైప్ చేయండి మరియు చేయడమైనది క్లిక్ చేయండి.',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    //var instruction_text1 = game.add.text(305,560,'Done ',style2);
 var input_answer = game.add.inputField(78, 580, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 550,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0EC2F5',
    borderRadius: 6,

});
    done_button = game.add.button(77,618,'lesson2',this.showModal1,this,'sprite128','sprite132','sprite125');
     done_button.scale.setTo(0.7,0.7);
  },
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'sprite111',
            content : 'sprite1'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 160,
            offsetY: -100,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
        {
               type : "text",
           content: "Close the tab to proceed.",
          offsetX : 0,
          offsetY: 40,
          fontFamily: "Arial",
          fontSize: 16,
          align: "left",
          color: "0xFF0000",

        },
         {
          type : 'sprite',
          atlasParent: 'modals11',
          content: 'sprite12',
          offsetX : 20,
          offsetY:  - 140,
        },

          ]

    });
},
showModal1:function() {
    console.log('modal1');
    reg.modal.showModal("modal1");
},
}

  /*
  var answer_a1_p2 = function(game){}
  answer_a1_p2.prototype =
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },

  }*/
game.state.add('PlayGame', playGame);
game.state.add('question_two',question_two);
game.state.add('question_three',question_three);
game.state.add('a1_p1',a1_p1);
game.state.add('a1_p2',a1_p2);
game.state.add('answer_screen',answer_screen);
game.state.add('answer_screen_2',answer_screen_2);
game.state.add('videoScreen',videoScreen);
game.state.add('videoScreen_2',videoScreen_2);
game.state.add('a1_p3',a1_p3);
game.state.add('a1_p4',a1_p4);
game.state.add('a1_p5',a1_p5);
game.state.add('a1_p6',a1_p6);
//game.state.add('answer_a1_p1',answer_a1_p1);
//game.state.add('answer_a1_p2',answer_a1_p2);
game.state.start('PlayGame');
}
