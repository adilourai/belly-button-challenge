// Get the dataset endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Read in the data
d3.json(url).then(function(data) {

// Create object combining the various data for each test subject 
      const dataArray = []; {
      for (let i = 0; i < data.names.length; i++) {
        let entry = {};
        entry = {'metadata':data.metadata[i],'samples':data.samples[i]};
        dataArray.push(entry);
         
    }}
    
    console.log(dataArray[0].samples.sample_values) 
      console.log(dataArray[0].metadata)

// Display the default bar chart
function init() {
    let initxdata = [];
    let initydata = [];
    let inittextdata = []; { 
        for (let j = 9; j >= 0; j--) {
            initxdata.push(dataArray[0].samples.sample_values[j]);
            initydata.push('OTU '+String(dataArray[0].samples.otu_ids[j]));
            inittextdata.push(dataArray[0].samples.otu_labels[j]);
        }
    }
    
    let chartData = [{
      x: initxdata,
      y: initydata,
      type: "bar",
      orientation: 'h',
      text: inittextdata
    }];
  
    let layout = {
      height: 600,
      width: 800,
      yaxis: { type: 'category' }
    };
  
    Plotly.newPlot("bar", chartData, layout);
  }
  
//   // On change to the DOM, call getData()
//   d3.selectAll("#selDataset").on("optionChanged(this.value)", getData);
  
//   // Function called by DOM changes
//   function getData() {
//     let dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a letiable
//     let dataset = dropdownMenu.property("value");
//     // Initialize empty arrays for the data
//     let xdata = [];
//     let ydata = [];
//     let textdata = []; 

//     for (let k = 0; k < data.names.length; k++) 
//     {
//     if (dataset == String(dataArray[k].metadata.id)) {
//         for (let m = 9; m >= 0; m--) {
//             xdata.push(dataArray[k].samples.sample_values[m]);
//             ydata.push('OTU '+String(dataArray[k].samples.otu_ids[m]));
//             textdata.push(dataArray[k].samples.otu_labels[m]);
//         }
//         chartData = [{
//             x: xdata,
//             y: ydata,
//             type: "bar",
//             orientation: 'h',
//             text: textdata
//           }];
//     }
//   // Call function to update the chart
//     updatePlotly(chartData);
//   }
  
//   // Update the restyled plot's values
//   function updatePlotly(newdata) {
//     Plotly.restyle("bar", "values", [newdata]);
//   }
  
  init();
  
// Bubble chart

    let bubblexdata = [];
    let bubbleydata = [];
    let bubbletextdata = [];
    let bubblecolordata = []; { 
        for (let a = 0; a < dataArray[0].samples.otu_ids.length; a++) {
            bubblexdata.push(dataArray[0].samples.otu_ids[a]);
            bubbleydata.push(dataArray[0].samples.sample_values[a]);
            bubbletextdata.push(dataArray[0].samples.otu_labels[a]);
            bubblecolordata.push(dataArray[0].samples.otu_ids[a]);
        }
    }
console.log(bubblexdata)
console.log(dataArray[0].samples.otu_ids.length)
var trace1 = {
    x: bubblexdata,
    y: bubbleydata,
    text: bubbletextdata,
    mode: 'markers',
    marker: {
      size: bubbleydata,
      color: bubblecolordata
    }
  };
  
  var bubbledata = [trace1];
  
  var bubblelayout = {
    title: 'Bubble Chart',
    showlegend: false,
    height: 600,
    width: 800
  };
  
  Plotly.newPlot('bubble', bubbledata, bubblelayout);

// Append text to metadata panel
const sample_metadata = document.getElementById('sample-metadata');
const text = document.createTextNode('id: '+(String(dataArray[0].metadata.id))+'\nethnicity: '+
(dataArray[0].metadata.ethnicity)+'\ngender: '+(dataArray[0].metadata.gender)+
'\nage: '+(String(dataArray[0].metadata.age))+'\nlocation: '+(dataArray[0].metadata.location)+
'\nbbtype: '+(dataArray[0].metadata.bbtype)+'\nwfreq: '+(String(dataArray[0].metadata.wfreq)));
sample_metadata.appendChild(text);

})