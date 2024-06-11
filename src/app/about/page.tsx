import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="pt-20 max-w-[1440px] w-full mx-auto flex justify-start items-center flex-col px-[135px] mb-[140px]">
      <p className="text-[14px] text-left mb-20 w-full">
        <span className="text-gray-400">
          <Link href={"/"}>Home</Link>
        </span>{" "}
        /{" "}
        <span>
          <Link href={"/about"}>About </Link>
        </span>
      </p>
      <div></div>
    </section>
  );
};

export default Page;
