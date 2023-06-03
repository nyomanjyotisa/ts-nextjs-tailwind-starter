import * as React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Footer({localData} : any) {
  return (
    <>
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
                Konsultasi sekarang
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
      <Link href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website" id="whatsApp" target="_blank">
        <i className="bi bi-whatsapp"></i>
      </Link>
      <div className="mb-4 d-block" />
      
      <Script src="/js/all-js-libraries.js" />
      <Script src="/js/active.js" />
    </>
  );
}
