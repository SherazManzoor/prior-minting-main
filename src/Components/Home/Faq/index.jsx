import Container from "@mui/material/Container";

import styles from "./Faq.module.scss";
import { faqData, quotes } from "./faqData";

const Faqs = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.mainWrapper}>
          <h2 className={styles.headline}>FAQs</h2>

          {faqData.map((item, index) => {
            return (
              <div className={styles.faqItem} key={index}>
                <h3 className={styles.question}>{item.question}</h3>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            );
          })}

          {quotes.map((item, index) => {
            return (
              <div
                className={styles.quoteItem}
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
