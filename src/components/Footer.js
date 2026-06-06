import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">PT Indomarco Prismatama</h1>
                <p className="footer-text">
                  <b><pre>Kantor Pusat</pre></b>

Menara Indomaret:
Jl. Pantai Indah Kapuk Boulevard, No 1,
Pantai Indah Kapuk, Jakarta Utara, 14470
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Program Kami </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}> Tentang Kami  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Kontak Kami  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Kontak</p>
                <ul>
                  <li>
                    <Link to="#"> <b><pre>Email</pre></b> kontak@indomaret.co.id</Link>
                  </li>
                  <li>
                    <Link to="#" > <b><pre>Layanan Pelanggan</pre></b> 1500 280</Link>
                  </li>
                  <li>
                    <Link to="#" > <b><pre>SMS/WhatsApp</pre></b> 0811 1500 280</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/IndomaretMudahdanHemat" > Facebook</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/indomaret" > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://x.com/indomaret"> Twitter/X</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
