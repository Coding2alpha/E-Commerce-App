import { useSelector } from "react-redux";
import Cart_Card from "../components/Cart_card";
import { MdCurrencyRupee } from "react-icons/md";
import emptyCartImage from "../assets/Cart.gif";

const Cart = () => {
  const cartItem = useSelector((state) => state.product.cartList);
  // console.log(cartItem);

  let total_price = 0;
  let total_qty = 0;

  cartItem.map((item) => {
    total_price += item.price * item.qty;
    total_qty += item.qty;
  });
  // console.log(total);

  if (cartItem.length == 0) {
    return (
      <div className="flex-col bg-slate-200 h-screen w-full flex justify-center items-center">
        <div className="p-4  text-blue-500 font-bold text-5xl">
          Your Cart Is Empty <span className="text-red-500">OOPS!</span>
        </div>
        <img src={emptyCartImage} className=" md:h-[250px] md:w-[250px]" />
      </div>
    );
  }

  return (
    <div className="bg-slate-200 h-screen">
      <div className="p-4  text-blue-500 font-bold text-4xl">
        Your Cart Items
      </div>
      <div className="md:flex ">
        <div className="w-[900px]">
          {cartItem.map((product) => {
            return (
              <Cart_Card
                key={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
                description={product.description}
                id={product._id}
                qty={product.qty}
              />
            );
          })}
        </div>
        <div className="md:w-[500px] ml-12">
          <div className="w-full">
            <h1 className="p-4 mt-2 bg-blue-500 font-semibold text-white text-4xl">
              Summary
            </h1>
            <h1 className="p-4 mt-4 text-3xl flex justify-between">
              Total Qty: <div>{total_qty}</div>
            </h1>
            <h1 className="flex p-4 mt-2 text-3xl justify-between">
              Total Price:
              <div className="flex">
                <span className="text-extrabold  font-extrabold pt-1 text-red-500">
                  <MdCurrencyRupee />
                </span>{" "}
                {total_price}
              </div>
            </h1>
            <h1 className="p-4 mt-4 bg-red-500 font-semibold text-white text-4xl flex justify-center">
              Payment
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
