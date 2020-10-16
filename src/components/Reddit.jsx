import React, { useState, useEffect } from "react";

export default function Reddit({ subReddit }) {
  useEffect(() => {
    console.log("it changed");
  });
  return (
    <div>
      <h1>{subReddit}</h1>
    </div>
  );
}
