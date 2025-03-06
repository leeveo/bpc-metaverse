'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content.js"; // Ensure this uses content.js
import imagesData from "@/app/resources/imagesData.json"; // Import imagesData from JSON file

export default function Arbela() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/check-auth-arbela');
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          router.push('/login-arbela');
        }
      } catch (error) {
        router.push('/login-arbela');
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout-arbela');
      router.push('/work');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  console.log(imagesData); // Debugging: log imagesData to ensure it is imported correctly

  if (!imagesData) {
    return <div>Error: imagesData is not defined</div>;
  }

  const roomData = imagesData.find(data => data.link === "/arbela"); // Find the room data

  if (!roomData) {
    return <div>Error: Room data not found</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1280px', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>{roomData.title}</h1> {/* Display the title with margin */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>Connecté</p> {/* Display connection status */}
          <button 
            onClick={handleLogout} 
            style={{ 
              padding: '10px', 
              backgroundColor: '#333', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            Se déconnecter
          </button> {/* Logout button */}
        </div>
      </div>
      
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
