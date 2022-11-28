import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import CheckOut from "./CheckOut";

function Payment() {
  const booking = useLoaderData();

  const { productName, price } = booking;
  const stripePromise = loadStripe(process.env.REACT_APP_PK_key);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="mx-auto">
        <SmallSpinner></SmallSpinner>
      </div>
    );
  }
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
