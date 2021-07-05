import Head from 'next/head';
import { connectToDatabase } from "../util/mongodb";
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import headerStyles from "../styles/Header.module.css";

export default function Home({ isConnected }) {
  return (

    <>
        {isConnected ? (
              <h2 className="subtitle">You are connected to MongoDB</h2>
            ) : (
              <h2 className="subtitle">
                You are NOT connected to MongoDB. Check the <code>README.md</code> for
                instructions.
              </h2>
               )}
    <div className={styles.grid}>
      <div className={styles.card}>
        <h3 className={styles.h3}>Christ Loves Us all</h3>
        <Image src="/church.jpeg" margin="1em" width="300vw" height="100vh" />
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere.
        </p>
      </div>

      <div className={styles.card}>
        <h3 className={styles.h3}>The Power of Forgiveness</h3>
        <Image src="/congreg.jpeg" margin="1em" width="300vw" height="100vh" />
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere.
        </p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.h3}>Lend a Hand..</h3>
        <Image src="/bible.jpeg" margin="1em" width="300vw" height="100vh" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere.
        </p>
      </div>

      <div className={styles.card}>
        <h3 className={styles.h3}>Join us Online</h3>
        <Image src="/banner.jpeg" margin="1em" width="300vw" height="100vh" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere.
        </p>
      </div>

      <section className={styles.summer}>
        <div>
          <div
            className={headerStyles.image}
            style={{
              backgroundImage: `url(/congreg.jpeg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
            }}
          >
            <h1 className={headerStyles.title}>
              <span>Summer </span> Fellowship
            </h1>
            <p className={headerStyles.description}>
              Join us this summer as we celebrate our children
            </p>
            <h2>church</h2>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false

  return {
    props: { isConnected },
  };
}