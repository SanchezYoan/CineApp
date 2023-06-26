const Navigation = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <i className="fas fa-home">
            <a href="/">Accueil</a>
          </i>
          <i className="fas fa-heart">
            <a href="/likes">Coups de coeur</a>
          </i>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
