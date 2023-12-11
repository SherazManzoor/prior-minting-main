import Container from "@mui/material/Container";
import styles from "./Team.module.scss";
import { teamMates } from "./teamMates";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.teamContainer}>
          <h1 className={styles.headline}>The Team</h1>

          <div className={styles.teamMates}>
            {teamMates.map((mate, index) => {
              return <TeamMember key={index} mate={mate} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
