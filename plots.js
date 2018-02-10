var apiKey = "****Rdxve7cL5MSFf39V"

var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2018-02-09&api_key=${apiKey}`;

function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index]
    })
}


function buildPlot() {
    Plotly.d3.json(url, function (error, response) {

        console.log(response)
        var name = response.dataset.name;
        var stock = response.dataset.dataset_code;
        var startDate = response.dataset.start_date;
        var endDate = response.dataset.end_date;
        var dates = unpack(response.dataset.data, 0);
        var closingPrices = unpack(response.dataset.data, 4)

        trace = {
            x: dates,
            y: closingPrices,
            type: "scatter",
        }

        data = [trace]
        layout = {
            title: "Amazon Stock Prices"
        }
        
        Plotly.newPlot("plot", data, layout)
    })

}

buildPlot();