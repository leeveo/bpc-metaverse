import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import imagesData from "@/app/resources/imagesData.json"; // Import imagesData from JSON file

export default function Lazare() {
    console.log(imagesData); // Debugging: log imagesData to ensure it is imported correctly

    if (!imagesData) {
        return <div>Error: imagesData is not defined</div>;
    }

    const roomData = imagesData.find(data => data.link === "/lazare"); // Find the room data

    if (!roomData) {
        return <div>Error: Room data not found</div>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>{roomData.title}</h1> {/* Display the title with margin */}
        
        <iframe
          src={roomData.iframeSrc} // Use iframeSrc from imagesData
          width="1280px"
          height="720px"
          allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
          style={{ margin: '0 auto 20px auto' }} // Center the iframe with margin
        ></iframe>
        <p style={{ maxWidth: '1280px', textAlign: 'center' }}>{roomData.description}</p> {/* Display the description with reduced width */}
        <p style={{ maxWidth: '1280px', textAlign: 'center', whiteSpace: 'pre-line' }}>
        <br />
        Notre offre LAZARE est accessible exclusivement à nos clients adhérents et certains partenaires.
        <br />Concernant nos clients adhérents, elle n' est proposée qu' aux client adhérents ayant réglé la totalité des sommes prévues au contrat multi services d 'accès à nos prix coûtant pour le bureau suivant l 'échéancier prévu au dit contrat pour les six années de sa durée totale. 
        Elle permet à nos clients adhérents qui rentrent dans ce critère d 'éligibilité de bénéficier d 'un lien d 'accès METAVERS pour leur communication digitale sur leurs réseaux sociaux ou par mail.
        <br />Un casque oculus de version basique leur est offert mais l' accès est également disponible sur leur PC sans avoir besoin d 'utiliser leur casque. 
        Un service VIP est assuré pour cet accès METAVERS LAZARE et un service ELITE. 
        <br />  <br />CONCERNANT LE SERVICE VIP sans supplément de prix comprend un certain nombre d 'éléments intégrés que le client adhérent devra nous fournir si il souhaite bénéficier de ce NOUVEAU SERVICE INNOVANT ET EXCLUSIF. 
        <br /> A savoir : 4 images de son choix pour illustrer sa communication sur sa société et son activité professionnelle, une vidéo de présentation s 'y rapportant, un texte de présentation en relation y afférent et une plaquette commerciale et / ou UNE LANDING PAGE.
        <br />  <br /> Au-delà de ces éléments le client adhérent devra passer en statut ELITE et devra payer un surcoût en fonction du travail réalisé qui sera facturé par notre prestataire au prix remisé qui lui est accordé en tant que client adhérent.
        Ce lien MATAVERS LAZARE VIP qui sera octroyé à tout client adhérent en faisant la demande expresse et ayant rempli les conditions d 'éligibilité sus mentionnées fait donc partie dans la version gratuite pour ce service METAGOLD de son adhésion; il comprend un surcoût si le client adhérent souhaite basculer sur la formule ELITE qui sera facturé au tarif adhérent remisé suivant les conditions de vente de notre partenaire dont il bénéficie au tire de son adhésion
        </p>
      </div>
    );
  }
