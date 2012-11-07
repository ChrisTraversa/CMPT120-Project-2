    var currentLocation   = "sheahan";
    var score             = 0;
    /*var hasVisitedChamp1  = false;
    var hasVisitedChamp2  = false;
    var hasVisitedSheahan = false;
    var hasVisitedRiver   = false;
    var hasVisitedBed     = false;
    var hasVisitedHill1   = false;
    var hasVisitedHill2   = false;
    var hasVisitedLot     = false;   
    var hasVisitedTaxi1   = false;*/
    var glowstick         = false;
    var hammer            = false;
    
    
      function giveScore() {
        msg= "Score:"+score;
        updateDisplay(msg);
      } 
      function init() {
        msg="You are a young freshman at Marist College and all you want is McDonalds."+
            "You are in front of Sheahan Hall with Champagnat up ahead. To your east"+
            " is an extremely dark hill area and to your west is a parking lot. Good Luck!"
        updateDisplay(msg);
      }
      
      function helpMe() {
        msg= "Looks like you need some help. Press the directional buttons in the direction"+
             " you want to go. You can also enter N,n,S,s,W,w,E,e in the input for north, south"+
             " east, and west respectively. To take items, type in take. Type inventory to see your items"
             //" To use an item in your inventory type in use 'item name'. Good Luck"
        updateDisplay(msg);
      }    
       
      function takeItem() {
        if(currentLocation==="parkinglot") {
          hammer=true;
          msg="hammer taken."
        }
        else if(currentLocation==="dorm") {
          glowstick=true;
          msg="glowstick taken."
        }
        else{
        msg="Nothing to take here my friend."
        }
         updateDisplay(msg);
       }
      
      
      function inventory(){
        if(glowstick === true){
          msg= "INVENTORY: glowstick"
          }else{}
        if(hammer === true){
          msg= "INVENTORY: hammer"
          }else{}
        if(glowstick ===true && hammer ===true){
          msg= "INVENTORY: glowstick and hammer"
        }else{}
        if(glowstick ===false && hammer ===false){
          msg="INVENTORY:______"
        }
          updateDisplay(msg);
       }
        
        
        
        
      //For the buttons that get disabled, I only disabled the ones that will be 
      //disabled by the end of the game. Even though at this time there will be
      //directions you cannot go at this moment, the button will not be disabled
      //just because in the future they will be open.
      
      
      
     function btn_go_north() {
       
            switch (currentLocation) {
             case "sheahan": currentLocation="champ1";
              location_Champ1(); break;
             case "champ1": currentLocation="champ2";
              location_Champ2(); break;
             case "champ2": currentLocation="library1";
              location_Lib1(); break ;
             case "bedtime": currentLocation="sheahan";
              location_Sheahan(); break;
              default: updateDisplay("Can't go this way yet!");
           }
      }
        
      function btn_go_south() {
       
            switch (currentLocation) {
             case "sheahan": currentLocation="bedtime";
              bedtime(); break;
             case "champ2": currentLocation="champ1";
              location_Champ1(); break;
             case "library1": currentLocation="champ2";
              location_Champ2(); break ;
             case "champ1": currentLocation="sheahan";
              location_Sheahan(); break;
              default: updateDisplay("Can't go this way bro. Not yet");
           }
      }
        
       function btn_go_east() {
       
            switch (currentLocation) {
             case "sheahan": currentLocation="darkhill1";
              location_darkhill1(); break;
             case "darkhill1": currentLocation="darkhill2";
              location_darkhill2(); break;
             case "river": currentLocation="parkinglot";
              parkinglot(); break ;
             case "parkinglot": currentLocation="sheahan";
              location_Sheahan(); break;
             case "dorm": currentLocation="champ2";
              location_Champ2(); break;
             case "champ2": currentLocation="taxi1";
              location_taxi1(); break;
             case "library1": currentLocation="library2";
              location_Lib2(); break;
              default: updateDisplay("You can't go this way right now.");
           }
      }
        
       function btn_go_west() {
       
            switch (currentLocation) {
             case "sheahan": currentLocation="parkinglot";
              parkinglot(); break;
             case "parkinglot": currentLocation="river";
              river(); break;
             case "darkhill1": currentLocation="sheahan";
              location_Sheahan(); break ;
             case "taxi1": currentLocation="champ2";
              location_Champ2(); break;
             case "champ2": currentLocation="dorm";
              location_Dorm(); break;
             case "library2": currentLocation="library1";
              location_Lib1(); break;
              default: updateDisplay("Pick a new direction bucky-boy");
           }
      }
              
              
         
              
             

      function location_Champ1(){
        var msg = "You are outside of Champagnat,"+
        " with a path up ahead"
          document.getElementById("ww").disabled = true;
          document.getElementById("ee").disabled = true;
          document.getElementById("nn").disabled = false;
          document.getElementById("ss").disabled = false;
        updateDisplay(msg);
      }

      function location_Champ2(){
        var msg = "You are at the entrance of Champagnat,"+
        " to your left there are a group of students"+
        " that are telling you to go inside. To your right"+
        " you see some taxis and uphead is the library." 
          document.getElementById("ww").disabled = false;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = false;
          document.getElementById("ss").disabled = false;
        updateDisplay(msg);
      }

      function bedtime(){
        var msg = "What are you doing? How can you sleep when you are hungry?"
        document.getElementById("ww").disabled = true;
        document.getElementById("ee").disabled = true;
        document.getElementById("nn").disabled = false;
        document.getElementById("ss").disabled = true;
        updateDisplay(msg);
      }

      function location_Sheahan(){
        var msg = "You have Sheehan behind you and your mind on"+
        " the prize. Up ahead is another building, to"+
        " your right is pitch black and to your left is a parking lot."
          document.getElementById("ww").disabled = false;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = false;
          document.getElementById("ss").disabled = false;
        updateDisplay(msg);
      }
	     
      function location_darkhill1(){
        var msg = "If you keep going east without seeing anything, things can get dangerous."
          document.getElementById("ww").disabled = false;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = true;
          document.getElementById("ss").disabled = true;
        updateDisplay(msg);
      }
  
      function location_darkhill2(){
        var msg = "You could not see, so you fell to your death, nice job. Refresh the page and restart."
         document.getElementById("ww").disabled = false;
         document.getElementById("ee").disabled = false;
         document.getElementById("nn").disabled = false;
         document.getElementById("ss").disabled = true;
        updateDisplay(msg);
      }
      function location_hill2(){
       var msg = "Woah, good thing for this light or you would of fell down the hill. There is a"
                 " small path up north."
        document.getElementById("ww").disabled = false;
        document.getElementById("ee").disabled = true;
        document.getElementById("nn").disabled = false;
        document.getElementById("ss").disabled = true;
        updateDisplay(msg);
      }          
      function location_taxi1(){
        var msg = "If you keep going east, you can get to the taxis."
        document.getElementById("ww").disabled = false;
        document.getElementById("ee").disabled = false;
        document.getElementById("nn").disabled = true;
        document.getElementById("ss").disabled = true;
        updateDisplay(msg);
      }

      function parkinglot(){
        var msg = "You are in the parking lot of Leo Hall. There is a hammer on the ground and"+
        " if you keep going west, you'll get to the Hudson River."
         document.getElementById("ww").disabled = false;
         document.getElementById("ee").disabled = false;
         document.getElementById("nn").disabled = true;
         document.getElementById("ss").disabled = true;
        updateDisplay(msg);
      }

      function river(){
        var msg = "There is a speedboat on the river, but no keys."
          document.getElementById("ww").disabled = true;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = false;
          document.getElementById("ss").disabled = true;
          updateDisplay(msg);
      }

       function location_Lib1(){
        var msg = "You are outside the library, go east to enter or keep traveling ahead."
          document.getElementById("ww").disabled = true;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = false;
          document.getElementById("ss").disabled = false;
          updateDisplay(msg);
      }
       
        function location_Lib2(){
        var msg = "You have entered the library so be quiet. There is a back exit if you"+
                  " keep going east but it is blocked by a bunch of nerds who just want to have fun."
          document.getElementById("ww").disabled = false;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = true;
          document.getElementById("ss").disabled = true;
          updateDisplay(msg);
      }
      
       function location_Dorm(){
        var msg = "You are inside Champagnat with a group of kids who wanted to show you"+
                  " how awesome their room was with black lights and posters. You realize"+
                  " there is a glowstick on the bed and that these kids are weirdos."
          document.getElementById("ww").disabled = true;
          document.getElementById("ee").disabled = false;
          document.getElementById("nn").disabled = true;
          document.getElementById("ss").disabled = true;
          updateDisplay(msg);
      }
      
      function updateDisplay(msg) {
               
        var ta = document.getElementById("taGame");
          ta.value ="\n" + msg + "\n" + ta.value + "\n" ;
      }

      function clickAway(){
        var text=document.getElementById("textInput");
        if((text.value==="N")||(text.value==="n")){
          btn_go_north();
        }
        else if((text.value==="S")||(text.value==="s")){
          btn_go_south();
        }
        else if((text.value==="E")||(text.value==="e")){
          btn_go_east();
        }
        else if((text.value==="W")||(text.value==="w")){
          btn_go_west();
        }
        else if(text.value==="help"){
          helpMe();
        }
        else if(text.value==="take"){
          takeItem();
        }
        else if(text.value==="inventory"){
          inventory();
        }
        else {
          msg="I do not understand your command. Type help if you need it, I know I do!"
          updateDisplay(msg);
        }
      }