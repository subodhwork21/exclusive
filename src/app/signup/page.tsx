import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import { login, signup } from "../login/actions";

const page = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col pr-[135px] pt-[60px] mb-[140px]">
      <form className="flex justify-center items-center gap-[129px]">
        <Image
          src={"/images/loginimage.png"}
          height={781}
          width={805}
          alt="loginimage"
          className=""
        ></Image>
        <div className="flex justify-start items-start flex-col w-[371px]">
          <h2>Create an account</h2>
          <p className="text-[16px] mt-6">Enter your details below</p>
          <div className="flex justify-start items-stretch flex-col mt-12 w-full">
            {/* <input
              type="text"
              name="fullname"
              placeholder="Name"
              className="text-gray-400 border-b-[2px] py-[8px] pl-4 w-full mb-[40px]"
            /> */}
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="text-gray-400 border-b-[2px] py-[8px] pl-4 w-full mb-[40px]"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="text-gray-400 border-b-[2px] py-[8px] pl-4 w-full mb-[40px]"
            />
            <button
              formAction={signup}
              className={`px-10 py-3 rounded-[4px] font-poppinsmedium
                    text-white bg-redsecondary
                 `}
            >
              Sign Up
            </button>
            <button
              className={`px-10 py-3 rounded-[4px] border-[3px] text-black bg-white mt-4 mb-[34px]`}
            >
              <Image
                src={"/icons/google.svg"}
                width={24}
                height={24}
                alt="google"
                className="inline-block align-top mr-4 text-[16px]"
              ></Image>
              Sign up with Google
            </button>
            <p className="text-center text-[16px]">
              Already have account?{" "}
              <Link href={"/login"} className="ml-4 font-poppinsmedium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default page;
