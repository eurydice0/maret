function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">TENTANG KAMI</h2>
            <p className="main-p">
              Berdiri tahun 1988, Indomaret semakin berpengalaman dalam pengoperasian toko retail dengan skala besar. Mempekerjakan lebih dari 190.000 anak bangsa dan didukung oleh 37 pusat distribusi & 27 depo, Indomaret berkembang pesat di seluruh nusantara dengan volume penjualan lebih dari Rp 100 triliun per tahun.
            </p>
          </div>
        </div>

        {/* Struktur Organisasi */}
<div className="row mt-5">
  <div className="col-12 text-center">
    <h2 className="main-title about-h2">STRUKTUR ORGANISASI</h2>
    <img 
      alt="struktur-organisasi" 
      src="./img/struktur-organisasi.png" 
      className="img-fluid mt-3"
      style={{display:'block', margin:'0 auto'}}
    />
  </div>
</div>

      </div>
    </>
  );
}
export default About;