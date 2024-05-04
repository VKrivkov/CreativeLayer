import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function HeadTags() {
  const location = useLocation();
  const isGreek = location.pathname.startsWith('/el');
  const title = isGreek ? "Creative Layer - 3D Εκτύπωση, Κύπρος" : "Creative Layer - 3D Printing, Cyprus";
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default HeadTags;
