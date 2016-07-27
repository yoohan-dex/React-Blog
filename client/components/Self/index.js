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
          <p>I' am a student; intriest driven developer about web . welcome reading my article. When I was young, always want to build a website for all of world , but utill I'm can build a website easily I hate it lightly. because I just a web developer ,I can't change a world like Mask, or Job or or Bill Gate. really depointed for my skills .</p>
        </section>
      </div>
      <div className={s.contact}>
        <h1 className={s.title}>CONTACT</h1>
        <section className={s.link}>
          <a className={s.twitter}href="http://baidu.com">TWITTER</a>
          <a className={s.wechat}href="http://baidu.com">WECHAT</a>
          <a className={s.github}href="http://baidu.com">GITHUB</a>
        </section>
      </div>
    </div>
  );
};

Self.propTypes = {

};

export default Self;
