/* ==========================================================================
   MUSA VIRTUAL LABS - behaviour
   1. Load a project's data into project.html from the PROJECTS database.
   2. Reveal .reveal elements as they enter the viewport.
   3. Toggle a "scrolled" style on the navbar.
   4. Keep the side ruler in sync with whichever section is on screen.
   5. Mobile menu toggle (button + aria-expanded).
   6. Decrypt system: mono labels decode once as they scroll in.
   7. Motion: grid stagger, hero parallax, project-pager progress.
   8. HUD: Amman clock and live project count.
   10. Motion switch: footer toggle that pauses looping decorative motion.
   11. Project gallery: vertical scroll reveal for the card grids.
   ========================================================================== */

/* ---- Project database ----------------------------------------------------
   One entry per project, keyed by the id used in project.html?id=<key>.
   Add new projects here - no new HTML files needed.
   ---------------------------------------------------------------------- */
var PROJECTS = {

  daggerDesign: {
    title: "Ceremonial Dagger Design",
    category: "3D Projects · Product Design",
    year: "",
    client: "Independent / Concept Project",
    role: "3D Visualization & Product Design",
    mainImage: "./assets/dagger-design.webp",
    description: [
      "A 3D-rendered ceremonial dagger design blending traditional Arabian craftsmanship. The piece features a curved wooden handle with brass fittings, a gold pommel medallion inlaid with Arabic calligraphy, and a star-shaped cutout motif carved into the grip.",
      "The straight double-edged blade is finished with an intricate Islamic geometric (arabesque) pattern etched along both edges, framing a polished Damascus-style steel center. It's paired with a matching sheath in deep red velvet with gold trim, topped with a calligraphy-inscribed brass plaque giving the whole set a presentation-piece, gift-worthy feel rather than a purely functional blade."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  pvcPipeGoKart: {
    title: "EV DIY PVC Pipe Buggy",
    category: "Special Projects · Design & Build",
    year: "2021",
    client: "Independent R&D",
    role: "Design, Fabrication & Electrical Integration",
    mainImage: "./assets/pvc-pipe-go-kart.webp",
    description: [
      "Within three months, I worked on bringing my car design to life using a material that's never really been used this way in the field: plastic PVC tubing. The challenge was getting every element and material to work together into something genuinely practical not just a concept while sourcing everything from what's actually available in the local market.",
      "The result is a one-seater electric buggy with a full roll cage and chassis built entirely out of PVC piping and fittings, paired with racing bucket seats, 4-point harnesses, and side mesh netting for a proper off-road feel. It runs on an electric drivetrain with rear hub motors, a battery pack mounted low for balance, a digital dash display, and LED light bars front and rear.",
      "My partner Shafiq led the electrical side of things from motor control to all the supporting systems that make it actually drive. Proud of how this came together, from raw materials to a working build."
    ],
    tools: [],
    galleryImages: [
      { src: "./assets/pvc-buggy-1.webp", tag: "Build", title: "Front Three-Quarter", alt: "PVC pipe electric buggy with LED light bars, roll cage and red racing harness" },
      { src: "./assets/pvc-buggy-2.webp", tag: "Build", title: "Front View", alt: "Front view of the PVC pipe buggy chassis with LED light bars and bucket seat" },
      { src: "./assets/pvc-buggy-3.webp", tag: "Build", title: "Cockpit", alt: "Cockpit of the PVC buggy with bucket seat, side netting and carbon dash cover" },
      { src: "./assets/pvc-buggy-4.webp", tag: "Build", title: "Battery Display", alt: "Digital battery display mounted on the PVC pipe frame of the buggy" }
    ],
    backHref: "special-projects.html",
    backLabel: "Special Projects"
  },

  vwGolfCompetition: {
    title: "Style Up Your Golf Competition Winner",
    category: "3D Projects · Automotive",
    year: "2009",
    client: "Style Up Your Golf Competition Amman, Jordan (1st Place)",
    role: "Concept Design & 3D Visualization",
    mainImage: "./assets/vw-golf-competition.webp",
    description: [
      "This is an automotive design piece created for the \"Style Up Your Golf\" styling competition held in Amman, Jordan in 2009, where the design took 1st place.",
      "The concept centers on a heavily modified Volkswagen Golf GTI Mk6, reimagined with an aggressive wide body kit, flared fenders, a deep front splitter with black canards, side skirts, a raised rear wing, and staggered multi-spoke alloy wheels.",
      "The scene itself is staged like a dealership reveal: the cars sit nose-to-tail on a closed track with cones marking the lane, while a backdrop of VW \"Das Auto\" branded billboards displays supporting renders a transporter truck delivering the cars, a rear three-quarter shot of the wing and diffuser, and a close-up hero angle of the red car's front fascia.",
      "It's a solid example of pre-viz/concept rendering work: consistent lighting, a cohesive presentation format across multiple angles in a branded environment, and a clear \"showroom launch\" narrative rather than just a single hero render."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  mduCovid19: {
    title: "MDU Mobile Decontamination Unit",
    category: "3D Projects · Industrial Design",
    year: "2020",
    client: "Fodeh & Partner Company",
    role: "Product Visualization & 3D Design",
    mainImage: "./assets/mdu-covid19.webp",
    description: [
      "A 3D product visualization and marketing package developed in response to COVID-19, presenting a full range of mobile sterilization stations under the \"Be Safe\" brand. The concept was built to address two distinct needs disinfecting vehicles and disinfecting people at entrances with high foot or vehicle traffic.",
      "The lineup covers three configurations. The MDUV is a large drive-through sterilization gantry for vehicles (cars, vans, buses), built from galvanized steel with 14 nozzles, a high-pressure pump, a motion sensor, and tank capacities scaling from 5,000L up to 30,000L depending on vehicle size fully bolted for easy assembly, disassembly, and transport. The MDU is a personal walk-through booth for people entering high-traffic sites, spraying a fine sterilant mist over a few seconds, framed in light metal tubing with a 125L tank, filter system, and waterproof printed covering (customizable branding). The MDUP is a compact personal sterilization pod/platform with an overhead spray ring, sized for a single person, with tank capacity from 125L up to 5,000L.",
      "All units are pitched as modular and custom-configurable, compatible with most commercially available sterilants, and designed for quick setup at entrances, garages, or transit points."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  evTaxiClayModel: {
    title: "EV Taxi Concept Clay Model",
    category: "Special Projects · Automotive",
    year: "2011",
    client: "Design Studio Project Germany",
    role: "Clay Modeling & Automotive Surfacing",
    mainImage: "./assets/ev-taxi-clay-model.webp",
    description: [
      "A clay modeling project for a compact electric taxi/city vehicle a traditional automotive design study using the kind of full-size or scale clay sculpting process real studios rely on to work out surfacing and proportion before anything goes digital.",
      "The main shot shows the clay buck mid-development, with a single-box \"cab-forward\" profile typical of urban EV concepts, maximizing interior space while keeping the footprint small.",
      "The side panel breaks down the full workflow: a rendered digital concept sketch defining the overall form and color intent, an early rough clay blocking pass with surface lines mapped out, and a more refined clay model featuring contrasting dark grey lower cladding and taillight detail tracing the progression from digital concept to sculpted 3D form."
    ],
    tools: [],
    galleryImages: [
      { src: "./assets/ev-taxi-clay-1.webp", tag: "Concept", title: "Digital Concept", alt: "Digital concept render of the compact EV taxi in white" },
      { src: "./assets/ev-taxi-clay-2.webp", tag: "Clay", title: "Rough Blocking", alt: "Early rough clay blocking of the EV taxi with surface lines drawn on" },
      { src: "./assets/ev-taxi-clay-3.webp", tag: "Clay", title: "Side Profile", alt: "Side profile of the refined EV taxi clay model on its wheels" },
      { src: "./assets/ev-taxi-clay-4.webp", tag: "Clay", title: "Rear Three-Quarter", alt: "Rear three-quarter view of the refined EV taxi clay model" }
    ],
    backHref: "special-projects.html",
    backLabel: "Special Projects"
  },

  formulaStudent: {
    title: "Formula Student JUST Racing",
    category: "3D Projects · Automotive",
    year: "2010",
    client: "JUST Racing Jordan University of Science and Technology",
    role: "3D Visualization & Concept Design",
    mainImage: "./assets/formula-student-design.webp",
    description: [
      "A 3D-rendered concept study for a Formula Student race car built for JUST Racing (Jordan University of Science and Technology's team). Formula Student is an international engineering competition where student teams design, build, and race single-seater formula cars, so this visualization would've served as an early design/proof-of-concept piece before or alongside the physical build.",
      "The car follows a classic Formula Student layout: an open-wheel single-seater chassis, exposed front suspension pushrods, a roll hoop with the driver's air intake mounted behind the headrest, and a low, wide front splitter/wing for aero grip. The bodywork is rendered in a glossy metallic blue, with clean, simplified surfacing typical of a concept-stage model rather than a fully detailed race-ready mesh.",
      "The layout includes multiple angles a front three-quarter hero shot, a rear/duct-focused view showing the side pod air intakes, and a low front profile shot alongside a promotional poster panel with the JUST Racing logo and the tagline \"The New Coming Beast 2010,\" styled like a team announcement."
    ],
    tools: [],
    galleryImages: [
      { src: "./assets/formula-student-1.webp", tag: "Render", title: "Front Three-Quarter", alt: "Blue Formula Student race car render from the front three-quarter" },
      { src: "./assets/formula-student-2.webp", tag: "Render", title: "Side Pod Detail", alt: "Formula Student car render showing the side pod air intakes" },
      { src: "./assets/formula-student-3.webp", tag: "Poster", title: "Team Poster", alt: "JUST Racing poster reading The New Coming Beast 2010" }
    ],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  covidVentilation: {
    title: "Ventilator Machine: Studio Unit",
    category: "3D Projects · Industrial Design",
    year: "2020",
    client: "Independent R&D",
    role: "Industrial Design & 3D Visualization",
    mainImage: "./assets/ventilation-covid19-a.webp",
    description: [
      "A medical device concept developed during the COVID-19 pandemic, designed to address the global shortage of mechanical ventilators. The design features a compact, mobile ventilator unit with an integrated color touchscreen displaying real-time vital signs heart rate, SpO2, respiratory waveform, and temperature alongside a manual control dial and power switch for straightforward operation.",
      "The housing uses a dual-tone gray shell with red-and-blue side accents (echoing the universal \"inhale/exhale\" airflow symbol on the front badge), built-in side handles for portability, and a ventilated rear housing for internal components.",
      "What sets this project apart is that it moved beyond concept: a completed physical unit was built, mounted on a mobile stand evidence this design was developed with real manufacturing intent during the pandemic's ventilator crisis, not just as a rendering exercise."
    ],
    tools: ["SolidWorks", "KeyShot", "Illustrator"],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  ventilatorFieldFrame: {
    title: "Ventilator Machine: Field Frame",
    category: "3D Projects · Industrial Design",
    year: "2020",
    client: "Independent R&D",
    role: "Industrial Design & 3D Visualization",
    mainImage: "./assets/ventilation-covid19-b.webp",
    description: [
      "An early design exploration phase for a rapid-response ventilator concept developed during the COVID-19 pandemic, showing multiple form-factor iterations before landing on a final design.",
      "The main render explores a modular, frame-based construction a tubular metal cage (in two colorways, blue and tan) holding cylindrical pressure tanks, with a control unit clipped on top featuring a vitals display, adjustment dial, and power button. This approach leaned into using simple, readily available components (tubing, fittings, cylindrical tanks) to speed up prototyping and manufacturing under crisis conditions echoing the same resourceful, parts-first mindset seen across other DIY builds in this portfolio.",
      "The iteration process also included a compact desktop-style unit with a side-mounted screen and dial, a boxier two-tone enclosure with a cooling fan grille and carry handle, and a taller dual-unit variant with blue accent lighting each testing a different balance of portability, manufacturability, and interface layout.",
      "This concept ultimately evolved into the finalized, more refined ventilator design that was physically built and deployed."
    ],
    tools: ["SolidWorks", "KeyShot", "Illustrator"],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  /* ---------------------------------------------------------------------
     Placeholder entries below - images matched from ./assets/ and the
     project root, but no source copy has been supplied yet. Replace the
     Lorem Ipsum description, year/client/role, and Tool 1/Tool 2 tags
     with real project details when available.
     ---------------------------------------------------------------------- */

  architectureDesign: {
    title: "Architectural Visualization: Shipping Container Structure",
    category: "3D Projects · Architecture",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/architecture-design.webp",
    description: [
      "A conceptual architectural design study exploring modular construction using stacked and cantilevered shipping containers a sustainable, adaptive reuse approach to building that's become increasingly popular for its speed, cost efficiency, and industrial aesthetic.",
      "The main render shows a multi-level composition of standard cargo containers offset and layered at different angles, suspended within an exposed structural steel frame. Some containers retain their original corrugated cladding and cargo doors, while others are wrapped in horizontal louvered screening likely serving as passive sun-shading or ventilation for interior spaces, a practical response to hot climate conditions.",
      "The detail insets zoom into the louvered screen system and the steel connection points, highlighting how the shading fins integrate with the container modules and the supporting frame showing real consideration for building performance (light control, airflow) rather than just a container stack for visual novelty.",
      "Overall, it's a strong conceptual piece demonstrating modular, adaptive architecture: repurposed industrial units transformed into an articulated, climate-responsive building form."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  architectureCivicComplex: {
    title: "Architectural Visualization: Civic Complex Concept",
    category: "3D Projects · Architecture",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/architecture-civic-complex.webp",
    description: [
      "A high-concept architectural rendering study exploring fluid, parametric design language the kind of biomorphic, sweeping forms associated with Zaha Hadid-style architecture, applied here to what reads as a cultural or civic building complex.",
      "The main shot places the viewer beneath a dramatic curved overpass structure, where sculptural concrete forms twist and swoop overhead, connecting to a facade wrapped in an intricate laser-cut geometric screen pattern a modern reinterpretation of traditional Islamic \"mashrabiya\" latticework, filtering light and shadow across the plaza below. A silhouetted figure seated in the courtyard adds scale and human presence to the composition, a classic architectural technique for grounding an otherwise abstract form.",
      "The inset views expand the story: a close-up of an egg-shaped pod structure nestled within a curved shell (possibly an auditorium, viewing capsule, or exhibit space), and a wide exterior shot showing a visitor walking a raised bridge/walkway that threads between the building's flowing white forms and the perforated bronze-toned lattice cladding.",
      "Overall, it's an ambitious visualization exercise blending organic parametric form-making with regional architectural motifs a strong showcase of both 3D rendering skill and conceptual design thinking at the scale of a landmark public building."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  cableBoxDesign: {
    title: "Cable Box",
    category: "3D Projects · Product Design",
    year: "2011",
    client: "Germany",
    role: "",
    mainImage: "./assets/cable-box-design.webp",
    description: [
      "An industrial product design concept for a portable cable reel unit, built for durability and heavy-duty site use. The design centers on a bright safety-yellow housing with a rugged rubberized top handle, black anti-slip grip panels, and a red heavy-gauge cable spooled internally around a rotating reel.",
      "Two color/control variants are shown side by side, each with a slightly different switch layout on the top panel a mix of green and yellow push buttons (likely power, reset, or reel-lock controls) set into a molded black control housing. Rounded rivet-style fasteners and a protective flip-up cover over the cable outlet reinforce the rugged, field-equipment aesthetic, while the exposed cable coil at the base makes the reel mechanism clearly visible.",
      "The control cluster and the rear cable-management area highlight the switch detailing and how the cable feeds in and out of the housing practical documentation of a product meant for real-world industrial or construction environments rather than just a styling exercise."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  filmEquipmentRickshaw: {
    title: "Film Equipment Rickshaw",
    category: "3D Projects · Product Design",
    year: "2016",
    client: "Design and Manufacturing, Jordan",
    role: "",
    mainImage: "./assets/film-equipment-rickshaw.webp",
    description: [
      "A custom-designed camera dolly/rickshaw rig, built to be towed by a bicycle for smooth, low-cost tracking shots on film sets a practical, on-set engineering solution rather than a purely conceptual design.",
      "The rig consists of a flat platform mounted on two large spoked wheels, with a mounting plate and center post for attaching camera gear, and a raised padded seat for an operator or additional equipment. The frame is tubular steel, with visible bolted construction throughout a design built for durability and easy assembly/repair on location rather than polish for its own sake.",
      "The side insets show the complete setup: the rickshaw hitched behind a standard bicycle via a simple tow-bar connection, illustrating exactly how the rig functions in the field a lightweight, manually-powered alternative to a motorized camera dolly, well suited for tighter budgets or locations where traditional dolly track isn't practical."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  rollskiDesign: {
    title: "RollSki Design",
    category: "3D Projects · Product Design",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/rollski-design.webp",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  penDesign: {
    title: "Pen Design",
    category: "3D Projects · Product Design",
    year: "2011",
    client: "Germany",
    role: "",
    mainImage: "./assets/3d-pen-design.webp",
    description: [
      "An industrial design concept for a premium writing instrument, built around a distinctive segmented, articulated body a series of interlocking rectangular ring sections running the full length of the pen, giving it a flexible, almost vertebrae-like structure rather than a smooth traditional barrel. A flat clip sits along the top in a contrasting flat finish, breaking up the segmented texture with a clean straight line.",
      "The concept is shown in two finishes a warm brass gold and a brushed steel chrome highlighting how the same segmented form language reads differently across metal tones.",
      "The inset renders show the idea taken further into finished product visualization, with etched Arabic calligraphy patterns wrapping around the barrel and cap, plus wood-and-metal variants in dark tortoise/burgundy tones pushing the design from a pure form study into a fully realized luxury pen line with decorative surface treatment and material variety."
    ],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  pressTechworks: {
    title: "FabLab Feature Royal Visit",
    category: "Media · Press",
    year: "",
    client: "Fablab · Crown Prince Foundation (CPF), Jordan",
    role: "",
    mainImage: "./assets/press-techworks.webp",
    description: [
      "A set of social media coverage screenshots documenting a visit by His Royal Highness Crown Prince Al Hussein bin Abdullah II and The Duke of Cambridge, Prince William, to Fablab an initiative under CPF (Crown Prince Foundation) focused on empowering young entrepreneurs in Jordan.",
      "The posts capture the two royals touring the space and meeting with young Jordanian innovators to learn about their work, shared across both Instagram (via the account \"alhussein.thesmileofjordan\") and Facebook, with accompanying hashtags highlighting Jordan, entrepreneurship, and the visit itself (#loveJordan, #thesmileofjordan, #crownprincehussein).",
      "This kind of high-profile visit is valuable proof of impact for an initiative like Fablab official recognition from Jordan's Crown Prince alongside an internationally prominent royal guest signals credibility and visibility for the program's mission of supporting youth-driven innovation and entrepreneurship in the country."
    ],
    tools: [],
    galleryImages: [
      { src: "./assets/fablab-royal-visit-1.webp", tag: "Press", title: "Instagram Post", alt: "Instagram post of the Duke of Cambridge and Crown Prince Hussein touring Fablab" },
      { src: "./assets/fablab-royal-visit-2.webp", tag: "Press", title: "Instagram Story Repost", alt: "Instagram repost of Prince William and Crown Prince Hussein at Fablab" },
      { src: "./assets/fablab-royal-visit-3.webp", tag: "Press", title: "Facebook Post", alt: "Facebook post of the royal visit to Fablab with Crown Prince Hussein and Prince William" }
    ],
    backHref: "media.html",
    backLabel: "Media"
  },

  pressGolfCompetition: {
    title: "Style Up Your Golf Press Coverage",
    category: "Media · Press",
    year: "2009",
    client: "Nuqul Automotive · Jordan",
    role: "Concept Design & 3D Visualization",
    mainImage: "./assets/press-golf-competition.webp",
    description: [
      "Press clippings and news coverage of the \"Style Up Your Golf\" styling competition, run by Nuqul Automotive in Amman, Jordan in 2009, where this Volkswagen Golf GTI Mk6 concept took 1st place.",
      "The winning design reimagined the Golf GTI with an aggressive wide body kit, flared fenders, a deep front splitter with black canards, side skirts, a raised rear wing, and staggered multi-spoke alloy wheels, presented as a branded, dealership-style launch scene."
    ],
    tools: [],
    galleryImages: [],
    backHref: "media.html",
    backLabel: "Media"
  },

  graphicDesign: {
    title: "Logo Design Collection",
    category: "2D Projects · Graphic Design",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/logo-design-collection.webp",
    description: [
      "A collection of logo and brand marks designed for clients across automotive, education, retail, hospitality, and technology."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },

  /* ---------------------------------------------------------------------
     An entry with an empty mainImage renders a plain dark placeholder
     (see script.js section 1 / style.css .media-placeholder) instead of a
     broken <img>. Replace it with a real asset path once supplied.
     ---------------------------------------------------------------------- */

  eduProjectsGJU: {
    title: "Edu-Projects: German-Jordanian University",
    category: "2D Projects · Design Education",
    year: "",
    client: "German-Jordanian University, School of Architecture and Built Environment, Design and Visual Communication",
    role: "",
    mainImage: "./assets/edu-projects-gju.webp",
    description: [
      "A collection of student design boards from the Urban Utility Design and Product Design courses, showing the full project process concept, sketching, technical drawings, and final 3D renders across a range of real-world design briefs.",
      "Urban Utility Design projects include \"The Shaders\" by Marah Rajjal, a modular shading structure for Amman's Al-Balad district designed to adapt across seasons using a tree-like branching frame and acrylic panels, and \"Music and Light,\" a graduation project by Dania Sbeiteh reimagining traditional Arabic musical instruments (qanun, oud, daff, derbakeh) as modern oriental lighting fixtures, blending Arabic calligraphy and cultural motifs into contemporary lamp design.",
      "Vegetable/fruit market display systems make up a strong recurring theme: \"Spin Around / Fruit Route\" by Razan Jilani, a rotating vertical produce display optimizing limited floor space; \"Adapt\" by Ahmad Jarrar, a fully modular wooden pallet shelving system supporting up to 124 crates with adjustable inner/outer display configurations; and \"Robust\" by Rua Sharawi, a sturdy height- and depth-adjustable shelving unit built for durability under heavy daily market use.",
      "Across all the boards, the coursework follows a consistent, rigorous format concept statement, sketch development, technical drawings with scale and materials, and final rendered visualization reflecting strong design methodology training at the undergraduate level."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },


  volvoVCSI: {
    title: "Volvo VCSI Pre-Assessment Planner",
    category: "2D Projects · Print & Information Design",
    year: "2008",
    client: "Volvo · VCSI Customer Satisfaction Initiative, USA (2nd Place, International Award for Print and Website Design)",
    role: "",
    mainImage: "./assets/volvo-vcsi-planner.webp",
    description: [
      "A full print and information design system created for Volvo's 2008 Customer Satisfaction Initiative (VCSI), built as a physical binder toolkit to guide dealerships through their annual self-assessment process a project that earned an international 2nd place award for combined print and website design.",
      "Inside, the system is organized around five color-coded categories eRetail, CRM, Sales, Service, and Facility Appearance each with its own tab, checklist pages, and scoring criteria, making a fairly complex compliance process easy to navigate section by section.",
      "The supporting spreads show the level of detail behind it: structured to-do lists walking dealership staff through pre-assessment activities, self-assessment scoring instructions, and document checklists all laid out with consistent typography, color coding, and photography that ties back to the Volvo brand throughout.",
      "It's a strong example of design solving an operational problem, not just a visual one turning a multi-step corporate assessment program into an organized, usable physical tool."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },


  nhsLeedsPoster: {
    title: "NHS Leeds Research Poster Design",
    category: "2D Projects · Poster Design",
    year: "2010",
    client: "Leeds Teaching Hospitals NHS Trust, United Kingdom (2nd Place, Poster Design for Radiology)",
    role: "",
    mainImage: "./assets/nhs-leeds-posters.webp",
    description: [
      "A set of academic medical research posters designed for the Leeds Teaching Hospitals NHS Trust, covering studies from Neuroradiology and the Breast Surgical Unit. These were built for clinical academic conference presentation a different discipline from the product and brand work elsewhere in this portfolio, focused on organizing dense clinical data into a clear, readable scientific format.",
      "Across the set, the design carefully integrates medical imagery, charts, and flow diagrams striking a balance between scientific rigor and visual clarity in poster design for radiology."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },

  restaurantMenuDesign: {
    title: "Restaurant Menu Design",
    category: "2D Projects · Graphic Design",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/restaurant-menu-design.webp",
    description: [
      "A pair of full restaurant menu designs, each built around a strong, immersive visual theme rather than a generic price list.",
      "The first is a tri-fold pizzeria menu using a brick-oven wall texture as its backdrop throughout, with a broken-brick effect revealing a bubbling cheese pizza and a pizza roll a nice visual trick that ties the food photography directly into the environment. The chef mascot logo, warm red-and-orange palette, and organized sections (Pizza, Pasta, Calzones, Side Orders, Beverages) keep it easy to navigate despite the busy background.",
      "The second is a bi-fold menu for Kingdom of Burgers, using a brushed-steel and red color scheme with a circular badge-style logo (echoing a fast-food seal-stamp aesthetic). The layout includes a location map and contact info on the cover spread, with the interior menu organized into clear categorized columns Burgers, Chicken Wings, Salads, Appetizers using bold red section dividers for quick scanning.",
      "Both pieces show solid menu design fundamentals: thematic consistency, clear pricing hierarchy, and food photography used purposefully rather than just decoratively."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },

  printLayoutCollection: {
    title: "Print & Layout Collection",
    category: "2D Projects · Print Design",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/print-layout-collection.webp",
    description: [
      "A selection of brochure, catalog, and report layouts, from print-service marketing spreads to corporate program documentation."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },

  corporateIdentityBranding: {
    title: "Corporate Identity Branding",
    category: "2D Projects · Brand Identity",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/corporate-identity-branding.webp",
    description: [
      "Stationery systems and branded collateral: letterheads, envelopes, business cards, and flyers built to carry each client's identity consistently across print."
    ],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  },

  /* ---------------------------------------------------------------------
     Added from new image files; text fields are left empty until copy is
     supplied. Empty fields are skipped when rendering (no blank labels).
     ---------------------------------------------------------------------- */

  woodFurnitureDesign: {
    title: "Furniture Design 3D Visualization",
    category: "3D Projects · Furniture Design",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/wood-furniture-design.webp",
    description: [],
    tools: [],
    galleryImages: [],
    backHref: "3d-projects.html",
    backLabel: "3D Projects"
  },

  posterDesigns: {
    title: "Poster Designs",
    category: "2D Projects · Poster Design",
    year: "",
    client: "",
    role: "",
    mainImage: "./assets/poster-designs.webp",
    description: [],
    tools: [],
    galleryImages: [],
    backHref: "2d-projects.html",
    backLabel: "2D Projects"
  }

};

/* ---- Image dimensions ---------------------------------------------------
   Intrinsic size of every image the database references, so images the
   script inserts get width/height attributes and reserve their space
   before loading (no layout shift). Regenerate if an asset changes size.
   ---------------------------------------------------------------------- */
var IMAGE_SIZES = {
  "./assets/3d-pen-design.webp": [1600, 900],
  "./assets/about-mentoring-1.webp": [1600, 899],
  "./assets/about-mentoring-2.webp": [1600, 899],
  "./assets/architecture-civic-complex.webp": [1600, 900],
  "./assets/architecture-design.webp": [1600, 900],
  "./assets/cable-box-design.webp": [1600, 900],
  "./assets/dagger-design.webp": [1600, 899],
  "./assets/edu-projects-gju.webp": [1600, 899],
  "./assets/ev-taxi-clay-1.webp": [989, 613],
  "./assets/ev-taxi-clay-2.webp": [987, 793],
  "./assets/ev-taxi-clay-3.webp": [1600, 954],
  "./assets/ev-taxi-clay-4.webp": [990, 843],
  "./assets/ev-taxi-clay-model.webp": [1600, 902],
  "./assets/fablab-royal-visit-1.webp": [941, 1600],
  "./assets/fablab-royal-visit-2.webp": [1169, 1600],
  "./assets/fablab-royal-visit-3.webp": [946, 1600],
  "./assets/film-equipment-rickshaw.webp": [1600, 900],
  "./assets/formula-student-1.webp": [1600, 894],
  "./assets/formula-student-2.webp": [1189, 651],
  "./assets/formula-student-3.webp": [1125, 1589],
  "./assets/formula-student-design.webp": [1600, 901],
  "./assets/poster-designs.webp": [1600, 899],
  "./assets/restaurant-menu-design.webp": [1600, 899],
  "./assets/logo-design-collection.webp": [1600, 861],
  "./assets/print-layout-collection.webp": [1600, 899],
  "./assets/corporate-identity-branding.webp": [1600, 899],
  "./assets/mdu-covid19.webp": [1600, 899],
  "./assets/nhs-leeds-posters.webp": [1600, 893],
  "./assets/press-golf-competition.webp": [1600, 900],
  "./assets/press-techworks.webp": [1600, 948],
  "./assets/pvc-buggy-1.webp": [1600, 1160],
  "./assets/pvc-buggy-2.webp": [1041, 1429],
  "./assets/pvc-buggy-3.webp": [975, 861],
  "./assets/pvc-buggy-4.webp": [1215, 859],
  "./assets/pvc-pipe-go-kart.webp": [1600, 917],
  "./assets/rollski-design.webp": [1600, 900],
  "./assets/ventilation-covid19-a.webp": [1600, 900],
  "./assets/ventilation-covid19-b.webp": [1600, 898],
  "./assets/volvo-vcsi-planner.webp": [1600, 897],
  "./assets/vw-golf-competition.webp": [1600, 900],
  "./assets/wood-furniture-design.webp": [1600, 900]
};

(function () {
  "use strict";

  // Applies IMAGE_SIZES to an <img> (see top of file).
  function setImageSize(img, src) {
    var size = IMAGE_SIZES[src];
    if (size) { img.width = size[0]; img.height = size[1]; }
  }

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---- Project metadata labels -----------------------------------------
     Small mono labels (see .telemetry-tag in style.css) built only from
     the project record: category, year, client, role. No invented
     jargon. ---------------------------------------------------------- */

  // "Volvo · VCSI Initiative, USA (2nd Place …)" -> "Volvo": labels and
  // card meta rows are one short line, so keep only the lead name.
  // A project is shown only when it has a main picture.
  function hasImage(project) {
    return !!(project && project.mainImage);
  }

  function shortClient(client) {
    return (client || "").split(" (")[0].split(",")[0].split(/ [·-] /)[0].trim();
  }

  // "3D Projects · Product Design" -> "Product Design" (falls back to the
  // whole string if there's no "·" separator to split on).
  function shortCategory(category) {
    var parts = (category || "").split("·");
    return (parts[1] || parts[0] || "").trim();
  }

  /* 1. Project detail loader (project.html only) ----------------------- */

  var titleEl = document.getElementById("project-title");

  if (titleEl) {
    var params = new URLSearchParams(window.location.search);
    var project = PROJECTS[params.get("id")];
    // Imageless entries never render (see hasImage above).
    if (project && !hasImage(project)) project = null;
    var backLink = document.getElementById("project-back-link");
    var mainImage = document.getElementById("project-main-image");
    var ledeEl = document.getElementById("project-lede");
    var metaPanel = document.getElementById("project-meta-panel");
    var detailShotsEl = document.getElementById("project-detail-shots");
    var fullRenderEl = document.getElementById("project-full-render");
    var heroTitleEl = document.getElementById("hero-project-title");

    if (!project) {
      document.title = "Project Not Found | Musa Virtual Labs";
      document.getElementById("project-category").textContent = "Not Found";
      titleEl.textContent = "Project Not Found";
      if (heroTitleEl) heroTitleEl.textContent = "Project Not Found";
      ledeEl.innerHTML =
        "<p style=\"font-size:1.05rem; max-width:64ch;\">We couldn't find a project with that ID. The link may be out of date, or missing its <code>?id=</code> parameter entirely.</p>";
      if (mainImage) mainImage.style.display = "none";
      if (metaPanel) metaPanel.hidden = true;
      if (detailShotsEl) {
        detailShotsEl.closest(".overview__top").classList.add("overview__top--single");
        detailShotsEl.remove();
      }
      var heroTelemetryMissing = document.getElementById("telemetry-hero");
      if (heroTelemetryMissing) heroTelemetryMissing.hidden = true;
      var cornerLeftMissing = document.getElementById("telemetry-corner-left");
      if (cornerLeftMissing) cornerLeftMissing.hidden = true;
      var cornerRightMissing = document.getElementById("telemetry-corner-right");
      if (cornerRightMissing) cornerRightMissing.hidden = true;
      if (backLink) {
        backLink.href = "index.html";
        backLink.textContent = "← Back to Home";
      }
    } else {
      document.title = project.title + " | Musa Virtual Labs";

      document.getElementById("project-category").textContent = project.category;
      titleEl.textContent = project.title;
      if (heroTitleEl) heroTitleEl.textContent = project.title;

      // Empty fields are left out of every readout rather than shown as
      // "N/A" placeholders.
      var telemetryCategory = shortCategory(project.category);

      var telemetryHero = document.getElementById("telemetry-hero");
      if (telemetryHero) {
        telemetryHero.textContent = [telemetryCategory, project.year]
          .filter(Boolean).join(" · ");
      }

      var telemetryCornerLeft = document.getElementById("telemetry-corner-left");
      if (telemetryCornerLeft) {
        telemetryCornerLeft.textContent = project.client ? shortClient(project.client) : "";
        telemetryCornerLeft.style.display = project.client ? "" : "none";
      }

      var telemetryCornerRight = document.getElementById("telemetry-corner-right");
      if (telemetryCornerRight) {
        telemetryCornerRight.textContent = project.role || "";
        telemetryCornerRight.style.display = project.role ? "" : "none";
      }

      // A blank/missing mainImage renders a plain .media-placeholder (dark
      // ink background, see style.css) instead of an <img> - setting
      // src="" would otherwise make the browser re-request the current
      // page. Detail shots are just crops of mainImage, so with nothing
      // to crop that whole block is hidden rather than showing two more
      // broken placeholders.
      var hasMainImage = !!project.mainImage;

      if (mainImage) {
        if (hasMainImage) {
          mainImage.src = project.mainImage;
          setImageSize(mainImage, project.mainImage);
          mainImage.alt = project.title;
          mainImage.hidden = false;
        } else {
          mainImage.removeAttribute("src");
          mainImage.alt = "";
          mainImage.hidden = true;
        }
      }

      var mainImagePlaceholder = document.getElementById("project-main-image-placeholder");
      if (mainImagePlaceholder) mainImagePlaceholder.hidden = hasMainImage;

      // Detail shots: only distinct extra photos from galleryImages (not
      // mainImage, no repeats), shown whole at their own aspect ratio.
      // A project with just a mainImage gets no detail column at all: the
      // element is removed and the overview runs as one wide column, with
      // the full render (lightbox-enabled, below) as its only image.
      var seenPhotos = {};
      seenPhotos[project.mainImage] = true;
      var detailPhotos = (project.galleryImages || []).filter(function (g) {
        if (!g.src || seenPhotos[g.src]) return false;
        seenPhotos[g.src] = true;
        return true;
      });

      if (detailShotsEl && !detailPhotos.length) {
        var overviewTop = detailShotsEl.closest(".overview__top");
        if (overviewTop) overviewTop.classList.add("overview__top--single");
        detailShotsEl.remove();
        detailShotsEl = null;
      }

      if (detailShotsEl) {
        var frameTemplate = detailShotsEl.querySelector(".project-details__frame");
        detailShotsEl.innerHTML = "";
        detailPhotos.forEach(function (photo, i) {
          var frame = frameTemplate.cloneNode(true);
          frame.style.setProperty("--delay", (i * 120) + "ms");
          frame.setAttribute("data-index", (i < 9 ? "0" : "") + (i + 1));

          var img = frame.querySelector(".project-detail-img");
          img.src = photo.src;
          setImageSize(img, photo.src);
          img.alt = photo.alt || project.title;
          img.tabIndex = 0;
          img.setAttribute("role", "button");
          img.setAttribute("aria-label", "Open full view: " + (photo.title || project.title));
          img.addEventListener("click", function () {
            openLightbox(img.src, img.alt, img);
          });
          img.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openLightbox(img.src, img.alt, img);
            }
          });

          var detailTag = frame.querySelector(".telemetry-tag--detail");
          if (detailTag) {
            detailTag.textContent = "";
            img.addEventListener("load", function () {
              detailTag.textContent = img.naturalWidth + " × " + img.naturalHeight + " px";
            });
          }

          detailShotsEl.appendChild(frame);
        });
      }

      // All description paragraphs render together here, top-aligned in a
      // single flex column (see .storyboard__text-body) - the first reads
      // slightly larger as the lede. Keeping every paragraph in this one
      // column (rather than splitting them across the storyboard further
      // down, beside the much taller detail-shot stack) is what keeps them
      // stacked tight instead of leaving a huge gap after the first one.
      var paragraphs = [].concat(project.description || []).filter(function (text) {
        return text && String(text).trim();
      });
      ledeEl.innerHTML = "";
      paragraphs.forEach(function (text, i) {
        var p = document.createElement("p");
        if (i === 0) {
          p.style.fontSize = "1.15rem";
          p.style.maxWidth = "64ch";
        }
        p.textContent = text;
        ledeEl.appendChild(p);
      });

      ledeEl.style.display = paragraphs.length ? "" : "none";

      // Meta strip: each item is hidden when its field is empty, and the
      // whole strip when every field is, so no bare labels are shown.
      var tools = (project.tools || []).filter(Boolean);
      var metaFields = [
        ["project-year", project.year],
        ["project-client", project.client],
        ["project-role", project.role],
        ["project-tools", tools.length ? "tools" : ""]
      ];
      metaFields.forEach(function (field) {
        var valueEl = document.getElementById(field[0]);
        if (field[0] !== "project-tools") valueEl.textContent = field[1] || "";
        var itemEl = valueEl.closest(".storyboard__meta-item");
        if (itemEl) itemEl.style.display = field[1] ? "" : "none";
      });
      if (metaPanel) {
        metaPanel.style.display = metaFields.some(function (field) { return field[1]; }) ? "" : "none";
      }

      var toolsEl = document.getElementById("project-tools");
      toolsEl.innerHTML = "";
      tools.forEach(function (tool) {
        var tag = document.createElement("span");
        tag.className = "project__tag";
        tag.style.marginBottom = "0";
        tag.textContent = tool;
        toolsEl.appendChild(tag);
      });

      // Full unfiltered render: the mainImage again, but plain - deliberately
      // outside .mixed-media-filter (see .hero__backdrop in the hero), so
      // there's always one true-color, un-halftoned view of the actual image.
      // Lives in the left column under the meta strip. Hidden for projects
      // with no mainImage yet, same as the hero/detail-shot placeholders.
      if (fullRenderEl) {
        fullRenderEl.innerHTML = "";
        fullRenderEl.hidden = !hasMainImage;

        if (hasMainImage) {
          var fullImage = document.createElement("img");
          fullImage.className = "full-detail-image";
          fullImage.src = project.mainImage;
          setImageSize(fullImage, project.mainImage);
          fullImage.alt = project.title + ", full view";
          fullImage.loading = "lazy";
          // Keyboard-reachable trigger: focusable, announced as a button.
          fullImage.tabIndex = 0;
          fullImage.setAttribute("role", "button");
          fullImage.setAttribute("aria-label", "Open full view: " + project.title);
          fullImage.addEventListener("click", function () {
            openLightbox(fullImage.src, fullImage.alt, fullImage);
          });
          fullImage.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openLightbox(fullImage.src, fullImage.alt, fullImage);
            }
          });
          fullRenderEl.appendChild(fullImage);

          var fullImageTag = document.createElement("span");
          fullImageTag.className = "telemetry-tag telemetry-tag--full-render";
          fullImageTag.textContent = "Unfiltered render";
          fullRenderEl.appendChild(fullImageTag);
        }
      }

      if (backLink) {
        backLink.href = project.backHref;
        backLink.textContent = "← Back to " + project.backLabel;
      }

      // Prev / Next: neighbours in PROJECTS' own key order, wrapping around
      // at either end so both links are always present.
      var pagerEl = document.getElementById("project-pager");
      if (pagerEl) {
        // Only projects with a picture take part in the loop.
        var projectIds = Object.keys(PROJECTS).filter(function (id) {
          return hasImage(PROJECTS[id]);
        });
        var currentIndex = projectIds.indexOf(params.get("id"));
        var prevId = projectIds[(currentIndex - 1 + projectIds.length) % projectIds.length];
        var nextId = projectIds[(currentIndex + 1) % projectIds.length];

        var prevLink = document.getElementById("project-pager-prev");
        var nextLink = document.getElementById("project-pager-next");
        prevLink.href = "project.html?id=" + encodeURIComponent(prevId);
        prevLink.textContent = "← " + PROJECTS[prevId].title;
        nextLink.href = "project.html?id=" + encodeURIComponent(nextId);
        nextLink.textContent = PROJECTS[nextId].title + " →";

        // Centre readout: "04 / 25".
        var counter = document.createElement("span");
        counter.className = "project-pager__counter";
        counter.setAttribute("aria-hidden", "true");
        counter.setAttribute("data-decrypt", "");
        var pad2 = function (n) { return (n < 10 ? "0" : "") + n; };
        counter.textContent = pad2(currentIndex + 1) + " / " + pad2(projectIds.length);
        pagerEl.insertBefore(counter, nextLink);

        pagerEl.hidden = false;
      }
    }
  }

  /* Click-to-expand images outside project.html ----------------------------
     - [data-lightbox] (About Me "Moments"): a role="button" frame around an
       image; click, Enter or Space opens that image in the lightbox. No
       link, so nothing can jump the page.
     - Media cards: clicking the picture opens the lightbox instead of
       following the card link (the title and text still go to the project
       page; keyboard users reach the same photos there). */
  document.querySelectorAll("[data-lightbox]").forEach(function (frame) {
    var img = frame.querySelector("img");
    if (!img) return;
    var open = function () { openLightbox(img.currentSrc || img.src, img.alt, frame); };
    frame.addEventListener("click", function (e) {
      e.preventDefault();
      open();
    });
    frame.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  // Delegated, so cards the grid builder adds later are covered too.
  var MEDIA_CARD_IMG = '.drive__track[data-category="Media"] .project__media img';
  document.addEventListener("click", function (e) {
    var img = e.target.closest && e.target.closest(MEDIA_CARD_IMG);
    if (!img) return;
    e.preventDefault();
    openLightbox(img.currentSrc || img.src, img.alt, img.closest("a"));
  });

  /* Full-render lightbox: clicking (or Enter/Space on) .full-detail-image
     opens the same source in a full-screen overlay. The overlay animates
     through .is-open -> .is-closing (style.css section 28) and is removed
     once the faster exit has played. Closes on the Close button, a click
     anywhere, or Escape; focus moves to Close while open and returns to
     the trigger afterwards. */

  var LIGHTBOX_EXIT_MS = 200; // matches --dur-fast plus a frame

  function openLightbox(src, alt, trigger) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", alt || "Full-resolution image");

    var hud = document.createElement("div");
    hud.className = "lightbox__hud";

    var readout = document.createElement("span");
    readout.className = "lightbox__readout";
    readout.textContent = alt || "Full render";

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "lightbox__close";
    closeBtn.textContent = "Close";

    hud.appendChild(readout);
    hud.appendChild(closeBtn);

    var frame = document.createElement("div");
    frame.className = "lightbox__frame";

    var img = document.createElement("img");
    img.className = "lightbox__image";
    img.src = src;
    img.alt = alt || "";
    frame.appendChild(img);

    // Bottom status bar: real file data once the image has decoded.
    var hudBottom = document.createElement("div");
    hudBottom.className = "lightbox__hud lightbox__hud--bottom";
    var status = document.createElement("span");
    status.textContent = "";
    var hint = document.createElement("span");
    hint.textContent = "Esc to close";
    hudBottom.appendChild(status);
    hudBottom.appendChild(hint);

    var showStatus = function () {
      status.dataset.original = "";
      status.textContent = img.naturalWidth + " × " + img.naturalHeight + " px";
      decrypt(status, 700, 420);
    };
    if (img.complete && img.naturalWidth) showStatus();
    else img.addEventListener("load", showStatus);

    overlay.appendChild(hud);
    overlay.appendChild(frame);
    overlay.appendChild(hudBottom);

    var closing = false;

    function close() {
      if (closing) return;
      closing = true;
      document.removeEventListener("keydown", onKey);
      overlay.classList.remove("is-open");
      overlay.classList.add("is-closing");
      setTimeout(function () {
        overlay.remove();
        document.body.style.overflow = "";
        // Back to the exact spot the image was opened from: restoring focus
        // must not scroll, and the jump is instant (html has smooth
        // scroll-behavior).
        if (trigger) trigger.focus({ preventScroll: true });
        window.scrollTo({ top: openedAtY, left: 0, behavior: "instant" });
      }, prefersReducedMotion ? 0 : LIGHTBOX_EXIT_MS);
    }

    function onKey(e) {
      if (e.key === "Escape") close();
      // Close is the dialog's only control, so Tab stays on it.
      if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
    }

    overlay.addEventListener("click", function (e) {
      // Clicks inside the HUD strip (other than Close) shouldn't dismiss.
      if (hud.contains(e.target) && e.target !== closeBtn) return;
      close();
    });
    document.addEventListener("keydown", onKey);
    var openedAtY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);

    // Two frames so the initial (closed) styles are painted before the
    // open state is applied; otherwise the transition is skipped.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add("is-open");
        decrypt(readout, 640, 180);
        decrypt(hint, 420, 300);
      });
    });
    closeBtn.focus({ preventScroll: true });
  }

  /* 1b. Category grid (e.g. 2d-projects.html) ------------------------- */
  /* A .drive__track with data-category="2D Projects" gets one card per
     PROJECTS entry whose category starts with that prefix, using the same
     .project card markup as the hand-written 3d-projects.html grid. On a
     page with hand-written cards (3D Projects, Media) only entries not
     already linked there are appended, and only ones with an image, so
     new PROJECTS entries show up without editing the HTML. Runs before
     the scroll-reveal setup below so the new cards get .reveal too. */

  function buildProjectGrid(projectGrid) {
    var gridPrefix = projectGrid.dataset.category;

    var linkedIds = {};
    projectGrid.querySelectorAll("a[href*='project.html?id=']").forEach(function (a) {
      linkedIds[new URL(a.href, window.location.href).searchParams.get("id")] = true;
    });
    // Hand-written cards already in the grid (not the end-of-grid link
    // tile), so generated cards continue their numbering.
    var offset = projectGrid.querySelectorAll(".drive-card, .project").length;

    // PROJECTS order is kept. Entries without a picture are skipped, so
    // no empty box is ever rendered.
    var gridIds = Object.keys(PROJECTS).filter(function (id) {
      var p = PROJECTS[id];
      return p.category.indexOf(gridPrefix) === 0 && !linkedIds[id];
    });

    var built = 0;
    gridIds.forEach(function (id) {
      var project = PROJECTS[id];
      if (!project.mainImage) return;
      var p = project;
      var i = offset + built++;

      var card = document.createElement("a");
      card.href = "project.html?id=" + encodeURIComponent(id);
      card.className = "project drive-card";

      var media = document.createElement("div");
      media.className = "project__media";
      var img = document.createElement("img");
      img.src = p.mainImage;
      setImageSize(img, p.mainImage);
      img.alt = p.title;
      img.loading = "lazy";
      media.appendChild(img);

      var body = document.createElement("div");
      body.className = "project__body";

      var index = document.createElement("span");
      index.className = "drive-card__index";
      index.setAttribute("aria-hidden", "true");
      index.textContent = (i < 9 ? "0" : "") + (i + 1);
      body.appendChild(index);

      var tag = document.createElement("span");
      tag.className = "project__tag";
      tag.textContent = shortCategory(p.category);

      var heading = document.createElement("h3");
      heading.textContent = p.title;

      body.appendChild(tag);
      body.appendChild(heading);

      var metaItems = [p.year, shortClient(p.client)].filter(Boolean);
      if (metaItems.length) {
        var meta = document.createElement("div");
        meta.className = "project__meta";
        metaItems.forEach(function (text, j) {
          if (j > 0) {
            var divider = document.createElement("span");
            divider.className = "meta-div";
            meta.appendChild(divider);
          }
          var item = document.createElement("span");
          item.textContent = text;
          meta.appendChild(item);
        });
        body.appendChild(meta);
      }

      card.appendChild(media);
      card.appendChild(body);

      var slide = document.createElement("li");
      slide.className = "drive__slide";
      slide.appendChild(card);
      projectGrid.appendChild(slide);
    });
  }

  document.querySelectorAll(".drive__track[data-category]").forEach(buildProjectGrid);

  // Grid numbers always run 01, 02, 03... over the cards actually shown
  // (hand-written and generated alike), so nothing is ever skipped.
  document.querySelectorAll(".drive__track").forEach(function (track) {
    track.querySelectorAll(".drive-card__index").forEach(function (el, n) {
      el.textContent = (n < 9 ? "0" : "") + (n + 1);
    });
  });

  /* 2. Scroll reveal -------------------------------------------------- */
  /* .reveal fades/slides up; .reveal-left and .reveal-right slide in from
     the side for the project storyboard. Same observer drives all three -
     the direction lives entirely in each class's CSS transform. */

  var revealTargets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* 3. Navbar scrolled state ------------------------------------------ */

  var navbar = document.getElementById("navbar");

  if (navbar) {
    var updateNavbar = function () {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
  }

  /* 4. Section ruler (scrollspy) ---------------------------------------- */

  var rulerItems = document.querySelectorAll(".ruler li");
  var sections = [];

  rulerItems.forEach(function (li) {
    var link = li.querySelector("a[data-section]");
    if (!link) return;
    var section = document.getElementById(link.dataset.section);
    if (section) sections.push({ li: li, section: section });
  });

  if (sections.length && "IntersectionObserver" in window) {
    var setActive = function (id) {
      sections.forEach(function (item) {
        item.li.classList.toggle("is-active", item.section.id === id);
      });
    };

    var spy = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

        if (visible.length) setActive(visible[0].target.id);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach(function (item) {
      spy.observe(item.section);
    });
  }

  /* 5. Mobile menu toggle ------------------------------------------------ */
  /* The button's aria-expanded drives the CSS open state. Closes after a
     link is tapped, or on Escape (focus returns to the button). */

  var navToggle = document.getElementById("nav-toggle");
  var mobileLinks = document.querySelectorAll(".navbar__menu a");

  if (navToggle) {
    var setMenuOpen = function (open) {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    navToggle.addEventListener("click", function () {
      setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  /* 6. Decrypt system ---------------------------------------------------- */
  /* Monospaced labels "decrypt" into place: they flicker through
     uppercase alphanumeric noise and lock in left to right, like a
     dashboard readout acquiring signal. Mono only, so swapping same-length
     strings never shifts layout width. Elements with child markup are
     skipped, so nothing but plain text is ever rewritten.
       - [data-decrypt] and gallery-card labels: once, as they scroll in.
       - Mobile menu links: in sequence as the panel opens.
     Skipped entirely under prefers-reduced-motion (text is always final). */

  var decrypt = function () {};

  if (!prefersReducedMotion) {
    var SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#_/";
    var SCRAMBLE_FRAME_MS = 34; // ~30fps: reads as a readout, not a blur

    var randomChar = function () {
      return SCRAMBLE_CHARS.charAt(Math.floor(Math.random() * SCRAMBLE_CHARS.length));
    };

    // Accessibility: the first time an element decrypts, its text is split
    // into a screen-reader-only copy (stable, always the real text) and an
    // aria-hidden copy that does the scrambling. Links and buttons keep a
    // constant accessible name while their glyphs flicker. Elements that
    // are already hidden from assistive tech just scramble in place.
    var glyphsFor = function (el) {
      if (el._glyphs) return el._glyphs;
      if (el.children.length) return null;
      el.dataset.original = el.textContent;
      if (el.closest('[aria-hidden="true"]')) {
        el._glyphs = el;
        return el;
      }
      var real = document.createElement("span");
      real.className = "sr-only";
      real.textContent = el.dataset.original;
      var glyphs = document.createElement("span");
      glyphs.setAttribute("aria-hidden", "true");
      glyphs.textContent = el.dataset.original;
      el.textContent = "";
      el.appendChild(real);
      el.appendChild(glyphs);
      el._glyphs = glyphs;
      return glyphs;
    };

    var stopScramble = function (el) {
      if (el._scrambleRaf) cancelAnimationFrame(el._scrambleRaf);
      el._scrambleRaf = null;
      el._glyphs.textContent = el.dataset.original;
    };

    decrypt = function (el, duration, delay) {
      if (el._scrambleRaf || el._scrambleWait) return;
      var target = glyphsFor(el);
      if (!target) return;

      var original = el.dataset.original;
      var total = duration || 380;

      var begin = function () {
        el._scrambleWait = null;
        var start = performance.now();
        var lastFrame = 0;

        var tick = function (now) {
          var progress = (now - start) / total;
          if (progress >= 1) { stopScramble(el); return; }

          if (now - lastFrame >= SCRAMBLE_FRAME_MS) {
            lastFrame = now;
            // Characters left of the decode head are locked in; the rest
            // are noise (whitespace is always kept, so words hold shape).
            var locked = Math.floor(progress * original.length);
            var out = "";
            for (var i = 0; i < original.length; i++) {
              var ch = original[i];
              out += i < locked || /\s/.test(ch) ? ch : randomChar();
            }
            target.textContent = out;
          }
          el._scrambleRaf = requestAnimationFrame(tick);
        };

        el._scrambleRaf = requestAnimationFrame(tick);
      };

      if (delay) el._scrambleWait = setTimeout(begin, delay);
      else begin();
    };

    // Gallery cards decrypt their tag and metadata as they arrive, in step
    // with the per-column stagger (their --delay, set in section 7).
    document.querySelectorAll(".project .project__tag, .project .project__meta span:not(.meta-div)").forEach(function (el) {
      el.setAttribute("data-decrypt", "");
    });

    // Scroll-in trigger, once per element. Siblings inside the same
    // container are offset a little so rows read in sequence.
    var decryptTargets = document.querySelectorAll("[data-decrypt]");
    if ("IntersectionObserver" in window) {
      var decryptObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          decryptObserver.unobserve(el);
          var card = el.closest(".project");
          var base = card ? parseInt(card.style.getPropertyValue("--delay") || "0", 10) : 0;
          decrypt(el, 520 + Math.min(el.textContent.length, 40) * 8, base + 120);
        });
      }, { threshold: 0.6 });

      decryptTargets.forEach(function (el) { decryptObserver.observe(el); });
    }

    // Mobile menu: links decrypt one after another as the panel opens.
    var menuButton = document.getElementById("nav-toggle");
    if (menuButton) {
      menuButton.addEventListener("click", function () {
        if (menuButton.getAttribute("aria-expanded") !== "true") return;
        document.querySelectorAll(".navbar__links a").forEach(function (link, i) {
          decrypt(link, 420, 160 + i * 45);
        });
      });
    }
  }

  /* 7. Motion: stagger, parallax, pager progress -------------------------- */

  // Per-column reveal stagger for card grids: each card's delay comes from
  // its horizontal position in the grid, so a row arrives left to right
  // and every row starts fresh (index-based delays would make lower cards
  // lag further and further behind). Inline --delay values are respected.
  document.querySelectorAll(".work__grid, .practice__grid").forEach(function (grid) {
    var width = grid.clientWidth || 1;
    Array.prototype.forEach.call(grid.children, function (card) {
      if (card.style.getPropertyValue("--delay")) return;
      var column = Math.round((card.offsetLeft - grid.offsetLeft) / width * 3);
      card.style.setProperty("--delay", Math.max(0, column) * 90 + "ms");
    });
  });

  // Project pager: slide-up entrance only when arriving from outside the
  // project pages (between projects it's held still by the view
  // transition), and a read-progress rail driven by scroll below.
  var pager = document.getElementById("project-pager");
  if (pager && !/project\.html/.test(document.referrer)) {
    pager.classList.add("is-entering");
  }

  // One rAF-throttled scroll handler for everything scroll-linked. Only
  // transforms (and one custom property feeding a transform) are written,
  // and nothing is read back from the layout inside the frame except the
  // cached sizes below.
  var heroBackdrop = document.querySelector(".hero__backdrop");
  var heroSection = heroBackdrop ? heroBackdrop.closest(".hero") : null;
  var parallaxOn = !prefersReducedMotion;

  if (parallaxOn) {
    document.documentElement.classList.add("fx-parallax");
  }

  var heroHeight = 0;
  var scrollMax = 0;

  var measure = function () {
    heroHeight = heroSection ? heroSection.offsetHeight : 0;
    scrollMax = document.documentElement.scrollHeight - window.innerHeight;
  };

  var scrollQueued = false;

  var onScrollFrame = function () {
    scrollQueued = false;
    var y = window.scrollY;

    if (parallaxOn && heroBackdrop && y <= heroHeight) {
      heroBackdrop.style.transform = "translate3d(0," + (y * 0.25).toFixed(2) + "px,0)";
    }

    if (pager && !pager.hidden) {
      var progress = scrollMax > 0 ? Math.min(1, Math.max(0, y / scrollMax)) : 0;
      pager.style.setProperty("--progress", progress.toFixed(4));
    }
  };

  var queueScrollFrame = function () {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(onScrollFrame);
  };

  measure();
  onScrollFrame();
  window.addEventListener("scroll", queueScrollFrame, { passive: true });
  window.addEventListener("resize", function () { measure(); queueScrollFrame(); });
  // Lazy images and web fonts change the page height after load.
  window.addEventListener("load", function () { measure(); queueScrollFrame(); });

  /* 8. HUD: live clock and project count ---------------------------------- */

  // Local studio time (Amman), ticking once a second.
  var clockEl = document.getElementById("hud-clock");
  if (clockEl && window.Intl && Intl.DateTimeFormat) {
    var clockFormat = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Amman", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    });
    var tickClock = function () { clockEl.textContent = clockFormat.format(new Date()); };
    tickClock();
    setInterval(tickClock, 1000);
  }

  // Project count straight from the database, so the readout never lies.
  document.querySelectorAll("[data-project-count]").forEach(function (el) {
    var count = Object.keys(PROJECTS).length;
    el.textContent = (count < 10 ? "0" : "") + count;
    el.dataset.original = el.textContent;
  });

  /* 10. Motion switch ----------------------------------------------------- */
  /* A "Pause motion" toggle in every footer bar (WCAG 2.2.2: looping
     decorative motion must be pausable). Pressed, it sets .motion-paused
     on <html>, which freezes the grain, scan band, hero drift and live
     light (style.css §32). The choice persists across pages and visits.
     Hidden under prefers-reduced-motion, where nothing loops anyway. */

  if (!prefersReducedMotion) {
    var MOTION_KEY = "mvl-motion";
    var motionPaused = false;
    try { motionPaused = localStorage.getItem(MOTION_KEY) === "paused"; } catch (e) {}

    var applyMotion = function (paused) {
      document.documentElement.classList.toggle("motion-paused", paused);
      document.querySelectorAll(".motion-toggle").forEach(function (btn) {
        btn.setAttribute("aria-pressed", paused ? "true" : "false");
      });
    };

    document.querySelectorAll(".contact__bottom").forEach(function (bar) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "motion-toggle";
      btn.textContent = "Pause motion";
      btn.addEventListener("click", function () {
        motionPaused = !motionPaused;
        applyMotion(motionPaused);
        try { localStorage.setItem(MOTION_KEY, motionPaused ? "paused" : "on"); } catch (e) {}
      });
      bar.insertBefore(btn, bar.querySelector(".contact__top-link"));
    });

    applyMotion(motionPaused);
  }

  /* 11. Project gallery: vertical scroll reveal --------------------------- */
  /* The gallery grids (class names still say "drive" from the earlier
     horizontal version) are a plain vertical stack now; this only handles
     their entrance. Each card starts just below its resting place and
     fades / slides up as it enters the viewport from the bottom. Cards
     that enter together (one grid row) are staggered left to right by
     their column. Skipped under reduced motion, and without
     IntersectionObserver the cards simply show. */

  document.querySelectorAll(".drive").forEach(function (drive) {
    var track = drive.querySelector(".drive__track");
    if (!track || prefersReducedMotion || !("IntersectionObserver" in window)) return;

    var slides = Array.prototype.slice.call(track.children);
    drive.classList.add("is-armed");

    var revealSlide = new IntersectionObserver(function (entries) {
      var entering = entries.filter(function (entry) { return entry.isIntersecting; });

      // Column position within the row -> stagger (left to right).
      entering.forEach(function (entry) {
        var slide = entry.target;
        var trackLeft = track.getBoundingClientRect().left;
        var column = Math.round((slide.getBoundingClientRect().left - trackLeft) / (slide.offsetWidth || 1));
        slide.style.setProperty("--i", Math.max(0, Math.min(column, 3)));
        slide.classList.add("is-visible");
        revealSlide.unobserve(slide);
      });
    }, {
      // Trigger a little after the card's top edge clears the bottom of
      // the screen, so the rise is actually seen.
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });

    slides.forEach(function (slide) { revealSlide.observe(slide); });
  });
})();
