"use client";
import { signIn } from "next-auth/react";
import Input from "../input/Input";
import Link from "next/link";
import useLogin from "@/hooks/useLogin";


const LoginForm = () => {
 
  const { setEmail, email, setPassword, password, login } = useLogin()
 
  return (
    <div className="flex flex-col space-y-5 justify-center">
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Email</h3>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          type="email"
          placeholder="e-mail"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Password</h3>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="pt-[22px]">
        <button
          onClick={login}
          className="py-[15px] justify-center items-start flex bg-[#0000AC] text-[#FFFFFF] rounded-[10px] w-full text-[16px] font-medium"
        >
          Login
        </button>
      </div>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="py-[15px] justify-center items-start flex bg-[#0000AC] text-[#FFFFFF] rounded-[10px] w-full text-[16px] font-medium"
      >
        Google SignIn
      </button>
      {/* <div className="text-center text-sm mt-5 text-neutral-500">
        Does't have an account?{" "}
        <Link href={"/signup"} className="font-bold text-[#0000AC]">
          Register{" "}
        </Link>{" "}
      </div> */}
    </div>
  );
};

export default LoginForm;
