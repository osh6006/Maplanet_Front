import React from 'react';
import Inner from './inner';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-10 h-16 w-full text-white'>
      <Inner>
        © Maplelandpp.com | 개인정보이용약관 | 문의사항 :{' '}
        <Link href={'mailto:maplelandpp@gmail.com'} className='hover:underline'>
          maplelandpp@gmail.com
        </Link>
      </Inner>
    </div>
  );
};

export default Footer;
