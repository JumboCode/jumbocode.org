import React from 'react';

import StatBlock from '../StatBlock';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <div className={classNames(cx('base'))}>
      <h1 className={classNames(cx('text'))}>
        We design, develop, and ship high-quality bespoke software at no cost
        for nonprofit organizations whose missions we believe in.
      </h1>
      <div className={classNames(cx('stats'))}>
        <StatBlock number={100} char="%" description={<>Free product<br />development</>} />
        <StatBlock number={40} char="+" description={<>Websites/Apps<br />launched</>} />
        <StatBlock number={97} char="" description={<>Student<br />volunteers</>} />
      </div>
    </div>
  );
}
