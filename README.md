Food Sharing Tool

Food Sharing Tool (FST) is an activity based interactive tool, designed and developed by Connected Learning Initiative (CLIx). This interactive tool is designed by the CLIx Mathematics Team and MIT, based on the digital pedagogy concepts of Fractions and Food Sharing for high school students. This design was then converted into the digital tool by the CLIx technology team. 

This tool is divided into 3 Lessons with a total of 11 activities. It is also available in two Indian languages - Hindi and Telegu apart from English.

Contributors 
Conceptualising and Designing.
CLIx Curriculum Team.
Ruchi Kumar
Arindam Bose
Shweta Naik
Arati Bapat 
Jeenath Rahaman
Saurabh Khanna

MIT.
Scott Osterweil

Development Team
Ashwin Nagappa
Tanvi Domadia
Tejas Shah

Management and Production Team 
Jaya Mahale
Jayashree Anand 
Sadaqat Mulla 

Technology Behind the development.
This interactive is developed using open source HTML5 & javascript game framework named Phaser.

How to install/embed this.
Standalone Installation instructions
Step 1:- To install the tool you have to clone the git repository in you local computer. Type the commands to your terminal. (Preriqusite git software has to be installed in your system)

git clone https://github.com/tanvidom/food_sharing_tool.git

Step 2:- Unzip this folder and copy it in the root directory of your server.If you using apache in linux, then your root Directory would be at:-

/var/www/html

Incase you have python installed in your system, then you can use the python server by 

You can also use brackets editor and open this folder in brackets and click on the electricity icon on the top right corner of your editor screen for live preview this will create a temporary local server for your development enviornment.

Step 3:- This step is optional but recommended to change the permission of you direcctory to 755.To do so below is the command

chmod -R 755 /var/www/html/Ratio-Patterns

Step 4:- Just visit the url of the server. If your are running a local server then the url will be

localhost:8080

If you are putting it on a live server then url will be

http://example.com/name-of-directory-in-which-you-have-copied-the-repository

Embeding in you WebProject Using Iframe
1st to 4th steps as it is with the additional 5 step as given below.

Step 5:- Put the HTML Iframe in your code where you want to embed this tool. You can also embed this activity wise by just adding the url of the particular activity you want to embed. Below is the code for the same

<iframe src="http://example.com/en/Activity1/" width="some pixels" height="somepixels"></iframe>

Design Documentation
This tool(game) was designed during the MIT Design Camp held in 2016 November. The CLIx Maths Team and MIT Curriculum Team was involved in pedagogy behind the game and its conceptional design.

The concept of the game as designed in the MIT design camp was discussed with us CLIx TISS Technology Team and futher development of the scripting document and game development started under the guidance of Maths Team, Technology Team and Jaya and Jatshree maam.

Concept behind the game
The game was designed to simplify the concept of Ratios and Proportions of high school mathematics.

The idea was to use shapes and patterns and asking questions to enlarge or shrink the given shapes and patterns with some ratio by drawing the visually alike but enlarged or shrinked version of the given shape or pattern.

Future Scope
Their is a lot of scope in further development of this tool, presently this tool has limited set of activites and their is no scope of designing customised activities for teachers. Hence an authoring interface can be designed so that teachers can use this interface to design thei own activity and use their creativity to enhance learning objective of the tools.

Also we can make the game more interactive but adding scoring to its level so that i makes the tools more like game than a tool.
