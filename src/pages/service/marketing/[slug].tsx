import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function MarketingPage(localData: any) {
  return (
    <>
    <Layout>
      <main className='mt-5'>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Under Constructions</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
    </>
  );
}

import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData.toString());

  return {
    props: localData
  }
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const services = JSON.parse(jsonData.toString());

  const paths = services.services.marketings.map((service: any) => ({
    params: { slug: service.slug },
  }))

  return { paths, fallback: false }
}