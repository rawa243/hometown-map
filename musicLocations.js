var myMusicLocations = {
  crs: "WGS 84 (EPSG: 4326)", // like it better be!
  author: "Rebekah Watkins", // metadata keys

  // function to show all names in data
  describeMusicLocations: function() {

    // declare variables at top of function
    var myList = "";

    // loop through all features to build list of names
    for (i = 0; i < this.features.length; i++) {
        myList += this.features[i].name + ", ";

        // at the end of the list give a final message.
        if (i === this.features.length-1) {
          myList += " are all of the places I have mapped!";
        }
      }
    console.log("Report: " + myList );
  },
    // Locations as array of JS objects
    features: [{
      name: "Van Andel Arena",
      properties: {
        coordinates: [42.962428, -85.671581],
        type: "Stadium",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Vanandel.jpg",
        icon: "svgs/stadium-11.svg",
      }
    },
    {
      name: "DeVos Performance Hall",
      properties: {
        coordinates: [42.968144, -85.672868],
        type: "Concert Hall",
        imageURL: "https://devosperformancehall.com/sites/default/files/styles/performance-basic-page-primary/public/primary-image/DPH_Interior1_0.jpg?itok=TsrkPSyw",
        icon: "svgs/music-11.svg",
      }
    },
    {
      name: "Grand Rapids Civic Theatre",
      properties: {
        coordinates: [42.964289, -85.667804],
        type: "Theatre",
        imageURL: "http://womenslifestyle.com/wp-content/uploads/2013/07/GrandRapidsCivicTheatreExterior1.jpg",
        icon: "svgs/theatre-11.svg",
      }
    }
  ]
};
