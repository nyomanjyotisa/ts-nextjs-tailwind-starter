import * as React from 'react';
import Link from 'next/link';

export default function Header({localData} : any) {
  return (
    <>
    <link rel="stylesheet" href="/css/all-css-libraries.css" />
    <link rel="stylesheet" href="/style.css" />
    <header className="header-area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/img/ditrois-yellow.png" alt="" />
          </Link>
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
                <Link href="/">Beranda</Link>
              </li>
              <li className="sb-dropdown">
                <Link href="#">Website</Link>
                <ul className="sb-dropdown-menu">
                  {localData.services.websites.map((service: any) => (
                    <li key={service.id}>
                      <Link href={`/service/website/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="sb-dropdown">
                <Link href="#">Digital Marketing</Link>
                <ul className="sb-dropdown-menu">
                  {localData.services.marketings.map((service: any) => (
                    <li key={service.id}>
                      <Link href={`/service/marketing/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="sb-dropdown">
                <Link href="#">Jasa Lainnya</Link>
                <ul className="sb-dropdown-menu">
                  {localData.services.others.map((service: any) => (
                    <li key={service.id}>
                      <Link href={`/service/others/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/">Portofolio</Link>
              </li>
              <li>
                <Link href="/">Kontak</Link>
              </li>
            </ul>
            <div className="ms-auto mb-3 mb-lg-0">
              <Link className="btn btn-warning btn-sm" href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
