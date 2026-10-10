import { useState } from "react";
import AuthInput from "../components/AuthInput";
import leftShapes from "../assets/auth-left.png";
import rightShapes from "../assets/auth-right.png";
import githubIcon from "../assets/github.svg";
import googleIcon from "../assets/google.svg";

const iconProps = {
  className: "h-5 w-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
};

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const LockIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);

const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

const EyeIcon = () => (
  <svg {...iconProps} className="h-4 w-4">
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function PortfolioPage() {
  const [mode, setMode] = useState("login"); 
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    //i will handle the form submission here, but for now, let's just log the mode since i don't know backend yet
    console.log(isLogin ? "Logging in..." : "Signing up...");
  };

  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-16">
      <img src={leftShapes} alt="" className="absolute bottom-10 left-10 hidden w-40 lg:block" />
      <img src={rightShapes} alt="" className="absolute right-10 top-10 hidden w-44 lg:block" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="border-[3px] border-black bg-gdg-purple p-8 shadow-[12px_12px_0_0_#000]"
        >
          <h1 className="flex items-center gap-3 text-3xl font-extrabold uppercase">
            <svg {...iconProps} className="h-6 w-6">
              <path d="M10 17l5-5-5-5M15 12H3M15 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4" />
            </svg>
            {isLogin ? "Login" : "Sign up"}
          </h1>
          <p className="mt-3 text-sm text-white">
            {isLogin ? "Welcome back !" : "Join GDG RBU !"}
          </p>

          <hr className="my-6 border-t border-black" />

          <div className="space-y-5">
            {!isLogin && (
              <AuthInput icon={<UserIcon />} type="text" placeholder="Jane Doe" aria-label="Name" />
            )}

            <AuthInput icon={<MailIcon />} type="email" placeholder="janedoe@gmail.com" aria-label="Email" />

            <AuthInput
              icon={<LockIcon />}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              aria-label="Password"
              right={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="cursor-pointer"
                >
                  <EyeIcon />
                </button>
              }
            />
          </div>

          {/* Submit + social */}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              className="flex cursor-pointer items-center gap-8 bg-black px-6 py-4 font-bold text-white shadow-[4px_4px_0_0_#ea4335] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              {isLogin ? "Login" : "Sign up"}
              <svg {...iconProps} className="h-6 w-6">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M13 8l4 4-4 4" />
              </svg>
            </button>

            <span className="text-lg">or</span>

            <button
              type="button"
              aria-label="Continue with GitHub"
              className="flex h-12 w-12 cursor-pointer items-center justify-center border-2 border-black bg-white"
            >
              <img src={googleIcon} alt="" className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Continue with Google"
              className="flex h-12 w-12 cursor-pointer items-center justify-center border-2 border-black bg-white"
            >
              <img src={githubIcon} alt="" className="h-6 w-6" />
            </button>
          </div>
        </form>

        {/* Switch mode */}
        <div className="mt-6 flex justify-end pr-4">
          <button
            type="button"
            onClick={() => setMode(isLogin ? "signup" : "login")}
            className="cursor-pointer bg-black px-8 py-4 text-xl font-bold text-white shadow-[4px_4px_0_0_#4285f4] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {isLogin ? "sign up" : "log in"}
          </button>
        </div>
      </div>
    </main>
  );
}