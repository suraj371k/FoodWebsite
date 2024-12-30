import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="mt-24 p-4 md:p-10">
      <div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="m-5 grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                  <img className="w-10 h-10 md:w-20 md:h-20" src={item.image} alt={item.name} />
                  <p className="text-center">{item.name}</p>
                  <p className="hidden md:block text-center">${item.price}</p>
                  <p className="hidden md:block text-center">{cartItems[item._id]}</p>
                  <p className="hidden md:block text-center">${item.price * cartItems[item._id]}</p>
                  <p className="text-center cursor-pointer" onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="mt-20 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1 flex flex-col gap-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Cart Totals</h2>
          <div className="ml-2 md:ml-10">
            <div className="flex justify-between text-[#555] py-4 md:py-8">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[#555] py-4 md:py-8">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[#555] py-4 md:py-8">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <button onClick={() => navigate('/order')} className="px-4 py-2 md:px-6 md:py-3 rounded-lg bg-[tomato] text-white mb-4">Proceed to checkout</button>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-lg p-5">
              If you have a promo code, Enter it here
            </p>
            <div className="p-5">
              <input className="py-2 px-4 border-2 rounded-xl" type="text" placeholder='promo code' />
              <button className="mx-5 bg-[tomato] text-white px-5 py-2 rounded-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
