import Gallery from "@/components/Gallery";
import { Metadata } from "next";

type Resort = {
  name: string;
  description: string;
  location: string;
};

const resorts: Record<string, Resort> = {
  tadoba: {
    name: "Tadoba Safari Resort",
    description:
      "Located near Tadoba-Andhari Tiger Reserve, offering guided safaris and luxury cottages.",
    location: "Maharashtra",
  },
  pench: {
    name: "Pench Safari Resort",
    description:
      "Nestled in teak forests, known for leopards and rich wildlife.",
    location: "Madhya Pradesh",
  },
  kanha: {
    name: "Kanha Safari Resort",
    description:
      "Upcoming resort near Kanha National Park, focused on sustainable tourism.",
    location: "Madhya Pradesh",
  },
};

// SEO metadata for each resort
const resortSEO: Record<
  string,
  { title: string; description: string; ogImage?: string }
> = {
  tadoba: {
    title: "Tadoba Safari Resort | Premium Wildlife Stays",
    description:
      "Experience luxury safaris at Tadoba-Andhari Tiger Reserve. Guided tours, comfortable cottages, and unforgettable wildlife adventures.",
    ogImage: "/tadoba/og.jpg",
  },
  pench: {
    title: "Pench Safari Resort | Wildlife & Luxury Stays",
    description:
      "Stay near Pench National Park and enjoy guided wildlife safaris, luxury cottages, and an immersive nature experience.",
    ogImage: "/pench/og.jpg",
  },
  kanha: {
    title: "Kanha Safari Resort | Sustainable Wildlife Retreat",
    description:
      "Discover Kanha Safari Resort, your gateway to ethical and luxurious wildlife experiences near Kanha National Park.",
    ogImage: "/kanha/og.jpg",
  },
};

// Dynamic SEO for Next.js App Router
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const seo = resortSEO[params.slug];

  if (!seo) {
    return {
      title: "Resort Not Found",
      description: "This resort does not exist.",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

// Props interface
interface ResortPageProps {
  params: {
    slug: string;
  };
}

// Main resort page
export default function ResortPage({ params }: ResortPageProps) {
  const resort = resorts[params.slug];

  // If slug doesn't exist
  if (!resort) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">Resort not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      {/* Resort Info */}
      <h1 className="text-4xl font-bold mb-4">{resort.name}</h1>
      <p className="text-gray-600 mb-6">{resort.location}</p>
      <p className="text-lg leading-8 mb-10">{resort.description}</p>

      {/* Gallery */}
      <Gallery title={`${resort.name} Gallery`} />

      {/* Booking CTA */}
      <a
        href="https://wa.me/919999999999"
        className="inline-block mt-10 rounded-full bg-black px-8 py-3 text-white font-semibold"
      >
        Enquire & Book Safari
      </a>
    </main>
  );
}
