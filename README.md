# Trailer Park

Trailer park is a Meteor app for showcasing videos, including support for user accounts, submitting, liking and commenting.

## Settings

The site uses twitter (http://apps.twitter.com) for authentication and embedly (http://www.embedly.com) when submitting videos

You need to set up accounts on these services and create a file called settings.json in the root of your project with the following:


```
{
  "embedly": <YOUR_EMBEDLY_KEY>,
  "twitter": {
    "consumerKey": <YOUR_TWITTER_CONSUMER_KEY>,
    "secret": <YOUR_TWITTER_SECRET>
  }
}
```

## Development

```
meteor --settings settings.json
```

To debug server-side code with node-inspector
```
NODE_OPTIONS='--debug-brk' meteor --settings settings.json
```

## Admin

The app uses the ```houston:admin``` package for serverside admin. When you first start the app navigate to ```/admin``` to set an admin username and password.

## Authentication

The site uses twitter for authentication

In development you need to create a test application via apps.twitter.com (including the correct callback URL for example 'http://localhost:3000/_oauth/twitter') and add the keys to settings.json as described above.

## Testing

The app uses the Velocity with Mocha test framework - tests are in ```/tests```

To activate uncomment the ```mike:mocha``` package from ```.meteor/packages``` then
run the app as normal

More information here: http://velocity.meteor.com/

## Production

The app is hosted at www.trailerpark.io

### Deploy

The project can be deployed to the free meteor hosting for demo apps

```
meteor deploy <APP_ROOT_DOMAIN> --settings settings.json
```

More information about deploying to meteor is available here: http://docs.meteor.com/#/full/deploying
