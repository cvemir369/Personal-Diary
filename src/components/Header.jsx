import "./Header.css";
import Logo from "./Logo";

const Header = ({ setTheme, userName, openPopup }) => {
  const changeTheme = (themeName) => {
    setTheme(themeName);
  };

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="dropdown bg-base-100 flex-1">
          <div tabIndex={0} role="button">
            <a className="btn m-1 text-xl">Welcome {userName}</a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button onClick={openPopup}>Change Name</button>
            </li>
          </ul>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
