Package.describe({
  name: 'embedly',
  summary: "Embedly package",
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('embedly.js', 'server');
  api.export('Embedly');
});
