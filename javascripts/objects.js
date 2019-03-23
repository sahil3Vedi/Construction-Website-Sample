//BANNER ROTATION ENGINE

bannerObjects = [
    {
      "location" : "Las Vegas, Nevada",
      "project" : "Turnbull Towers",
      "description" : "The Turnbull Towers have become an icon for Vegas. Instead of competing in a futile race for ultimate height, the project proposes an iconographic constellation of two high-rise structures that actively engage the city space",
      "image" : "images/Turnbull.jpg"
    },
    {
      "location" : "Singapore City",
      "project" : "Jewel Changi Airport",
      "description" : "Changi Airport re-imagines the center of an airport as a major public realm attraction. Jewel offers a range of facilities for landside airport operations, indoor gardens and leisure, retail and hotel facilities, all under one roof.",
      "image" : "images/Changi.jpg"
    },
    {
      "location" : "Kuwait City, Kuwait",
      "project" : "Avenues Mall",
      "description" : "The design of the 1st Avenue and 2nd Avenue mirror the natural lines of the Arabian Desert. The 1st Avenue houses over 200 lifestyle stores including renowned international brands. The first avenue is expansive with wide corridors.",
      "image" : "images/Avenues.jpg"
    }
]

var highBound = Object.keys(bannerObjects).length;

/*initializing count to 1*/
var count = 1;

/*Displaying Variables*/
var leftURL="url('"
var rightURL="')"

$("#caretRight").click(function(){
  /*rotating mechanism for count*/
  count+=1;
  if(count>highBound){
    count = 1;
  }

  var location = bannerObjects[count-1].location;
  var name = bannerObjects[count-1].project;
  var description = bannerObjects[count-1].description;
  var image = bannerObjects[count-1].image;
  image = leftURL + image + rightURL;

  $("#projectLocation").html(location);
  $("#projectName").html(name);
  $("#projectDescription").html(description);
  $("#projectImage").css("background-image",image);
});


$("#caretLeft").click(function(){
  /*rotating mechanism for count*/
  count=count-1;
  if(count == 0){
    count = highBound;
  }

  var location = bannerObjects[count-1].location;
  var name = bannerObjects[count-1].project;
  var description = bannerObjects[count-1].description;
  var image = bannerObjects[count-1].image;
  image = leftURL + image + rightURL;

  $("#projectLocation").html(location);
  $("#projectName").html(name);
  $("#projectDescription").html(description);
  $("#projectImage").css("background-image",image);
});
