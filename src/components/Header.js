import ToggleMenu from '../features/menu/ToggleMenu';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="site-title">Site title</div>
      <ToggleMenu />
    </header>
  );
}

export default Header;
