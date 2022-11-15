function init() {
  // Grab a reference to the dropdown select element
  var selector =d3.select("#selDataset");
 
  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
   
   console.log(data);
});
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
   
  // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);

      d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
   
  // 3. Create a variable that holds the samples array. 
    var samples = data.samples;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    
    //  5. Create a variable that holds the first sample in the array.
    var result = resultArray[0]
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels =result.otu_labels;
    var sample_values = result.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    var yticks = otu_ids.maps(sampleObj => "OTU" + sampleObj).slice(0, 10).reverse();  
    console.log(yticks)
    
    // 8. Create the trace for the bar chart. 
      var trace1 = {
        x: data.map(row=> row.sample_values),
        y: data.map(row => row.otu_ids),
        text:data.map(row =>row.otu_labels),
        type: "bar",
         orientation: "h"
      };
      //data
      var data = [trace1];
      markers: { 
            //size:,
       margin: { 
              l: 100,
              r: 100,
              t: 100,
              b: 100
            color: onrange,
            colorscale: "Earth"
       }    
      };
      
// data
  var barData = [trace1];      
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top Ten Bacteria Cultures Found"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData,barLayout);
  });
}

//Module 12 delivery 2 "BUBBLE CHART"
    // 1. Create the trace for the bubble chart.
    var bubbleData = [Trace1]
      x:otu_ids
      y:sample_values
      text: otu_labels,
      mode: 'markers',
      markers: { 
             size:sample_values.samples[0].sample_values,
            color: bubbeleData.samples[0].otu_ids,
            colorscale: "Earth"
          } 
    }];
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title: "Bateria Culture Per Sample",
        hovermode: 'closest',
        xaxis:{title:"OTU(Operational Taxonomic Unit) ID" + sample},
        text: [bubbleData.sample[0].out_ids]
        
      var data2 = [trace2];
      varlayout2 = {
        title:"patient out counts",
        xaxis: [title: Otu_ids
        height:600
        width: 1200
      };

      ]
        }
    
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble",bubbleData,bubbleLayout); 
  
//DELIVERABLE 3 Create a Guage Chart
  // Create the buildChart function.
function buildCharts(sample) {
    // Use d3.json to load the samples.json file 
    d3.json("sample.json").then((data) => {
  
      // Create a variable that holds the samples array. 
      // Create a variable that filters the samples for the object with the desired sample number.
        var metadata = data.metadata;
      
      // 1. Create a variable that filters the metadata array for the object with the desired sample number.
      // Create a variable that holds the first sample in the array. 
        var metaDataArray = metadata.filter(sampleObj => sampleObj.id ==sample);
    
  
      // 2. Create a variable that holds the first sample in the metadata array.
        var metaResult=metaDataArray[0];
  
      // Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otu_ids = Topotu.id.map(0,10).reverse();
        var outlabels = otu_labels.slice(0,10).reverse();
        var out_samples = sample_values.slice(0,10).reverse();
      
       
         
      // 3. Create a variable that holds the washing frequency.
        var washfreqs = parseInt(metaDataResult.wfreq);
    
     console.log(washfreqs)

      // Create the yticks for the bar chart.
      //guage: {
        //axis:{range [null,0] "2"},
      // Use Plotly to plot the bar data and layout.
//      Plotly.newPlot();
      
      // Use Plotly to plot the bubble data and layout.
  //    Plotly.newPlot();
     
      // 4. Create the trace for the gauge chart.
      var gaugeData = {
        value:"washfreqs",
        title:{text:"<b> Belly Button Washing Frequency <b>, <br></br> Scrubs per Week"},
        type:"indicator",
        mode:"gauge+number",
        gauge: {
          axis: {range: [0,10], dtick: 2},
          bar: { color: "black"},
          steps:[
            {range: [0,2], color:"red"},
            {range: [2,4], color:"orange"},
            {range: [4,6], color: "yellow"},
            {range: [6.8], color:"yellowgreen"},
            {range: [8,10], color: "green"},
          ]},
      }
    
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
         width:350, height: 400, margin: {t:0, b:0}
      
      };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge",gaugeData,gaugeLayout);
    });
  };

  //kmartyn Challenge 12
  //Columbia U bootcamp 
	
