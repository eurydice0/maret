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
                    <Card title="Pendidikan & Pelatihan" img="card3.png" text=" Indomaret terus mempertegas komitmennya dalam mendukung kesehatan masyarakat melalui program Corporate Social Responsibility (CSR). Pada tahun 2025 ini, kegiatan Posyandu Indomaret digelar di Kecamatan Limpung, Kabupaten Batang, diikuti oleh 150 balita dan 50 lansia. Branch Manager PT Indomarco Prismatama Cabang Semarang, Johannes Christian Febrianto, menyampaikan bahwa kegiatan ini merupakan bentuk nyata kepedulian Indomaret terhadap masyarakat sekaligus mendukung program pemerintah dalam upaya menekan angka stunting." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
