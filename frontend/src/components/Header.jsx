import image from "/src/assets/images/kudoboard_logo.jpg";
const Header = () => {
  return (
    <div className="header-component">
      <header className="banner">
        <img src={image} alt="Kudoboard Logo" />
      </header>
    </div>
  );
};
export default Header;
