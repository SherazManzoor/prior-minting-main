import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

const LeftSide = () => {
  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const router = useRouter();
  // mint page
  const mintPage = router.pathname === "/mint";

  return (
    <div className={styles.left__side}>
      <div style={{ marginRight: "10px" }}>
        {" "}
        <Link href="/" passHref onClick={gotoTop}>
          <a>
            <Image
              src="/images/qbc logo transparent.png"
              height={137}
              width={120}
              alt="footer logo"
            />
          </a>
        </Link>
      </div>

      <div className={styles.footer__Links}>
        {mintPage ? (
          <Link href="/">
            <a className={styles.footer__link}>Home</a>
          </Link>
        ) : (
          <>
            <Link href="#home">
              <a className={styles.footer__link}>Home</a>
            </Link>
            {/* <Link  href='/mint'>
              <a className={styles.footer__link}>Mint</a>
            </Link> */}
            <Link href="#faq">
              <a className={styles.footer__link}>FAQ</a>
            </Link>
            <Link href="https://www.quitbitchingcoalition.com/" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__link}
              >
                Apparel
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
