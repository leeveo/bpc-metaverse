import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import styles from "./Home.module.css"; // Import the CSS module
import { FaUsers, FaChalkboardTeacher, FaGlobe } from "react-icons/fa"; // Import icons

// Ensure home is an object with the correct properties
const home = {
  title: "Home Page",
  description: "Welcome to the home page",
  // ...other properties...
};

// Remove the redefinition of the newsletter object
// const newsletter = {
//   display: true,
//   title: "Newsletter Title",
//   description: "Subscribe to our newsletter to stay updated.",
//   // ...other properties...
// };

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
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

const MetaverseBenefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardImageWithSvgMask}>
            
          </div>
        </div>
        <div className={`${styles.button} ${styles.topCenter}`}>
          
        </div>
        <div className={`${styles.button} ${styles.bottomRight}`}>
          <span className={styles.text}>
            <i className="fa-solid fa-quote-left"></i> 
      
            <i className="fa-solid fa-quote-right"></i>
          </span>
         
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <Column fillWidth paddingY="l" gap="m" className={styles.faqContainer}>
      <Heading variant="heading-default-xl">FAQ</Heading>
      <div className={styles.faqColumns}>
        <div className={styles.faqColumn}>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}>Qu’est-ce que le Métavers ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Le Métavers est un espace virtuel immersif où les utilisateurs peuvent interagir, échanger et explorer différents environnements numériques. Il permet d’accéder à des salles dédiées au business, aux formations, aux loisirs et bien plus encore, en réalité virtuelle ou via un simple écran.</Text>
          </Column>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}>Comment accéder à votre Métavers ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Vous pouvez accéder à notre Métavers de deux façons :<br />
              Via un PC : En utilisant un navigateur compatible et en cliquant sur le lien de la salle souhaitée.<br />
              Avec un casque VR (Oculus Quest, HTC Vive, etc.) : Pour une immersion totale, connectez votre casque et ouvrez notre Métavers via votre plateforme VR préférée.
            </Text>
          </Column>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}>Ai-je besoin d’un casque VR pour utiliser le Métavers ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Non, un casque VR n’est pas obligatoire ! Vous pouvez naviguer dans le Métavers depuis un PC, une tablette ou un smartphone. Cependant, l’expérience est plus immersive avec un casque VR.</Text>
          </Column>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}> Quels types de contenus trouve-t-on dans le Métavers ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Notre Métavers propose plusieurs salles thématiques, incluant :<br />
              Des formations interactives sur le business, le marketing, le digital…<br />
              Des eBooks et ressources pédagogiques accessibles en quelques clics.<br />
              Une salle cinéma avec des documentaires et conférences en vidéo.<br />
              Des espaces professionnels pour échanger et réseauter.
            </Text>
          </Column>
        </div>
        <div className={styles.faqColumn}>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}>Comment interagir avec d’autres utilisateurs dans le Métavers ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Dans nos salles Métavers, vous pouvez :<br />
              Utiliser un chat vocal ou textuel pour discuter en temps réel.<br />
              Vous déplacer et explorer librement les différents espaces.<br />
              Participer à des événements et conférences en direct.
            </Text>
          </Column>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}>Mon accès au Métavers est-il payant ?</Text>
            <Text variant="body-default-m" className={styles.answer}>L’accès aux salles de base est inclus pour nos adhérents, mais certaines fonctionnalités premium (personnalisation d’espace, services VIP, formations avancées) peuvent nécessiter un abonnement ou un achat supplémentaire.</Text>
          </Column>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}> Quels équipements sont recommandés pour une meilleure expérience ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Pour une expérience optimale, nous recommandons :<br />
              ✔️ Un PC ou Mac avec un bon processeur et une connexion Internet stable.<br />
              ✔️ Un casque VR (Oculus Quest, HTC Vive, etc.) pour une immersion totale.<br />
              ✔️ Des écouteurs ou un micro pour interagir avec d’autres utilisateurs.
            </Text>
          </Column>
          <Column gap="s">
            <Text variant="body-default-m" className={styles.question}>Comment puis-je obtenir de l’aide en cas de problème technique ?</Text>
            <Text variant="body-default-m" className={styles.answer}>Si vous rencontrez des difficultés, vous pouvez :<br />
                            Nous contacter par email, un support en ligne pour une assistance rapide.<br />
                         </Text>
          </Column>
        </div>
      </div>
    </Column>
  );
};

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">

      {/* Section Hero */}
      <div className={styles.hero} style={{ position: "relative", top:"-40px" }}>
        <img src="/images/metagold.jpg" alt="Le metagold flou" style={{ width: "100vw", height: "auto", filter: "blur(10px)", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: -1 }} />
        <img src="/images/metagold_logo.png" alt="Metagold Logo" style={{ width: "100%", height: "auto", maxWidth: "400px", margin: "0 auto", display: "block" }} />
       
        <Text className={styles.heroSubtitleDark}>
          Découvrez un monde virtuel immersif où vous pouvez interagir, apprendre et explorer des environnements numériques innovants.
        
        </Text>
        <div className={styles.heroButtons}>
          <Button variant="primary" size="l" className={styles.heroButton} href="/work">
            Commencer →
          </Button>
          <Button variant="secondary" size="l" className={styles.heroButton} href="/signup">
            Inscrivez-vous
          </Button>
        </div>
      </div>

     

      <img src="/images/metagold.jpg" alt="Le metagold" style={{ width: "100%", height: "auto", borderRadius: "20px", position: "relative", top:"-100px", zIndex: 1 }} />
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", justifyItems: "center" }}>
        <div className={styles.cardWithShadow}>
          <FaUsers size={50} />
          <Heading variant="heading-default-m" style={{ color: "#7febba", fontWeight: "bold" }}>Communauté</Heading>
          <Text variant="body-default-m" style={{ color: "darkgray" }}>Rejoignez une communauté dynamique et échangez avec des professionnels du monde entier.</Text>
        </div>
        <div className={styles.cardWithShadow}>
          <FaChalkboardTeacher size={50} />
          <Heading variant="heading-default-m" style={{ color: "#7febba", fontWeight: "bold" }}>Formations</Heading>
          <Text variant="body-default-m" style={{ color: "darkgray" }}>Accédez à des formations interactives et développez vos compétences dans divers domaines.</Text>
        </div>
        <div className={styles.cardWithShadow}>
          <FaGlobe size={50} />
          <Heading variant="heading-default-m" style={{ color: "#7febba", fontWeight: "bold" }}>Accessibilité</Heading>
          <Text variant="body-default-m" style={{ color: "darkgray" }}>Connectez-vous facilement via casque VR ou directement sur PC pour une expérience immersive.</Text>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        
      <img src="/images/metagold_logo.png" alt="Le metagold" style={{ width: "100%", height: "auto", borderRadius: "20px", position: "relative" }} />
      
        <Text variant="body-default-xl"  style={{ color: "#7febba", fontWeight: "bold" }}>
          Prêt à prendre votre destin en main <br />et à rejoindre une communauté dynamique d’entrepreneurs à succès ?<br />
          Inscrivez-vous dès maintenant pour devenir membre du METAGOLD et commencez votre voyage vers le succès dès aujourd’hui.
        </Text>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
    <Button variant="primary" size="l" href="/signup">
      Je m'inscris
    </Button>
  </div>
        
      </div>
      <Column fillWidth paddingY="l" gap="m">
        <Flex gap="m">
     
          <div style={{ flex: 1 }}>
            <Heading variant="heading-default-xl" style={{ color: "#7febba", fontWeight: "bold" }}>Pourquoi choisir nos salles Métavers ?<br /></Heading>
            <Text variant="body-default-m">
              <span style={{ color: "#7febba" }}>✔️</span> Immersion totale : Interagissez en temps réel avec des professionnels.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Optimisation des échanges : Bénéficiez d’un cadre interactif pour vos négociations et partenariats.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Accessibilité maximale : Connectez-vous via casque VR ou directement sur PC.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Expérience unique : Transformez votre communication digitale avec des espaces innovants.
              <br />
              <br />
              <br />
              <br />
            </Text>
          </div>
          <img src="/images/metavers/cover-01.jpg" alt="Pourquoi choisir nos salles Métavers" style={{ width: "50%", height: "auto", borderRadius: "20px" }} />
        </Flex>
        <br /><br /><br /><br />
        <Flex gap="m">
          <img src="/images/oculus.png" alt="Pourquoi choisir nos salles Métavers" style={{ width: "50%", height: "auto", borderRadius: "20px" }} />
          <div style={{ flex: 1 }}>
            <Heading variant="heading-default-xl" style={{ color: "#7febba", fontWeight: "bold" }}>Pourquoi utiliser l’Oculus Quest pour le Métavers ?<br /></Heading>
            <Text variant="body-default-m">
              <span style={{ color: "#7febba" }}>✔️</span> Immersion totale : Vivez une expérience réaliste et dynamique grâce à la vision 360° et aux interactions en temps réel.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Facilité d’accès : Un casque autonome sans besoin de PC ou de câbles encombrants.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Optimisé pour le networking et la formation : Participez à des événements, des formations, et des réunions professionnelles comme si vous y étiez physiquement.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Une navigation fluide et intuitive : Grâce aux contrôleurs et aux options de déplacement, plongez dans un environnement interactif facilement.
            </Text>
          </div>
        </Flex>
        <br /><br /><br /><br />
        <Flex gap="m">
          <div style={{ flex: 1 }}>
            <Heading variant="heading-default-xl" style={{ color: "#7febba", fontWeight: "bold" }}>Des Vidéos professionnelles pour comprendre et s’inspirer<br /></Heading>
            <Text variant="body-default-m">
              Plongez dans des contenus exclusifs explorant les tendances du business, de l’innovation et des nouvelles technologies. Découvrez des témoignages d’entrepreneurs à succès, des analyses de stratégies digitales performantes et des études de cas réels sur les entreprises qui révolutionnent le monde.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Success stories & parcours d’entrepreneurs : Comment les leaders d’aujourd’hui ont bâti des empires.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Le Métavers & les technologies immersives : Découvrez l’impact du digital sur les entreprises du futur.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Marketing & Stratégie digitale : Décryptage des campagnes les plus efficaces et des tendances émergentes.
              <br /><br />
              <span style={{ color: "#7febba" }}>✔️</span> Finance & Business intelligence : Comprendre les rouages de l’investissement et du développement économique.
            </Text>
          </div>
          <img src="/images/metavers/cover-02.jpg" alt="Des documentaires pour comprendre et s’inspirer" style={{ width: "50%", height: "auto", borderRadius: "20px" }} />
        </Flex>

                <div style={{ backgroundColor: "rgba(127, 235, 186, 0.5)", width: "100vw", padding: "20px 0", marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src="/images/icone_gold001.png" alt="Icone Gold" style={{ marginLeft: "20px", height: "100px" }} />
            <div style={{ textAlign: "center", flex: 1 }}>
              <Heading variant="heading-default-xl" style={{ color: "#333333" }}>Rejoignez notre communauté</Heading>
              <Text variant="body-default-m" style={{ color: "#ffffff" }}>Inscrivez-vous dès maintenant pour accéder à des contenus exclusifs et des opportunités uniques.<br /> Ainsi qu'un accès complet au Metavers du METAGOLD</Text>
            </div>
            <Button variant="primary" size="l" style={{ marginRight: "20px" }} href="/signup">
              Inscrivez-vous
            </Button>
          </div>
        </div>
        
        <MetaverseBenefits />
 
      </Column>
      <Projects range={[2]} />
    
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      <div style={{ backgroundColor: "rgba(127, 235, 186, 0.5)", width: "100vw", padding: "20px 0", marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <div style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src="/images/icone_gold001.png" alt="Icone Gold" style={{ marginLeft: "20px", height: "100px" }} />
            <div style={{ textAlign: "center", flex: 1 }}>
              <Heading variant="heading-default-xl" style={{ color: "#333333"}}>Accèdez immédiatement au metavers </Heading>
              <Text variant="body-default-m" style={{ color: "#ffffff" }}>Vous avez déjà votre accès privilégié ? <br /> Accèdez maintenant au METAGOLD</Text>
            </div>
            <Button variant="primary" size="l" style={{ marginRight: "20px" }} href="/work">
             Accèdez au metavers
            </Button>
          </div>
        </div>
      <FAQ />
    </Column>
  );
}
