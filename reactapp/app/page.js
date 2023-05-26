import Image from 'next/image'
import React from 'react';
import Layout from './layout';
import './globals.css';
import CountdownTimer from '@/components/CountdownTimer';
import Actions from '@/components/Actions';

export default function Home({ Component, pageProps }) {
  return (
    <div className='container'>
      
      <CountdownTimer></CountdownTimer>
    </div>
  );
};