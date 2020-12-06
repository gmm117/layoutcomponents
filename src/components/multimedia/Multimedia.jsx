import React from 'react';
import cx from 'classnames';
import styles from './Multimedia.module.scss';

const Multimedia = () => {
  return (
    <section className={cx(styles.wrap)}>
      <div className={cx(styles.header)} />
      <div className={cx(styles.video)}>
        <video controls>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
            type="video/mp4"
          />
          <track
            default
            kind="captions"
            srcLang="en"
            src="/media/examples/friday.vtt"
          />
        </video>
      </div>
      <div className={cx(styles.start)}>
        <a className={cx(styles.button)} href="https://gmm117.github.io/">
          기술블로그 방문하기
        </a>
      </div>
    </section>
  );
};

export default Multimedia;
