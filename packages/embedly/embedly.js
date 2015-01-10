// embedly API calls
Embedly = {};

Embedly.embed = function(url){
  if(!Meteor.settings.embedly)
    throw new Meteor.Error(500, 'Please provide an Embedly token in Meteor.settings');

  var embedResponse = Meteor.http.get(
    "http://api.embed.ly/1/oembed?",
    {
      timeout: 5000,
      params:{
        "format": "json",
        "key": Meteor.settings.embedly,
        "url": url
      }
    }
  );
  if (embedResponse.statusCode === 200) {
    return embedResponse
  } else {
    throw new Meteor.Error(500, "Embedly call failed with error: " + embedResponse.error_message);
  }
}
