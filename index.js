const ogs = require('open-graph-scraper');

module.exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin" : "*"
  };
  const url = event.queryStringParameters && event.queryStringParameters.url;
  if (!url) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'url is required' })
    };
  }

  const { error, result } = await ogs({ url });

  if (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(error)
    };
  } else {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };
  }
}
