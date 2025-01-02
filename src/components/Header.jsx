import "./Header.css";
import Logo from "./Logo";

const Header = ({ setTheme, userName, openPopup }) => {
  const changeTheme = (themeName) => {
    setTheme(themeName);
  };

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Welcome {userName}</a>
        </div>

        <div className="flex-1 justify-center">
          <Logo />
        </div>

        <div className="flex-1 justify-end gap-4">
          <div className="theme-selector">
            <button
              className="theme-circle theme-light"
              onClick={() => changeTheme("theme-light")}
              aria-label="Light Theme"
            ></button>
            <button
              className="theme-circle theme-dark"
              onClick={() => changeTheme("theme-dark")}
              aria-label="Dark Theme"
            ></button>
            <button
              className="theme-circle theme-colorful"
              onClick={() => changeTheme("theme-colorful")}
              aria-label="Colorful Theme"
            ></button>
          </div>
          <button className="change-name-btn" onClick={openPopup}>
            Change Name
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
