import SingleCart from "../SingleCart/SingleCart";

const Cart = ({cart,totalCredit, remainingCredit,  totalPrice}) => {
    return (
        <div className="mt-8">
            <h2 className="border-b-4 text-xl font-semibold text-[#2F80ED]">Credit Hour Remaining <span>{remainingCredit}</span> hr</h2>
            <h1 className="text-2xl border-b-4 font-bold">Courses Name</h1>
            <div>
            {
                cart.map(singleCart => <SingleCart key={singleCart.id} singleCart={singleCart}></SingleCart>)
            }
            </div>
            <h3 className="border-b-4 mt-10 font-bold">Total Credit Hour: <span>{totalCredit}</span></h3>
            <h4 className="border-b-4 mt-4 font-bold text-xl text-green-800"> Total Price : ${totalPrice} </h4>
        </div>
    );
};

export default Cart;