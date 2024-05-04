import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function HeadTags() {
  const location = useLocation();
  const isGreek = location.pathname.startsWith('/el');

  return (
    <div key={location.pathname}>
      <Helmet>
        <meta name="description" content={isGreek ? "Creative Layer: Κορυφαία εκτύπωση 3D στην Κύπρο, ειδικευμένη σε SLA 3D Εκτύπωση, FDM 3D Εκτύπωση και προσαρμοσμένα 3D μοντέλα. Λάβετε άμεση προσφορά και ξεκινήστε το έργο σας σήμερα." : "Creative Layer: Top 3D printing in Cyprus, specializing in SLA 3D Printing, FDM 3D Printing, and custom 3D models. Get an instant quote and start your project today."}/>
        <meta property="og:title" content={isGreek ? "Creative Layer - 3D Εκτύπωση, Κύπρος" : "Creative Layer - 3D Printing, Cyprus"} />
        <meta property="og:description" content={isGreek ? "Creative Layer: Κορυφαία εκτύπωση 3D στην Κύπρο, ειδικευμένη σε SLA 3D Εκτύπωση, FDM 3D Εκτύπωση και προσαρμοσμένα 3D μοντέλα. Λάβετε άμεση προσφορά και ξεκινήστε το έργο σας σήμερα." : "Creative Layer: Top 3D printing in Cyprus, specializing in SLA 3D Printing, FDM 3D Printing, and custom 3D models. Get an instant quote and start your project today."}/>
        <title>{isGreek ? "Creative Layer - 3D Εκτύπωση, Κύπρος" : "Creative Layer - 3D Printing, Cyprus"}</title>
      </Helmet>
    </div>
  );
}

export default HeadTags;
