import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";

function Payment() {
  const booking = useLoaderData();
  const { treatment, price, appoinmentDate, slot } = booking;
  const stripePromise = loadStripe(process.env.REACT_APP_PK_key);
  // console.log(stripePromise);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <button className="btn btn-square loading"></button>;
  }
  return (
    <div>
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p className="text-xl">
        Please Pay {price} for you Appoinment on {appoinmentDate} at {slot}{" "}
      </p>
      <div className="w-96 my-6 ">
        <Elements stripe={stripePromise}>
          <CheckOut booking={booking} />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
