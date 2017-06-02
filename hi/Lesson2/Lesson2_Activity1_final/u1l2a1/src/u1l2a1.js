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
    game.load.image('close_button','assets/close_button_normal.png');
     game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
       game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');
  },
  create : function()
  {
       reg.modal = new gameModal(game);
        this.createModals();
    background = game.add.sprite(0,0,'background');
    var style = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(185,15,' समूह B की तुलना में समूह A  में एक मजदूर कम हैं। अत: मैंने जितने पराठे समूह B को दिए हैं, समूह A को उससे एक पराठा कम दिया है। ',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 400;
    groups[0] = game.add.sprite(30,95,'lesson2','WORKER_BACK_GROUP_A');
    groups[1] = game.add.sprite(30,310,'lesson2','WORKER_BACK_GROUP_B');
    plates[0] = game.add.sprite(29,207,'lesson2','FOOD_PLATE');
    plates[1] = game.add.sprite(29,423,'lesson2','FOOD_PLATE');
    for (var i =0; i<9; i++)
    {
      if(i<4)
      {
       rotis[i] = game.add.sprite(271 + (i*70), 220,'lesson2','PARATHA');
      }
      if(i >=4)
      {
        rotis[i] = game.add.sprite(238 + ((i-4)*70), 435,'lesson2','PARATHA');
      }
    }
    for(var j = 0;j<11;j++)
    {
      if(j<5)
      {
      workers[j] = game.add.sprite(140 + (j*110),127,'lesson2',worker_names[j]);
      }
      if(j>=5)
      {
       workers[j] = game.add.sprite(100 + ((j-5)*110),342,'lesson2',worker_names[j]);
      }
    }
    var style4 = { font: "15px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,550,'क्‍या आप सोचते हैं कि पराठों का वितरण निष्पक्ष है ?',style4);
    var style1 = { font: "italic 15px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,569,'नीचे दिये गए विकल्पों में से एक को चुनें और         पर क्लिक करें । ',style1);
    var style2 = { font: "bold 15px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(310,569,'किया ',style2);
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,590,'lesson2','radio-highlighted');
    radio_texts[0] = game.add.text(92,593,'हाँ',style3);
    radio_texts[1] = game.add.text(197,593,'नहीं',style3);
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
    
     done_button = game.add.button(77,618,'hindi_buttons4',this.done_Action,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
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
            atlasParent :'hindi_modals4',
            content : 'sprite4'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            game.state.start('question_two');
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
      
       game.state.start('a1_p1');
    } 
    else if(radio_buttons[1].selectedcheck == true)
    {
      this.showModal1();
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
    game.load.image('scrnshot_hi','assets/hi_scrn1.png');
    game.load.image('lower_band','assets/lower.png');
    game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');

  },
  create : function()
  {
    var screenshot = game.add.sprite(0,0,'scrnshot_hi');
    var lowerband = game.add.sprite(0,508,'lower_band');
    var style4 = { font: "15px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,545,'किस समूह में मजदूरों को भोजन का बड़ा हिस्‍सा मिलता है ?',style4);
    var style1 = { font: "italic 15px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,565,'नीचे दिए गए विकल्‍पों में से एक को चुनें और         पर क्लिक करें। ',style1);
    var style2 = { font: "bold 15px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(310,565,'किया ',style2);
    style3 = { font: "italic 15px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,590,'lesson2','radio-highlighted');
    radio_texts[0] = game.add.text(92,593,'समूह A',style3);
    radio_texts[1] = game.add.text(197,593,'समूह B ',style3);
    radio_texts[2] = game.add.text(306,593,'दोनों समूहों में मजदूरों को समान हिस्‍सा मिला',style3);
    radio_texts[3] = game.add.text(642,593,'मुझे मालूम नहीं',style3);
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
    
     done_button = game.add.button(77,618,'hindi_buttons4',this.done_Action1,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
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
   game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
  },
  create : function()
  {
   //reg.modal = new gameModal(game);
        //this.createModals();
    background = game.add.sprite(0,0,'top');
    var style = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(125,4,'प्रत्‍येक समूह में पराठे बाँट  दें और एक व्‍यक्ति के हिस्‍से का पता लगाएँ।',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(130,24,'1. समूह A के लिए              पर क्लिक करके शुरू करें।  ',style1);
    var style2 = { font: "bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(220,24,'भोजन बाँटें   ',style2);
    var instruction_text2 = game.add.text(130,43,'2. जब आपने समूह A के लिए भोजन बाँटने का काम पूरा कर लिया, तो समूह B के लिए                    पर क्लिक करें। ',style1);
    var instruction_text3 = game.add.text(530,43,'भोजन बाँटें   ',style2); 
    groups[0] = game.add.sprite(30,95,'lesson2','WORKER_BACK_GROUP_A');
    groups[1] = game.add.sprite(30,380,'lesson2','WORKER_BACK_GROUP_B');
    plates[0] = game.add.sprite(29,207,'lesson2','FOOD_PLATE');
    plates[1] = game.add.sprite(29,493,'lesson2','FOOD_PLATE');
     for (var i =0; i<9; i++)
    {
      if(i<4)
      {
       rotis[i] = game.add.sprite(271 + (i*70), 220,'lesson2','PARATHA');
      }
      if(i >=4)
      {
        rotis[i] = game.add.sprite(238 + ((i-4)*70), 510,'lesson2','PARATHA');
      }
    }
    for(var j = 0;j<11;j++)
    {
      if(j<5)
      {
      workers[j] = game.add.sprite(140 + (j*110),127,'lesson2',worker_names[j]);
      }
      if(j>=5)
      {
       workers[j] = game.add.sprite(100 + ((j-5)*110),414,'lesson2',worker_names[j]);
      }
    }
    share_button_A = game.add.button(303,300,'hindi_buttons4',this.share_a_function,this,'hindi_SHARE_FOOD_PACKET_BUTTON_over','hindi_SHARE_FOOD_PACKET_BUTTON_normal','hindi_SHARE_FOOD_PACKET_BUTTON_down');
    share_button_B = game.add.sprite(303,580,'hindi_buttons4','hindi_SHARE_FOOD_PACKET_BUTTON_deactivate');
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
    game.load.image('scrnshot_hi','assets/hi_scrn1.png');
    game.load.image('lower_band','assets/lower.png'); 
    game.add.plugin(PhaserInput.Plugin);
    game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
     game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');
      game.load.image('close_button','assets/close_button_normal.png');
    },
    create : function()
    {
       reg.modal = new gameModal(game);
        this.createModals();
    var screenshot = game.add.sprite(0,0,'scrnshot_hi');
    var lowerband = game.add.sprite(0,508,'lower_band');
    var style4 = { font: "15px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 15px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,545,'आप इस निष्‍कर्ष पर कैसे पहुँचे ?',style4);
    instruction_text = game.add.text(78,560,'अपना उत्‍तर नीचे एन्‍टर करें और         पर क्लिक करें।',style1);
    var style2 = { font: "bold 15px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(250,560,'किया',style2);
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
    done_button = game.add.button(77,618,'hindi_buttons4',this.showModal1,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     


    }, 
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals4',
            content : 'sprite4'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_NEXT_BUTTON_over',
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
      game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');

  },
  create : function()
  {
    
    reg.modal = new gameModal(game);
        this.createModals(); 
   background = game.add.sprite(0,0,'back');
  var upper = game.add.sprite(70,0,'top');
  var lower = game.add.sprite(0,500,'lower');
  var label = game.add.sprite(229,87,'lesson2','GROUP_A_LABLE');
  var style4 = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(66,538,'समूह A के प्रत्‍येक मजदूर का हिस्‍सा क्‍या है?',style4);
    instruction_text = game.add.text(110,25,'पराठों को छोटे टुकड़ों में काटने के लिए               का उपयोग करें और पराठों या टुकड़ों को ले कर प्रत्‍येक मजदूर के हिस्‍से में डाल दें। ',style1);
    instruction_text.wordWrap = true; 
    instruction_text.wordWrapWidth = 560; 
    instruction_text.lineSpacing = -5;
    var style2 = { font: "bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(290,25,'कटिंग टूल  ',style2);
    question_text_upper = game.add.text(110,5,'4 पराठे समूह A के 5 मजदूरों के बीच निष्पक्ष रूप से बाँटे और प्रत्‍येक मजदूर के हिस्‍से का पता लगाएँ।',style4);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style11 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text_lower = game.add.text(66,560,'अपने उत्‍तर को पूर्ण संख्‍या या भिन्‍न के रूप में एन्‍टर करें और अपने उत्‍तर की जाँच के लिए               पर क्लिक करें। ',style11);  
    var instruction_text_lower1 = game.add.text(480,560,'बाँट दिया',style2);
    cutting_board = game.add.sprite(10,325,'lesson2','sprite126');
    var demo_bg = game.add.sprite(32,445,'lesson2','VIEW_DEMO_LINK_BG');
   rect[0] = game.add.sprite(10,325,null);
   game.physics.enable(rect[0],Phaser.Physics.ARCADE);
   rect[0].body.setSize(196,117,0,0);
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
   linkofdemo = game.add.text(55,448,'कटिंग टूल का डेमो।',style1);
   linkofdemo.inputEnabled = true;
   linkofdemo.events.onInputDown.add(this.linkofdemo_function,this);
   var graphics = game.add.graphics(53,464);
   graphics.beginFill("0x005DBA");
   graphics.lineStyle(1,"0x005DBA",1);
   graphics.lineTo(100,0)
   graphics.endFill();
   sharing_done_btn = game.add.button(66,615, 'hindi_buttons4',this.sharing_done_function,this,'hindi_SHARING_BUTTON_over','hindi_SHARING_BUTTON_normal','hindi_SHARING_BUTTON_down');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.85,0.85);
   reset_btn = game.add.button(210, 615,'hindi_buttons4',this.reset_function,this,'hindi_RESET_BUTTON_over','hindi_RESET_BUTTON_normal','hindi_RESET_BUTTON_down');
   reset_btn.scale.setTo(0.85,0.85);
   for(var i=0;i<6;i++)
   {
   number_of_pieces[i] = game.add.button(20+(i*30),412,'buttons',this.cutting_function,this, buttons_hover[i],buttons[i],buttons_down[i]);
   number_of_pieces[i].num = i;

   }
    for(var i=0;i<4;i++)
    {
     parathas1[i] = game.add.sprite(84,125 + (i*35),'lesson2','PARATHA');
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
    paratha_num = i + 1;
   parathas1[3].loadTexture('lesson2','PARATHA_WITH_GLOW');
   parathas1[3].x = 80;
   help_button = game.add.sprite(720,5,'hindi_buttons4','hindi_HELP_OVER');
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
   var answer_text1 = game.add.text(140,590,'पराठा',style4);
   console.log('parathas2 : ' + parathas1);
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
     game.state.start('videoScreen');
  },
 /* render : function()
  {
    game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
  },*/
  cutting_function : function(item)
  {
   console.log('paraths3 :' + parathas1);
   console.log(parathas_on_board);
   for(var i=0; i<parathas1.length; i++)
   {
     var check_cake_on_board = game.physics.arcade.overlap(parathas1[i],rect[0]);
     console.log(check_cake_on_board);
     if(check_cake_on_board == true)
     {

       parathas_on_board.push(parathas1[i]);
     }

   } 
    console.log(parathas_on_board);
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
    parathas1[paratha_num].originalPosition = parathas1[paratha_num].position.clone();
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
  console.log('paraths4 :' + parathas1);
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
   window.open("../u1l2a1/assets/fraction-chart_copywrite.png");
  },
  stopDrag : function(item)
  {
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
                console.log('b1');
               //game.physics.arcade.enable(parathas1[i]);
               console.log('b2');
               var check_paratha_on_board1 = game.physics.arcade.overlap(parathas1[i],rect[0]);
               console.log('checker' + check_paratha_on_board1);
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

  },
   stopDrag_1 : function(item)
 {
   var paratha_position = item.number;
   for(var i=1;i<4;i++)
   {
    var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[paratha_position],rect[i]);
   // console.log(check_cake_on_plate);
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
            atlasParent :'hindi_modals4',
            content : 'sprite9'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 90,
          offsetY: 37,
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
            atlasParent :'hindi_modals4',
            content : 'sprite10'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite11'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite6'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite11'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite11'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite11'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
   console.log('modal8');
  reg.modal.showModal("modal8");
},
  sharing_done_function : function()
  {

   count_no_of_attempts = count_no_of_attempts + 1;

  if(count_no_of_attempts < 4)
  {
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
  for(var i=0;i<5;i++)
  {
    plates1[i].sum = 0;
    //console.log("sum" + plates1[i].sum);
    //console.log("length = "+ parathas1);
    for(var j=0;j<parathas1.length;j++)
    {
     var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[j],rect[i+1]);
     console.log(check_cake_on_plate);
     if(check_paratha_on_plate == true)
     {
      plates1[i].sum = plates1[i].sum + parathas1[j].weight;
      //console.log('plates sum '+ i + ' '+ plates1[i].sum);
      //console.log(parathas1.length);
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

    else if(l == 5 && input_answer1.value == '4/5')
    {
      this.showModal1();
    }
    else if(l==5 && input_answer1.value == '0.8')
    {
      this.showModal1();
      console.log('correct answer but please enter fractional value in textbox');
    }
    else if( l==5 && input_answer1.value!=='4/5')
    {   
      this.showModal2();
    }
    else if( l!==5 && input_answer1.value == '4/5')
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
       game.load.image('answer1','assets/answerscreen1.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
        game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');
       //game.load.atlasJSONHash('')
      },
      create : function()
      {
       game.stage.backgroundColor = "#00000"; 
       var answer_screen1 = game.add.sprite(100,100,'answer1');
       answer_screen1.scale.setTo(1, 1);
       var style = { font: "15px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'निष्पक्ष वितरण करने का यह एक तरीका है। 4 पराठे 5 मजदूरों में निष्पक्ष रूप से बाँटने के कुछ और तरीके सोचिए।',style);
       var style1 = { font: "15px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text2= game.add.text(20,45,'जारी रखने के लिए अगला पर क्लिक करें।',style1);


       text1.wordWrap = true;
       text1.wordWrapWidth = 800;
       var next_button = game.add.sprite(600,560,'hindi_buttons4','hindi_NEXT_BUTTON_over');
       next_button.inputEnabled = true;
       next_button.events.onInputDown.add(this.next1_function,this);

      },
      next1_function : function()
      {
        game.state.start('a1_p3');
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
        var back_text = game.add.text(690,10,'वापस',style2);
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
   game.load.image('scrnsht','assets/l2a1screen5a.png');
    game.load.image('close_button','assets/close_button_normal.png');
     game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');
  },
  create : function()
  {
    background = game.add.sprite(0,0,'top');
    var style = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(125,6,'प्रत्‍येक समूह में पराठे बाँट  दें और एक व्‍यक्ति के हिस्‍से का पता लगाएँ।',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 550;
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(130,24,'1. समूह A के लिए                  पर क्लिक करके शुरू करें।  ',style1);
    var style2 = { font: "bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(215,24,'भोजन बाँटें   ',style2);
    var instruction_text2 = game.add.text(130,43,'2. जब आपने समूह A के लिए भोजन बाँटने का काम पूरा कर लिया, तो समूह B के लिए                     पर क्लिक करें।',style1);
    var instruction_text3 = game.add.text(515,43,'भोजन बाँटें    ',style2); 
    var scrnn = game.add.sprite(0,60,'scrnsht');
    share_button_B = game.add.button(303,590,'hindi_buttons4',this.share_b_function,this,'hindi_SHARE_FOOD_PACKET_BUTTON_over','hindi_SHARE_FOOD_PACKET_BUTTON_normal','hindi_SHARE_FOOD_PACKET_BUTTON_down');

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
     game.load.image('close_button','assets/close_button_normal.png');
    game.add.plugin(PhaserInput.Plugin);
     game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');

  },
  create : function()
  {
    reg.modal = new gameModal(game);
        this.createModals(); 
   background = game.add.sprite(0,0,'back');
  var upper = game.add.sprite(70,0,'top');
  var lower = game.add.sprite(0,500,'lower');
  var label = game.add.sprite(229,87,'lesson2','GROUP_B_LABLE');
  var style4 = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(66,538,'समूह B में प्रत्‍येक मज़दूर का क्‍या हिस्‍सा है?',style4);
    instruction_text = game.add.text(110,26,'पराठों को छोटे टुकड़ों में काटने के लिए               को उपयोग में लें और पराठों या उनके टुकड़ों  को लेकर प्रत्‍येक मज़दूर के हिस्‍से में डाल दें।',style1);
    instruction_text.wordWrap = true; 
    instruction_text.wordWrapWidth = 520; 
    instruction_text.lineSpacing = -5;
    var style2 = { font: "bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(290,26,'कटिंग टूल  ',style2);
    question_text_upper = game.add.text(110,5,'समूह B के 6 मजदूरों के बीच निष्पक्ष रूप से 5 पराठे बाँटिए और प्रत्‍येक मजदूर के हिस्‍से का पता लगाएँ।',style4);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 600;
    var style11 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text_lower = game.add.text(66,560,'अपना उत्‍तर पूर्ण संख्‍या या भिन्‍न के रूप में एन्‍टर करें और अपने उत्‍तर की जाँच के लिए             पर क्लिक करें।',style11);  
    var instruction_text_lower1 = game.add.text(457,560,' बाँट दिया',style2);
    cutting_board = game.add.sprite(10,325,'lesson2','sprite126');
    var demo_bg = game.add.sprite(32,445,'lesson2','VIEW_DEMO_LINK_BG');
   rect[0] = game.add.sprite(10,325,null);
   game.physics.enable(rect[0],Phaser.Physics.ARCADE);
   rect[0].body.setSize(196,90,0,0);
   //adding workers 
   for(var i=0;i<6;i++)
   {
    if(i<3)
    {
    workers1[i] = game.add.sprite(295 + (i*180),135,'lesson2',worker_names[i+5]);
    plates1[i] = game.add.sprite(275 + (i*180),210,'lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
    plates1[i].sum = 0;
    rect[i+1] = game.add.sprite(plates1[i].x,plates1[i].y,null);
    game.physics.enable(rect[i+1],Phaser.Physics.ARCADE);
    rect[i+1].body.setSize(110,70,0,0);
    }
    else
    {
    workers1[i] = game.add.sprite(295 + ((i-3)*180),295,'lesson2',worker_names[i+5]);
    plates1[i] = game.add.sprite(275 + ((i-3)*180),368,'lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
    plates1[i].sum = 0;
    rect[i+1] = game.add.sprite(plates1[i].x,plates1[i].y,null);
    game.physics.enable(rect[i+1],Phaser.Physics.ARCADE);
    rect[i+1].body.setSize(110,70,0,0);
    }
   }
   
   var style1 = { font: "bold 13px tahoma", fill: "#005DBA", boundsAlignH: "center", boundsAlignV: "middle" };
   linkofdemo = game.add.text(66,448,'कटिंग टूल का डेमो।',style1);
   linkofdemo.inputEnabled = true;
   linkofdemo.events.onInputDown.add(this.linkofdemo_function,this);
   var graphics = game.add.graphics(64,464);
   graphics.beginFill("0x005DBA");
   graphics.lineStyle(1,"0x005DBA",1);
   graphics.lineTo(100,0)
   graphics.endFill();
   sharing_done_btn = game.add.button(66,615, 'hindi_buttons4',this.sharing_done_function,this,'hindi_SHARING_BUTTON_over','hindi_SHARING_BUTTON_normal','hindi_SHARING_BUTTON_down');
   sharing_done_btn.inputEnabled = false;
   sharing_done_btn.scale.setTo(0.85,0.85);
   reset_btn = game.add.button(210, 615,'hindi_buttons4',this.reset_function,this,'hindi_RESET_BUTTON_over','hindi_RESET_BUTTON_normal','hindi_RESET_BUTTON_down');
   reset_btn.scale.setTo(0.85,0.85);
   for(var i=0;i<6;i++)
   {
   number_of_pieces[i] = game.add.button(20+(i*30),412,'buttons',this.cutting_function,this, buttons_hover[i],buttons[i],buttons_down[i]);
   number_of_pieces[i].num = i;

   }
    for(var i=0;i<5;i++)
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
   parathas1[4].loadTexture('lesson2','PARATHA_WITH_GLOW');
   parathas1[4].x = 80;
   help_button = game.add.sprite(720,5,'hindi_buttons4','hindi_HELP_OVER');
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
   var answer_text1 = game.add.text(140,590,' पराठे',style4);
   
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
  /* render : function()
  {
    game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
  },*/
  cutting_function : function(item)
  {
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
   window.open("../u1l2a1/assets/fraction-chart_copywrite.png");
  },
  stopDrag : function(item)
  {
    paratha_no = item.number;
    var c =0;
    
    for(var i=0;i<7;i++)
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

      for(var x1=0;x1<6;x1++)
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

  },
   stopDrag_1 : function(item)
 {
   var paratha_position = item.number;
   for(var i=1;i<6;i++)
   {
    var check_paratha_on_plate = game.physics.arcade.overlap(parathas1[paratha_position],rect[i]);
    //console.log(check_cake_on_plate);
    if(check_paratha_on_plate == true)
    {
      //make all plates go glowless
      for(var j=0; j<6; j++)
      {
        plates1[j].loadTexture('lesson2','SCREEN_5_and_7_PLATES_ONLY_PLATE');
      }
    }

   }
   
 },
  linkofdemo_function : function()
  {
     game.state.start('videoScreen_1');
  },

    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals4',
            content : 'sprite13'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_NEXT_BUTTON_over',
          offsetX : 100,
          offsetY: 45,
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
            atlasParent :'hindi_modals4',
            content : 'sprite10'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -80,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite12'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite12'


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
            atlasParent :'hindi_modals4',
            content : 'sprite11'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -87,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 90,
          offsetY: 30,
          callback: function()
          {
            reg.modal.hideModal("modal8");
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
  }, 
  showModal1:function() {
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
   count_no_of_attempts_1 = count_no_of_attempts_1 + 1;
  if(count_no_of_attempts_1 < 4)
  {
  var expected_sum = 0.8333333333333333;
  var l = 0;
  var k =0;
  var check_cake_on_plate;
  if(input_answer1.value == '')
  {
    //please enter answer in textbox
    console.log('modals3')
    this.showModal3();
  }
  else
  {
  for(var i=0;i<6;i++)
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
    if(k == 6 && input_answer1.value!== null)
    {
      console.log('modal5');
     this.showModal5();
    }

    else if(l == 6 && input_answer1.value == '5/6')
    {
      console.log('modal1');
      this.showModal1();
    }
    else if(l==6 && input_answer1.value == '0.833' )
    {
      this.showModal1();
      console.log('correct answer but please enter fractional value in textbox');
    }
    else if( l==6 && input_answer1.value!=='5/6')
    {   
      this.showModal2();
      console.log('modal2');
    }
    else if( l!==6 && input_answer1.value == '5/6')
    {
      if(count_no_of_attempts == 1)
      {
        this.showModal6();
        console.log('modal6');
      }
      else if(count_no_of_attempts >= 2 || count_no_of_attempts == 3)
      {
        this.showModal6();
        console.log('modal6');
      }
      else 
      {
        this.showModal8();
        console.log('modal8');
      }
      
    }
    else 
    {
      this.showModal4();
      console.log('modal4');
    }
 } } 
 else 
 {
  game.state.start('answer_screen_2');

 }
},
  reset_function : function()
  {
    count_no_of_attempts_1 = 0;
  game.state.start('a1_p4');
  }

  }
  var videoScreen_1 = function(game){}
    videoScreen_1.prototype =
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
        var back_text = game.add.text(690,10,'वापस',style2);
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
      var answer_screen_2 = function(game){}
    answer_screen_2.prototype = 
    {
      
      preload : function()
      {
       game.load.image('answer2_2','assets/ans2.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
       //game.load.atlasJSONHash('')
        game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');
      },
      create : function()
      {

       game.stage.backgroundColor = "#00000"; 
       var answer_screen1 = game.add.sprite(50,100,'answer2_2');
       answer_screen1.scale.setTo(0.85, 0.95);
       var style = { font: "13px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text1 = game.add.text(20,25,'उचित वितरण का यह एक तरीका है। 6 मज़दूरों में 5 पराठों को निष्पक्ष रूप से बाँटने के अन्‍य तरीके सोचें।',style);
       var style1 = { font: "14px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
       var text2= game.add.text(20,45,'जारी रखने के लिए अगला पर क्लिक करें।',style1);


       text1.wordWrap = true;
       text1.wordWrapWidth = 800;
       var next_button = game.add.sprite(680,550,'lesson2','sprite120');
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

      
      preload : function()
      {
       game.load.image('answer2','assets/g4051.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
       game.load.atlasJSONHash('sprite111', 'assets/spritesheet.png', 'assets/sprites.json'); 
       game.load.image('lower','assets/lower.png');
       game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
       game.load.image('close_button','assets/close_button_normal.png');
        game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');

      },
      create : function()
      {
       reg.modal = new gameModal(game);
        this.createModals();    
       var answer_screen1 = game.add.sprite(0,0,'answer2');
       answer_screen1.scale.setTo(1.001,1.01);
       var lowerband = game.add.sprite(0,500,'lower');
       lowerband.scale.setTo(1,0.95);
        var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        var style41 = { font: "19px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        var upper_text = game.add.text(200,15,'आपने प्रत्‍येक समूह के लिए पराठों का वितरण किया है।',style41);
        question_text_lower = game.add.text(78,540,'किस समूह में मज़दूरों को प्रति व्‍यक्ति अधिक भोजन मिला?',style4);
        var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,560,'डाली गई सूची से कोई एक विकल्‍प चुने और          पर क्लिक करें। ',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(270,560,'किया  ',style2);
    radio_buttons[0] = game.add.sprite(77,578,'lesson2','radio-highlighted');
    style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_texts[0] = game.add.text(92,580,'समूह A',style3);
    radio_texts[1] = game.add.text(197,580,'समूह B',style3);
    radio_texts[2] = game.add.text(306,580,'दोनों समूहों  के मजदूरों को समान मात्रा में भोजन मिला ',style3);
    radio_buttons[1] = game.add.sprite(176,578,'lesson2','radio-highlighted');
    radio_buttons[2] = game.add.sprite(285,578,'lesson2','radio-highlighted');
    help_button = game.add.sprite(729,5,'hindi_buttons4','hindi_HELP_OVER');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
    for(var i=0;i<3;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function1,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }
    
     done_button = game.add.button(77,607,'hindi_buttons4',this.next11_function,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;


  },
   help_function : function()
  {
   window.open("../u1l2a1/assets/fraction-chart_copywrite.png");
  },

  input_function1   : function(item)
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
            atlasParent :'hindi_modals4',
            content : 'sprite15'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_NEXT_BUTTON_over',
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
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals4',
            content : 'sprite16'


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
          atlasParent: 'hindi_buttons4',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
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
            atlasParent :'hindi_modals4',
            content : 'sprite5'


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
          atlasParent: 'hindi_buttons4',
          content: 'HINDI_DONE_normal',
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
          this.showModal2();
        }
        else if(radio_buttons[1].selectedcheck == true)
        {
          this.showModal1();
        }
        else
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
      
      preload : function()
      {
         game.load.atlasJSONHash('modals11','assets/modals_a1.png','assets/modals_a1.json');
       game.load.image('answer2','assets/g4051.png');
       game.load.atlasJSONHash('lesson2', 'assets/lesson2.png', 'assets/lesson2.json'); 
       game.load.image('lower','assets/lower.png');
       game.add.plugin(PhaserInput.Plugin);
       game.load.image('close_button','assets/close_button_normal.png');
        game.load.atlasJSONHash('hindi_buttons4','assets/hindi_buttons4.png','assets/hindi_buttons4.json');
      game.load.atlasJSONHash('hindi_modals4','assets/hi_l2a1_modals.png','assets/hi_l2a1_modals.json');

      },
      create : function()
      {
       reg.modal = new gameModal(game);
        this.createModals(); 
       var answer_screen1 = game.add.sprite(0,0,'answer2');
       answer_screen1.scale.setTo(1.001,1.01);
       var lowerband = game.add.sprite(0,500,'lower');
       lowerband.scale.setTo(1,0.95);
       var style41 = { font: "19px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        var upper_text = game.add.text(200,15,'आपने प्रत्‍येक समूह के लिए पराठों का वितरण किया है।',style41);
       
        var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
        question_text_lower = game.add.text(78,540,'आपने कैसे तय किया कि किस समूह को प्रति मज़दूर अधिक भोजन मिला?',style4);
        var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,560,'अपना उत्‍तर नीचे एन्‍टर करें और          पर क्लिक करें।',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(225,560,'किया ',style2);
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
    done_button = game.add.button(77,618,'hindi_buttons4',this.showModal1,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     help_button = game.add.sprite(729,5,'hindi_buttons4','hindi_HELP_OVER');
  help_button.inputEnabled = true;
  help_button.events.onInputDown.add(this.help_function,this);
  },
  createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindi_modals4',
            content : 'sprite8'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 220,
            offsetY: -90,
            callback: function()
                    {
                      reg.modal.hideModal("modal1");
                    }
        },
  {
        type : "text",
           content: "आगे बढ़ने के लिए टैब को बंद करें|",
          offsetX : 0,
          offsetY: 40,
          fontFamily: "Arial",
          fontSize: 15,
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
help_function : function()
  {
   window.open("../u1l2a1/assets/fraction-chart_copywrite.png");
  },
}
game.state.add('PlayGame', playGame);
game.state.add('question_two',question_two);
game.state.add('question_three',question_three);
game.state.add('a1_p1',a1_p1);
game.state.add('a1_p2',a1_p2);
game.state.add('answer_screen',answer_screen);
game.state.add('answer_screen_2',answer_screen_2);
game.state.add('videoScreen',videoScreen);
game.state.add('videoScreen_1',videoScreen_1);
game.state.add('a1_p3',a1_p3);
game.state.add('a1_p4',a1_p4);
game.state.add('a1_p5',a1_p5);
game.state.add('a1_p6',a1_p6);

//game.state.add('answer_a1_p1',answer_a1_p1);
//game.state.add('answer_a1_p2',answer_a1_p2);
game.state.start('PlayGame');
}


 


