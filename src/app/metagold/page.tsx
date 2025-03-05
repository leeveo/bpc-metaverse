import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import imagesData from "@/app/resources/imagesData.json"; // Import imagesData from JSON file

export default function Metagold() {
    console.log(imagesData); // Debugging: log imagesData to ensure it is imported correctly

    if (!imagesData) {
        return <div>Error: imagesData is not defined</div>;
    }

    const roomData = imagesData.find(data => data.link === "/metagold"); // Find the room data

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
      </div>
    );
  }
