import React, { PropTypes } from 'react';
import s from './styles.scss';
const Self = props => {
  return (
    <div className={s.self}>
      <div className={s.aboutMe}>
        <h1>ME</h1>
        <section className={s.name}>
          <p>姚帆</p>
          <p>Aooren</p>
        </section>
        <section className={s.introduction}>
          <p>I'm a curiosity-driven WEB developer , welcome reading my articles. I  like design, contained data flow and GUI . I 'm good at React ecosystem, CSS, and functional programming, furthermore, I also develop back-end.

Although I 'm just a novice in the whole developer world , I believe I will grow up soon .If you like my articles , welcome contact me , I like to make friends . ( and girlfriend ). = v = .</p>
        </section>
      </div>
      <div className={s.contact}>
        <section className={s.link}>
          <a className={s.twitter}href="https://twitter.com/lengDL">TWITTER</a>
          <a className={s.github}href="https://github.com/yoohan-dex">GITHUB</a>
        </section>
      </div>
    </div>
  );
};

Self.propTypes = {

};

export default Self;
