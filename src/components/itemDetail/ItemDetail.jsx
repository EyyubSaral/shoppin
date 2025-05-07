import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartList } from "../../features/cartSlice";

function ItemDetail() {
  const dispatch = useDispatch();
  const { cart, products } = useSelector((state) => state.cart.cartItems);
  const { id } = useParams();
  const itemId = parseInt(id, 10);

  const item = useMemo(() => {
    return products.find((product) => product.id === itemId);
  }, [products, itemId]);

  const isAdded = useMemo(() => {
    return cart.some((c) => c.id === itemId);
  }, [cart, itemId]);

  const [selectedSize, setSelectedSize] = useState("S");

  const handleAddToCart = () => {
    if (item) {
      dispatch(addItemToCartList({ ...item, count: 1, size: selectedSize }));
    }
  };

  if (!item) {
    return <div className="m-10 text-red-500 font-bold">Ürün bulunamadı.</div>;
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Geri
      </Link>

      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-lg p-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full max-h-[500px] object-contain rounded"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <span className="text-gray-500 text-sm uppercase tracking-wide">
            {item.brand}
          </span>
          <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-xl text-green-700 font-semibold">${item.price}</p>

          {/* Size selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Beden Seçin
            </label>
            <select
              className="border rounded px-3 py-2 w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Action button */}
          {isAdded ? (
            <Link
              to="/cart"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Sepete Git
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Sepete Ekle
            </button>
          )}

          {/* Description */}
          <p className="text-gray-600 text-sm mt-4 leading-6">
            Lorem Ipsum, baskı ve dizgi işlemlerinde kullanılan sahte metindir.
            Lorem Ipsum, 1500’lerden beri endüstride kullanılan standart sahte
            metin olmuştur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
