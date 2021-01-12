import * as d3 from "d3";
import _ from "lodash";
const Sort = require("./Sort");
require("./index.css");

//when the page loads, output the unsorted chart, press a button
// button starts everything
// everything: run the array through the sorting function, everytime there's a swap visualize the swap

let arr = _.shuffle(_.range(100));
const sort = new Sort();

// creating the original unsorted barChart
const div = d3
  .select("#barChart")
  .append("div")
  .style("width", "500px")
  .style("font", "10px sans-serif")
  .style("color", "steelblue")
  .style("display", "flex");

div
  .selectAll("span")
  .data(arr)
  .join("span")
  .style("background", "steelblue")
  .style("padding", "3px")
  .style("margin", "1px")
  .style("height", (d) => `${d * 8}px`)
  .style("width", "50px")
  .text((d) => d);

let history = sort.quickSort(arr, 0, arr.length - 1, []);

let win = document.getElementsByTagName('div')[0]

const button = document.getElementsByTagName("button")[0];

button.onclick = function() {
  // deletes and creates each newly sorted barchart from history
  for (let i = 0; i < history.length; i++) {
    if (i === history.length - 1) {
      setTimeout(function() {
        d3.selectAll("span").remove();
        div
          .selectAll("span")
          .data(history[i])
          .join("span")
          .style("background", "steelblue")
          .style("padding", "3px")
          .style("margin", "1px")
          .style("height", (d) => `${d * 8}px`)
          .style("width", "50px")
          .text((d) => d);
        win.innerText = 'Hell Yeah!!!!';
      }, i * 100);
    }
      setTimeout(function() {
        d3.selectAll("span").remove();
        div
          .selectAll("span")
          .data(history[i])
          .join("span")
          .style("background", "steelblue")
          .style("padding", "3px")
          .style("margin", "1px")
          .style("height", (d) => `${d * 8}px`)
          .style("width", "50px")
          .text((d) => d);
      }, i * 100);
  }
};

let rewind = document.getElementsByTagName("button")[1];
rewind.onclick = function() {
  d3.selectAll("span").remove();
  div
    .selectAll("span")
    .data(_.shuffle(_.range(100)))
    .join("span")
    .style("background", "steelblue")
    .style("padding", "3px")
    .style("margin", "1px")
    .style("height", (d) => `${d * 8}px`)
    .style("width", "50px")
    .text((d) => d);
  win.innerText = ''
  button.innerText = "Hit me Baby one more time";
};

//generate an array of random numbers
//generage a barchart
//populate the bar chart
//sort
//show changes in the chart

//loop through the history
//delete old chart
//remake chart with single swap
//restart loop
