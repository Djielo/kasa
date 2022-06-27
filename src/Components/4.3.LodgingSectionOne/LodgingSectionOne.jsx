import "../4.3.LodgingSectionOne/LodgingSectionOne.scss";
import Tags from "../4.5.Tags/Tags";
import Stars from "../4.4.Stars/Stars";

/**
 *
 * @param {Object} props
 * @param {String} title
 * @param {String} location
 * @param {String} tags
 * @param {String} host
 * @param {String} rating
 * @returns
 */

function LodgingSectionOne({ id, title, location, tags, host, rating }) {
  return (
    <section key={id} className="container_section1">
      <div className="s1_left">
        <h1>{title}</h1>
        <h3>{location}</h3>
        <Tags key={tags} tags={tags} />
      </div>
      <div className="s1_right">
        <div className="s1_right_profil">
          <p className="hostName">{host.name}</p>
          <img className="hostPicture" src={host.picture} alt="Host" />
        </div>
        <Stars key={rating} rating={rating} />
      </div>
    </section>
  );
}

export default LodgingSectionOne;
