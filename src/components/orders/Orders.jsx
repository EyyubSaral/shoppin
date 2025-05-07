import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.cart.cartItems.orders);

  if (!orders.length) {
    return (
      <div className="p-6 text-center text-gray-600">
        Henüz bir siparişiniz yok.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {orders.map((order) => (
        <div
          className="border rounded-lg p-4 shadow-sm bg-white"
          key={order.orderId}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Sipariş No:{" "}
            <span className="text-blue-600">#ID-62Z-{order.orderId}</span>
          </h3>

          <div className="space-y-2">
            {order.items.map((item) => (
              <div
                className="flex justify-between items-center border-b py-2"
                key={item.id}
              >
                <div>
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    Tahmini teslimat: 3 - 6 gün (Kapıda ödeme)
                  </div>
                </div>
                <div className="text-right text-gray-800 font-semibold">
                  ${item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
