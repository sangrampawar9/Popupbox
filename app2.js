$(document).ready(function() {
    
var channel = 'pubnub-twitter';

var pubnub = PUBNUB.init({
	//windowing     : 1000,	---- Not Required
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe',
		ssl: true
	});


/*    Not Required
function unsub(){
    pubnub.unsubscribe({
            channel: channel
        });
} */
    
    
function getStreamData() {
		pubnub.subscribe({
			channel: channel,
			message: processData
		});
    //setTimeout(function(){unsub();},1000); ---- Not Required
	}
    
    
var myLiveChart;
var latestLabel=0;
    
function initChart(){
    var canvas = document.getElementById('updating-chart'),
    ctx = canvas.getContext('2d'),
    startingData = {
      labels: [],
      datasets: [
          {   
              label: "India",
              fillColor: "rgba(211,47,47,0.2)",
              strokeColor: "rgba(211,47,47,1)",
              pointColor: "rgba(211,47,47,1)",
              pointStrokeColor: "#fff",
              data: []
          },
          {
              label: "America",
              fillColor: "rgba(69,39,160,0.2)",
              strokeColor: "rgba(69,39,160,1)",
              pointColor: "rgba(69,39,160,1)",
              pointStrokeColor: "#fff",
              data: []
          }
      ]
    },
    latestLabel = startingData.labels[0];

  
  myLiveChart = new Chart(ctx).Line(startingData, {
                                animationSteps: 15, // Reduce the animation steps for demo clarity.
                                scaleOverride : true, 
                                scaleSteps : 5,    //Set y-axis scale
                                scaleStepWidth : 1,
                                scaleStartValue : 0 
                                });
}

initChart(); //initializing chart
    
var height1 = 0;
var height2 = 0;
var range = 0;
    
function displayData(detected){
    range++; 
    if(detected==1){
        height1 ++; 
    }
    if(detected==2){
        height2 ++;
    }
    if(range>=50){
        myLiveChart.addData([height1,height2], latestLabel);// Plot Data
        if(latestLabel>500)
        {
            myLiveChart.removeData();// Remove the first point so we don't just add values forever
        }
        latestLabel=latestLabel+50; //Adding new data point on x-axis
        height1 = 0; //Resetting the value of y-axis to 0 to plot the next value for first Dataset
        height2 = 0; //Resetting the value of y-axis to 0 to plot the next value for second Dataset
        range = 0; //Resetting the value of range to 0 to plot the next value
    }
  
}
    var tweetcountry;

function processData(data) {
         //console.log(data) ---- For Testing
		 var str = data.text;
                            if (str.toLowerCase().indexOf("india") >= 0 ) //search for the word india in a tweet
                            {
                                //console.log(str);
                                tweetcountry = "India";
                              console.log(tweetcountry);
                                setValue(tweetcountry);
                              //console.log(1); ---- For Testing
                              //setTimeout(function(){displayData(1);},1000); ---- Not Required
                                displayData(1);
                            } 
                             if (str.toLowerCase().indexOf("america") >= 0 ) //search for the word america in a tweet
                            {
                              //console.log(str);
                                tweetcountry = "America";
                              console.log(tweetcountry);
                                setValue(tweetcountry);
                              //console.log(1); ---- For Testing
                              //setTimeout(function(){displayData(1);},1000); ---- Not Required
                                displayData(2);
                            } 
                            else{
                                //setTimeout(function(){displayData(0);},1000); ---- Not Required
                                displayData(0);
                            }
	}
    
    var deviceID = "2c0047000347343339373536";
    var accessToken = "6814360a39ee5e3e99bd981ae4c0a68d3ccf19c0";
    var setFunc = "tweet";
    
    function setValue(tweetcountry) {
	var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";
        $.post( requestURL, { params: tweetcountry, access_token: accessToken });
}
    
	//setInterval(function(){getStreamData();},1500); ---- Not Required
    getStreamData();
}); 
