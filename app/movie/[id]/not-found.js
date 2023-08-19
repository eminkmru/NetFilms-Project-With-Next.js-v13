import React from "react";
import Link from "next/link";

function Movie404() {
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
      <h1>We couldn&apos;t fint the movie you looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go back to home
      </Link>
    </div>
  );
}

export default Movie404;
