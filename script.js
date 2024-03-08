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





        
    }
});
