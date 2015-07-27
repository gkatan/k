/*
  This code comes from:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  Allows arrays to have .includes() 
*/
if (![].includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}

// On rendered
Template.story.rendered = function() {
  if (recognizing) recognition.stop();
  // Show first sentence
  story1 = Phonetics.findOne({sound: lastSound}).story;
  getSent();
}

//Sound effect
cheer = new buzz.sound( "/sounds/yaysound", {
    formats: ["mp3"]
});

/* VOICE RECO
  Some parts of code comes from this blog post by Amit Agarwal
      http://ctrlq.org/code/19680-html5-web-speech-api
*/
var final_transcript = '';
var recognizing = false;
var interim_transcript = '';
var index=0;          //index in Phonetics - sound - story[]
var sent = "";        // = story[index]
var words = [];       //array of the words in sent
var wordNum = 0;      //index in words[]
var original = [];    //accessed in .onresult, coloring, colorGR
var correct = [];     //accessed in events
var coloredSent = ""; //global to make coloredSent accumulate
var end = false;      //marks end of sentence, used in getSent() for timeout

if (Session.get("sound")==undefined){
  Session.set("sound", "L");
}
var lastSound = Session.get("sound");

if ('webkitSpeechRecognition' in window) {
  console.log("webkit is available!");
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

    recognition.onstart = function() {
      recognizing = true;
      $("#startButton").html('<button type="button" class="btn btn-raised" id="pause_story">Stop Story</button>');
      $("#reco").html('<h2 class = "text-right" id = "mic">'+"Mic ON".fontcolor("#65D6A3")+'</h2>');
    };

    recognition.onerror = function(event) {
      console.log(event.error);
    };

    recognition.onend = function() {
      recognizing = false;
      $("#startButton").html('<button type="button" class="btn btn-raised" id="start_story">Begin Story</button>');
      $("#reco").html('<h2 class = "text-right" id = "mic">'+"Mic OFF".fontcolor("#E2646B")+'</h2>');
    };

    recognition.onresult = function(event) {
      myevent = event;

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript.trim() +".\n";
          console.log('final events.results[i][0].transcript = '+ JSON.stringify(event.results[i][0].transcript));
        } else {
          interim_transcript += event.results[i][0].transcript+"<br>";
          console.log('interim events.results[i][0].transcript = '+ JSON.stringify(event.results[i][0].transcript));
        }
      }

      //Voice commands: restarts sentence, pause, site nav
      if (interim_transcript.includes("stop")) {
        recognition.stop();
        return;
      } else if (interim_transcript.includes("restart")) {
        wordNum=0;
        getSent();
        return;
      } else if (interim_transcript.includes("workshop")) {
        window.location.replace("/workshop");
        return;
      } else if (interim_transcript.includes("go to game")) {
        window.location.replace("/game");
        return;
      } else if (interim_transcript.includes("profile")) {
        window.location.replace("/profile");
        return;
      }

      endCheck();

      getSent();
            
      //Change all char to lowercase
      trimStory = sent.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
      current = " "+interim_transcript.toLowerCase() + " ";
      words = trimStory.split(" ");
      console.log ("say: " + words[wordNum]);
      // Note: we are ignoring confidence. Kind of working (if "they" is said, passes for "the")
      if (current.includes(" "+words[wordNum] || words[wordNum]+" ")) {
        correct.push(wordNum); //Pushes index to correct[]
        console.log("correct words: "+correct);
        if (wordNum >= words.length-1) {
          console.log ("you've completed the sentence!");
          end = true;                   //sentence end
        }
        if (wordNum<words.length-1) {
          wordNum++;
          console.log("wordNum: "+wordNum+", words.length: "+words.length);
        } 
      }
    };
}
//Starts reco
function startDictation(event) {
  if (recognizing) {
    recognition.stop();
    recognizing = false;
    return;
  }
  final_transcript = '';
  recognition.lang = 'en-US';
  recognition.start();
}
//Sentence changing and printing happens here
function getSent() {
    sent = story1[index];
    original = sent.split(" "); 
    $("#senth1").html(coloring(original, wordNum));
}
//"Highlights" the word that you are on blue
function coloring(original, wordNum) {
  newSent = "";
  for(var j = 0; j < original.length; j++) {
    if (j == wordNum) {
      //var theWord = original[j].fontcolor("#00aedb");
      newSent += " " + original[j].fontcolor("#00aedb"); 
    } else {
      newSent += " " + original[j].fontcolor("black");
    }
  }
  return newSent;
}
//If at the end of the story or sent, does stuff
function endCheck() {
  //If at the end of the story
  if (index == story1.length) {
    var storyEnd = cheer.play();
    $("#storyarea").html('<img src = "images/storycomplete-01.png" width = "100%" alt = "completed">');
    setTimeout(function() {
      $("#storyarea").html('<h2> You just finished the "'+newSound+'" sound story! Choose another sound and read some more! </h2>');
    }, 2000);
    recognition.stop();
  } else if (end) {
  //If sentence completed with 80% right, add to history as correct:
    if (correct.length >= words.length * (8.0 / 10))
    {
      History.insert({userId: Meteor.userId(), mode: "story", sound: Session.get("sound"), word: sent, correct: true, time: new Date()});
    } else {
      console.log ("the sentence was not above 80% complete");
      History.insert({userId: Meteor.userId(), mode: "story", sound: Session.get("sound"), word: sent, correct: false, time: new Date()});   
    }
    colorGR(correct);
    feedback();
    $("#prevSent").html(coloredSent);//shows completed sentences on the side
    end=false; 
  }
}
//Final coloring: colors the correct words green(G), incorrect words red (R)
function colorGR(correct) {
  for(var k = 0; k < original.length; k++) {
    var w = original[k]
    if (correct.includes(k)) {
      coloredSent += " " + "<span style=\"color:#00b159\">"+w+"</span>"; // w.fontcolor("#00b159");
    } else {
      coloredSent += " " + "<span style=\"color:#d11141\">"+w+"</span>"; //w.fontcolor("#d11141");
    }
  }
  coloredSent+="<br>";
}
//Visual feedback after sentence completed
function feedback() {
  if (correct.length == words.length) {
    var storyaud = corrSfx.play()
          .fadeIn()
          .bind( "timeupdate", function() {
             var timer = buzz.toTimer( this.getTime() );
          });
    $("#storyarea").html("<img src = \"images/goodjob.jpg\" width = \"60%\" alt = \"completed\">"); 
    //make the image longer
  } else {
    $("#storyarea").html("<img src = \"images/completedsent-01.png\" width = \"70%\" alt = \"completed\">");
  }
  correct = []; wordNum=0; index++; //reset array, vars
  setTimeout(function() {
    $("#storyarea").html('<h1 class = "text-left" id="senth1"></h1>') 
    getSent();
  }, 1700);   
}


//When skip
function skip(event) {
  if (wordNum==words.length-1) {
    end=true;
    endCheck();
    getSent();
  } else {
    wordNum++;  
    getSent();
  }
}

// Show directions
Session.set("story_directions",true);

Template.storyDirections.helpers({
  showDirections: function(){
    return Session.get("story_directions");
  }
});

Template.storyDirections.events({
  'click #close_directions': function(event){
    Session.set("story_directions",false);
  },
  'click #show_directions': function(event){
    Session.set("story_directions",true);
  }
});


Template.story.events({
  'click #start_story': function(event){
    story1 = Phonetics.findOne({sound: lastSound}).story;
    startDictation(event);
    getSent();
  },
  'click #pause_story': function(event) {
    startDictation(event);
  },
  'click #skip': function(event) {
    skip(event);
  }
})

Template.soundselectstory.events({
  "submit #sound-select": function(event){
    event.preventDefault();
    var soundSelected = event.target.sound.value;
    Session.set("sound",soundSelected);
    var newSound = Session.get("sound");
    if (lastSound!=newSound){
      console.log("CHANGING STORY SOUND... new sound = "+newSound);
      story1 = Phonetics.findOne({sound: newSound}).story;
      index = 0; wordNum = 0;
      getSent();
      lastSound=newSound;
    }
  }
})