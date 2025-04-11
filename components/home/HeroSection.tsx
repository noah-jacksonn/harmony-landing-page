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
      <div className="w-full min-h-screen flex flex-col justify-start items-center pt-6 md:pt-8 lg:pt-10 px-6 md:px-12 lg:px-20 pb-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mt-7 lg:text-7xl font-bold text-white leading-tight mb-8">
            The First{" "}
            <span className="italic font-lora font-extrabold text-[130%] bg-gradient-to-r from-blue-400 via-harmony-blue to-purple-500 bg-clip-text text-transparent animate-[pulse-opacity_3s_ease-in-out_infinite] drop-shadow-lg">
              Emotionally Intelligent
            </span>
            <br />
            <span className="text-[75%]">AI-Powered IFS Therapist-Coach</span>
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
