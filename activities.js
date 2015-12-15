var restultsDiv = document.getElementById("results");
var allActivities = App.allActivities();
restultsDiv.innerHTML = " ";


/** Adding Event Listeners to each checkbox **/
var checkboxes = document.getElementsByTagName("input");

for(var index = 0; index < checkboxes.length; index++) {
  checkboxes[index].addEventListener("change", updateResults);
}

function updateResults(){
  /***Clear out the results area***/
  restultsDiv.innerHTML = " ";

  /***Object to store the values chosen***/
  var choices = {};

  var isIndoor = (document.getElementById("options").isIndoor.value == "true");
  var intensity = document.getElementById("options").intensity.value;

  if(document.getElementById("options").isIndoor.value !== ""){
    choices.isIndoor = isIndoor;
  }

  if(intensity !== ""){
    choices.intensity = intensity;
  }

  /***Console logging out the current choices***/
  var keys = Object.keys(choices);
  for(var index=0; index<keys.length; index++){
    //console.log(keys[index] + ": " + choices[keys[index]]);
  }

  for(var index=0; index<allActivities.length; index++){
    var showActivity = true;
    for(var counter=0; counter<keys.length; counter++){
     var property = keys[counter];
     showActivity = showActivity && (allActivities[index][property] == choices[property]);
    }
    if(showActivity){
      //console.log("match "+allActivities[index].name);
      restultsDiv.innerHTML += "<p>"+allActivities[index].name+"</p>";
    }
  }

}
