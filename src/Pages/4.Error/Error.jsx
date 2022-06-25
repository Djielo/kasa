import "./Error.scss";

function Error() {
  return (
    <div className="main">
      <div className="container_error">
        <h1 className="error_title">404</h1>
        <p className="error_txt">Oups! La page que vous demandez n'existe pas.</p>
        <a className="error_link" href="/kasa/home">
          Retourner sur la page d’accueil
        </a>
      </div>
    </div>
  );
}

export default Error;
