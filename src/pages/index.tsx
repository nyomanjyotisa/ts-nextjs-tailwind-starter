import * as React from 'react';
import Script from 'next/script';
import Image from 'next/image';

export default function HomePage(localData: any) {
  return (
<>
      <link rel="stylesheet" href="/css/all-css-libraries.css" />
      <link rel="stylesheet" href="/style.css" />
      {/* <header className="header-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/img/ditrois-yellow.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#saasboxNav"
              aria-controls="saasboxNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-grid" />
            </button>
            <div className="collapse navbar-collapse" id="saasboxNav">
              <ul className="navbar-nav navbar-nav-scroll">
                <li>
                  <a href="/">Beranda</a>
                </li>
                <li className="sb-dropdown">
                  <a href="#">Website</a>
                </li>
                <li className="sb-dropdown">
                  <a href="#">Digital Marketing</a>
                </li>
                <li className="sb-dropdown">
                  <a href="#">Jasa Lainnya</a>
                </li>
                <li>
                  <a href="/">Portofolio</a>
                </li>
                <li>
                  <a href="/">Kontak</a>
                </li>
              </ul>
              <div className="ms-auto mb-3 mb-lg-0">
                <a className="btn btn-warning btn-sm" href="/">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header> */}

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
                  <li>This is service</li>
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
                    Hubungi Kami
                  </Link>
                  <Link className="btn btn-light mt-3" href="#milestone">
                    Pelajari Lebih Lanjut
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
                <Image src="/img/illustrator/hero-3.png" alt="" />
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
          <Image src="{{ asset('img/core-img/wm.png') }}" alt="" />
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

      {/* Cool Footer Facts Area*/}
      <div
        className="cta-area pt-120 pb-120 bg-img bg-fixed bg-overlay"
        style={{ backgroundImage: 'url("img/bg-img/1.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-text">
                <h2
                  className="mb-1 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="200ms"
                >
                  Team Expert Kami Siap Membantu Anda!
                </h2>
                <h5
                  className="mb-4 mb-lg-5 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="200ms"
                  style={{ color: "#ffffff" }}
                >
                  Masih Awam di dunia digital? Konsultasikan gratis dengan
                  Marketing Expert kami!
                </h5>
                <Link
                  className="btn btn-warning wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                  href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-120 d-block" />

      <footer className="footer-area">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-widget-area">
                <Link className="d-block mb-4" href="index.html">
                  <img src="/img/ditrois.png" alt="" />
                </Link>
                <p>
                  Perusahaan pengembangan website dan perangkat lunak yang
                  berbasis di Bali
                </p>
                <p className="lh-base mb-3">
                  Jl. Udayana, Buruan, Kec. Blahbatuh, Kabupaten Gianyar, Bali
                  80581
                </p>
                <p className="mb-0">
                  Call: +62 851 6183 0939 <br /> Email: help@ditrois.com
                </p>
                <div className="footer-social-icon d-flex align-items-center mt-3">
                  <Link
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facbook"
                  >
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Linkedin"
                  >
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Youtube"
                  >
                    <i className="bi bi-youtube" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-widget-area">
                <h5 className="mb-4">Jasa Website</h5>
                <ul className="list-unstyled">
                  {localData.services.websites.map((service: any) => (
                    <li key={service.id}>
                      <Link href={`/service/website/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-widget-area">
                <h5 className="mb-4">Jasa Marketing</h5>
                <ul className="list-unstyled">
                  {localData.services.marketings.map((service: any) => (
                    <li key={service.id}>
                      <Link href={`/service/marketing/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-widget-area">
                <h5 className="mb-4">Jasa Lainnya</h5>
                <ul className="list-unstyled">
                  {localData.services.others.map((service: any) => (
                    <li key={service.id}>
                      <Link href={`/service/others/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copywrite-wrapper mt-5 rounded d-lg-flex align-items-lg-center justify-content-lg-between">
            <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0 me-lg-4">
              <p className="mb-0">
                2023 © All rights reserved by{" "}
                <Link href="/">
                  Ditrois
                </Link>
              </p>
            </div>
            <div className="footer-nav mb-3 mb-lg-0 me-lg-4">
              <ul className="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
                <li>
                  <Link href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Get Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="language-dropdown text-center text-lg-end">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" href="#">
                  <span className="me-2 flag-icon flag-icon-id" />
                  Indonesia
                </Link>
                <Link className="dropdown-item" href="#">
                  <span className="me-2 flag-icon flag-icon-us" />
                  English
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="scrollTopButton">
        <i className="bi bi-arrow-up-short" />
      </div>
      <div className="mb-4 d-block" />
      <Script src="/js/all-js-libraries.js" />
      <Script src="/js/active.js" />
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