"use client";
import TryForFreeButton from "./TryForFreeButton";
import { useEffect, useState } from "react";

// Safari detection component
function BackgroundMedia() {
  const [isSafari, setIsSafari] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if browser is Safari on macOS
    const userAgent = navigator.userAgent;
    const isMacOS = userAgent.indexOf("Macintosh") > -1;
    const isSafariBrowser =
      userAgent.indexOf("Safari") > -1 &&
      userAgent.indexOf("Chrome") === -1 &&
      userAgent.indexOf("Edg") === -1;

    setIsSafari(isSafariBrowser && isMacOS);
  }, []);

  // During SSR and initial render
  if (!isClient) {
    return (
      <div className="absolute top-0 left-0 min-w-full min-h-full bg-harmony-blue/80"></div>
    );
  }

  // Safari on Mac gets a still image
  if (isSafari) {
    return (
      <img
        src="/MountainsBackground.jpg"
        alt="Mountains background image"
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
      />
    );
  }

  // All other browsers get the video
  return (
    <video
      className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
    >
      <source src="/LakeVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* Video Background - Fixed to cover entire viewport */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden">
        <BackgroundMedia />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-harmony-blue opacity-10"></div>
      </div>

      {/* Content layout with headline and form centered */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
        {/* Negative margin to compensate for navbar height (~80px: 48px logo + 32px padding) */}
        {/* This ensures content is truly centered on viewport, not just within the container */}
        <div className="w-full max-w-5xl mx-auto text-center -mt-30">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-relaxed mb-8">
            The First Ever{" "}
            <span className="italic font-lora font-extrabold text-[130%] bg-gradient-to-r from-blue-300 via-blue-700 to-purple-400 bg-clip-text text-transparent animate-[pulse-opacity_3s_ease-in-out_infinite] drop-shadow-lg md:whitespace-nowrap">
              Emotionally Intelligent
            </span>
            <br />
            <span className="text-[75%]"> IFS-Trained AI Therapist</span>
          </h1>
          {/* Button section - centered underneath the headline with fade-in animation */}
          <div className="w-full max-w-md mx-auto mt-8 animate-[fade-in_1.2s_ease-out_0.5s_both]">
            <TryForFreeButton />
          </div>
        </div>
      </div>
    </>
  );
}
