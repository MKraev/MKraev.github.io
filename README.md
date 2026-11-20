# milen-kraev-site

Personal website and blog of Milen Kraev: CV, research, consulting services and blog.
Built with [Jekyll](https://jekyllrb.com/) and hosted for free on **GitHub Pages**. GitHub builds the site
itself, so you don't need to install anything on your computer to publish.

## Structure

| What                         | Where                                  |
|------------------------------|----------------------------------------|
| Name, links, status badges   | `_config.yml`                          |
| Work history                 | `_data/experience.yml`                 |
| Education / skills           | `_data/education.yml`, `_data/skills.yml` |
| Publications                 | `_data/publications.yml`               |
| Consulting offers            | `_data/services.yml`                   |
| Menu                         | `_data/nav.yml`                        |
| Blog posts (Markdown)        | `_posts/YYYY-MM-DD-title.md`           |
| Post template                | `_drafts/post-template.md`             |
| Pages                        | `index.html`, `about.html`, `research.html`, `services.html`, `contact.html`, `blog/index.html` |
| Photo, CV PDF, images        | `assets/img/`, `assets/files/`         |
| Styles / script              | `assets/css/style.css`, `assets/js/main.js` |

## Publish on GitHub Pages (≈5 minutes, free)

1. Create a GitHub account if you don't have one.
2. Create a **public** repository named exactly **`<your-username>.github.io`**
   (the site will then live at `https://<your-username>.github.io`). Any other name works too; the site is then
   served at `https://<your-username>.github.io/<repo-name>/` and the paths adjust automatically.
3. Push this folder:
   ```bash
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
4. In the repository: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   branch `main`, folder `/ (root)` → Save.
5. After ~1 minute the site is live. Each later `git push` redeploys automatically
   (progress is visible under the repo's **Actions** tab, which also shows build errors).

### Custom domain (optional, ~€10/year)

1. Buy a domain (e.g. `milenkraev.com`) from any registrar: Cloudflare Registrar, Namecheap, Porkbun, etc.
2. **Settings → Pages → Custom domain** → enter the domain. GitHub creates a `CNAME` file.
3. At the registrar, add DNS records: four `A` records for `@` → `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` → `<your-username>.github.io`.
4. Tick **Enforce HTTPS**, then uncomment `url:` in `_config.yml` and set it to the domain.

### Alternatives (also free)

- **Cloudflare Pages**: connect the GitHub repo, framework preset *Jekyll*, build command `jekyll build`,
  output directory `_site`. Unlimited bandwidth and very fast.
- **Netlify**: same settings (`jekyll build`, `_site`).

## Everyday tasks

- **Write a post:** copy `_drafts/post-template.md` to `_posts/2026-12-01-my-title.md`, edit, commit, push.
  You can do this directly on github.com (Add file → Create new file) with no local tools.
- **Add a photo:** save a square photo as `assets/img/profile.jpg` and set `author.photo: /assets/img/profile.jpg`.
- **Add a downloadable CV:** put the PDF in `assets/files/` and set `author.cv: /assets/files/Milen_Kraev_Resume.pdf`.
- **Job search on/off:** `open_to_work.enabled: true/false` in `_config.yml` (same for `freelance`).
- **Company:** when you register one, fill in `business.name` / `business.registration`. It appears in the footer
  and on the Services page.
- **Printable CV:** open `/about/` and press *Print this page*. The print styles hide navigation and buttons.

## Local preview (optional)

Requires Ruby (Windows: [RubyInstaller](https://rubyinstaller.org/) with Devkit):

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```
