var life = 20, energy = 20;
document.getElementById("life").innerHTML = "Life : " + life;

document.getElementById("energy").innerHTML = "Energy : " + energy;

///////////////////////////////////////////Test pour le son

var pas = new Audio('html/sound/pas.ogg');
var ambiance = new Audio('html/sound/Ambiance.wav')
var cri = new Audio('html/sound/cri2.wav')
var fenetre = new Audio('html/sound/fenetre.wav')
music = function(son){
		son.play();
};

window.onload = function(){music(ambiance);}
/////////////////////////////////////////////////////
flife = function (vie, nrg){
	if(nrg < 1){
		life = life - 2 + nrg;
	};
	if(vie < 1){
		music(cri);
		alert("You loose !!! Life = " + vie);
		void window.location.reload();
	};
};
aflife = function()
{
	flife(life,energy);
}
win = function (){
		alert("You win !!!");
		void window.location.reload();
};

//////////////////////////////////////////////////////////////////////////////////////Partie courrir

fonction29 = function () {
	life = life -20;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button7);
	document.body.removeChild(btn7);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You hear the killer slowly climbing the stairs. Your heart is beating faster and faster. You wait in the hope of finding the right time to act. Suddenly, without even realizing it, a long cold blade just pierced your stomach. You hadn't noticed the mirror that was placed in front of the staircase in which your image was reflected. YOU DIE. END.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button8);  
	button8.innerHTML = "END";                
	button8.addEventListener("click", aflife);
	};

fonction30 = function () 
{
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button7);
	document.body.removeChild(btn7);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You hear the killer slowly climbing the stairs. Your heart is beating faster and faster. You wait in the hope of finding the right time to act. However, the killer is not fooled. He moves slowly towards you, taking care not to get too close. However, he didn't pay attention to the umbrella next to your arm. You take the opportunity: you grab the umbrella from the tip and grab his foot with the handle. The killer falls down the stairs and stabs himself with a knife in the stomach. VICTORY !!!!";
     

	/// Create nex buttons                                
	document.body.appendChild(button8);  
	button8.innerHTML = "END";                
	button8.addEventListener("click", win);
};

///////////////////////////////////////////////////////Niveau 5
fonction19 = function () 
{
	life = life - 20;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button6);
	document.body.removeChild(btn6);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "When you arrive in the room, you discover a macabre spectacle. Your friends are lying on the floor and bleeding to death. As you approach one of them to rescue them, they all get up and music start: HAPPY BIRTHDAY TO YOUUUUUU! It was a prank to scare you on your birthday.";
	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button7);  
	button7.innerHTML = "END";                
	button7.addEventListener("click", aflife);
 };
                                      

fonction20 = function () 
{
	life = life -20;
	energy = energy -3;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button6);
	document.body.removeChild(btn6);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You get your phone off the table and call 911. In the meantime, you hide in a closet in the hope of escaping the killer. However, as time goes by, you lose more blood. You end up succumbing to your injuries at the bottom of that gloomy closet. YOU DIE. END.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button7);  
	button7.innerHTML = "END";                
	button7.addEventListener("click", aflife);
};



fonction27 = function () 
{
	life = life-5;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button6);
	document.body.removeChild(btn6);
	/// Modification du paragraphe
                 
	document.getElementsByTagName('p')[0].innerHTML = "The killer stabs you three times when suddenly your friends come to your rescue and disarm the killer. Tie the man to the white mask with the rope found in the cellar. VICTORY!!!!!";
     

	/// Create new buttons                                 
	document.body.appendChild(button7);  
	button7.innerHTML = "END";                
	button7.addEventListener("click", win);                                  
};

fonction28 = function () 
{
	// Effects
	energy = energy -5;

	//Dispaly life and energy
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;

	// Cheack life and energy
	flife(life,energy);

	document.body.removeChild(button6);
	document.body.removeChild(btn6);

	// Paragraph modification
	document.getElementsByTagName('p')[0].innerHTML = "You arrive at the top of the stairs exhausted but alive. However, you don't have any energy and every minute spent makes you lose one life point. Time is running out. You decide to set a trap for him... But which one ? ";
     

	///// Create new buttons                               
	document.body.appendChild(button7);  
	button7.innerHTML = "You hide to the right of the stairs in the hope of stealing his knife when he reaches the first floor.";                
	button7.addEventListener("click", fonction29);
   
                                      
	document.body.appendChild(btn7);   
	btn7.innerHTML = "You simulate a bad fall and lie on the ground in the hope of hooking his foot with the handle of the umbrella once he gets to you to make him fall down the stairs.";                
	btn7.addEventListener("click", fonction30);
};

///////////////////////////////////////////////////////Niveau 4

fonction7 = function () 
{
	life = life -20;
	energy = energy -12;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button5);
	document.body.removeChild(btn5);
	/// Paragraph modification
	document.getElementsByTagName('p')[0].innerHTML = "You manage to reach the coast completely exhausted. You can't stand up to go on the road because of your broken leg. You see a small cave 20 meters away. You decide to go and rest there. Exhausted, you fall asleep in this cave. However, as the tide rises at full speed, you find yourself stuck and drowned at the bottom of this cave. YOU DIE. END.";

	document.body.appendChild(button6);  
	button6.innerHTML = "END";                
	button6.addEventListener("click", aflife);
};

fonction8 = function () 
{
	music(fenetre);
	life = life - 7;
	energy = energy - 5;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button5);
	document.body.removeChild(btn5);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You find yourself facing the large staircase leading to the upper floor where the dining room is located. You decide to go up those endless stairs. But your broken ankle slows you down and makes you lose 5 energy points and yourcuts to your arm make you lose 2 life points. You hear your friends screaming in panic. These screams come from a room to the right of a dark corridor.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button6);  
	button6.innerHTML = "You decide to go to the help your friends and you lose 5 energies.";                
	button6.addEventListener("click", fonction19);
   
                                      
	document.body.appendChild(btn6);   
	btn6.innerHTML = "You still head for the dining room in the hope of recovering your phone to prevent help and you lose 3 energies.";                
	btn6.addEventListener("click", fonction20);
};


fonction11 = function () {
	energy = energy + 10;
	life = life-20;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button5);
	document.body.removeChild(btn5);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "After drinking the glass of water, you feel better right away. Then, little by little, your hands start to shake, you start to get dizzy. You're starting to realize that the water contained poison. You feel like you're slowly leaving for certain death. YOU DIE. END.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button6);  
	button6.innerHTML = "END";                
	button6.addEventListener("click", aflife);
   
	};

fonction12 = function () {
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button5);
	document.body.removeChild(btn5);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "Once out of the kitchen, footsteps resound behind the door in front of you. You hope that one of your friends will leave this room. Nevertheless, you decide to bring the umbrella in the lobby in case this person is the killer you've feared since you woke up. You open the door to be sure. Suddenly, a man with a white mask comes out of this room with a knife in his hand.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button6);  
	button6.innerHTML = " You decide to face it with an umbrella. With each stab wound, you lose 5 life points.";                
	button6.addEventListener("click", fonction27);
   
                                      
	document.body.appendChild(btn6);   
	btn6.innerHTML = "You run away by taking the nearest staircase and lose 5 energy points.";                
	btn6.addEventListener("click", fonction28);
	};

///////////////////////////////////////////////////////Niveau 3
fonction1 = function () {
	life = life -20;
	energy = energy-3;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button4);
	document.body.removeChild(btn4);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You open the door. You discover a long dark corridor, only illuminated by moonlight gushing out of the open windows making the long white curtains float in the air. These open windows are calling out to you. So you decide to lean over to the one on your right. When you stand up, you see a face with a completely white mask in the reflection of the window. As soon as you turn around, you feel a long cold blade crossing your heart. Your blood is slowly spilling on the ground. YOU DIE. END.";
	
	document.body.appendChild(button5);  
	button5.innerHTML = "END";                
	button5.addEventListener("click",aflife);
	};

	fonction2 = function () {
	life = life - 8;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button4);
	document.body.removeChild(btn4);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "The window overlooking the balcony you just landed on is closed.You want to call for help using your phone but you notice that it has been left inthe dining room. Looking through the balcony, you understand that the mansion is located on a cliff and that the balcony overlooks the ocean.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button5);  
	button5.innerHTML = "You jump off the balcony to try to swim to a small creek 50 metres away and lose 12 energies.";                
	button5.addEventListener("click", fonction7);
   
                                      
	document.body.appendChild(btn5);   
	btn5.innerHTML = "You decide to break the window with your elbow. The broken glass slices your skin and makes you lose 5 life points.";                
	btn5.addEventListener("click", fonction8);
	};

	fonction3 = function () {
		energy = energy - 3;
		life = life - 20;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button4);
	document.body.removeChild(btn4);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You find yourself on the front porch of the mansion. You go to your car but you realize you don't have the keys. When you turn around to try to find your keys in the mansion, you come face to face with a person wearing a white mask. Your gaze rests on his hand: he holds a long kitchen knife. You try to escape, but he catches you and stabs you. You bleed to death on the ground. YOU DIE. END.";
     
	document.body.appendChild(button5);  
	button5.innerHTML = "END";                
	button5.addEventListener("click", aflife);
	};

	fonction4 = function () {
		life = life -1;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button4);
	document.body.removeChild(btn4);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You're numb with fear. However, a light coming from underneath a door attracts your attention. You walk towards that door and turn the handle. When you open the door, you discover a small kitchen. On the table is a glass of water and a piece of bread. All this seems strange to you, but the evening with your friends has made you thirsty...";

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button5);  
	button5.innerHTML = "You drink the glass of water and eat the bread. You gain 10 energy points.";                
	button5.addEventListener("click", fonction11);
   
                                      
	document.body.appendChild(btn5);   
	btn5.innerHTML = "You decide not to drink the glass because you feel an evil presence in the mansion and you leave the kitchen.";                
	btn5.addEventListener("click", fonction12);
	};
///////////////////////////////////////////////////////Niveau 2

eat = function () {
    	energy = energy + 10;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button3);
	document.body.removeChild(btn3);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "The candles are extinguished by a draught caused by a door that has suddenly closed. You get up from the chair shaking, completely terrified.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button4);  
	button4.innerHTML = "You choose to go check out what's behind the door that slammed. Your courage brings you 3 energies.";                
	button4.addEventListener("click", fonction1);
   
                                     
	document.body.appendChild(btn4);   
	btn4.innerHTML = "You choose to go through the only window of the room to reach the balcony on the lower floor but you break your ankle and lose 8 life points.";                
	btn4.addEventListener("click", fonction2);
	};

continue2 = function () {
    	energy = energy - 1;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button3);
	document.body.removeChild(btn3);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You leave this dining room and head for a staircase on your right. You walk down these stairs and enter the lobby of the mansion. He is plunged into darkness. You can see the huge front door of the mansion in front of you.";
     

	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button4);  
	button4.innerHTML = "You decide to leave the mansion through the frontdoor and lose 3 energies points";                
	button4.addEventListener("click", fonction3);
   
                                      
	document.body.appendChild(btn4);   
	btn4.innerHTML = "You decide to stay in search of your friends despite this feeling of fear that invades you and you lose one life point";                
	btn4.addEventListener("click", fonction4);
	};

///////////////////////////////////////////////////////Niveau 1
Run = function () {
		music(pas);
    	energy = energy-5;
    	life = life - 3;
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button);
	document.body.removeChild(btn);
	/// Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You run down the stairs to escape these stange noises but unfortunately you fall down these stairs and lose 3 points of life. You get up quickly and continue your run to arrive in a large dining room. There is a real feast before you on a large table.";
     

	/// Création des nouveaux bouttons                                
	document.body.appendChild(button3);  
	button3.innerHTML = "You stop for eat and earn 10 energies.";                
	button3.addEventListener("click", eat);
   
                                      
	document.body.appendChild(btn3);   
	btn3.innerHTML = "You keep going to find another staircase and get out of the damn mansion and loses 1 energy.";                
	btn3.addEventListener("click", continue2);
};

//////////////////////////////////////////////////////////////////////////////////////Partie continuer à marcher


////////////////////////////////////////////////////Niveau 2 

runagain = function () {
    energy = energy-10;
    life = life - 3; 
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button2);
	document.body.removeChild(btn2);
	///Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "You run down the stairs to escape these thing but unfortunately you fall down these stairs and lose 3 points of life. You get up quickly and continue your run to arrive in a large dining room. There is a real feast before you on a large table.";
	
	/// Création des nouveaux bouttons                                  
	document.body.appendChild(button3);  
	button3.innerHTML = "You stop for eat and earn 10 energies.";                
	button3.addEventListener("click", eat);
   
                                    
	document.body.appendChild(btn3);   
	btn3.innerHTML = "You keep going to find another staircase and get out of the damn mansion and loses 1 energy.";                
	btn3.addEventListener("click", continue2);
     };

stay = function () {
	life = life - 20;  
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	document.body.removeChild(button2);
	document.body.removeChild(btn2);
	document.getElementsByTagName('p')[0].innerHTML = "Monster hits you !!!";

	document.body.appendChild(button3);  
	button3.innerHTML = "END";                
	button3.addEventListener("click", aflife);
     };


//////////////////////////////////////////////////////////Niveau 1

continuer = function () {
	life = life - 10;
    energy = energy+1;  
	document.getElementById("life").innerHTML = "Life : " + life;
	document.getElementById("energy").innerHTML = "Energy : " + energy;
	flife(life,energy);
	document.body.removeChild(button);
	document.body.removeChild(btn);
	///Modification du paragraphe
	document.getElementsByTagName('p')[0].innerHTML = "The footsteps seem to be getting closer! Before you even start thinking about running, something grabs your foot and scratches your back. With the pain you fall to the ground. You lost 10 lifes.";
	/// Création des nouveaux bouttons                               
	document.body.appendChild(button2);  
	button2.innerHTML = "Get up very quickly and run. You lose 10 energies";                
	button2.addEventListener("click", runagain);
   
                                    
	document.body.appendChild(btn2);   
	btn2.innerHTML = "Get in a ball and wait";                
	btn2.addEventListener("click", stay);
     };



//////////////////Create buttons for call them direclty in fonctions
var button8 = document.createElement("BUTTON");
var btn8 = document.createElement("BUTTON"); 

var button7 = document.createElement("BUTTON");
var btn7 = document.createElement("BUTTON"); 

var button6 = document.createElement("BUTTON");
var btn6 = document.createElement("BUTTON"); 

var button5 = document.createElement("BUTTON");
var btn5 = document.createElement("BUTTON"); 

var button4 = document.createElement("BUTTON");
var btn4 = document.createElement("BUTTON"); 


var button3 = document.createElement("BUTTON");
var btn3 = document.createElement("BUTTON");

var button2 = document.createElement("BUTTON");
var btn2 = document.createElement("BUTTON");      



var button = document.createElement("BUTTON");                                  
document.body.appendChild(button);  
button.innerHTML = "Run and lost 5 energies";                
button.addEventListener("click", Run);

var btn = document.createElement("BUTTON");                                      
document.body.appendChild(btn);   
btn.innerHTML = "Keep walking";                
btn.addEventListener("click", continuer);
 






