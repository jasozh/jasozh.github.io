import { base } from "$app/paths";

/**
 * Images should be 1128 x 754 for web content. App screenshots should be taken
 * without shadows. To disable shadows on GNOME, enable the Rounded Window
 * Corners extension for all apps
 */
export const projects = [
  {
    id: "lagos-volunteers",
    title: "LFBI Volunteer Platform",
    logo: `${base}/img/projects/lagos-volunteers-logo.png`,
    screenshot: `${base}/img/projects/lagos-volunteers.png`,
    body: "Product Manager, Technical Lead &#8226; Hack4Impact Cornell<br><br>An end-to-end volunteer management solution built for the Lagos Food Bank Initiative and designed to handle a capacity of 20,000 volunteers. Built with the latest technologies, including Next.js, Prisma ORM, Firebase, and SendGrid. View the source on <a href='https://github.com/cornellh4i/lagos-volunteers'>GitHub</a>.",
  },
  // {
  //   id: "sketchy",
  //   title: "Sketchy",
  //   logo: `${base}/img/projects/earth-legislator-logo.png`,
  //   screenshot: `${base}/img/projects/earth-legislator.png`,
  //   body: "Technical Lead &#8226; Cornell Data Science<br><br>Turn any photo into a coloring book outline with infinite resolution. Utilizing image segmentation, edge detection, edge smoothing, and SVG conversion, all wrapped into an easy-to-install Electron app. Download on <a href='https://github.com/cornellh4i/earth-law-center/'>GitHub</a>.",
  // },
  // {
  //   id: "mathsearch",
  //   title: "MathSearch",
  //   logo: `${base}/img/projects/earth-legislator-logo.png`,
  //   screenshot: `${base}/img/projects/earth-legislator.png`,
  //   body: "Developer &#8226; Cornell Data Science<br><br>A next-generation search engine for finding LaTeX expressions in PDFs. See the <a href='https://earth-law-center.herokuapp.com/'>website</a> and view the source on <a href='https://github.com/cornellh4i/earth-law-center/'>GitHub</a>.",
  // },
  {
    id: "earth-legislator",
    title: "Earth Legislator",
    logo: `${base}/img/projects/earth-legislator-logo.png`,
    screenshot: `${base}/img/projects/earth-legislator.png`,
    body: "Developer &#8226; Hack4Impact Cornell<br><br>Create eco-centric template laws for your local municipality. Developed for the Earth Law Center, written in React and Node.js.",
  },
  {
    id: "canari",
    title: "Canari",
    logo: `${base}/img/projects/canari-logo.png`,
    screenshot: `${base}/img/projects/canari.png`,
    body: "Track your classes and keep up with enrollment. A beautiful native Linux app written in Python, GTK4, and libadwaita. Download on <a href='https://github.com/jasozh/canari'>GitHub</a>.",
  },
  {
    id: "website",
    title: "jasozh.github.io",
    logo: `${base}/img/projects/website-logo.png`,
    screenshot: `${base}/img/projects/website.png`,
    body: "A personal portfolio website written in Svelte and designed from the ground up to be modern, performant, and responsive. View the source on <a href='https://github.com/jasozh/jasozh.github.io'>GitHub</a>.",
  },
  {
    id: "jadventure",
    title: "JAdventure",
    logo: `${base}/img/projects/jadventure-logo.png`,
    screenshot: `${base}/img/projects/jadventure.png`,
    body: "In the harshest corner of the world lies the Blasted Land, a place where few men have crossed and even fewer have lingered long. Kill monsters, survive hostile encounters, and defeat a cruel beast to restore peace to the lands. Download on <a href='https://github.com/jasozh/jadventure'>GitHub</a>.",
  },
];

export const hobbies = [
  {
    id: "composing",
    title: "Composing",
    screenshot: `${base}/img/hobbies/composing.png`,
    body: "I started composing music during the fall of 2019. At that time, I had already been playing the violin and piano for several years, and I wanted to create music of my own. After downloading MuseScore, I began to transcribe a few of my improvisations, and I later added on to these improvisations to turn them into complete scores. I have written over a dozen compositions since then, and you can find a list of my work on my <a href='https://musescore.com/user/38882263'>MuseScore profile</a>.",
  },
  {
    id: "writing",
    title: "Writing",
    screenshot: `${base}/img/hobbies/writing.png`,
    body: "Although I no longer write very frequently, I still enjoy writing poems and short stories whenever I have a burst of inspiration. Some of my favorite book genres are fantasy, science fiction, and historical fiction, and my writing tends to fall into those categories as well. Although my writing still leaves much to be desired, I hope to eventually finish a few of my short stories.",
  },
];
