import fullStar from "../../../../assets/full_star.png";
import emptyStar from "../../../../assets/empty_star.png";

const Stars = ({ rating }) => {
  const currentRating = rating;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="s1_right_stars">
      {stars.map((star) => (
        <img className="stars" key={star} src={star <= currentRating ? fullStar : emptyStar }  alt="étoiles" />
      ))}
    </div>
  );
};

export default Stars;
