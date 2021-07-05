import Head from 'next/head';
import Image from 'next/image';
import sermonStyles from '../styles/Sermons.module.css';

export default function Home() {
  return (
    <div>
      <div className={sermonStyles.skills} id="skills">
        <h1>Sermons</h1>
        <div className={sermonStyles.skills_wrapper}>
          <div className={sermonStyles.skills_card}>
            <img src="/banner.jpeg" height="130px" alt="" />
            <h2>Pastor Joan</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/congreg.jpeg" height="130px" alt="" />
            <h2>Pastor Shanie</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/bible.jpeg" height="130px" alt="" />
            <h2>paastor john</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>pastor eliud</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/jesus.jpg" height="130px" alt="" />
            <h2>pastor mercy</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/read.jpeg" height="130px" alt="" />
            <h2>pastor kigo</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>Mercy&love</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>Divine power</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>God's Glory</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>Repentance&Joy</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>Giving yourself</h2>
          </div>

          <div className={sermonStyles.skills_card}>
            <img src="/church.jpeg" height="130px" alt="" />
            <h2>Praying continously</h2>
          </div>
        </div>
      </div>
    </div>
  );
}