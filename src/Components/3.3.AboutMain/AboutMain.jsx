import chevronDown from "../../assets/chevron_down.png";
import "../4.Dropdown/Dropdown.scss";

function AboutMain() {
  return (
    <section className="section_dropdown st_dd_about">
      <div className="container_dropdown">
        <div className="dropdown_title">
          <p className="title">Fiabilité</p>
          <img className="chevron_down chevron" src={chevronDown} alt="chevron menu déroulant" />
        </div>
        <p className="dropdown_content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les
          informations sont régulièrement vérifiées par nos équipes.
        </p>
      </div>
      <div className="container_dropdown">
        <div className="dropdown_title">
          <p className="title">Respect</p>
          <img className="chevron_down chevron" src={chevronDown} alt="chevron menu déroulant" />
        </div>
        <p className="dropdown_content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className="container_dropdown">
        <div className="dropdown_title">
          <p className="title">Service</p>
          <img className="chevron_down chevron" src={chevronDown} alt="chevron menu déroulant" />
        </div>
        <p className="dropdown_content">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez
          la moindre question.
        </p>
      </div>
      <div className="container_dropdown">
        <div className="dropdown_title">
          <p className="title">Sécurité</p>
          <img className="chevron_down chevron" src={chevronDown} alt="chevron menu déroulant" />
        </div>
        <p className="dropdown_content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
          que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </section>
  );
}

export default AboutMain;
