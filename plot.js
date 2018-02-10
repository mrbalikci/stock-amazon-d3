var apiKey = "knMnRdxve7cL5MSFf39V"

var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`

console.log(url)
/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */

function unpack(rows, index){
    return rows.map(function(row){
        return row[index];
    })
}

function builPlot(){
    Plotly.d3.json(url, function(error, response){
        var name = response.dataset.name;
        var stock = response.dataset.name
        var startDate = response.dataset.name
        var endDate = response.dataset.name
        var dates = response.dataset.name
        var closingPrice = response.dataset.name

        var trace1 = {

        }
    ))
};

var data = [trace1]

var layout = {
    title: `${stock} closing price`
    xaxis: {
        range: [startDate, endDate],
        type: 'date'
    },
    yaxis: {

    }
}

