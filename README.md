# Trailer Park

## Development

```
meteor --settings settings.json
```

To debug server-side code with node-inspector
```
NODE_OPTIONS='--debug-brk' meteor --settings settings.json
```

## Authentication

The site uses twitter for authentication

The app is called 'Trailer Park' and is owned by the @versusg account

## Production

trailerpark.io

Domain is registered with GANDI.net and due to expire on 7th Dec 2014

### Go live checklist

 * Ensure Twitter app callback is set to the production URL
 * Ensure DNS is setup correctly
 * Ensure settings are present (meteor deploy <site> --settings settings.json)
