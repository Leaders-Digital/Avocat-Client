import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import BalanceScaleIcon from "@mui/icons-material/Scale";
import BriefcaseIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/Group";
import MoneyBillIcon from "@mui/icons-material/AttachMoney";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import ShieldIcon from "@mui/icons-material/Security";
import LitigationIcon from "@mui/icons-material/Balance";
import SettingsIcon from "@mui/icons-material/Settings";
import SectionTitle from "../Title";


const services = [
  {
    icon: <BalanceScaleIcon />,
    title: "Conseil juridique général",
    content:
      "Consultations juridiques sur des questions spécifiques, comme les contrats, les litiges et l’interprétation des lois.",
    id: 1,
  },
  {
    icon: <BriefcaseIcon />,
    title: "Droit des affaires",
    content:
      "Aide à la constitution de sociétés, rédaction de contrats commerciaux, et conseils en fusions et acquisitions.",
    id: 2,
  },
  {
    icon: <PeopleIcon />,
    title: "Droit des sociétés",
    content:
      "Conseils en gouvernance d’entreprise et gestion des relations entre actionnaires.",
    id: 3,
  },
  {
    icon: <MoneyBillIcon />,
    title: "Droit fiscal",
    content:
      "Optimisation fiscale pour entreprises et particuliers, ainsi que représentation en cas de contentieux fiscal.",
    id: 4,
  },
  {
    icon: <LightbulbIcon />,
    title: "Propriété intellectuelle",
    content:
      "Protection des droits d’auteur, marques, brevets et gestion des litiges en propriété intellectuelle.",
    id: 5,
  },
  {
    icon: <GavelIcon />,
    title: "Droit social et droit du travail",
    content:
      "Rédaction de contrats de travail, gestion des relations collectives, et accompagnement en cas de litiges.",
    id: 6,
  },
  {
    icon: <HomeIcon />,
    title: "Droit immobilier",
    content:
      "Rédaction de baux, conseils en transactions immobilières et gestion des litiges immobiliers.",
    id: 7,
  },
  {
    icon: <PublicIcon />,
    title: "Droit international",
    content:
      "Accompagnement dans les litiges internationaux et rédaction de contrats entre entreprises de différents pays.",
    id: 8,
  },
  {
    icon: <ShieldIcon />,
    title: "Réglementation et conformité",
    content:
      "Assistance en conformité réglementaire et mise en place de politiques internes.",
    id: 9,
  },
  {
    icon: <LitigationIcon />,
    title: "Litiges et contentieux",
    content:
      "Représentation en justice, règlement amiable des différends, et recouvrement de créances.",
    id: 10,
  },
  {
    icon: <SettingsIcon />,
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
                {service.icon}
              </Grid>
              <Grid className="serviceContent">
                <h3>
                  
                    {service.title}
                
                </h3>
                <p>{service.content}</p>
              </Grid>
            </Grid>
          </Grid>
        ))}

        {/* Conditionally render the button only on the homepage */}
        {router.pathname === "/" && (
          <Grid item xs={12} style={{ textAlign: "center" }}>
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
