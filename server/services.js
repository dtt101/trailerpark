// configure services (remove to make sure)
ServiceConfiguration.configurations.remove({
  service: "twitter"
});

ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: 'Dfpa5YsTlzTnHwMFBlSl3syMu',
  secret: 'krkC3OVCybmBZXTFXlrauBsiToAKA3iBWaHuL5qjDLE3nEZoQF',
  loginStyle: "redirect"
});
