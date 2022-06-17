import dataJson from "../../../Datas/lodging.json";
import "../3.2.2.LodgingSectionOne/LodgingSectionOne.scss";
import rating_good from "../../../assets/rating_good.png";
import rating_empty from "../../../assets/rating_empty.png";

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
  const detailsJson = dataJson;
  console.log(detailsJson.tags);
  console.log(detailsJson[0].tags);

  return (
    <section className="container_section1">
      <div className="s1_left">
        <h1>{title}</h1>
        <h3>{location}</h3>
        <div className="s1_left_tags">
          {detailsJson.map(({ id, tags }) => (
            <p key={id} tags={tags}>{tags}</p>
          ))}
          {/* <p>{tags[0]}</p>
          <p>{tags[1]}</p>
          <p>{tags[2]}</p>
          <p>{tags[3]}</p>
          <p>{tags[4]}</p> */}
        </div>
      </div>
      <div className="s1_right">
        <div className="s1_right_profil">
          <p>{host.name}</p>
          <img src={host.picture} alt="Host" />
        </div>
        <div className="s1_right_stars">
          <img src={rating_good} alt="Star" />
          <img src={rating_good} alt="Star" />
          <img src={rating_good} alt="Star" />
          <img src={rating_empty} alt="Star" />
          <img src={rating_empty} alt="Star" />
        </div>
      </div>
    </section>
  );
}

export default LodgingSectionOne;
