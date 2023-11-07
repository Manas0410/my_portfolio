import "./CarouselStyle.css";
const SkillCarousel = () => {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active  cardContainer">
            <img
              src="./React-icon.svg.png"
              className="d-block  iconImage"
              alt="..."
            />
            <div style={{ textAlign: "center" }} className="iconName">
              REACT
            </div>
          </div>
          <div className="carousel-item cardContainer">
            <img
              src="./typescript.png"
              className="d-block  iconImage"
              alt="..."
            />
            <div style={{ textAlign: "center" }} className="iconName">
              TYPESCRIPT
            </div>
          </div>
          <div className="carousel-item cardContainer">
            <img src="./node.png" className="d-block  iconImage" alt="..." />
            <div style={{ textAlign: "center" }} className="iconName">
              NODE
            </div>
          </div>
          <div className="carousel-item cardContainer">
            <img src="./html.png" className="d-block  iconImage" alt="..." />
            <div style={{ textAlign: "center" }} className="iconName">
              HTML 5
            </div>
          </div>
          <div className="carousel-item cardContainer">
            <img src="./css.png" className="d-block  iconImage" alt="..." />
            <div style={{ textAlign: "center" }} className="iconName">
              CSS 3
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="material-symbols-outlined Left">
            arrow_circle_left
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="material-symbols-outlined right">
            arrow_circle_right
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>{" "}
    </div>
  );
};

export default SkillCarousel;
