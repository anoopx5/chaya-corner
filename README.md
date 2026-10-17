# Chaya Corner (Next.js sample site)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Changing images
Edit `lib/data.js`. Use `pexels(PHOTO_ID)` for a Pexels photo, any Unsplash URL, or a file in `/public`
(for example `"/img/cake.jpg"`). Empty slots show a colored tile with an emoji.
Remote hosts must be listed in `next.config.mjs`.
Pixabay asks that you download images and host them yourself, so put those in `/public`.
