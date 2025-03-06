import { Flex } from "@/once-ui/components";

export default function Signup() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <img src="/images/metagold_logo.png" alt="Metagold Logo" style={{ marginBottom: '20px' }} /> {/* Add the image below the text */}
          <div style={{ maxWidth: '600px', margin: '0 auto' }}> {/* Add a container with max-width */}
            <h1 style={{ marginBottom: '20px', textAlign: 'center', color: "#7febba", fontWeight: "bold" }}>Inscrivez-vous au METAGOLD <br />et accédez à toutes les ressources du METAVERS</h1> {/* Display the title with margin and center text */}
            <p style={{ marginBottom: '20px', textAlign: 'center', color: "#fff", fontSize: "16px" }}>
              Rejoignez notre communauté et profitez d'un accès exclusif à des contenus premium, des événements spéciaux et bien plus encore.<br /> Ne manquez pas cette opportunité unique de plonger dans l'univers fascinant du METAVERS.
            </p> {/* Add and format the new text */}
            <p style={{ marginBottom: '20px', textAlign: 'center', color: "#fff", fontSize: "16px" }}>
              Un univers dédié au télétravail et au développement personnel<br />
              Nous vous accompagnons à chaque étape de votre parcours professionnel en vous proposant des services sur mesure. <br />Profitez d’un coaching personnalisé, d’un accès à des solutions bureautiques à prix coûtant, de remises exclusives sur les services VTC, et d’un accompagnement individualisé tout au long de notre collaboration.
            </p>
            <p style={{ marginBottom: '20px', textAlign: 'center', color: "#7febba", fontSize: "16px", fontWeight: "bold" }}>
              Pourquoi rejoindre le partenariat Gold Nature ?<br />
              
              <p style={{ marginBottom: '20px', textAlign: 'center', color: "#fff", fontSize: "16px" }}></p>
              Notre formation,est accessible gratuitement aux candidats sélectionnés pour intégrer notre groupe SORECPRO. Conçue pour vous aider à maîtriser les fondamentaux du développement personnel et commercial, elle vous donnera les clés pour réussir et faire évoluer votre activité.
            </p>
            <p style={{ marginBottom: '20px', textAlign: 'left', color: "#fff", fontSize: "16px" }}>
              NOS SERVICES INTEGRES POUR BOOSTER VOTRE REUSSITE<br /><br />
              ✅ Coaching personnalisé : Un accompagnement pas à pas pour suivre et valider chaque étape de votre formation.<br /><br />
              ✅ Accès bureautique à prix coûtant : Bénéficiez de tarifs exclusifs sur une large gamme de produits bureautiques, de A à Z.<br /><br />
              ✅ Transport VTC à tarifs réduits : Profitez de 50% de remise sur nos véhicules en Île-de-France et de nos prix négociés en province.<br /><br />
              ✅ Accompagnement personnalisé : Une assistance sur mesure pour vous guider à chaque étape de votre parcours professionnel.<br />
            </p>
            <p style={{ marginBottom: '20px', textAlign: 'center', color: "#fff", fontSize: "16px" }}>
              Rejoignez-nous dès aujourd’hui !<br />
              Avec plus de 30 ans d’expérience, nous mettons à votre disposition notre expertise issue d’un large éventail de compétences. <br /><br />Devenez manager d’équipes en télétravail, développez votre activité en toute autonomie et intégrez un environnement de travail dynamique et convivial.
            </p>
            <p style={{ marginBottom: '20px', textAlign: 'center', color: "#7febba", fontSize: "20px" }}>
              🚀 Prêt à donner un nouvel élan à votre carrière ? <br />Rejoignez Gold Nature dès maintenant !
            </p>
          </div>
        </div>
        <div style={{ flex: 1.5, padding: '20px' }}> {/* Increase the flex value to make the iframe wider */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd385JBlTct-s0aso7UT4KASMgakbJ8JUSeV6O1Xh2IIAAmJw/viewform?embedded=true" 
            width="100%"
            height="1741px"
            style={{ margin: '0 auto', border: 'none', overflow: 'hidden' }} // Center the iframe with margin, remove border, and hide overflow
            scrolling="no" // Disable scrolling
          ></iframe>
        </div>
      </div>
    );
}
