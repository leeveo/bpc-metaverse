import { usePathname } from 'next/navigation';
import imagesData from '@/app/resources/imagesData.json';

export default function Project() {
  const pathname = usePathname();
  const project = pathname.split('/').pop();
  const projectData = imagesData.find((img) => img.link === `/projects/${project}`);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      {projectData.iframe ? (
        <div dangerouslySetInnerHTML={{ __html: projectData.iframe }} />
      ) : (
        <iframe
          src={projectData.iframeSrc}
          width="1280px"
          height="720px"
          allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
        ></iframe>
      )}
    </div>
  );
}
