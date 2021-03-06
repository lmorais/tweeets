var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
  
client.stream('statuses/filter', {track: '#brasil'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    console.log("--------------------------------------------------------------------------------")
    console.log("\n")
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});