import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";

const metaverseGallery = {
  title: "Metaverse Gallery",
  description: "A collection of metaverse images",
  images: Array.from({ length: 15 }, (_, index) => ({
    src: `/images/metavers/image${index + 1}.jpg`,
    alt: `Metaverse Image ${index + 1}`,
  })),
};

export async function generateMetadata() {
  const title = metaverseGallery.title;
  const description = metaverseGallery.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/metavers`,
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

export default function MetaverseGallery() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: metaverseGallery.title,
            description: metaverseGallery.description,
            url: `https://${baseURL}/metavers`,
            image: metaverseGallery.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: "Metaverse Author",
              image: {
                "@type": "ImageObject",
                url: `${baseURL}/images/metavers/author.jpg`,
              },
            },
          }),
        }}
      />
      <MasonryGrid images={metaverseGallery.images} columns={3} />
    </Flex>
  );
}
