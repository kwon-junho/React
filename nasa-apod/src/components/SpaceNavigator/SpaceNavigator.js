import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { VscChevronLeft } from 'react-icons/vsc';
import { VscChevronRight }from 'react-icons/vsc';

const cx = classNames.bind(styles);

const SpaceNavigator = ({onPrev, onNext}) => (
  <div className={cx('space-navigator')}>
    <div className={cx('left', 'end')}>
      <div className={cx('circle')} onClick={onPrev}>
        <VscChevronLeft />
      </div>
    </div>
    <div className={cx('right', 'end')}>
      <div className={cx('circle')} onClick={onNext}>
        <VscChevronRight />
      </div>
    </div>
  </div>
);

export default SpaceNavigator;