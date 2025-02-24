import "./Header.css";
import Logo from "./Logo";

const Header = ({ setTheme, userName, openPopup, theme }) => {
  const changeTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  return (
    <header className={theme}>
      <div className="navbar justify-center">
        <div className="dropdown basis-1/3 justify-start">
          <div tabIndex={0}>
            <a className="btn text-xl change-name-btn h-auto min-h-1">
              Welcome {userName}
            </a>
          </div>
          <ul tabIndex={0} className="dropdown-content menu z-[1]">
            <li>
              <button
                className="btn text-sm change-name-btn h-auto"
                onClick={openPopup}
              >
                Change Name
              </button>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <Logo />
        </div>
        <div className="gap-4 basis-1/3 justify-end">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
