import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material"; // Make sure to import Button
import { useRouter } from "next/router"; // Import useRouter hook
import {
  faBalanceScale,
  faBriefcase,
  faUsers,
  faMoneyBill,
  faLightbulb,
  faGavel,
  faHome,
  faGlobe,
  faShieldAlt,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../Title";

// Liste des services avec icônes FontAwesome
const services = [
  {
    icon: faBalanceScale,
    title: "Conseil juridique général",
    content:
      "Consultations juridiques sur des questions spécifiques, comme les contrats, les litiges et l’interprétation des lois.",
    id: 1,
  },
  {
    icon: faBriefcase,
    title: "Droit des affaires",
    content:
      "Aide à la constitution de sociétés, rédaction de contrats commerciaux, et conseils en fusions et acquisitions.",
    id: 2,
  },
  {
    icon: faUsers,
    title: "Droit des sociétés",
    content:
      "Conseils en gouvernance d’entreprise et gestion des relations entre actionnaires.",
    id: 3,
  },
  {
    icon: faMoneyBill,
    title: "Droit fiscal",
    content:
      "Optimisation fiscale pour entreprises et particuliers, ainsi que représentation en cas de contentieux fiscal.",
    id: 4,
  },
  {
    icon: faLightbulb,
    title: "Propriété intellectuelle",
    content:
      "Protection des droits d’auteur, marques, brevets et gestion des litiges en propriété intellectuelle.",
    id: 5,
  },
  {
    icon: faGavel,
    title: "Droit social et droit du travail",
    content:
      "Rédaction de contrats de travail, gestion des relations collectives, et accompagnement en cas de litiges.",
    id: 6,
  },
  {
    icon: faHome,
    title: "Droit immobilier",
    content:
      "Rédaction de baux, conseils en transactions immobilières et gestion des litiges immobiliers.",
    id: 7,
  },
  {
    icon: faGlobe,
    title: "Droit international",
    content:
      "Accompagnement dans les litiges internationaux et rédaction de contrats entre entreprises de différents pays.",
    id: 8,
  },
  {
    icon: faShieldAlt,
    title: "Réglementation et conformité",
    content:
      "Assistance en conformité réglementaire et mise en place de politiques internes.",
    id: 9,
  },
  {
    icon: faBalanceScale,
    title: "Litiges et contentieux",
    content:
      "Représentation en justice, règlement amiable des différends, et recouvrement de créances.",
    id: 10,
  },
  {
    icon: faCogs,
    title: "Services aux entreprises",
    content:
      "Gestion de crise, accompagnement en cas de faillite ou restructuration d’entreprises.",
    id: 11,
  },
];

const ServiceArea = ({ className = "", title, subTitle, limit }) => {
  const router = useRouter(); // Use the router to check the current page
  const servicesToShow = limit ? services.slice(0, limit) : services;

  return (
    <Parallax
      bgImage="/images/practice/1.jpg"
      bgImageAlt="background image"
      contentClassName={`ourServiceArea ${className}`}
      strength={200}
    >
      <Grid container spacing={2} className="container">
        <Grid item xs={12}>
          <SectionTitle title={title} subTitle={subTitle} />
        </Grid>
        {servicesToShow.map((service, index) => (
          <Grid
            item
            xs={12}
            xl={4}
            lg={4}
            md={6}
            sm={6}
            key={index}
          >
            <Grid className="serviceWrap">
              <Grid className="serviceIcon">
                <FontAwesomeIcon
                  icon={service.icon}
                  size="3x"
                  className="icon"
                />
              </Grid>
              <Grid className="serviceContent">
                <h3>
                  <Link
                    href={`/practice/[id]`}
                    as={`/practice/${service.id}`}
                  >
                    {service.title}
                  </Link>
                </h3>
                <p>{service.content}</p>
              </Grid>
            </Grid>
          </Grid>
        ))}

        {/* Conditionally render the button only on the homepage */}
        {router.pathname === "/" && (
          <Grid item xs={12} style={{textAlign:"center"}}>
            <Link href="/practice">
              <Button className="btnStyle">
                Voir tous les services
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </Parallax>
  );
};

export default ServiceArea;
