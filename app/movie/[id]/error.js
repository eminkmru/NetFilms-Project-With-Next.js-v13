"use client";

import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <h1>An error has occurred. Sorry for that!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go back to home
      </Link>
    </div>
  );
}

export default Error;
