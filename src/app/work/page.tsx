import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import imagesData from "@/app/resources/imagesData.json";
import InteractiveImage from "@/components/InteractiveImage";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m">
      <h1 style={{ textAlign: "center", color: "#7febba" }}>Toutes les salles du metavers</h1>
      <p style={{ textAlign: "center", fontSize: "0.9em", margin: "10px 0 50px 0" }}>
        Plongez dans un univers innovant et interactif où chaque salle Métavers vous ouvre les portes d’une expérience unique. Que vous soyez entrepreneur, passionné de digital, à la recherche de formations exclusives ou en quête de nouvelles opportunités de networking, notre portail Métavers est votre point d’entrée vers le futur du business et de l’apprentissage.
        <br /><br />
        <img src="/images/metagold_logo.png" alt="Metagold Logo" style={{ display: "block", margin: "20px auto" }} />
        <br /><br />
        <h1 style={{ color: "#7febba" }}> Comment ça marche ? </h1>
        <br />
        1️⃣ Choisissez la salle qui vous intéresse parmi nos espaces thématiques.
        <br />
        2️⃣ Cliquez sur l’entrée pour accéder instantanément au Métavers.
        <br />
        3️⃣ Interagissez en direct avec d’autres utilisateurs, explorez les contenus et développez vos compétences.
        <br />
        4️⃣ Utiliser les flèches de votre clavier ainsi que le clic gauche de votre souris pour vous déplacer dans les salles.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", justifyItems: "center" }}>
        {imagesData.map((image, index) => (
          <a key={index} href={image.link} style={{ textAlign: "center", marginBottom: "40px" }}>
            <InteractiveImage
              src={image.src}
              alt={`Metaverse Image ${index + 1}`}
              width={300}
              height={200}
            />
            <br />
            <h3>{image.title}</h3>
            <p style={{ fontSize: "0.8em" }}>{image.description}</p>
          </a>
        ))}
      </div>
      <img 
        src="/images/metagold.jpg" 
        alt="Metagold" 
        className="cardWithShadow responsiveImage" 
        style={{ 
          display: "block", 
          margin: "40px auto",
          width: "80%",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
        }} 
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
    </Column>
  );
}
