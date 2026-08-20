"use client";

import React, { useState } from "react";
import axios from "axios";

const PayUTest = () => {
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
         `${process.env.NEXT_PUBLIC_API_URL}/payment/initiate`,
        {
          transactionId,
        }
      );

      const payuData = data.data;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://test.payu.in/_payment";

      Object.entries(payuData).forEach(([key, value]) => {
        const input = document.createElement("input");

        input.type = "hidden";
        input.name = key;
        input.value = String(value);

        form.appendChild(input);
      });

      document.body.appendChild(form);

      form.submit();
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "80px auto",
        padding: 30,
        border: "1px solid #ddd",
        borderRadius: 10,
      }}
    >
      <h2>PayU Test Payment</h2>

      <input
        type="text"
        placeholder="Enter Transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: 12,
          cursor: "pointer",
        }}
      >
        {loading ? "Redirecting..." : "Pay Now"}
      </button>
    </div>
  );
};

export default PayUTest;