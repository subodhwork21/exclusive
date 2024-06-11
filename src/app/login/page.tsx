import Image from "next/image";
import Button from "../components/button";
import Link from "next/link";
import { login, signup } from "./actions";

const Page = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col pr-[135px] pt-[60px] mb-[140px]">
      <form
        action={login}
        className="flex justify-center items-center gap-[129px]"
      >
        <Image
          src={"/images/loginimage.png"}
          height={781}
          width={805}
          alt="loginimage"
          className=""
        ></Image>
        <div className="flex justify-start items-start flex-col w-[371px]">
          <h2>Log in to Exclusive</h2>
          <p className="text-[16px] mt-6">Enter your details below</p>
          <div className="flex justify-start items-start flex-col mt-12 w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="text-gray-400 border-b-[2px] py-[8px] pl-2 w-full mb-[40px]"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="text-gray-400 border-b-[2px] py-[8px] pl-2 w-full mb-[40px]"
            />
            <div className="flex justify-between items-center w-full text-[16px] text-redsecondary">
              <div>
                <Button name="Log In" bgcolor="bg-redsecondary" />
              </div>
              <p>Forget Password?</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Page;
