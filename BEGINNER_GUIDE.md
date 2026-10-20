# Put your portfolio online: step by step (no money, no experience needed)

You will end with a live site at **https://raj-962.github.io**. Total time: about 20 minutes.

## Part 1. One-time setup

1. **Sign in to GitHub** at github.com with your account `raj-962`.
2. **Install GitHub Desktop** (free): https://desktop.github.com. Open it and click *Sign in to GitHub.com*.
3. **Unzip** `portfolio.zip` (the file I sent) to a folder, e.g. `Documents/portfolio`.

## Part 2. Create the repository

4. In GitHub Desktop: **File → Add local repository…** → choose the unzipped `portfolio` folder.
   It says "this directory does not appear to be a Git repository". Click **create a repository**.
5. Set **Name** to exactly `raj-962.github.io`. Leave the rest. Click **Create repository**.
   (This special name makes GitHub serve it at your main address.)
6. Top bar: set the branch to `main` (it is the default). In the left list you should see many files, including a folder called `.github`.
7. Bottom-left: type a summary like `First version`, click **Commit to main**.
8. Click **Publish repository**. **Untick "Keep this code private"** (free Pages needs a public repo). Click **Publish**.

## Part 3. Turn on the website

9. Open your repo on github.com: `github.com/raj-962/raj-962.github.io`.
10. **Settings → Pages**. Under *Build and deployment → Source*, choose **GitHub Actions**.
11. Open the **Actions** tab. A run called *Deploy to GitHub Pages* should be running (yellow dot). If not, click it on the left, then **Run workflow**.
12. Wait 1 to 3 minutes for a green tick. Open **https://raj-962.github.io**. Done.

If the run is red, click it, open the failed step, and send me the last 20 lines of the log.

## Part 4. Make it yours (edit, commit, publish; the site updates itself)

| What | File to change |
|---|---|
| Your photo | Add `public/images/portrait.jpg` (square, at least 400 px) |
| Resume button | Add `public/resumes/Raja_Shekar_Resume.pdf` |
| Name, tagline, email, "Open to internships", Now list | `src/content/data/settings.json` |
| Quotes | `src/content/data/quotes.json` (check each attribution) |
| A photo | Put the JPG in `src/assets/photos/`, copy a `.json` in `src/content/frames/`, edit title, alt text, series, date |
| A note (blog post) | New `.md` file in `src/content/notes/` (copy `hello-world.md`) |
| A project | New `.md` file in `src/content/projects/` |

Every time: GitHub Desktop → type a summary → **Commit to main** → **Push origin**. Wait 2 minutes.

Before sharing: delete the six sample photos (they are marked "sample") and replace them with yours.
Resume PDFs may contain your phone number. Remove it before uploading if you do not want it public.

## Part 5. Try it on your computer first (optional)

Install Node 22 from nodejs.org, open a terminal in the folder, run `npm install` then `npm run dev`, and open http://localhost:4321.

## Next phase: the admin page
Once the site is live we add `/admin` so you can upload photos and write notes from a browser. Tell me when Part 3 works.
