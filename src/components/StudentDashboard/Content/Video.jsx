import React from "react";

export default function Video() {
  return (
    <div className="flex justify-evenly mt-5">
      <iframe
        width="950"
        height="600"
        src="https://www.youtube.com/embed/XlioXHL7G-4"
        title="YouTube video player"
        frameborder="10"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div >
        <h2>Hello</h2>
      </div>
    </div>
  );
}
