import React from 'react';
import Inner from './inner';

const Footer = () => {
  return (
    <div className='px-main bottom-0 h-16 w-full bg-background text-white'>
      <Inner>© Maplanet.com | 개인정보이용약관 | 건의사항 : maplanetadmin@naver.com</Inner>
    </div>
  );
};

export default Footer;
