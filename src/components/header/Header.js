import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wraper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Oleksii</em>
          </strong>
          <br></br>a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for lerning creating</p>
        </div>
        <button>
          <a href="#!" className="btn">
            Dounload CV
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
