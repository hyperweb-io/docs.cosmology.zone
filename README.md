# Docs for Cosmology Products

## Deploy

```ts
yarn deploy:all
yarn invalidate
```

> You can run `yarn deploy:all` multiple times in a day and it only uploads the static pages to cloud but these pages are not really activated and applied to the site unless you run `yarn invalidate`. And we don't suggest run `yarn invalidate` too frequently in a day.