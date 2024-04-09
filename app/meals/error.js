"use client";
import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <main className="error">
      <h1>An Error came :&lt;</h1>
      <p>{JSON.stringify(error)}</p>
    </main>
  );
};

export default ErrorPage;
