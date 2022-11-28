import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const CheckOut = ({ booking }) => {
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");
  const [transactionId, setTransactionId] = useState(" ");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("garibazar-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => {
        console.log(err);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError(" ");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // console.log("card info", card);
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      // console.log(payment);
      fetch(`http://localhost:5000/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congres! your payment completed");
            setTransactionId(`Your TransactionId: ${paymentIntent.id}`);
          }
        });
    }
    setProcessing(false);
    console.log("paymentIntent", paymentIntent);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <PrimaryButton
          // className="btn btn-primary btn-sm mt-4"
          classes="px-4 mt-4 rounded py-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Payment Now
        </PrimaryButton>
      </form>
      <p className="text-red-500">{error}</p>
      {success && (
        <div>
          <p className="text-green-500">{success} </p>
          <p className="text-green-500">
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};
export default CheckOut;
