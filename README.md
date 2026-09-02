# Writer’s Desk Support Site

Public support and privacy pages for Writer’s Desk on macOS.

## Intended GitHub Pages URLs

- Home: `https://kolt6465.github.io/writers-desk-support/`
- Support: `https://kolt6465.github.io/writers-desk-support/support.html`
- Privacy: `https://kolt6465.github.io/writers-desk-support/privacy.html`

## Publishing

The public repository is `KOLT6465/writers-desk-support`. GitHub Pages deploys
the root of its `main` branch. Publish the contents of this directory, then
confirm all three URLs above load over HTTPS.

The `.nojekyll` file tells GitHub Pages to serve this as a plain static site.

The site intentionally shares the production constellation app icon and color
system so its support and privacy pages remain visually consistent with the
current Mac app.

## Local preview

From this directory:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.
