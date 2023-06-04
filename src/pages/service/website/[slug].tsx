import * as React from 'react';
import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Seo from '@/components/Seo';

export default function WebsitePage(props: any) {
  return (
    <>
      <Seo 
        siteName={`Ditrois - Jasa Pembuatan ${props.localData.name}`}
        title={`Jasa Pembuatan ${props.localData.name} Professional Bali Gianyar`}
        description={`Jasa Pembuatan ${props.localData.name} Professional Murah BerkualitasBergaransi Cepat Goodle di Bali Gianyar Denpasar Badung Singaraja Jimbaran Kuta`}
        keyword={`jasa pembuatan ${props.localData.name}, jasa pembuatan website, jasa buat website, jasa website, website bali, jasa website bali, buat website bali, jasa pembuatan website profesional, jasa pembuatan website murah, jasa pembuatan web`}
      ></Seo>
      <Header localData={props.localData}></Header>
      <div className="welcome-area hero3">
  <div className="welcome3-slide-wrap">
    {/* Slide Item */}
    <div className="welcome3-slide-item bg-primary bg-gradient">
      <div className="container h-100">
        <div className="row g-lg-5 h-100 align-items-center">
          <div className="col-12 col-sm-10 col-md-6">
            {/* Content */}
            <div className="welcome-content">
              <ul
                className="ps-0 mb-2 mb-lg-3 d-flex align-items-center wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="100ms"
              >
                <li>Ditrois Digital Agency</li>
              </ul>
              <h2
                className="text-white wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                Jasa Pembuatan {props.foundItem.name}
              </h2>
              <p
                className="mb-5 text-white-50 wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="500ms"
              >
                {props.foundItem.summary}
              </p>
              <div
                className="btn-group-two wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                <Link className="btn btn-warning rounded-pill me-3" href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website">
                  Konsultasi Sekarang
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-6">
            {/* Welcome Thumb */}
            <div
              className="welcome-thumb ms-xl-5 wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <Image src="/img/hero-6.png" alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<>
  <div className="mb-120 d-block" />
  {/* About Area */}
  <div className="about-area">
    <div className="container">
      <div className="row g-5 align-items-center justify-content-md-center justify-content-lg-between">
        {/* About Us Content Area */}
        <div className="col-12">
          <div className="aboutUs-content">
            <div className="section-heading mb-5">
              <h2 className="text-center mb-5">Jasa Pembuatan {props.foundItem.name}</h2>
              <p>
                {props.foundItem.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-120 d-block" />
</>


<>
  {/* Pricing Plan Area*/}
  <div className="saasbox-pricing-plan-area price2 mt-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-9 col-md-8 col-lg-7">
          <div className="section-heading text-center">
            <h6>Paket Harga</h6>
            <h2>Jasa Pembuatan {props.foundItem.name}</h2>
            <p>
              Kami menyediakan beberapa pilihan paket {props.foundItem.name} yang kami susun sesuai dengan kebutuhan Anda.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row g-4 justify-content-center">
            {/* Single Pricing Plan*/}
            <div className="col-12 col-sm-9 col-md-7 col-lg-3">
              <div
                className="card pricing-card monthly-plan shadow-lg wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h3>Lite</h3>
                <div className="pricing-heading mb-3">
                  <div className="price">
                    <div className="price-quantity">
                      <h2 className="mb-0 monthly-price">
                        2.000k
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pricing-desc mb-5">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Domain .COM
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Kapasitas Upload 1.5 GB SSD
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Jumlah Halaman 4 Halaman
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      2 Pilihan Desain Website
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Responsive Web Design
                    </li>
                    <li>
                      <i className="text-danger me-2 bi bi-x-circle-fill" />
                      Proteksi Keamanan
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Sertifikat SSL
                    </li>
                    <li>
                      <i className="text-danger me-2 bi bi-x-circle-fill" />
                      Backup Bulanan
                    </li>
                    <li>
                      <i className="text-danger me-2 bi bi-x-circle-fill" />
                      Google Index
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Batas Maksimal Revisi 1X Revisi
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link className="btn btn-warning btn-sm rounded-pill me-3 mb-3" href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website%20dengan%20paket%20Lite">
                    Pesan Sekarang
                  </Link>
                  <div className='perpanjang'>*Perpanjang 1.000k</div>
                </div>
              </div>
            </div>
            {/* Single Pricing Plan*/}
            <div className="col-12 col-sm-9 col-md-7 col-lg-3">
              <div
                className="card pricing-card monthly-plan shadow-lg wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                <h3>Express</h3>
                <div className="pricing-heading mb-3">
                  <div className="price">
                    <div className="price-quantity">
                      <h2 className="mb-0 monthly-price">
                        3.000k
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pricing-desc mb-5">
                  <ul className="list-unstyled mb-0">
                  <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Domain .COM/.NET/.ORG
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Kapasitas Upload 3 GB SSD
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Jumlah Halaman 5 Halaman
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      3 Pilihan Desain Website
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Responsive Web Design
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Proteksi Keamanan
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Sertifikat SSL
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Backup Bulanan
                    </li>
                    <li>
                      <i className="text-danger me-2 bi bi-x-circle-fill" />
                      Google Index
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Batas Maksimal Revisi 1X Revisi
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link className="btn btn-warning btn-sm rounded-pill me-3 mb-3" href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website%20dengan%20paket%20Express">
                    Pesan Sekarang
                  </Link>
                  <div className='perpanjang'>*Perpanjang 1.250k</div>
                </div>
              </div>
            </div>
            {/* Single Pricing Plan*/}
            <div className="col-12 col-sm-9 col-md-7 col-lg-3">
              <div
                className="card pricing-card monthly-plan active bg-img shadow-lg wow fadeInUp"
                style={{ backgroundImage: 'url("img/core-img/3.png")' }}
                data-wow-duration="1000ms"
                data-wow-delay="500ms"
              >
                <h3>Bussiness</h3>
                <div className="pricing-heading mb-3">
                  <div className="price">
                    <div className="price-quantity">
                      <h2 className="mb-0 monthly-price">
                        4.000k
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pricing-desc mb-5">
                  <ul className="list-unstyled mb-0">
                  <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Domain .COM/.NET/.ORG
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Kapasitas Upload 5 GB SSD
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Jumlah Halaman 8 Halaman
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      3 Pilihan Desain Website
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Responsive Web Design
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Proteksi Keamanan
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Sertifikat SSL
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Backup Bulanan
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Google Index
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Batas Maksimal Revisi 1X Revisi
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link className="btn btn-warning btn-sm rounded-pill me-3 mb-3" href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website%20dengan%20paket%20Bussiness">
                    Pesan Sekarang
                  </Link>
                  <div className='perpanjang'>*Perpanjang 1.750k</div>
                </div>
              </div>
            </div>
            {/* Single Pricing Plan*/}
            <div className="col-12 col-sm-9 col-md-7 col-lg-3">
              <div
                className="card pricing-card monthly-plan shadow-lg wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                <h3>Pro</h3>
                <div className="pricing-heading mb-3">
                  <div className="price">
                    <div className="price-quantity">
                      <h2 className="mb-0 monthly-price">
                        7.000k
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pricing-desc mb-5">
                  <ul className="list-unstyled mb-0">
                  <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Domain .COM/.NET/.ORG
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Kapasitas Upload 10 GB SSD
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Jumlah Halaman 15 Halaman
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      4 Pilihan Desain Website
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Responsive Web Design
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Proteksi Keamanan
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Gratis Sertifikat SSL
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Backup Bulanan
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Google, Bing, Yahoo Index
                    </li>
                    <li>
                      <i className="text-info me-2 bi bi-check-circle-fill" />
                      Batas Maksimal Revisi 2X Revisi
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link className="btn btn-warning btn-sm rounded-pill me-3 mb-3" href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website%20dengan%20paket%20Pro">
                    Pesan Sekarang
                  </Link>
                  <div className='perpanjang'>*Perpanjang 2.500k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-120 d-block" />
</>

<>
  {/* Features Area*/}
  <div className="feature-area feature2 pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-9 col-lg-8">
          <div className="section-heading text-center">
            <h6 className="text-dark">Fitur & Fasilitas</h6>
            <h2>{props.foundItem.name}</h2>
            <p className="text-dark">
              Anda akan mendapatkan berbagai feature dan fasilitas lengkap untuk website perusahaan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row g-4 g-xxl-5">
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Desain Profesional</h5>
              <p>Tampilan desain menyesuaikan dengan karakteristik perusahaan serta Brand yang dimiliki. Anda bebas menentukan tata letak, warna dan susunan kata</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Mobile Friendly Design</h5>
              <p>80% website diakses menggunakan perangkat mobile, dan tampilan website Anda akan tetap responsive, nyaman, tanpa keterbatasan informasi</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Design Modern dan Kekinian</h5>
              <p>Designer dan developer kami didominasi oleh anak muda yang memiliki ide design yang fresh dan modern yang mengikuti perkembangan zaman.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Optimasi SEO</h5>
              <p>Kami optimalkan seluruh elemen yang ada di website perusahaan Anda agar sesuai dengan algoritma Google terbaru dan bisa bersaing di top Google</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Gratis Akun Email</h5>
              <p>Gunakan email@perusahaan.com Anda untuk menambah kredibilitas perusahaan serta memiliki hak akses premium atas data tanpa kendala</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Garansi Server Online</h5>
              <p>Server menggunakan teknologi terbaru saat ini sehingga menjamin website tetap online untuk memaksimalkan informasi agar tetap bisa diakses</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Pengerjaan Cepat</h5>
              <p>Seluruh proses pengerjaan akan kami update, dan kami ajak Anda untuk berpartisipasi dalam proses revisi atau perbaikan agar hasil sesuai ekspektasi</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>File Downloader</h5>
              <p>Dengan fitur ini maka Anda dapat upload file ke dalam website kemudian file terseubut bisa di download oleh customer</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div
            className="card feature2-card shadow-lg wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="200ms"
          >
            <div className="card-body">
              <h5>Hosting Leluasa</h5>
              <p>Kami memberikan space hosting yang cukup leluasa untuk bisa menambahkan banyak konten seperti artikel, image, blog serta kami berikan space leluasa untuk email yang leluasa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


<>
<div className="breadcrumb-wrapper breadcrumb-bg-light">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <div className="section-heading text-center mb-0">
            <h6>FAQ</h6>
            <h2>Pertanyaan yang Sering Diajukan.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-5 d-block" />
  <div className="faq--area">
    <div className="container">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-lg-6">
          <div className="faq-content">
            <div className="accordion faq--accordian" id="faqaccordian">
              {/* Single FAQ */}
              <div className="card border-0">
                <div className="card-header" id="headingOne">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Apakah sudah termasuk nama domain + hosting?
                  </button>
                </div>
                <div
                  className="collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqaccordian"
                >
                  <div className="card-body">
                    <p>
                    Ya, semua paket jasa web perusahaan kami diatas sudah termasuk domain + hosting. Jadi anda tidak perlu biaya tambahan lagi untuk membayar biaya domain dan hosting, serta tidak perlu repot untuk mengelola hosting.
                    </p>
                  </div>
                </div>
              </div>
              {/* Single FAQ */}
              <div className="card border-0">
                <div className="card-header" id="headingTwo">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Bagaimana sistem pembayarannya?
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqaccordian"
                >
                  <div className="card-body">
                    <p>
                      Semua pembayaran full payment kecuali untuk paket Medium dan PRO, maka ada 2 opsi yaitu:
                    </p>
                    <ol><li>Full Payment</li><li>DP 50% dan kekurangannya silahkan ditransfer setelah website dinyatakan telah selesai.</li></ol>
                  </div>
                </div>
              </div>
              {/* Single FAQ */}
              <div className="card border-0">
                <div className="card-header" id="headingThree">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Adakah biaya tambahan di luar paket jasa web?
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqaccordian"
                >
                  <div className="card-body">
                    <p>
                    Ya, berlaku jika Anda menginginkan beberapa fitur-fitur custom pada website profesional untuk menyesuaikan kebutuhan bisnis Anda maka dikenakan biaya tambahan bedasarkan kesepakatan. Selengkapnya Anda dapat menghubungi Customer Care Ditrois.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="faq-content">
            <div className="accordion faq--accordian" id="faqaccordian2">
              {/* Single FAQ */}
              <div className="card border-0">
                <div className="card-header" id="headingFour">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Apakah bisa mengerjakan selain web company profile?
                  </button>
                </div>
                <div
                  className="collapse show"
                  id="collapseFour"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqaccordian2"
                >
                  <div className="card-body">
                    <p>
                    Ya, kami telah mengerjakan berbagai bermacam website sesuai dengan permintaan klien. Jika Anda ingin memiliki website profesional sesuai keinginan atau website custom seperti toko online, marketplace, portal berita, web rumah sakit dan lain-lain, Selengkapnya Anda dapat menghubungi Customer Care Djitugo.
                    </p>
                  </div>
                </div>
              </div>
              {/* Single FAQ */}
              <div className="card border-0">
                <div className="card-header" id="headingFive">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    Apakah saya dapat mengintegrasikan media sosial dalam website saya?
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseFive"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqaccordian2"
                >
                  <div className="card-body">
                    <p>
                    Ya, Anda dapat mengintegrasikan media sosial seperti Facebook, Instagram, Twitter, atau LinkedIn ke dalam website Anda
                    </p>
                  </div>
                </div>
              </div>
              {/* Single FAQ */}
              <div className="card border-0">
                <div className="card-header" id="headingSix">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    Bagaimana dengan pemeliharaan dan pembaruan website setelah selesai dibuat?
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseSix"
                  aria-labelledby="headingSix"
                  data-bs-parent="#faqaccordian2"
                >
                  <div className="card-body">
                    <p>
                    Ditrois memberikan penawaran layanan pemeliharaan, pembaruan website, mengelola konten website sebagai opsi tambahan, silahkan untuk menghubungi Customer Care Ditrois. Anda dapat mempercayakan tugas tersebut kepada tim Ditrois untuk memastikan website Anda tetap aman, terbarui, dan berfungsi optimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-120 d-block" />
</>

<Footer localData={props.localData}></Footer>
    </>
  );
}

export async function getStaticProps(context: any) {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const localData = JSON.parse(jsonData.toString());

  const itemSlug = context.params?.slug;
  const foundItem = localData.services.websites.find((item: any) => itemSlug === item.slug);

  console.log(foundItem)

  return {
    props: {localData, foundItem}
  }
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const services = JSON.parse(jsonData.toString());

  const paths = services.services.websites.map((service: any) => ({
    params: { slug: service.slug },
  }))

  return { paths, fallback: false }
}