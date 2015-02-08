// configure services (remove to make sure)
ServiceConfiguration.configurations.remove({
  service: "twitter"
});

ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: Meteor.settings.twitter.consumerKey,
  secret: Meteor.settings.twitter.secret,
  loginStyle: "redirect"
});
