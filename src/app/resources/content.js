import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "MetaGold", 
  lastName: "Gold Nature ",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Souscrire à la Newsletter du {person.firstName}</>,
  description: (
    <>
      Abonnez-vous et profitez d’un accès exclusif à nos offres VIP et promotions Métavers !
    </>
  ),
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



const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Toutes les salles",
  title: "Toutes les salles du Metaverse",
  description: `Découvrez l"ensemnble des salles du Metaverse de BPC France`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galerie",
  title: "Galerie Photos",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/001.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/002.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/003.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/004.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/005.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/006.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/007.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/008.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/009.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/010.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/011.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/012.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/013.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/014.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
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

export { person, social, newsletter, home, blog, work, gallery, metaverseGallery };
