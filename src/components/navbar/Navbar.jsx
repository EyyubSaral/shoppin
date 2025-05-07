import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <h2 className="text-lg font-semibold text-gray-800">LikeMuClothes</h2>
        </Link>
      </div>

      {/* Menü */}
      <ul className="flex-1 flex justify-center items-center space-x-6 text-sm font-medium">
        <li>
          <Link to="/category/woman" className="hover:text-blue-600">
            Kadın
          </Link>
        </li>
        <li>
          <Link to="/category/man" className="hover:text-blue-600">
            Erkek
          </Link>
        </li>
        <li>
          <Link to="/category/clothes" className="hover:text-blue-600">
            Giyim
          </Link>
        </li>
        <li>
          <Link to="/category/brands" className="hover:text-blue-600">
            Markalar
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-blue-600">
            🛒 <span className="text-red-600 font-semibold">({quantity})</span>
          </Link>
        </li>
        <li>
          <Link to="/orders" className="hover:text-blue-600">
            Siparişler
          </Link>
        </li>
      </ul>

      {/* Kullanıcı Butonu */}
      <div className="flex-1 flex justify-end">
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded">
          Merhaba, Namık
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
