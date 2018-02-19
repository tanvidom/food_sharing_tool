 window.onload = function()
 {
 var background;
  var count_no_of_attempts = 0;
 var question_text_upper;
 var question_text_lower;
 var instruction_text;
 var answer_text1;
 var groups = [];
var number_of_pieces = [];
 var linkofdemo;
  var tips = [];
  var radio_buttons = [];
  var radio_texts = [];
 var plates = [];
 var workers1 = [];
 var worker_no;
 var cutting_board;
 var plates1 = [];
 var c;
  var yay_sound;
 var click_sound;
 var cutting_board;
 var paratha_no;
 var check = [];
 var parathas_on_board = [];
 var workers2 = [];
 var plates2 = [];
 var parathas1 = [];
 var input_answer;
 var parathas2= [];
 var paratha_num;
 var parathas2_num;
 var sharing_done_btn;
 var reset_btn;
 var radio_buttons = [];
 var radio_texts = [];
 var selected = false;
 
 var rotis = [];
 var roti_no;
 var workers = [];
 var rect = [];
 var style3;
 var buttons = ['1_normal','2_normal','3_normal','4_normal','5_normal','6_normal'];
var buttons_hover = ['1_MOUSE_OVER','2_MOUSE_OVER','3_MOUSE_OVER','4_MOUSE_OVER','5_MOUSE_OVER','6_MOUSE_OVER'];
var buttons_down = ['1_MOUSE_DOWN','2_MOUSE_DOWN','3_MOUSE_DOWN','4_MOUSE_DOWN','5_MOUSE_DOWN','6_MOUSE_DOWN'];
 var worker_names = ['1','2','3','4','5','6','7','8','9','10','11','12'];
 var p1 = 0;
 
 var share_of_each_worker = 0.50;
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
    game.add.plugin(PhaserInput.Plugin);
    game.load.atlasJSONHash('lesson3', 'assets/spritesheet_lesson3.png', 'assets/sprites_lesson3.json'); 
    game.load.webfont('tahoma','Tahoma');
    game.load.atlasJSONHash('bgelem','assets/spritesheet_1_l3.png','assets/sprites_1_l3.json');
    game.load.atlasJSONHash('buttons','assets/buttons.png','assets/buttons.json');
    //game.load.image('largepop','assets/ONLY_LARGE_POP_UP.png');
    game.load.atlasJSONHash('modals','assets/l3a2_modals.png','assets/l3a2_modals.json');
    game.load.image('close_button','assets/close_button_normal.png');
    game.load.atlasJSONHash('hindi_buttons9','assets/hindi_buttons9.png','assets/hindi_buttons9.json');
    game.load.image('q2','assets/q2.png');
    game.load.image('q2_large','assets/q2_large.png');
     game.load.atlasJSONHash('hindisprites1','assets/spritesheet_l3a2_hi.png','assets/sprites_l3a2_hi.json');
        game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
    

  },
  create : function()
  {
       yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');
       reg.modal = new gameModal(game);
        this.createModals();
    background = game.add.sprite(0,0,'bgelem','bg');
    var upper_band = game.add.sprite(5,0,'bgelem','upper');
    upper_band.scale.setTo(1,0.85);
    var foil = game.add.sprite(18,318,'bgelem','PLASTIC');
    var lower_band = game.add.sprite(0,537,'bgelem','lower');
    var worker_set = game.add.sprite(15,200,'bgelem','worker_set');
    worker_set.scale.setTo(1,0.9);
    
    //background.scale.setTo(1,0.99);
    var style = { font: "14px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(50,6,'जामुनी को गणना करने में मदद करें कि समूह B के मजदूरों को कितने पराठे दिए जाएँ, जिससे उन्हें समूह A के समान हिस्सा मिले। ',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 800;
    var style2 = { font: "italic 13px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    
    var instruction_text2 = game.add.text(110,29,"1. समूह B के मजदूरों को अधिकतम 3 उपसमूहों में बाँटने के लिए ग्रुपिंग टूल का उपयोग करें। ",style2);
    var instruction_text3 = game.add.text(110,46,"2. उपलब्ध पराठों को इस प्रकार वितरित करें कि प्रत्येक उपसमूह को समूह A के मजदूरों के समान हिस्सा मिले। ",style2);
    var instruction_text4 = game.add.text(110,63,"3. समूह B के कुल हिस्से की गणना करें।",style2);
    var click_to_image = game.add.image(15,94,'q2');
    click_to_image.scale.setTo(0.9,0.9);
    var click_to_button = game.add.button(22,170,'lesson3',this.click_button,this,'click_to_enlarge_button_up','click_to_enlarge_button_normal','click_to_enlarge_button_normal');
    var help_button = game.add.button(740,2,'hindi_buttons9',this.help_function,this,'hindi_HELP_OVER','hindi_HELP_NORMAL','hindi_HELP_OVER');
    help_button.scale.setTo(0.8,0.7);
    groups[0] = game.add.sprite(298,103,'lesson3','B1_worker_bg');
    groups[1] = game.add.sprite(298,245,'lesson3','B2_worker_bg');
    groups[2] = game.add.sprite(298,390,'lesson3','B3_worker_bg');
    //adding rect 
    for(var i=0;i<3;i++)
    {
      rect[i] = game.add.sprite(groups[i].x,groups[i].y,null);
      game.physics.enable(rect[i],Phaser.Physics.ARCADE);
      rect[i].body.setSize(441,61,0,0);
    }
    rect[3] = game.add.sprite(15,200,null);
    game.physics.enable(rect[3],Phaser.Physics.ARCADE);
    rect[3].body.setSize(258,100,0,0);

    plates[0] = game.add.sprite(320,170,'lesson3','B2_TABLE');
    plates[1] = game.add.sprite(320,313,'lesson3','B2_TABLE');
    plates[2] = game.add.sprite(320,460,'lesson3','B2_TABLE');
    for(var i=4;i<7;i++)
    {
      rect[i] = game.add.sprite((plates[i-4].x + 30),(plates[i-4].y+20),null);
      game.physics.enable(rect[i],Phaser.Physics.ARCADE);
      rect[i].body.setSize(431,44,0,0);
    }
    rect[7] = game.add.sprite(foil.x,foil.y,null);
    game.physics.enable(rect[7],Phaser.Physics.ARCADE);
    rect[7].body.setSize(211,261,0,0);
    //adding workers
    for(var j = 0;j<10;j++)
    {
      if(j<5)
      {
      workers[j] = game.add.sprite(44 + (j*40),222,'lesson3',worker_names[j]);
      workers[j].scale.setTo(0.9,0.9);
      workers[j].inputEnabled = true;
      workers[j].input.enableDrag(true);   
      workers[j].events.onDragStop.add(this.stopDrag_1,this);
      workers[j].number = j;
      workers[j].originalPosition = workers[j].position.clone();
      }
      if(j>=5)
      {
       workers[j] = game.add.sprite(44 + ((j-5)*40),267,'lesson3',worker_names[j]);
       workers[j].scale.setTo(0.9,0.9);
       workers[j].inputEnabled= true;
       workers[j].input.enableDrag(true);   
      workers[j].events.onDragStop.add(this.stopDrag_1,this);
      workers[j].number = j;
      workers[j].originalPosition = workers[j].position.clone();
      }
    }
    //adding rotis 1
    for(var i=0;i<6;i++)
    {
      rotis[i]=game.add.sprite(50,315+(i*30),'lesson3','ONLY_PARATHA');
      rotis[i].weight = 1;
      rotis[i].number = i;
      rotis[i].originalPosition = rotis[i].position.clone();
    }
    for(var j=6;j<12;j++)
    {
      rotis[j] = game.add.sprite(122,325+((j-6)*30),'lesson3','HALF_PARATHA');
      rotis[j].weight=0.5;
      rotis[j].number = j;
      rotis[j].originalPosition = rotis[j].position.clone();
    }
    for(var k=12;k<18;k++)
    {
      rotis[k] = game.add.sprite(195,325 +((k-12)*30),'lesson3','1_4th_PARATHA');
      rotis[k].weight=0.25;
      rotis[k].number = k;
      rotis[k].originalPosition = rotis[k].position.clone();
       tips[k-12] = new Phasetips(game,{
        targetObject: rotis[k],
        font : 'fractionfont', //can be any phaser object (sprite, group, text, image, etc...)
        context: '1/4',
        height : 20,
        weight : 20,
        strokeColor: 0xff0000, // red stroke
        position: "top" 
        });
    }
    //question text
    question_text_lower = game.add.text(22,552,'समूह B के 10 मजदूरों के लिए कितने पराठों की आवश्यकता है?',style);
     instruction_text_lower = game.add.text(22,574,'अपना उत्तर पूर्ण संख्या या भिन्न के रूप में एंटर करें और अपने उत्तर की जांच के लिए              पर क्लिक करें। ',style2);
     style3 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
     instruction_text_lower1 = game.add.text(380,574,'बाँट दिया',style3);
     input_answer = game.add.inputField(22, 600, {
    font: '11px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 50,
    height : 6,
    padding: 8,
    borderWidth: 2,
    borderColor: '#0EC2F5',
    borderRadius: 6,
    
});
     var parathas_text = game.add.text(95,605,'पराठे |',style);
     sharing_done_btn = game.add.button(180,600,'hindi_buttons9',this.sharing_done_function,this,'hindi_SHARING_BUTTON_over','hindi_SHARING_BUTTON_normal','hindi_SHARING_BUTTON_down');
     reset_btn = game.add.button(300,600,'hindi_buttons9',this.reset_function,this,'hindi_RESET_BUTTON_over','hindi_RESET_BUTTON_normal','hindi_RESET_BUTTON_down');
     sharing_done_btn.scale.setTo(0.85,0.85);
     sharing_done_btn.inputEnabled = false;
     reset_btn.scale.setTo(0.85,0.85);


  },
  update : function()
{
  if ((/(^(\+|-)?\d+|-?\d+\/-?\d+)$/.test(input_answer.value)) == false)
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
    createModals: function() {

     reg.modal.createModal({
        type: "modal1",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'image',
    
            content : 'q2_large'


          },
          ]
        
    });
     reg.modal.createModal({
        type: "modal2",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite7'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 195,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
          type : "sprite",
          atlasParent: "hindi_buttons9",
          content: "hindi_NEXT_BUTTON_over",
          offsetX : 120,
          offsetY: 27,
          callback: function()
          {
            game.state.start('advice_stage');
          }

        },
        {
          type : 'sprite',
          atlasParent: 'buttons',
          content: 'SMILEY_HAPPY',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite9'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 184,
            offsetY: -70,
            callback: function(){
                      reg.modal.hideModal("modal3");
                    }
        },
        {
          type : "sprite",
          atlasParent: "hindi_buttons9",
          content: "hindi_NEXT_BUTTON_over",
          offsetX : 120,
          offsetY: 20,
          callback: function()
          {
            reg.modal.hideModal("modal3");
          }

        }]
    });
           
            reg.modal.createModal({
        type: "modal5",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite2'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal5");
                      
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons9',
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
          atlasParent: 'buttons',
          content: 'SMILEY_SAD',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
             reg.modal.createModal({
        type: "modal6",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite8'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal6");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons9',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 120,
          offsetY: 35,
          callback: function()
          {
            reg.modal.hideModal("modal6");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'buttons',
          content: 'SMILEY_SAD',  
          offsetX : 40,
          offsetY:  - 140,
        },
          ]
    });
        reg.modal.createModal({
        type: "modal7",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite10'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal7");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons9',
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
          atlasParent: 'buttons',
          content: 'SMILEY_SAD',  
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
            atlasParent :'hindisprites1',
            content : 'sprite9'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 190,
            offsetY: -83,
            callback: function(){
                      reg.modal.hideModal("modal8");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons9',
          content: 'hindi_TRY_AGAIN_BUTTON_normal (1)',
          offsetX : 105,
          offsetY: 26,
          callback: function()
          {
            reg.modal.hideModal("modal8");
          }

        },
        {
          type : 'sprite',
          atlasParent: 'buttons',
          content: 'SMILEY_SAD',  
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
     yay_sound.play('',0,1);
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
showModal8:function() {
    reg.modal.showModal("modal8");
},
click_button : function()
{
  console.log('image');
  this.showModal1();

},
help_function : function()
{
 window.open("./assets/fraction-chart_copywrite.png");
},
  
    input_function1 : function(item)
    {
        
    },
    sharing_done_function : function(item)
    {
      count_no_of_attempts = count_no_of_attempts + 1;
      if(count_no_of_attempts < 4)
  {
      var flag_1_in_group = false;
      var no_of_workers_in_group = [];
 var no_of_rotis_in_group = [];
      var check2 = [];
      var check3 = [];
      var count_groups = 0;
      var group_length = 3;
      //counting no of people in one group
      for(var i=0;i<3;i++)
      {
        no_of_workers_in_group[i] = 0;
        for(var j=0;j<10;j++)
        {
          game.physics.arcade.enable(workers[j]);
          check2[j] = game.physics.arcade.overlap(workers[j],rect[i]);
          if(check2[j]== true)
          {
           no_of_workers_in_group[i] = no_of_workers_in_group[i] + 1;
          }
        }
        no_of_rotis_in_group[i] = 0;
        for (var k = 0; k < 18; k++) 
        {
          game.physics.arcade.enable(rotis[k]);
          check3[k] = game.physics.arcade.overlap(rotis[k],rect[i+4]);
          if(check3[k] == true)
          {
            no_of_rotis_in_group[i] = no_of_rotis_in_group[i] + rotis[k].weight;
          }
        }
        console.log(no_of_workers_in_group[i]);
        console.log(no_of_rotis_in_group[i]);
        if(no_of_workers_in_group[i] == 1)
        {
          flag_1_in_group = true;
        }
        else if(no_of_workers_in_group[i] == 0)
        {
          group_length = group_length - 1;
        }
        else if(no_of_workers_in_group[i] == 9 || no_of_workers_in_group[i] == 10 || no_of_workers_in_group == 7)
        {
          flag_1_in_group = true;
        }

        if((no_of_rotis_in_group[i]/no_of_workers_in_group[i]) == share_of_each_worker)
        {
          count_groups++;
        }
      
      }
      //final checking
      console.log('count_groups' + count_groups);
      console.log('group_length' + group_length);
      if(flag_1_in_group == true)
      {
        this.showModal5();
      }
      else if(count_groups == 3 && group_length == 3)
      {
        if(input_answer.value == '5')
        {
        this.showModal2();
        }
        else
        {
          this.showModal6();
          console.log('correct distribution, incorrect answer');
        }
      }
      else if(count_groups == 2 && group_length == 2)
      {
        if(input_answer.value == '5')
        {
          this.showModal2();
        console.log('correct');
        }
        else
        {
          this.showModal6();
          console.log('correct distribution, incorrect answer');
        }
      }
      else
      {
        if(input_answer.value == '5')
        {
          this.showModal7(); 
          console.log('correct answer, incorrect distribution');
        }
        else
        {
          this.showModal8();
          console.log('completely incorrect');
        }
      }
    }
      else
     {
      game.state.start('videoScreen');
     }

       
    },
    stopDrag_1 :function(item)
    {
      click_sound.play('',0,1);
        worker_no = item.number;
        var pos = 0;
        

         for(var i=0;i<3;i++)
        {
          
            game.physics.arcade.enable(workers[worker_no]);

          check[i]=game.physics.arcade.overlap(workers[worker_no],rect[i]);
          console.log(check[i]);
          if(check[i] == true)
          {
            //workers[worker_no].position.copyFrom(workers[worker_no].originalPosition);    
            pos++;  

          }
       //check[i] = Phaser.Rectangle.containsRect(cakes[cake_no].body, rect[i].body);
       }
       console.log(pos);
       if(pos >0)
       {
         
       }
       else
       {
         workers[worker_no].position.copyFrom(workers[worker_no].originalPosition); 
       }
      //checking if there are any other in the worker area
        c=0;
        var check1 = [];
        for(i=0;i<10;i++)
        {
          game.physics.arcade.enable(workers[i]);
          check1[i]= game.physics.arcade.overlap(workers[i],rect[3]);
          console.log(check1[i]);
          if( check1[i] !== true)
          {
            c++;
          }
        }
        console.log(c);
        if(c==10)
        {
        for(i=0;i<18;i++)
        {

          rotis[i].inputEnabled = true;
          rotis[i].input.enableDrag(true);   
      rotis[i].events.onDragStop.add(this.stopDrag_2,this);

        }
      }
      

 },
    stopDrag_2 : function(item)
    {
      click_sound.play('',0,1);
       roti_no = item.number;
        var pos = 0;
         for(var i=4;i<7;i++)
        {
          j=0;
            game.physics.arcade.enable(rotis[roti_no]);

          check[j]=game.physics.arcade.overlap(rotis[roti_no],rect[i]);
          console.log(check[i]);
          if(check[j] == true)
          { 
            pos++;  

          }
          j++;
       //check[i] = Phaser.Rectangle.containsRect(cakes[cake_no].body, rect[i].body);
       }
       console.log(pos);
       if(pos >0)
       {
         console.log('hhi');
       }
       else
       {
         rotis[roti_no].position.copyFrom(rotis[roti_no].originalPosition); 
       }
       //checking for rotis on foil
       c=0;
        var check1 = [];
        for(i=0;i<18;i++)
        {
          game.physics.arcade.enable(rotis[i]);
          check1[i]= game.physics.arcade.overlap(rotis[i],rect[7]);
          console.log(check1[i]);
          if( check1[i] !== true)
          {
            c++;
          }
        }
        console.log(c);
        if(c>=3)
        {
        sharing_done_btn.inputEnabled = true;

      }

    },
reset_function : function()
  {
     count_no_of_attempts = 0; 
  game.state.start('PlayGame');
  }
 
  

  }
  
  var advice_stage = function(game){}
  advice_stage.prototype = 
  {
   init : function()
  {
     game.load = new CustomLoader(game);
  },
  preload : function()
  {
   game.load.atlasJSONHash('advice', 'assets/advice_page1.png', 'assets/advice_page2.json'); 
    game.load.webfont('tahoma','Tahoma');
    game.load.atlasJSONHash('modals','assets/l3a2_modals.png','assets/l3a2_modals.json');
    game.load.image('close_button','assets/close_button_normal.png');
    game.load.atlasJSONHash('buttons','assets/buttons.png','assets/buttons.json');  
    game.load.atlasJSONHash('modals1','assets/advice_l3a2_2.png','assets/advice_l3a2_2.json');
    game.load.atlasJSONHash('hindi_buttons9','assets/hindi_buttons9.png','assets/hindi_buttons9.json');
    game.load.atlasJSONHash('hindisprites1','assets/spritesheet_l3a2_hi.png','assets/sprites_l3a2_hi.json');
       game.load.audio('click','assets/sounds/clicksound.wav');
    game.load.audio('yay','assets/sounds/yay.wav');
   
  },
  create : function()
  {
    reg.modal = new gameModal(game);
        this.createModals();
        yay_sound = game.add.audio('yay');
        click_sound = game.add.audio('click');
    background = game.add.sprite(0,0,'advice','BACKGROUND');
    var style = { font: "12px tahoma", fill: "ffff", boundsAlignH: "center", boundsAlignV: "middle" };
    question_text_upper = game.add.text(93,7,'जामुनी और उसके दोस्त इसी प्रकार की एक समस्या को हल करने का प्रयास कर रहे हैं। यदि समूह A के 2 मजदूरों के लिए 4 पराठे पर्याप्त हैं, तो समूह B के 8 मजदूरों के लिए कितने पराठों की आवश्यकता होगी, यदि उनको समूह A के मजदूरों के समान हिस्सा दिया जाना है?',style);
    question_text_upper.wordWrap = true;
    question_text_upper.wordWrapWidth = 605;
    question_text_upper.lineSpacing = -3;
    var style2 = { font: "italic 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text1 = game.add.text(120,47,"लीना और अमन के विचार भिन्न  हैं, कि यह कैसे किया जाना है।    उनके विचार जानने के लिए इनमें से प्रत्येक विकल्प पर क्लिक करें।  ",style2);
    var jamuni_advice = game.add.sprite(315,103,'advice','JAMUNI');
    var aman_advice = game.add.sprite(117,168,'modals1','ONLY_AMAN');
    var leena_advice = game.add.sprite(527,167,'modals1','ONLY_LEENA');
    var aman_image = game.add.sprite(69,326,'modals1','aman_advice1');
    var leena_image = game.add.sprite(487,326,'modals1','leena_img1');
    var button1 = game.add.button(72,444,'hindi_buttons9',this.showModal4,this,'HINDI_AMAN_ADVICE_ELEMENTS_OVER','HINDI_AMAN_ADVICE_ELEMENTS_NORMAL','HINDI_AMAN_ADVICE_ELEMENTS_DOWN');
    var button2 = game.add.button(487,444,'hindi_buttons9',this.showModal5,this,'LEENA_ADVICE_ELEMENTS_OVER','LEENA_ADVICE_ELEMENTSNORMAL','LEENA_ADVICE_ELEMENTS_DOWN');
    question_text_lower = game.add.text(54,532,'इस समस्या का हल निकालने के लिए जामुनी किसकी सलाह मानें?',style);
    var instruction_text2 = game.add.text(57,555,'नीचे दिए गए विकल्पों में से एक को चुनें और                 पर क्लिक करें|',style2);
    
    style3 = { font: "bold 12px tahoma", fill: "#0000CC", boundsAlignH: "center", boundsAlignV: "middle" };
    var instruction_text3 = game.add.text(250,555,'उत्तर जाँचें',style3);
    radio_buttons[0] = game.add.sprite(53,575,'advice','radio-highlighted');
    radio_texts[0] = game.add.text(72,578,'अमन ',style);
    radio_texts[1] = game.add.text(144,578,'लीना ',style);
    radio_texts[2] = game.add.text(233,578,'इनमें से कोई नहीं',style);
    radio_texts[3] = game.add.text(340,578,'इनमें दोनों सही हैं।',style)
    //radio_texts[2] = game.add.text(306,593,'Workers in both groups got the same share',style3);
    //radio_texts[3] = game.add.text(642,593,'I do not know',style3);
    radio_buttons[1] = game.add.sprite(122,575,'advice','radio-highlighted');
    radio_buttons[2] = game.add.sprite(215,575,'advice','radio-highlighted');
    radio_buttons[3] = game.add.sprite(320,575,'advice','radio-highlighted');
    for(var i=0;i<4;i++)
    {
      radio_buttons[i].number = i;
    radio_buttons[i].inputEnabled =  true;
    radio_buttons[i].events.onInputDown.add(this.input_function,this);
     radio_buttons[i].scale.setTo(0.5, 0.5);
     radio_buttons.selectedcheck = false;
    }
     done_button = game.add.button(54,610,'hindi_buttons9',this.done_Action,this,'HINDI_DONE_OVER','HINDI_DONE_normal','HINDI_DONE_DOWN');
     done_button.scale.setTo(0.7,0.7);
     done_button.inputEnabled = false;
    
  },
 
  done_Action : function() 
  {
    if(radio_buttons[0].selectedcheck == true)
    {
      
       this.showModal3();
    } 
    else if(radio_buttons[1].selectedcheck == true)
    {
      this.showModal3();
    } 
    else if(radio_buttons[2].selectedcheck == true)
    {
      this.showModal3();
    }
    else
    {
      this.showModal2();
    }
  },
  /*render : function()
  {
     game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
   },*/
  input_function : function(item)
  {
    var sprite_number = item.number;
    radio_buttons[sprite_number].selectedcheck = true;

    for(var i=0;i<3;i++)
    {
      if(i !== sprite_number &&  radio_buttons[i].selectedcheck == true)
      {
        console.log('change');
        radio_buttons[i].selectedcheck = false;
        radio_buttons[i].loadTexture('advice','radio-highlighted');  
        radio_buttons[i].scale.setTo(0.5,0.5);
      }
    }
      radio_buttons[sprite_number].loadTexture('advice','radio-selected');
         radio_buttons[sprite_number].scale.setTo(0.5,0.5);
       done_button.inputEnabled = true;
    },
    createModals: function() {

     reg.modal.createModal({
        type: "modal2",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite3'


          },
          {
            type: "image",
            content: "close_button",
            offsetX: 200,
            offsetY: -80,
            callback: function(){
                      reg.modal.hideModal("modal2");
                    }
        },
        {
           type : "text",
           content: "आगे बढ़ने के लिए टैब को बंद करें|",
          offsetX : 0,
          offsetY: 40,
          fontFamily: "Arial",
          fontSize: 16,
          align: "left",
          color: "0xFF0000",


        },
        {
          type : 'sprite',
          atlasParent: 'buttons',
          content: 'SMILEY_HAPPY',  
          offsetX : 40,
          offsetY:  - 200,
        },
          ]
    });
          reg.modal.createModal({
        type: "modal3",
        includeBackground: true,
        modalCloseOnInput: true,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'sprite4'


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
           type : "text",
           content: "आगे बढ़ने के लिए टैब को बंद करें|",
          offsetX : 0,
          offsetY: 40,
          fontFamily: "Arial",
          fontSize: 16,
          align: "left",
          color: "0xFF0000",

        },
         {
          type : 'sprite',
          atlasParent: 'buttons',
          content: 'SMILEY_SAD',  
          offsetX : 40,
          offsetY:  - 200,
        }]
    });
                 reg.modal.createModal({
        type: "modal4",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'l3a2_aman'


          },
          {
            type: 'button',
            atlasParent :'advice',
            content: 'ADVICE_POP_UP_CLOSE_BUTTOn_NORMAL',
            offsetX: 370,
            offsetY: -300,
            callback: function(){
                      reg.modal.hideModal("modal4");
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons9',
          content: 'HINDI_DONE_OVER',
          offsetX : 50,
          offsetY: 300,
          callback: function()
          {
            reg.modal.hideModal("modal4");
          }

        }]
    });
            reg.modal.createModal({
        type: "modal5",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: 'sprite',
            atlasParent :'hindisprites1',
            content : 'l3a2_leena'


          },
          {
            type: 'button',
            atlasParent : 'advice',
            content: 'ADVICE_POP_UP_CLOSE_BUTTOn_NORMAL',
            offsetX: 360,
            offsetY: -300,
            callback: function(){
                      reg.modal.hideModal("modal5");
                      
                    }
        },
        {
          type : 'sprite',
          atlasParent: 'hindi_buttons9',
          content: 'HINDI_DONE_OVER',
          offsetX : 70,
          offsetY: 230,
          callback: function()
          {
            reg.modal.hideModal("modal5");
            
          }

        }]
    });
        },
      
showModal2:function() {
  yay_sound.play('',0,1);
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

  }
   var videoScreen = function(game){}
    videoScreen.prototype =
    {

      preload : function()
      {
        game.add.image('back','assets/back-button.png')
        game.load.video('demo','assets/l3_a2.mp4');
      },
      create : function()
      {
        video_play = 0;
        game.stage.backgroundColor = '#9C9A89';
        video = game.add.video('demo');
        video.play(true);
        var sprite = video.addToWorld(0,30,0,0);
        var style2 = { font: "bold 14px tahoma", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
        var back_text = game.add.text(700,5,'वापस',style2);
        back_text.inputEnabled = true;
        console.log(video.loop);
        
        video.loop = false;
        video.onComplete.add(this.video_stop,this);
        back_text.events.onInputDown.add(this.back_function,this);
        //var image4 = game.add.image(550,590,'back',this.back_function,this);
        console.log(video.onComplete);

    //  true = loop
       

       game.input.onDown.add(this.pause, this);
      },
      pause : function() 
      {

      video.paused = (video.paused) ? false : true;

      },
      video_stop : function()
      {
        count_no_of_attempts = 0;
       game.state.start('PlayGame');
        
      },
      back_function : function()
      {
        count_no_of_attempts = 0;
        game.state.start('PlayGame');
      }

    }
game.state.add('PlayGame', playGame);
game.state.add('advice_stage',advice_stage);
game.state.add('videoScreen',videoScreen);
//game.state.add('answer_a1_p1',answer_a1_p1);
//game.state.add('answer_a1_p2',answer_a1_p2);
game.state.start('PlayGame');
}


 


