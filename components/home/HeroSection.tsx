import EmailSignupForm from "./EmailSignupForm"

export default function HeroSection() {
    return (
        <>
        {/* Video Background - Fixed to cover entire viewport */}
        <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden">
          <video 
            className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/LakeVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-harmony-blue opacity-10"></div>
        </div>
        
        {/* Content layout with headline and form centered */}
        <div className="w-full min-h-screen flex flex-col justify-start items-center pt-6 md:pt-8 lg:pt-10 px-6 md:px-12 lg:px-20 pb-12">
            <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              The First{" "}
              <span className="italic font-lora font-extrabold text-[130%] bg-gradient-to-r from-blue-400 via-harmony-blue to-purple-700 bg-clip-text text-transparent animate-[pulse-opacity_3s_ease-in-out_infinite] drop-shadow-lg">
                
                Emotionally Intelligent
              </span>
              <br />
              <span className="text-[75%]">AI-Powered IFS Therapist-Coach</span>
            </h1>          
            {/* Form section - centered underneath the headline with fade-in animation */}
            <div className="w-full max-w-md mx-auto mt-8 animate-[fade-in_1.2s_ease-out_0.5s_both]">
              <EmailSignupForm />
            </div>
          </div>
        </div>
      </>
    )
}

