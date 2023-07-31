import banner from "../assets/banner2.jpg";

function Header() {
  return (
    <>
      <div
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
            fontSize: 50,
            marginBottom: 0,
          }}
        >
          Peptide Predicting Web
        </h1>
        <h3>From igem group</h3>
      </div>
    </>
  );
}

export default Header;
