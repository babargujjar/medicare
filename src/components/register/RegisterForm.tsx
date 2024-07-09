"use client"
import Input from "../input/Input";
import Link from "next/link";
import useRegisterForm from "@/hooks/useRegisterForm";

const RegisterForm = () => {

  const {handler,formData,register} = useRegisterForm()

  return (
    <div className="flex flex-col space-y-5 justify-center">
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Name</h3>
        <Input
          onChange={handler}
          value={formData.name}
          name="name"
          label="Name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Email</h3>
        <Input
          onChange={handler}
          value={formData.email}
          name="email"
          label="Email"
          type="email"
          placeholder="e-mail"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Password</h3>
        <Input
          onChange={handler}
          value={formData.password}
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Company Name</h3>
        <Input
          onChange={handler}
          value={formData.companyName}
          name="companyName"
          label="companyName"
          type="text"
          placeholder="company name"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Industry</h3>
        <Input
          onChange={handler}
          value={formData.industry}
          name="industry"
          label="industry"
          type="text"
          placeholder="industry"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Employee</h3>
        <Input
          onChange={handler}
          value={formData.employe}
          name="employe"
          label="employe"
          type="text"
          placeholder="employe"
        />
      </div>
      <button
        onClick={register}
        className="py-[15px] justify-center items-start flex bg-[#0000AC] text-[#FFFFFF] rounded-[10px] w-full text-[16px] font-medium"
      >
        Register
      </button>
      <div className="text-center text-sm mt-5 text-neutral-500">
        Have an account?{" "}
        <Link href={"/signin"} className="font-bold text-[#0000AC]">
          Login{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default RegisterForm;
