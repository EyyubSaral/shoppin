import React, { useState } from "react";
import Item from "../item/Item";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, clearFilterProducts } from "../../features/cartSlice";

function ItemList() {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(
    (state) => state.cart.cartItems
  );

  const [inputValue, setInputValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && categoryValue) {
      dispatch(filterProducts({ inputValue, categoryValue }));
    }
  };

  const handleClearFilter = () => {
    dispatch(clearFilterProducts());
    setInputValue("");
    setCategoryValue("");
  };

  const displayedItems = filteredProducts.length ? filteredProducts : products;

  return (
    <div className="flex flex-col space-y-4 p-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <select
          onChange={(e) => setCategoryValue(e.target.value)}
          value={categoryValue}
          className="border p-2 rounded"
        >
          <option value="">Kategori seçin</option>
          <option value="category">Kategori</option>
          <option value="size">Beden</option>
          <option value="brand">Marka</option>
        </select>

        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Arama değeri..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!inputValue.trim() || !categoryValue}
        >
          Ara
        </button>

        <button
          type="button"
          onClick={handleClearFilter}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Filtreyi Temizle
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedItems.length ? (
          displayedItems.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <Item
                name={item.name}
                rating={item.rating}
                price={item.price}
                saleDiscount={item.saleDiscount}
                image={item.image}
                brand={item.brand}
              />
            </Link>
          ))
        ) : (
          <div className="text-gray-600 col-span-full text-center">
            Ürün bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemList;
