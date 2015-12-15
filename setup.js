var App = {};

// Use the App.functions below to access the data
// For example, call the App.allActivityNames() function if you need the names of each activity to use for your functions
// This way, you don't need to parse the object/arrays for this information

(function() {
  // Returns a list of all activities in alphabetical order
  App.allActivities = function() {
    return listOfActivities.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  };

  // Returns all the activity names in alphabetical order
  App.allActivityNames = function() {
    return App.allActivities().map(function(activity) {
      return activity.name;
    });
  };

  // Return all activities that have the given tag in alphabetical order
  // @param tag: a string with the tag name, e.g. "kidFriendly" or "adult"
  App.activitiesForTag = function(tag) {
    return tags[tag].sort();
  };

  // Returns all the tags ("kidFriendly" and "adult" so far) in alphabetical order
  App.allTags = function() {
    return Object.keys(tags).sort();
  };

  // @param isIndoor: true (is indoor) or false (is outdoor)
  App.indoorActivities = function(isIndoor) {
    return App.allActivities().filter(function(activity) {
      return activity.isIndoor === isIndoor;
    });
  };




  //
  // Data
  //
  function activity(name, location, hours, isIndoor, intensity, costAmount, cost, kidFriendly) {
    this.name = name;
    this.location = location;
    this.hours = hours;
    this.isIndoor = isIndoor;
    this.kidFriendly = kidFriendly;

    //intensity is "low" (sitting), "medium" (walking), "high" (very active)
    this.intensity = intensity;

    this.costAmount = costAmount;
    this.cost = cost;

    /*  if(costAmount > 40){
        return "highCost";
      }
      else if(costAmount >= 20){
        return "medCost";
      }
      else {
        return "lowCost";
      } */

  }

  var listOfActivities = [
    new activity("Oregon Zoo", "4001 Southwest Canyon Road, Portland, OR 97221", "9am-4pm", false, "medium", 11.50, "lowCost", true),
    new activity("Voodoo Donuts", "22 SW 3rd Ave, Portland, OR 97204", "24hrs", true, "low", 5, "lowCost", true),
    new activity("Portland Children's Museum", "4015 SW Canyon Rd, Portland, OR 97221", "9am-5pm", true, "medium", 10.75, "lowCost", true),
    new activity("Portland Art Museum", "1219 SW Park Ave, Portland, OR 97205", "10am-5pm", true, "medium", 19.99, "lowCost", true),
    new activity("Evergreen Aviation Museum", "500 NE Captain Michael King Smith Way, McMinnville, OR 97128", "9am-5pm", true, "medium", 25, "medCost", true),
    new activity("Tillamook Cheese Factory", "4175 Highway 101 North, Tillamook, OR 97141", "8am-6pm", true, "medium", 0, "lowCost", true),
    new activity("Newport Aquarium", "1 Aquarium Way, Newport, KY 41071", "10am-6pm", true, "medium", 19.95, "medCost", true),
    new activity("Pioneer Place", "700 SW 5th Ave, Portland, OR 97204", "10am-6pm", true, "medium", 35, "medCost", true),
    new activity("Crystal Ballroom", "1332 W Burnside St, Portland, OR 97209", "varies", true, "low", 35, "medCost", true),
    new activity("Mississippi Studios", "3939 N Mississippi Ave, Portland, OR 97227", "11am-2am", true, "low", 15, "lowCost", true),
    new activity("MODA Center", "1 N Center Ct St, Portland, OR 97227", "varies", true, "low", 35, "medCost", true),
    new activity("Multnomah Falls", "45.57595°N 122.11536°W", "sunrise to sunset", false, "high", 0, "lowCost", true),
    new activity("Cannon Beach", "45°53′21″N 123°57′39″W", "sunrise to sunset", false, "high", 0, "lowCost", true),
    new activity("Washington Park", "4001 SW Canyon Rd, Portland, OR 97221", "5am-10pm", false, "high", 0, "lowCost", true),
    new activity("International Rose Test Garden", "400 SW Kingston Ave, Portland, OR 97205", "7:30am-9pm", false, "medium", 0, "lowCost", true),
    new activity("Bonneville Dam", "45°38′39″N 121°56′26″W", "sunrise to sunset", false, "medium", 0, "lowCost", true),
    new activity("Oaks Amusement Park", "7805 SE Oaks Park Way, Portland, OR 97202", "10:30am-10:30pm", false, "medium", 20, "medCost", true),
    new activity("Saturday Market", "2 SW Naito Pkwy, Portland, OR 97204", "10am-5pm", false, "medium", 0, "lowCost", true),
    new activity("The Grotto", "8840 NE Skidmore St, Portland, OR 97220", "9am-6pm", false, "medium", 5, "lowCost", true),
    new activity("Mt. Hood", "45°22′25″N 121°41′45″WCoordinates: 45°22′25″N 121°41′45″W", "sunrise to sunset", false, "high", 0, "lowCost", true),
    new activity("Portland Kayak Company Tours", "6600 SW Macadam Ave, Portland, OR 97239", "10am-6pm", false, "high", 45, "highCost", true),
    new activity("BrewCycle", "1425 NW Flanders St, Portland, OR 97209", "8am-7pm", false, "high", 25, "medCost", false)
  ];

  var tags = {
    kidFriendly: ["Oregon Zoo", "Portland Children's Museum",
      "Evergreen Aviation Museum", "Tillamook Cheese Factory",
      "Newport Aquarium", "Cannon Beach",
      "Oaks Amusement Park", "The Grotto", "Saturday Market",
      "Mt. Hood", "Bonneville Dam", "Washington Park",
      "International Rose Test Garden"
    ],
    adult: ["BrewCycle"]
  };



})();

//Image Gallery Script
