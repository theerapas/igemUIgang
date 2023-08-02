import banner from "../assets/banner2.jpg";

function Header() {
  return (
    <>
       <div class="HeadTitle">
      <div class="Img"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "150px",
          padding: "10px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: 100,
            marginBottom: 0,
            marginTop: 0,
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
