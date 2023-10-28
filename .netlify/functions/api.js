exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            googleApi: process.env.GOOGLE_API_KEY,
            mapquestApi: process.env.MAPQUEST_API_KEY
        }),
    }
}