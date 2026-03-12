import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { foodItem } = location.state || {}; // FoodDetails theke asha data

    if (!foodItem) {
        return <div className="text-center my-20">No order found!</div>;
    }

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Ekhane payment logic hobe
        alert("Payment Successful! Thank you for your order.");
        navigate('/');
    };

    return (
        <div className="max-w-screen-md mx-auto my-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 uppercase">Payment Checkout</h2>
            
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="flex justify-between mb-6 border-b pb-4">
                    <p className="text-xl font-semibold">{foodItem.name}</p>
                    <p className="text-xl font-bold text-[#BB8506]">${foodItem.price}</p>
                </div>

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-bold">Card Number</label>
                        <input type="text" placeholder="1234 5678 9101 1121" className="input input-bordered w-full" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label font-bold">Expiration Date</label>
                            <input type="text" placeholder="MM/YY" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">CVV</label>
                            <input type="password" placeholder="***" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <button type="submit" className="btn bg-[#BB8506] border-none text-white w-full mt-6 hover:bg-[#111827]">
                        PAY NOW
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;