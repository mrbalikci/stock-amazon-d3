var apiKey = "knMnRdxve7cL5MSFf39V"
var stockName = 'AMZN'

var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stockName}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`

console.log(url)