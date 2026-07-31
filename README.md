# Writer’s Desk Support Site

Public support and privacy pages for Writer’s Desk on macOS.

## Intended GitHub Pages URLs

- Home: `https://kolt6465.github.io/writers-desk-support/`
- Support: `https://kolt6465.github.io/writers-desk-support/support.html`
- Privacy: `https://kolt6465.github.io/writers-desk-support/privacy.html`

## Publishing

1. Create a public GitHub repository named `writers-desk-support` under
   `KOLT6465`.
2. Push the contents of this directory to its default branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, select the default
   branch and the repository root, then save.
4. Confirm all three URLs above load over HTTPS.
5. Replace the placeholder support and privacy URLs in Writer’s Desk App Store
   metadata only after the Pages deployment is live.

The `.nojekyll` file tells GitHub Pages to serve this as a plain static site.

## Local preview

From this directory:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.
