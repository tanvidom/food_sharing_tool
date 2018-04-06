
var language1 = "hi";
var lesson_number = "2";
var activity_name = "Compare the share: Unequal groups - II";
var initial_choice = [0,0];
var second_screen_choice = [0,0,0,0];
var text_reason_for_choice = "";
var people_in_each_group_first_part = [0,0,0,0];
var share_in_each_plate_first_part = [0,0,0,0];
var text_entry_first_part = "";
var people_in_each_group_second_part = [0,0,0];
var share_in_each_plate_second_part = [0,0,0];
var text_entry_second_part = "";

var final_answer_options = [0,0,0];
var final_reason_for_choice = "";


function sessionstart()
{
  var JsonArray =
  {
  "app_name": "Food_sharing_tool",
  "event_type": "game_start",
  "params":
  {
   "language" : language1,
   "Lesson" : lesson_number,
   "Activity" :  activity_name
  }

  };
  //pass the method to calculate score.
  saveDataOnExit(JsonArray);
  console.log(JsonArray);
}
function doQuit()
 {
JsonArray2 =
{
"app_name": "Food_sharing_tool",
"event_type": "game_end",
"params":
{
  //"Final score" : score,

  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name
}
}
//pass the method to calculate score.
console.log('doQuit1');
console.log(JsonArray2);
saveDataOnExit(JsonArray2);

console.log(JsonArray2);

}

function firstscreen(initial_choice)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "first_screen_end",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
  "initial_choice" : initial_choice



}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}
function secondscreen(second_screen_choice)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "second_screen_end",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
  "second_screen_choice" : second_screen_choice

}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}
function thirdscreen(text_reason_for_choice)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "thirdscreenend",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
  "TextReasonforfirstchoice" : text_reason_for_choice


}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}
function firstdistribution(count_no_of_attempts,first_answer_in_text,people_in_each_group_first_part,share_in_each_plate_first_part)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "end_of_first_distribution",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
  "CurrentAttempt" : count_no_of_attempts,
   "Peopleineachgroupforfirstpart" : people_in_each_group_first_part,
   "Shareineachplateforfirstpart" : share_in_each_plate_first_part,
   "first_answer_in_text" : first_answer_in_text
}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}
function seconddistribution(count_no_of_attempts_1,second_answer_in_text,people_in_each_group_second_part,share_in_each_plate_second_part)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "end_of_second_distribution",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
  "CurrentAttempt" : count_no_of_attempts_1,
  "Peopleineachgroupforsecondpart" : people_in_each_group_second_part,
  "Shareineachplateforsecondpart" : share_in_each_plate_second_part,
  "first_answer_in_text" : second_answer_in_text

}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}
function finalanswer(final_answer_options)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "final_answer",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
   "final_answer_options" : final_answer_options

}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}
function finalanswerchoice(final_reason_for_choice)
{
var JsonArray =
{
"app_name": "Food_sharing_tool",
"event_type": "final_answer",
"params":
{
  "language" : language1,
  "Lesson" : lesson_number,
  "Activity" :  activity_name,
   "final_answer_reason" : final_reason_for_choice

}

};
//pass the method to calculate score.
saveDataOnExit(JsonArray);
console.log(JsonArray);
}

// function doQuit(){
// var JsonArray =
// {
// "app_name": "policesquadv2",
// "event_type": "session_end",
// "params":
// {
// "MissionsPlayed": playedMission, // Mission attempted [0,0,0,0]  1 is yes
// "MissionsCompleted": completedMission, //Mission completed - yes/ no
// "SessionTimeSpent": getTimeSpent(), //Mission time spent  total
// "highScore": highScore,  //highScore
// "starTotal": gameScore, //starts earned total
// "StorySkiped": StorySkiped,  //story skiped
// "GlossaryDownloaded": GlossaryDownloaded,  //Glossary downloaded
// "helpScreenviewed": helpScreen, //help screen per Mission [0,0,0,0] 1 is yes
// "Mission1Stage": currentstage,
// "Mission2Stage": CurrentStage,
// "Mission3Stage": currentStage,
// "Mission4Stage": currentLevel +1
// }

// };
// //pass the method to calculate score.
// //window.opener.saveDataOnExit(JsonArray);


// }


//starting code for gstudio
var somevariavb =0;
function opneinnewindow(){
somevariavb = window.open('/modules/policequadv2/index.html');
}
function saveDataOnExit(JsonArray)
{
gameReporter.submitData('/tools/logging', JsonArray)
console.log('hi');
}

class GameReporter
{
	constructor(data) {
		this.session_id = this.getCookie('session_uuid')
		// alert(this.getCookie('user_id'))
	}

	submitData(url, data) {
		var user_id = this.getCookie('user_id')
		var data_string = {}
		data_string['user_id'] = this.getCookie('user_id');
		var date = new Date();
		var csrftoken;
		csrftoken = this.getCookie('csrftoken');
    var buddy_details;
    buddy_details = this.getCookie('user_and_buddy_ids');
    	var timestamp = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		data_string['created_at'] = timestamp
      data_string['buddy_details'] = buddy_details
		for (var key in data) {data_string[key] = data[key];};
		data_string = JSON.stringify(data_string);
	//alert(data_string)
		$.ajax({
                  type: "POST",
                  data:{
                        "user_data":data_string,
                        "app_name":"Food_sharing_tool",
                        //"buddy_details": buddy_details,
                        'csrfmiddlewaretoken':csrftoken,
                    },
                  url: "/tools/logging",
                  datatype: "json",
                  success: function(data) {
                	//alert(data)
                }
            });
		// return xhr.response
	}
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
        console.log('no uuid found')
        // alert(cname)
	}
}
var gameReporter = new GameReporter();
//returnGameReporter();
