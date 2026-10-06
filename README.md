# Musa Virtual Labs

Portfolio of Musa Virtual Labs, a design and engineering practice based in Amman, Jordan. It presents 3D visualization, product and automotive design, 2D graphic work, physical builds and press coverage. The interface takes its look from architecture and motorsport: dark ink surfaces, Brand Red accents, cards with sharp edges, monospaced technical labels and a restrained motion system.

The site is static and has no dependencies: plain HTML, CSS and JavaScript, with no build step, framework or package manager. The only external resource is Google Fonts.

## Tech stack

**HTML5.** A semantic multipage site. Every page shares the same navbar, section ruler and footer.

* `index.html`: Home, with hero, three disciplines, selected work and contact block
* `3d-projects.html`: 3D visualization, product and automotive work
* `2d-projects.html`: Graphic design, branding and print
* `media.html`: Press coverage
* `special-projects.html`: Physical builds and fabrication
* `about.html`: Practice, education, speaking, jury and mentoring
* `contact.html`: Contact details and enquiry form
* `project.html`: Single dynamic detail page, filled in from `?id=<projectKey>`

**CSS3.** All styling is in `style.css`.

* Design tokens are custom properties on `:root`: colours, type, the page gutter, the hairline rule colour and motion easing.
* Project galleries use a responsive grid of two columns. Cards are spaced, each has its own 1px frame, and every image sits in a fixed 16:10 frame. Below 720px the grid stacks into one column.
* The navigation collapses into a sliding mobile menu below 1200px, opened by a real `<button>` that announces its open state to screen readers.
* Hover is a 1px Brand Red frame plus a 1.02 image zoom, clipped inside its frame. The reduced motion setting of the operating system is respected throughout, and a footer switch pauses looping motion.

**Vanilla JavaScript.** All behaviour is in `script.js`.

* **Project database:** `PROJECTS` is a single object holding every project.
* **Dynamic galleries:** gallery grids are filled from `PROJECTS` by category. Card numbers (`01`, `02`, ...) are recounted from the cards actually shown. Entries without a `mainImage` are never rendered.
* **Detail page:** `project.html` builds its hero, description, meta strip and full render from the entry. It adds a column of detail photos only when the project has distinct extra images in `galleryImages`. Otherwise the layout becomes a single column.
* **Lightbox:** a modal for images at full resolution. It locks page scroll while open, closes on Esc, the Close button or a click, and returns the reader to their exact scroll position.
* **Previous / Next pager:** loops through every project that has an image.

## Directory structure

```
.
├── index.html               Home
├── 3d-projects.html         3D gallery (handwritten cards plus entries from PROJECTS)
├── 2d-projects.html         2D gallery (built entirely from PROJECTS)
├── media.html               Press gallery (handwritten cards plus entries from PROJECTS)
├── special-projects.html    Builds gallery (handwritten cards)
├── about.html               About Me
├── contact.html             Contact and enquiry form
├── project.html             Dynamic project detail page
├── style.css                All styles
├── script.js                PROJECTS database, IMAGE_SIZES table and all behaviour
├── favicon.svg
├── README.md
└── assets/                  Site images (WebP) and logo
    ├── logo.png
    ├── about-me.webp
    ├── about-mentoring-1.webp
    ├── about-mentoring-2.webp
    ├── 3d-pen-design.webp
    ├── architecture-civic-complex.webp
    ├── architecture-design.webp
    ├── cable-box-design.webp
    ├── corporate-identity-branding.webp
    ├── dagger-design.webp
    ├── edu-projects-gju.webp
    ├── ev-taxi-clay-model.webp
    ├── ev-taxi-clay-1.webp ... ev-taxi-clay-4.webp
    ├── fablab-royal-visit-1.webp ... fablab-royal-visit-3.webp
    ├── film-equipment-rickshaw.webp
    ├── formula-student-design.webp
    ├── formula-student-1.webp ... formula-student-3.webp
    ├── logo-design-collection.webp
    ├── mdu-covid19.webp
    ├── nhs-leeds-posters.webp
    ├── poster-designs.webp
    ├── press-golf-competition.webp
    ├── press-techworks.webp
    ├── print-layout-collection.webp
    ├── pvc-pipe-go-kart.webp
    ├── pvc-buggy-1.webp ... pvc-buggy-4.webp
    ├── restaurant-menu-design.webp
    ├── rollski-design.webp
    ├── ventilation-covid19-a.webp
    ├── ventilation-covid19-b.webp
    ├── volvo-vcsi-planner.webp
    ├── vw-golf-competition.webp
    └── wood-furniture-design.webp
```

Asset filenames are lowercase and hyphenated. Paths are case sensitive on GitHub Pages, so keep new files to the same convention.

## Running locally

Serve the folder with any static server, then open the URL it prints.

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000

# or Node
npx serve .
```

The Live Server extension in VS Code works too. A server is recommended over opening files directly from disk, because some browser features, such as view transitions between pages, only run over HTTP.

## Adding a project

1. Export the image as WebP into `assets/`, using a lowercase, hyphenated name.
2. Add an entry to `PROJECTS` in `script.js`. The object key becomes the URL id: `project.html?id=yourProjectKey`.

```js
yourProjectKey: {
  title: "Project Title",
  category: "3D Projects · Product Design",  // must start with "3D Projects", "2D Projects" or "Media"
  year: "2026",
  client: "Client Name",
  role: "Industrial Design & 3D Visualization",
  mainImage: "./assets/example.webp",   // required: entries without an image are not shown
  description: [
    "First paragraph, shown as the lede.",
    "Second paragraph."
  ],
  tools: [],
  galleryImages: [                           // optional: extra photos for the detail column
    { src: "./assets/example2.webp", tag: "Build", title: "Side View", alt: "Describe the photo" }
  ],
  backHref: "3d-projects.html",
  backLabel: "3D Projects"
},
```

3. Add the image's pixel size to `IMAGE_SIZES` in `script.js`. This reserves the image's space while it loads and prevents layout shift:

```js
"./assets/example.webp": [1600, 900],
```

The project then appears on the gallery page whose category matches the start of its `category`. It also joins the Previous / Next loop and gets its own detail page. Empty fields such as `year`, `client` or `role` are hidden rather than shown as placeholders.

Special Projects and the home page's "Selected work" use handwritten cards. To feature a project there, copy an existing `<li class="drive__slide">` block in that page and update its link, image and text.

## Notes

* The contact form opens the visitor's email client (`mailto:`). To receive submissions directly, point the form's `action` at a form service such as Formspree.
* Source images at full resolution are kept outside this repository.
