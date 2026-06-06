import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">PROGRAM KAMI</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Peduli Lingkungan" img="card1.png" text="Indomaret peduli lingkungan diwujudkan melalui kebijakan operasional ramah lingkungan dan program Corporate Social Responsibility (CSR) berkelanjutan di seluruh jaringan gerainya. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Peduli Lingkungan 2" img="card2.png" text="Sebagai salah satu jaringan ritel terbesar di Indonesia, Indomaret menjalankan komitmen ini secara berkelanjutan lewat berbagai aksi nyata di masyarakat." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Pendidikan & Pelatihan" img="card3.png" text="Indomaret menawarkan berbagai program pendidikan dan pelatihan yang ditujukan untuk pengembangan karir karyawan, keterampilan manajerial calon pemimpin ritel, serta program pelatihan kewirausahaan (UMKM)." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
