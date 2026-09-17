# Manuel Pichardo Marcano — academic website

A small static site adapted from [Editorial by HTML5 UP](https://html5up.net/editorial).
No build step or package installation is needed.

## Preview locally, before committing

In Terminal:

```sh
cd /Users/manuel/Documents/Documents/manuelmarcano22.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://localhost:8000** in a browser. Press **Ctrl+C** in Terminal to stop
the server. Local preview does not publish anything or require a commit.
You can also open `index.html` directly in a browser.

## Publish when ready

When you are happy with the local preview, run these commands in Terminal:

```sh
cd /Users/manuel/Documents/Documents/manuelmarcano22.github.io
git status
git add -A
git diff --cached --stat
git commit -m "Update academic website"
git push origin master
```

`git add -A` stages the new website and the old site's move into `old/`.
The `git diff` command lets you review the list of staged changes before committing.
The existing `origin` already points to `manuelmarcano22/manuelmarcano22.github.io`.

Open the repository's [Pages settings](https://github.com/manuelmarcano22/manuelmarcano22.github.io/settings/pages).
Under **Build and deployment**, choose **Deploy from a branch**, select **master**
and **/ (root)**, then click **Save**. If these are already the existing settings,
the push will update the website automatically.
See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Keep the existing **Custom domain** set to `manuelpm.me`; its `CNAME` file has been
preserved. You can follow deployment progress in the repository's **Actions** tab,
then open **https://manuelpm.me**. `.nojekyll` lets GitHub Pages serve these static
files without Jekyll. No hosting settings were changed as part of this update.

## Update the content

- `index.html`: biography, papers, outreach and leadership, contact details, and links. Papers are the six
  first-author publications in the supplied CV; ADS and the PDF contain the full list.
- `FotoManuelPichardoMarcano.jpeg`: the supplied photo, displayed beside the introduction
  on larger screens and below the name and affiliation on phones. CSS controls the
  framing; the original image file is unchanged.
- `PMCV.pdf`: replace this file to update the linked CV. `cv-2.tex` is the supplied
  LaTeX source; both original files are preserved.
- `assets/css/site.css`: personal layout and color adjustments.
- `assets/css/main.css`, `assets/css/fontawesome-all.min.css`, `assets/webfonts/`:
  original template styles and icons.
- `assets/js/site.js`: mobile menu behavior; the main content also works without JavaScript.
- `old/`: original website files, preserved without edits. Git metadata and the
  root `.gitignore` remain in place; the original `CNAME` is also archived here.
- `papers/`: copies of the old posters, retained at their original URLs because
  the CV links to them. The originals are also in `old/papers/`.
- `html5up-editorial/`: the unmodified template supplied for reference.
- `about.html`, `pubs.html`, `code.html`, `outreach.html`: small redirects that
  keep the previous site's page URLs useful. Their original contents are in `old/`.
- `robots.txt`: asks search engines not to crawl the archive or template demo.

The site follows the supplied CV for the current affiliation, email, research
interests, and publication details, plus Manuel's update about using SAINT-EX data
to search for exoplanets around brown dwarfs. The TACOS preprint link was checked against
[arXiv](https://arxiv.org/abs/2106.15104). GitHub and Astrobitos links come from the
previous site. Keep the HTML5 UP design credit and `assets/LICENSE.txt` when editing.
