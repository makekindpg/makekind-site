# Make America Kind — website

A static, four-page site (Home, Order Buttons, Car Magnets, Contact) rebuilt
for GitHub Pages. Plain HTML/CSS/JS — no build step, no dependencies to install.

```
├── index.html        Home
├── order.html         Order Buttons (links to purebuttons.com)
├── car-magnet.html    Order Car Magnets (links to stickylife.com)
├── contact.html        Contact
├── css/styles.css     All styling
├── js/main.js          Mobile nav toggle + pin tilt
└── assets/favicon.svg
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `makekind-site`).
2. Push these files to the repository's default branch:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/makekind-site.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under "Build and deployment"
   set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`.
4. GitHub will publish the site at `https://YOUR-USERNAME.github.io/makekind-site/`
   within a minute or two.

## Pointing makekind.org at it

To use your existing domain instead of the github.io URL:

1. Add a file named `CNAME` (no extension) to the repo root containing just:
   ```
   makekind.org
   ```
2. At your domain registrar, add these DNS records:
   - Four `A` records for the apex domain pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`
3. Back in **Settings → Pages**, enter `makekind.org` as the custom domain
   and enable "Enforce HTTPS" once it's available (can take a few hours).

## Analytics

The site is wired up with Google Analytics 4 (Measurement ID `G-3BDSZT17VZ`)
via the standard `gtag.js` snippet in the `<head>` of all four pages. No
further installation needed — once the site is live, GA4 will start
collecting data automatically.

**To confirm outbound-click tracking is on:** in GA4, go to
**Admin → Data Streams → your web stream → Enhanced measurement**, and make
sure "Outbound clicks" is toggled on. It's on by default for new streams.

**To see which specific button/magnet link was clicked:** GA4 logs outbound
clicks as a generic `click` event with a `link_url` parameter, but the
standard Reports section doesn't break this down by URL automatically. To
see it:

1. Go to **Explore → Free form** and create a new exploration
2. Add **Link URL** as a dimension (register it under
   **Admin → Custom definitions** first if it doesn't appear in the picker)
3. Add **Event count** as the metric, filtered to event name = `click`
4. This produces a table of every destination URL clicked and how many
   times — including each individual purebuttons.com / stickylife.com link, so you
   get a per-design breakdown

**To see visitor location:** already built in, no setup needed — go to
**Reports → User → User attributes → Demographic details** for a country
(and drill-down city) breakdown of all visitors.

**On purchase quantities:** purebuttons.com and stickylife.com are separate
storefronts with their own checkout, so GA4 (or any tool on this site) can
only see that someone *clicked through* — not whether they completed an
order or how many they bought. Click-through counts by design are still a
reasonable proxy for interest. If exact order counts matter, that data
would need to come directly from purebuttons/stickylife's own reporting.

## Editing content

Everything is plain HTML — open any `.html` file in a text editor and edit
the copy directly. Shared colors, fonts, and the pin-badge component all
live in `css/styles.css` under the `:root` variables at the top, so a design
tweak (e.g. changing the mustard or brick accent color) only needs to happen
in one place.
