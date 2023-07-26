import Card from "../card/Card";
import HeaderStyle from "./Header.style";

const Header = () => {
  return (
    <>
    <HeaderStyle>
      <h2>BOOKS OR MAGAZINES</h2>
      <form>
        <input type="text" id="fname" name="fname" defaultValue="..." autoFocus/>
        <br />

        <select name="cars" id="cars">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <br />

        <button type="submit">Search</button>
      </form>
      <Card/>
      </HeaderStyle>
    </>
  );
};

export default Header;
