import * as React from "react";

import Image from "next/image";
import Card from "@mui/material/Card";

import styles from "./Team.module.scss";
import TeamDialog from "./DIalog";
import Link from "next/link";

const TeamMember = ({ mate }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <TeamDialog
        open={open}
        setOpen={setOpen}
        mate={mate}
        handleClickOpen={handleClickOpen}
      />

      <Card className={styles.teamMateCard} onClick={handleClickOpen}>
        <div className={styles.teamMate__image}>
          <Image src={mate.imgUrl} alt={mate.name} width={150} height={150} />
        </div>

        <h2 className={styles.teamMate__name}>{mate.name}</h2>
        <p className={styles.teamMate__role}>{mate.position}</p>

        <div style={{ flex: "1" }} />
        <div style={{ display: 'flex' }}>

        {Array.isArray(mate.icon) &&
          mate.icon.map((icons, index) => (
            <div className={styles.social}>
              <Link key={index} href={mate.social[index]} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {icons}
                </a>
              </Link>
            </div>
          ))}
          </div>
      </Card>
    </>
  );
};

export default TeamMember;
