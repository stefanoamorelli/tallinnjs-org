import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "event";
  image?: string;
  noindex?: boolean;
}

const SITE_NAME = "TallinnJS";
const DEFAULT_DESCRIPTION = "TallinnJS is Estonia's largest JavaScript community with 1,200+ developers. Join us for free talks, workshops, and networking events in Tallinn. All skill levels welcome.";
const DEFAULT_IMAGE = "https://tallinnjs.org/images/tallinnjs.jpeg";
const BASE_URL = "https://tallinnjs.org";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Estonia's Largest JavaScript Community`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  // JSON-LD structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TallinnJS",
    url: BASE_URL,
    logo: `${BASE_URL}/images/tallinnjs.jpeg`,
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2017",
    location: {
      "@type": "Place",
      name: "Tallinn",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressCountry: "Estonia",
      },
    },
    sameAs: [
      "https://www.meetup.com/tallinn-js/",
      "https://archive.tallinnjs.org",
    ],
  };

  // JSON-LD for local business / community
  const communitySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TallinnJS JavaScript Community",
    description: "Free JavaScript meetups, talks, and workshops in Tallinn, Estonia",
    url: BASE_URL,
    areaServed: {
      "@type": "City",
      name: "Tallinn",
    },
    priceRange: "Free",
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Keywords */}
      <meta
        name="keywords"
        content="JavaScript, TypeScript, React, Node.js, Vue.js, web development, meetup, Tallinn, Estonia, developer community, programming, frontend, backend, tech events"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="TallinnJS Community" />
      <meta name="geo.region" content="EE-37" />
      <meta name="geo.placename" content="Tallinn" />
      <meta name="geo.position" content="59.4370;24.7536" />
      <meta name="ICBM" content="59.4370, 24.7536" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(communitySchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
