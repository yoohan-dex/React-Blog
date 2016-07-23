import React from 'react';
import Loading from 'react-loading';
import s from './styles.scss';
const LoadingWrapper = () =>
  <div className={s.loading}>
    <div className={s.wrapper}>
      <Loading type="bubbles" color="#CE9296" height={128} width={128} />
    </div>
  </div>;

LoadingWrapper.propTypes = {

};

export default LoadingWrapper;
