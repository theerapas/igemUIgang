import banner from "../assets/banner2.jpg";

function Header() {
  return (
    <>
      <div className="HeadTitle">
        <div
          className="Img"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(54, 45, 36,0.75), rgba(160, 146, 137,0.75)), url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "150px",
            padding: "0px",
          }}
        >
          <h1
            style={{
              fontSize: 100,
              marginBottom: 0,
              marginTop: 0,
              color: "white",
            }}
          >
            Peptide Predicting Web
          </h1>
          <h3>From igem group</h3>
        </div>
      </div>
    </>
  );
}

export default Header;
