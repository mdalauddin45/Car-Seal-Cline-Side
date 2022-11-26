import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";

function Payment() {
  const booking = useLoaderData();

  const { productName, price } = booking;
  const stripePromise = loadStripe(process.env.REACT_APP_PK_key);
  console.log(stripePromise);
  //   const navigation = useNavigation();
  //   console.log(booking);
  //   if (navigation.state === "loading") {
  //     return <button className="btn btn-square loading"></button>;
  //   }
  console.log(booking);
  return (
    <div className="text-black">
      <h1 className="text-3xl ">Payment for {productName} </h1>
      <p className="text-xl">Please Pay {price} for you Order</p>
      <div className="w-96 my-6 ">
        <Elements stripe={stripePromise}>
          <CheckOut booking={booking} />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
