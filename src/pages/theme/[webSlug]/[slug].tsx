import Link from 'next/link';
import * as React from 'react';
import Iframe from 'react-iframe'
import path from 'path'
import fsPromises from 'fs/promises';

export default function HomePage(props: any) {
  return (
    <>
      <Iframe url={props.foundItem.demo}
            position="absolute"
            width="100%"
            height="100%"/>
      
      <Link href={"https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20"+props.foundWebsite.name+"%20dengan%20tema%20"+props.foundItem.id} id="themeWhatsApp" target="_blank"  aria-label="Hubungi kami melalui WhatsApp">
        <span className='fz-18 fw-600 m-3'>Pilih tema ini</span>
      </Link>
    </>
  );
}



export async function getStaticProps(context: any) {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData.toString());

  const webSlug = context.params?.webSlug;
  const itemSlug = context.params?.slug;
  const foundWebsite = localData.services.websites.find((item: any) => webSlug === item.slug);
  const foundItem = foundWebsite.themes.find((item: any) => itemSlug === item.slug);

  console.log(foundItem)

  return {
    props: {localData, foundItem, foundWebsite}
  }
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const services = JSON.parse(jsonData.toString());

  const paths = services.services.websites.flatMap((service: any) => (
    service.themes.map((theme: any) => (
      {params: { webSlug: service.slug, slug: theme.slug }}
    )) 
  ))

  console.log(paths)

  return { paths, fallback: false }
}