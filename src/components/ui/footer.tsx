import React from 'react';
import Inner from './inner';

const Footer = () => {
  return (
    <div className='bottom-0 mt-20 h-16 w-full bg-background text-white'>
      <Inner>© Maplanet.com | 개인정보이용약관 | 건의사항 : maplanetadmin@naver.com</Inner>
    </div>
  );
};

export default Footer;
