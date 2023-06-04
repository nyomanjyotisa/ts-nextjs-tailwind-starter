import * as React from 'react';
import Image from 'next/image';

export default function HomePage(localData: any) {
  return (
    <>
      <Seo></Seo>
      <Header localData={localData}></Header>
      <div className="welcome-area bg-gradient">
        <div className="background-shape">
          <div
            className="circle1 wow fadeInRightBig"
            data-wow-duration="4000ms"
          />
          <div
            className="circle2 wow fadeInRightBig"
            data-wow-duration="4000ms"
          />
          <div
            className="circle3 wow fadeInRightBig"
            data-wow-duration="4000ms"
          />
          <div
            className="circle4 wow fadeInRightBig"
            data-wow-duration="4000ms"
          />
        </div>
        <div className="background-animation">
          <div className="item1" />
          <div className="item2" />
          <div className="item3" />
          <div className="item4" />
          <div className="item5" />
        </div>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-between">
            <div className="col-12 col-sm-10 col-md-6">
              <div className="welcome-content">
                <ul
                  className="mb-0 ps-1 d-flex align-items-center wow"
                >
                  <li>Ditrois Digital Agency</li>
                </ul>
                <h2>
                  Jasa Digital Marketing dan Pembuatan Website
                </h2>
                <p
                  className="mb-4 wow"
                >
                  Ditrois merupakan Website and Software Development Company
                  yang menyediakan jasa untuk pembuatan berbagai macam website
                  dan aplikasi mobile.
                </p>
                <div
                  className="hero-btn-group wow"
                >
                  <Link
                    className="btn btn-warning mt-3 me-3"
                    href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website"
                  >
                    Konsultasi Sekarang
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-9 col-md-6">
              <div
                className="welcome-thumb ms-xl-5 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <Image src="/img/illustrator/hero-3.png" alt="" width={500} height={500} loading="eager"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-120 d-block" id="milestone" />

      {/* Cool Facts Area */}
      <div className="cool-facts-wrapper">
        {/* Background Image */}
        <div className="cta-background-image">
          <Image src="/img/core-img/wm.png" alt="" width={500} height={500} />
        </div>
        {/* Circle Animation */}
        <div className="circle-animation">
          <div className="circle1" />
          <div className="circle2" />
          <div className="circle3" />
          <div className="circle4" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <h6>Milestone Kami</h6>
                <h2>
                  Kami telah sukses menyelesiakan beberapa project untuk
                  pelanggan kami.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Single Cool Facts */}
            <div className="col-6 col-sm-4">
              <div
                className="single-cool-fact wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="100ms"
              >
                <h2>
                  <span className="counter">100</span>+
                </h2>
                <h6 className="mb-0">Client</h6>
              </div>
            </div>
            {/* Single Cool Facts */}
            <div className="col-6 col-sm-4">
              <div
                className="single-cool-fact wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h2>
                  <span className="counter">10+</span>
                </h2>
                <h6 className="mb-0">Developer dan Designer</h6>
              </div>
            </div>
            {/* Single Cool Facts */}
            <div className="col-6 col-sm-4">
              <div
                className="single-cool-fact wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="500ms"
              >
                <h2>
                  <span className="counter">5+</span>
                </h2>
                <h6 className="mb-0">Tahun Pengalaman</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-120 d-block" />

      {/* Service Area*/}
      <div className="service-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <h2>Layanan yang Kami Tawarkan</h2>
                <p>
                  Team kami terdiri atas orang-orang yang memiliki pengalaman
                  dalam pengembangan website dan aplikasi mobile.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4 g-xl-5">
            {/* Single Service */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card service-card wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
              >
                <div className="card-body p-0 px-lg-0">
                  <div className="icon">
                    <i className="bi bi-app-indicator" />
                  </div>
                  <h5>Pembuatan Website</h5>
                  <p>
                    Wesbite cepat dan responsif yang dikembangkan dengan
                    Wordpress atau Laravel
                  </p>
                </div>
              </div>
            </div>
            {/* Single Service */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card service-card wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1000ms"
              >
                <div className="card-body p-0 px-lg-0">
                  <div className="icon">
                    <i className="bi bi-columns" />
                  </div>
                  <h5>Digital Marketing</h5>
                  <p>
                    Aplikasi mobile untuk Android dan IOS yang profesional
                    dengan harga terjangkau.
                  </p>
                </div>
              </div>
            </div>
            {/* Single Service */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card service-card wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1000ms"
              >
                <div className="card-body p-0 px-lg-0">
                  <div className="icon">
                    <i className="bi bi-pie-chart" />
                  </div>
                  <h5>Kelola Sosial Media</h5>
                  <p>
                    Desian UI/UX professional untuk web dan aplikasi yang ingin
                    anda kembangkan
                  </p>
                </div>
              </div>
            </div>
            {/* Single Service */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card service-card wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1000ms"
              >
                <div className="card-body p-0 px-lg-0">
                  <div className="icon">
                    <i className="bi bi-pie-chart" />
                  </div>
                  <h5>Kelola Akun Marketplace</h5>
                  <p>
                    Desian UI/UX professional untuk web dan aplikasi yang ingin
                    anda kembangkan
                  </p>
                </div>
              </div>
            </div>
            {/* Single Service */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card service-card wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1000ms"
              >
                <div className="card-body p-0 px-lg-0">
                  <div className="icon">
                    <i className="bi bi-pie-chart" />
                  </div>
                  <h5>Maintenance Website</h5>
                  <p>
                    Desian UI/UX professional untuk web dan aplikasi yang ingin
                    anda kembangkan
                  </p>
                </div>
              </div>
            </div>
            {/* Single Service */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card service-card wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1000ms"
              >
                <div className="card-body p-0 px-lg-0">
                  <div className="icon">
                    <i className="bi bi-pie-chart" />
                  </div>
                  <h5>Pembuatan Aplikasi Mobile</h5>
                  <p>
                    Desian UI/UX professional untuk web dan aplikasi yang ingin
                    anda kembangkan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-120 d-block" />

      <Footer localData={localData}></Footer>
    </>
  );
}

import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/Seo';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData.toString());

  return {
    props: localData
  }
}