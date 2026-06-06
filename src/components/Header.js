function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      <video src={process.env.PUBLIC_URL + "/video.mp4"} loop autoPlay muted></video>
      <h1 style={{ color: "#0057B8", fontFamily: "Montserrat, sans-serif", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase" }}>PT Indomarco Prismatama</h1>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
