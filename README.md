# Musa Virtual Labs

Portfolio site for Musa Virtual Labs, a 3D, product and automotive design practice in Amman, Jordan.

Built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Files

* HTML pages: one per section, plus `project.html` for every project
* `style.css`: all styles
* `script.js`: the `PROJECTS` list and all site behaviour
* `assets/`: images

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Add a project

Put the image in `assets/`, then add an entry to `PROJECTS` in `script.js`:

```js
myProject: {
  title: "Project Title",
  category: "3D Projects · Product Design",
  mainImage: "./assets/example.webp",
  description: ["A short paragraph about the project."],
  galleryImages: [],
  backHref: "3d-projects.html",
  backLabel: "3D Projects"
},
```

It appears on the matching gallery page automatically.
