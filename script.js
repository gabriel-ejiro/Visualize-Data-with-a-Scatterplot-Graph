document.addEventListener("DOMContentLoaded", function() {
    // Fetch the dataset using Fetch API
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
        .then(response => response.json())
        .then(data => {
            // Process data and create visualization
            createScatterPlot(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to create scatter plot
    function createScatterPlot(data) {
        // Add your D3.js code here to create the scatter plot
        // User story #1
        <h1 id="title">D3.js Scatter Plot</h1>

        // user story #2


      // Define x scale
         const xScale = d3.scaleLinear()
         .domain([d3.min(data, d => d.xValue), d3.max(data, d => d.xValue)]) // Adjust domain based on your data
         .range([0, width]); 
      // Create x-axis
         const xAxis = d3.axisBottom(xScale);

    // Append x-axis to SVG
         svg.append("g")
        .attr("id", "x-axis")
        .attr("transform", `translate(0, ${height})`) // Position at the bottom of the chart
       .call(xAxis);

    // User story  #3
        // Assuming `data` is your dataset and you have an SVG container named `svg`

// Define y scale
      const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.yValue), d3.max(data, d => d.yValue)]) // Adjust domain based on your data
      .range([height, 0]); // Adjust range based on your chart height

// Create y-axis
      const yAxis = d3.axisLeft(yScale);

// Append y-axis to SVG
     svg.append("g")
     .attr("id", "y-axis")
     .call(yAxis);

// User story #4
// Append dots to SVG
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.xValue)) // Set x-coordinate based on x-value
    .attr("cy", d => yScale(d.yValue)) // Set y-coordinate based on y-value
    .attr("r", 5); // Set radius of dots

// User story #5
// Append dots to SVG
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.xValue)) // Set x-coordinate based on x-value
    .attr("cy", d => yScale(d.yValue)) // Set y-coordinate based on y-value
    .attr("r", 5) // Set radius of dots
    .attr("data-xvalue", d => d.xValue) // Set data-xvalue attribute
    .attr("data-yvalue", d => d.yValue); // Set data-yvalue attribute

// User story #6
// Append dots to SVG
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.xValue)) // Set x-coordinate based on x-value
    .attr("cy", d => yScale(new Date(0, 0, 0, 0, d.yValue))) // Set y-coordinate based on y-value (converted to Date object)
    .attr("r", 5) // Set radius of dots
    .attr("data-xvalue", d => d.xValue) // Set data-xvalue attribute
    .attr("data-yvalue", d => new Date(0, 0, 0, 0, d.yValue)); // Set data-yvalue attribute (converted to Date object)


// User story #7
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.xValue)) // Set x-coordinate based on x-value
    .attr("cy", d => yScale(new Date(0, 0, 0, 0, d.yValue))) // Set y-coordinate based on y-value (converted to Date object)
    .attr("r", 5) // Set radius of dots
    .attr("data-xvalue", d => d.xValue) // Set data-xvalue attribute
    .attr("data-yvalue", d => new Date(0, 0, 0, 0, d.yValue)); // Set data-yvalue attribute (converted to Date object)

// Create x-axis
const xAxis = d3.axisBottom(xScale);

// Append x-axis to SVG
svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height})`) // Position at the bottom of the chart
    .call(xAxis);

// User story #8
// Append dots to SVG
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.xValue)) // Set x-coordinate based on x-value
    .attr("cy", d => yScale(new Date(0, 0, 0, 0, d.yValue))) // Set y-coordinate based on y-value (converted to Date object)
    .attr("r", 5) // Set radius of dots
    .attr("data-xvalue", d => d.xValue) // Set data-xvalue attribute
    .attr("data-yvalue", d => new Date(0, 0, 0, 0, d.yValue)); // Set data-yvalue attribute (converted to Date object)

// Create y-axis
const yAxis = d3.axisLeft(yScale);

// Append y-axis to SVG
svg.append("g")
    .attr("id", "y-axis")
    .call(yAxis);

// User story #9

// Create y-axis with time format
const yAxis = d3.axisLeft(yScale)
    .tickFormat(d3.timeFormat("%M:%S"));

// Append y-axis to SVG
svg.append("g")
    .attr("id", "y-axis")
    .call(yAxis);

// User story #10
// Create x-axis with year format
const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d")); // Use d3.format("d") to format tick labels as years

// Append x-axis to SVG
svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height})`) // Position at the bottom of the chart
    .call(xAxis);

// User story #11
// Assuming `data` is your dataset and you have an SVG container named `svg`

// Define x scale with appropriate domain
const xScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.xValue), d3.max(data, d => d.xValue)]) // Set domain based on actual x-axis data range
    .range([0, width]); // Adjust range based on your chart width

// Create x-axis with year format
const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d")); // Use d3.format("d") to format tick labels as years

// Append x-axis to SVG
svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height})`) // Position at the bottom of the chart
    .call(xAxis);


// User story #12
// Assuming `data` is your dataset and you have an SVG container named `svg`

// Define y scale with appropriate domain
const yScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.yValue), d3.max(data, d => d.yValue)]) // Set domain based on actual y-axis data range
    .range([height, 0]); // Adjust range based on your chart height

// Create y-axis with time format
const yAxis = d3.axisLeft(yScale)
    .tickFormat(d3.timeFormat("%M:%S")); // Format tick labels as %M:%S time format

// Append y-axis to SVG
svg.append("g")
    .attr("id", "y-axis")
    .call(yAxis);

// User story #14
// Select the tooltip element
const tooltip = d3.select("#tooltip");

// Add mouseover event listener to dots
svg.selectAll(".dot")
  .on("mouseover", (event, d) => {
    // Show tooltip
    tooltip
      .style("left", event.pageX + "px")
      .style("top", event.pageY + "px")
      .classed("show", true);

    // Set tooltip text
    tooltip.select("#tooltip-text").text(`X: ${d.xValue}, Y: ${d.yValue}`);
  })
  .on("mouseout", () => {
    // Hide tooltip on mouseout
    tooltip.classed("show", false);
  });

// User story #15
// Select the tooltip element
const tooltip = d3.select("#tooltip");

// Add mouseover event listener to dots
svg.selectAll(".dot")
  .on("mouseover", (event, d) => {
    // Show tooltip
    tooltip
      .style("left", event.pageX + "px")
      .style("top", event.pageY + "px")
      .classed("show", true);

    // Set tooltip text
    tooltip.select("#tooltip-text").text(`X: ${d.xValue}, Y: ${d.yValue}`);

    // Set data-year attribute
    tooltip.attr("data-year", d.xValue);
  })
  .on("mouseout", () => {
    // Hide tooltip on mouseout
    tooltip.classed("show", false);
  });



        
    }
});
