import MovieForm from "../MovieForm/MovieForm";
import Stars from "../Stars/Stars";
import "./moviecard.css";

const MovieCard = ({ movie: { title, desc, year, image, rate } }) => {
  return (
    <div id="container">
      <div className="product-details">
        <h1>{title}</h1>

        <p className="information">{year}</p>

        <Stars rate={rate} isEdit={false} />

        <MovieForm isEdit={true} />

        {/* <div className="control">
          <button className="btn">
            <span className="buy">show More details</span>
          </button>
        </div> */}
      </div>

      <div className="product-image">
        <img src={image} alt="" />
        <div className="info">
          <h2> Description</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
