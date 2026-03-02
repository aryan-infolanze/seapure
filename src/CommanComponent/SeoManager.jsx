import { Helmet } from "react-helmet-async";

const SeoManager = () => {
  const title =
    "Shreya Water Tech LLP";

  const description =
    "Shreya Water Tech LLP provides high-quality RO systems, industrial water treatment plants, filtration systems and complete water purification solutions across India.";

  const url = "https://www.shreyawatertech.com";

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Shreya Water Tech LLP, RO Plant, Industrial RO System, Water Treatment Plant, Water Purification, RO System Manufacturer India, Commercial RO Plant, Water Filtration System"
      />

      <link rel="canonical" href={url} />
                                                        
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shreya Water Tech LLP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default SeoManager;