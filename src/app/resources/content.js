import { InlineCode } from "@/once-ui/components";

// Define the person object
const person = {
  firstName: "MetaGold",
  lastName: "Gold Nature",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

// Ensure person.name is correctly defined and accessible
const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Le Metagold Métaverse</>,
  subline: (
    <>
      Plongez dans l’univers du Métavers <br /> et explorez nos espaces immersifs dédiés à votre activité.
    </>
  ),
};

const newsletter = {
  display: true,
  title: "Newsletter Title",
  description: "Subscribe to our newsletter to stay updated.",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const about = {
  label: "Metaverse",
  title: "Metagold",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  label: "Toutes les salles",
  title: "Toutes les salles du Metaverse",
  description: `Découvrez l'ensemble des salles du Metaverse de BPC France`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galerie",
  title: "Gallery Title", // Ensure title property exists
  description: "Gallery Description", // Ensure description property exists
  images: [
    {
      src: "/images/gallery/001.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/002.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/003.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/004.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/005.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/006.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/007.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/008.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/009.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/010.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/011.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/012.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/013.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/014.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/015.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/016.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/017.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/018.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/019.jpeg",
      alt: "Le metagold",
    },
    {
      src: "/images/gallery/020.jpeg",
      alt: "Le metagold",
    },
    // Add more images as needed
  ],
};

const metaverseGallery = {
  images: [
    { src: '/images/metavers/image1.jpg', alt: 'Image 1' },
    { src: '/images/metavers/image2.jpg', alt: 'Image 2' },
    { src: '/images/metavers/image3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ],
};

const blog = {
  label: "Blog",
  title: "Latest Blog Posts",
  description: "Read the latest articles and updates.",
  posts: [
    {
      title: "Post 1",
      description: "Description of post 1",
      link: "/blog/post-1",
    },
    {
      title: "Post 2",
      description: "Description of post 2",
      link: "/blog/post-2",
    },
  ],
};

const hotels = {
  // Define the hotels object
  title: "Hotels",
  description: "List of hotels",
  // Add other properties as needed
};

const dynabuy = {
  // Define the dynabuy object
  title: "Dynabuy",
  description: "List of dynabuy services",
  // Add other properties as needed
};

const vtc = {
  // Define the vtc object
  title: "VTC",
  description: "List of VTC services",
  // Add other properties as needed
};

const cinema = {
  // Define the cinema object
  title: "Cinema",
  description: "List of cinema services",
  // Add other properties as needed
};

const conseils = {
  // Define the conseils object
  title: "Conseils",
  description: "List of conseils services",
  // Add other properties as needed
};

const digitale = {
  // Define the digitale object
  title: "Digitale",
  description: "List of digitale services",
  // Add other properties as needed
};

const formation = {
  // Define the formation object
  title: "Formation",
  description: "List of formation services",
  // Add other properties as needed
};

const formation2 = {
  // Define the formation2 object
  title: "Formation 2",
  description: "List of formation2 services",
  // Add other properties as needed
};

const karate = {
  // Define the karate object
  title: "Karate",
  description: "List of karate services",
  // Add other properties as needed
};

const metagold = {
  // Define the metagold object
  title: "MetaGold",
  description: "MetaGold services",
  // Add other properties as needed
};

const metavers = {
  // Define the metavers object
  title: "Metavers",
  description: "Metavers services",
  // Add other properties as needed
};

const signup = {
  // Define the signup object
  title: "Signup",
  description: "Signup services",
  // Add other properties as needed
};

const bureautique = {
  // Define the bureautique object
  title: "Bureautique",
  description: "Bureautique services",
  // Add other properties as needed
};

const bancaire = {
  // Define the bancaire object
  title: "Bancaire",
  description: "Bancaire services",
  // Add other properties as needed
};

const arbela = {
  // Define the arbela object
  title: "Arbela",
  description: "Arbela services",
  // Add other properties as needed
};

const lazare = {
  // Define the lazare object
  title: "Lazare",
  description: "Lazare services",
  // Add other properties as needed
};

export { person, social, newsletter, home, about, work, gallery, metaverseGallery, blog, hotels, dynabuy, vtc, cinema, conseils, digitale, formation, formation2, karate, metagold, metavers, signup, bureautique, bancaire, arbela, lazare };
