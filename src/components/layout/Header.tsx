import * as React from 'react';
import Link from 'next/link';

export default function Header({localData} : any) {
  const [showWebsiteDropdown, setWebsiteDropdown] = React.useState(false);
  const [showMarketingDropdown, setMarketingDropdown] = React.useState(false);
  const [showOthersDropdown, setOthersDropdown] = React.useState(false);
  const [showNavbar, setNavbar] = React.useState(false);
  const [showSticky, setSticky] = React.useState(false);

  function toggleDropdown(value: any){
    if(value == 'website'){
      setWebsiteDropdown(!showWebsiteDropdown);
    }else if(value == 'marketing'){
      setMarketingDropdown(!showMarketingDropdown);
    }else if(value == 'others'){
      setOthersDropdown(!showOthersDropdown);
    }
  }

  function togleNavbar() {
    setNavbar(!showNavbar);
  }

  function dimissNavbar(){
    setNavbar(false);
    setWebsiteDropdown(false);
    setMarketingDropdown(false);
    setOthersDropdown(false);
  }

  const handleScroll = () => {
    if(window.scrollY > 10){
      setSticky(true)
    }else{
      setSticky(false)
    }
  };
  
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  return (
    <>
    <header className={`header-area ${showNavbar? 'mobile-menu-open' : ''} ${showSticky? 'sticky-on' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/img/ditrois-yellow.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => togleNavbar()}
          >
            <i className="bi bi-grid" />
          </button>
          <div className={`navbar-collapse ${showNavbar? '' : 'collapse'}`} id="saasboxNav">
            <ul className="navbar-nav navbar-nav-scroll">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li className="sb-dropdown">
                <Link href="#"
                  onMouseEnter={() => setWebsiteDropdown(true)}   
                >Website</Link>
                <div className="dropdown-toggler" onClick={() => toggleDropdown('website')}>
                  <i className="bi bi-caret-down-fill" />
                </div>
                <ul className="sb-dropdown-menu" style={{
                  display: showWebsiteDropdown?"block":"none"
                }}>
                  {localData.services.websites.map((service: any) => (
                    <li key={service.id} onClick={() => dimissNavbar()}>
                      <Link href={`/service/website/${service.slug}`}>
                        <i className="bi" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="sb-dropdown">
                <Link href="#"
                  onMouseEnter={() => setMarketingDropdown(true)}   
                >Digital Marketing</Link>
                <div className="dropdown-toggler" onClick={() => toggleDropdown('marketing')}>
                  <i className="bi bi-caret-down-fill" />
                </div>
                <ul className="sb-dropdown-menu" style={{
                  display: showMarketingDropdown?"block":"none"
                }}>
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
                <Link href="#"
                  onMouseEnter={() => setOthersDropdown(true)}
                >Jasa Lainnya</Link>
                <div className="dropdown-toggler" onClick={() => toggleDropdown('others')}>
                  <i className="bi bi-caret-down-fill" />
                </div>
                <ul className="sb-dropdown-menu" style={{
                  display: showOthersDropdown?"block":"none"
                }}>
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
