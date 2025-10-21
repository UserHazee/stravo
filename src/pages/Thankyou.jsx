import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
const ThankYou = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E2001A] to-[#B00018] relative overflow-hidden">
      {/* Animated Curved Background - Bottom */}
      <Helmet>
        <title>Thank You | STRAVO</title>
        <meta
          name="description"
          content="Thank you for contacting us. We'll get back to you shortly."
        />
      </Helmet>
      <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(139, 0, 20, 0.6)"
            fillOpacity="1"
            d="M0,200 C320,280 420,180 720,200 C1020,220 1120,160 1440,200 L1440,400 L0,400 Z"
            className="animate-wave"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(120, 0, 18, 0.4)"
            fillOpacity="1"
            d="M0,240 C360,300 480,200 800,240 C1100,270 1280,200 1440,240 L1440,400 L0,400 Z"
            className="animate-wave-slow"
          />
        </svg>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white/20 animate-float"
            size={16 + (i % 3) * 8}
            style={{
              left: `${(i * 8 + 5) % 95}%`,
              top: `${(i * 11 + 10) % 90}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Card with Creative Design */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 md:p-16 max-w-3xl mx-4 animate-scale-in overflow-hidden">
        {/* Decorative Elements Inside Card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E2001A]/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#B00018]/5 to-transparent rounded-full blur-3xl -ml-24 -mb-24"></div>

        {/* Decorative Top Border Pattern */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E2001A] to-transparent"></div>

        {/* Floating Mini Sparkles Inside Card */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#E2001A] rounded-full animate-float-mini"
              style={{
                left: `${(i * 15 + 10) % 80}%`,
                top: `${(i * 20 + 10) % 70}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${5 + (i % 2)}s`,
              }}
            />
          ))}
        </div>

        {/* Success Icon with Enhanced Pulse */}
        <div className="relative mx-auto w-32 h-32 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#E2001A]/10 rounded-full animate-ping"></div>
          <div className="absolute inset-0 bg-[#E2001A]/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#E2001A] to-[#B00018] rounded-full opacity-10 animate-rotate-slow"></div>
          <CheckCircle
            className="relative w-32 h-32 text-[#E2001A] animate-check drop-shadow-lg"
            strokeWidth={1.5}
          />
        </div>

        {/* Thank You Text - Creative Typography */}
        <div className="mb-8 text-center animate-fade-down">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2001A] via-[#C8001A] to-[#B00018] inline-block animate-gradient">
              Thank You for
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Reaching Out! 🎉
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#E2001A] to-transparent mx-auto animate-expand"></div>
        </div>

        {/* Message with Creative Styling */}
        <div className="mb-10 animate-fade-up space-y-4">
          <p className="text-gray-700 text-xl md:text-2xl font-light leading-relaxed">
            We've received your{" "}
            <span className="font-semibold text-[#E2001A] relative inline-block">
              message
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E2001A]/30"></span>
            </span>{" "}
            and will get back to you shortly.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Our team is already reviewing your inquiry and we're excited to
            connect with you!
          </p>
        </div>

        {/* CTA Button - Stravo Style */}
        <button
          onClick={() => navigate("/")} // ✅ Navigate to homepage
          className="group relative bg-gradient-to-r from-[#E2001A] to-[#B00018] text-white px-10 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto overflow-hidden animate-fade-up"
          aria-label="Return to homepage"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#C8001A] to-[#A00016] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-3">
            <span className="text-lg">Back to Homepage</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>

        {/* Countdown with Style */}
        <div className="mt-8 text-center animate-fade-up-delay">
          <p className="text-sm text-gray-500 font-light">
            You'll be redirected to our homepage in{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E2001A]/10 text-[#E2001A] font-bold text-base mx-1 animate-pulse-subtle">
              {countdown}
            </span>
            {countdown !== 1 ? "seconds" : "second"}...
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fade-down {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes check {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.15) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
            transform: translateY(-50vh) translateX(15px) rotate(180deg);
          }
          100% {
            transform: translateY(-100vh) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0) scaleY(1);
          }
          50% {
            transform: translateX(-5%) scaleY(1.05);
          }
        }

        @keyframes expand {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 8rem;
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fade-down {
          animation: fade-down 0.8s ease-out 0.3s both;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out 0.5s both;
        }

        .animate-fade-up-delay {
          animation: fade-up 0.8s ease-out 0.7s both;
        }

        .animate-check {
          animation: check 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-wave {
          animation: wave 10s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: wave 15s ease-in-out infinite;
          animation-delay: -5s;
        }

        .animate-expand {
          animation: expand 0.8s ease-out 0.5s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ThankYou;
