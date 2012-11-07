    var currentLocation   = "sheahan";
    var score             = 0;
    var hasVisitedChamp1  = false;
    var hasVisitedChamp2  = false;
    var hasVisitedSheahan = false;
    var hasVisitedRiver   = false;
    var hasVisitedBed     = false;
    var hasVisitedHill1   = false;
    var hasVisitedHill2   = false;
    var hasVisitedLot     = false;   
    var hasVisitedTaxi1   = false;
             
      function giveScore() {
        msg= "Score:"+score;
        updateDisplay(msg);
      } 

             
      function btn_go_north() {
        if(currentLocation==="sheahan"){
          currentLocation = "champ1";
          location_Champ1();
          if(!hasVisitedChamp1){
            score= score + 5;
            hasVisitedChamp1 = true;
          }
         }
        else if(currentLocation==="champ1"){
          currentLocation="champ2";
          location_Champ2();
          if(!hasVisitedChamp2){
            score= score + 5;
            hasVisitedChamp2 = true;
          }
        }
        else if(currentLocation==="bedtime"){
          currentLocation="sheahan";
          location_Sheahan();
          if(!hasVisitedSheahan){
            score= score + 5;
            hasVisitedSheahan = true;
          }
        }
        else {
          updateDisplay("You cannot go this way now!")
        }  
      }



      function btn_go_south() {
        if(currentLocation==="sheahan"){
          currentLocation ="bedtime";
          bedtime();
          if(!hasVisitedBed){
            score= score + 5;
            hasVisitedBed = true;
          }
        }
        else if(currentLocation==="champ2"){
          currentLocation="champ1";
          location_Champ1();
          if(!hasVisitedChamp1){
            score= score + 5;
            hasVisitedChamp1 = true;
          }
        }
        else if(currentLocation==="champ1"){
          currentLocation="sheahan";
          location_Sheahan();
        }
        else {
          updateDisplay("You cannot go this way now!")
        }
      }

      function btn_go_east() {
        if(currentLocation==="sheahan"){
          currentLocation ="darkhill1"
          location_darkhill1();
          if(!hasVisitedHill1){
            score= score + 5;
            hasVisitedHill1 = true;
          }
        }     
        else if(currentLocation==="darkhill1"){
          currentLocation="darkhill2";
          location_darkhill2();
          if(!hasVisitedHill2){
            score= score + 5;
            hasVisitedHill2 = true;
          }
        }
        else if(currentLocation==="river"){
          currentLocation="parkinglot";
          parkinglot();
        }
        else if(currentLocation==="parkinglot"){
          currentLocation="sheahan";
          location_Sheahan();
        }
        else if(currentLocation==="champ1"){
          currentLocation="taxi1";
          location_taxi1();
          if(!hasVisitedTaxi1){
          score= score + 5;
          hasVisitedTaxi1 = true;
          }
        }
        else {
          updateDisplay("You cannot go here right now!")
        }
      }

      function btn_go_west() {
        if(currentLocation==="sheahan"){
          currentLocation ="parkinglot"
          parkinglot();
          if(!hasVisitedLot){
          score= score + 5;
          hasVisitedLot = true;
          }
        }
        else if(currentLocation==="parkinglot"){
          currentLocation="river";
          river();
          if(!hasVisitedRiver){
            score= score + 5;
            hasVisitedRiver = true;
          }
        }
        else if(currentLocation==="darkhill1"){
          currentLocation="sheahan";
          location_Sheahan();
        }
        else if(currentLocation==="taxi1"){
        currentLocation="champ1";
        location_Champ1();
        }
        else {
        updateDisplay("You cannot go here right now!")
        }
      }


      function location_Champ1(){
        var msg = "You are outside of Champagnat,"+
        " with paths up ahead and to your east"
        updateDisplay(msg);
      }

      function location_Champ2(){
        var msg = "You are at the entrance of Champagnat,"+
        " to your left there are a group of students"+
        " that are telling you to go inside. To your right"+
        " you see some taxis and uphead is the library." 
        updateDisplay(msg);
      }

      function bedtime(){
        var msg = "What are you doing? How can you sleep when you are hungry?"
        updateDisplay(msg);
      }

      function location_Sheahan(){
        var msg = "You have Sheehan behind you and your mind on"+
        " the prize. Up ahead is another building, to"+
        " your right is pitch black and to your left is a parking lot."
        updateDisplay(msg);
      }
	     
	     
      function location_darkhill1(){
        var msg = "You cannot see anything, you might fall down the hill if you go"+
        " any further."
        updateDisplay(msg);
      }

	     
      function location_darkhill2(){
        var msg = "You could not see, so you fell to your death, nice job. Refresh the page and restart."
        updateDisplay(msg);
      }
      function location_taxi1(){
        var msg = "If you keep going east, you can get to the taxis."
        updateDisplay(msg);
      }

      function parkinglot(){
        var msg = "You are in the parking lot of Leo Hall"+
        " If you keep going west, you'll get to the Hudson River."
        updateDisplay(msg);
      }



      function river(){
        var msg = "There is a speedboat on the river, but no keys."
          updateDisplay(msg);
      }


      function updateDisplay(msg) {
               
        var ta = document.getElementById("taGame");
          ta.value ="\n" + msg + "\n" + ta.value + "\n" ;
      }

      function clickAway(){
        var text=document.getElementById("textInput");
        if((text.value==="n")||(text.value==="N")){
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
        else {
          msg="That is not a direction" + "\n" +
          "Directions consist of N,n,S,s,E,e,W,w for north south east west respectivley."
          updateDisplay(msg);
        }
      }