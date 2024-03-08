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
    }
});
