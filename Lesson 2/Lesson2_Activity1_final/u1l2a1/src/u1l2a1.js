 window.onload = function()
 {
 var background;
 var question_text_upper;
 var question_text_lower;
 var instruction_text;
 var answer_text1;
 var groups = [];
 var plates = [];
 var radio_buttons = [];
 var radio_texts = [];
 var rotis = [];
 var workers = [];
 var worker_names = ['sprite121','sprite115','sprite129','sprite147','sprite143','sprite114','sprite136','sprite144','sprite122','sprite138','sprite130'];
 var p1 = 0;
 var reg={};
 var help_button;
 var game = new Phaser.Game(800, 640);
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
 var rect = [];
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
    game.add.plugin(PhaserInput.Plugin);

  },
  create : function()
  {
    background = game.add.sprite(0,0,'background');
    var style = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(185,15,'Group A has one worker less than Group B. So I have given Group A one paratha less than I have given Group B.',style);
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
    var style4 = { font: "13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_lower = game.add.text(78,555,'Do you think that the distribution of parathas is fair?',style4);
    var style1 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    instruction_text = game.add.text(78,575,'Select one of the options below and click the          button',style1);
    var style2 = { font: "italic bold 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(339,575,'Done ',style2);
    var style3 = { font: "italic 13px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    radio_buttons[0] = game.add.sprite(77,600,'lesson2','radio-highlighted');
    for(var i=0; i<4; i++)
    {
    radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].onInputDown.add(this.input_function,this);
    }
    radio_texts[0] = game.add.text(92,600,'Group A',style3);
    radio_texts[1] = game.add.text(197,600,'Group B',style3);
    radio_texts[2] = game.add.text(306,600,'Workers in both groups got the same share',style3);
    radio_texts[3] = game.add.text(642,600,'I do not know',style3);
    radio_buttons[1] = game.add.sprite(176,600,'lesson2','radio-highlighted');
    radio_buttons[2] = game.add.sprite(285,600,'lesson2','radio-highlighted');
    radio_buttons[3] = game.add.sprite(623,600,'lesson2','radio-highlighted');
    for(var i=0;i<4;i++)
    {
     radio_buttons[i].scale.setTo(0.5, 0.5);
    }
    
    //var done_button = game.add.button(77,615,'lesson2',this.done_Action,this,'sprite47','sprite50','sprite57');

  },
  done_Action : function() 
  {
    
  },
  input_function : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].loadTexture('lesson2','radio_selected');
    radio_buttons[sprite_number].scale.setTo(0.5,0.5);

  }

 }

game.state.add('PlayGame', playGame);
game.state.start('PlayGame');
}


 


