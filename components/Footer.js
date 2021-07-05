import styles from "../styles/Layout.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer_container}>
        <div className={styles.footer_links}>
          <div className={styles.footer_links_wrapper}>
            <div className={styles.footer_links_items}>
              <h2>About us</h2>
              <a href="#">How it works</a>
              <a href="#">
                Testimonials
              </a>
              <a href="#">Careers</a>
              <a href="/blog">
                Blog
              </a>
            </div>

            <div className={styles.footer_links_items}>
              <h2>Church Events</h2>
              <a href="/events">
                Missionary
              </a>
              <a href="#">
                Evangelism
              </a>
              <a href="#">
                Charity
              </a>
              <a href="#">
                Partnership
              </a>
            </div>

            <div className={styles.footer_links_items}>
              <h2>Family Values</h2>
              <a href="#">Our Children</a>
              <a href="#">Fatherhood</a>
              <a href="#">Seminars</a>
              <a href="#">Meetups</a>
            </div>

            <div className={styles.footer_links_items}>
              <h2>Contact Us</h2>
              <a href="#"></a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
