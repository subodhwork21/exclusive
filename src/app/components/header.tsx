"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUser } from "../lib/getUser";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useSelector } from "../../redux/store";

const navigation = [
  {
    url: "/",
    name: "Home",
  },

  {
    url: "/contact",
    name: "Contact",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/signup",
    name: "Sign Up",
  },
];
const Header = () => {
  const path = usePathname();
  const isLogin = useSelector((state: any) => state.login.logged);
  const [user, setUser] = useState<string | any>(null);
  console.log(isLogin, user);
  useEffect(() => {
    const getData = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setUser(null);
      } else {
        setUser(data.user != undefined ? data.user.email : null);
      }
    };
    getData();
  }, []);

  return !path.includes("/studio") ? (
    <>
      <section className="">
        <div className="h-[48px] max-w-[1440px] w-full mx-auto  bg-blackprimary px-[136px] flex justify-between items-center">
          <div></div>
          <div className="flex justify-center items-center gap-2">
            <p className="font-poppinsregular text-[14px] text-gray-400">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="text-white font-poppinsSemiBold text-[14px]">
              ShopNow
            </p>
          </div>
          <select
            name=""
            id=""
            className="bg-blackprimary text-white font-poppinsregular text-[14px] rounded-[4px]"
          >
            <option className="text-white text-[14px]" value="">
              English{" "}
            </option>
            <option className="text-white text-[14px]" value="">
              Nepali{" "}
            </option>
          </select>
        </div>
        <header className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-[135px] pt-[47px] pb-[23px]">
          <ul className="flex justify-center items-center">
            <li className="font-interbold font-bold text-[24px]">
              {" "}
              <Link href={"/"}>Exclusive</Link>
            </li>
          </ul>
          <ul className="flex justify-center items-center gap-12">
            {navigation.map((nav, id) => {
              return (
                <li
                  key={id}
                  className={`${path === nav.url ? "underline" : ""}`}
                >
                  <Link href={nav.url}>{nav.name}</Link>{" "}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-[30px]">
            <div className="relative">
              <input
                type="text"
                className="w-[243px] h-[38px] p-4 bg-graysecondary text-[12px] font-poppinsregular rounded-[4px]"
                placeholder="What are you looking for?"
              />
              <span className="absolute top-0 right-0 h-[38px] w-[38px] bg-graysecondary flex justify-center items-center">
                <Image
                  src={"/icons/search.png"}
                  width={16}
                  height={16}
                  alt="search"
                ></Image>
              </span>
            </div>
            <div className="flex justify-center items-center gap-[19px]">
              <Link href={"/wishlist"}>
                {" "}
                <Image
                  src={"/icons/Wishlist.png"}
                  alt="wishlist"
                  width={32}
                  height={32}
                ></Image>
              </Link>
              <Link href={"/cart"}>
                <Image
                  src={"/icons/cart.png"}
                  alt="cart"
                  width={32}
                  height={32}
                ></Image>
              </Link>
              {(isLogin || user) && (
                <Link href={"/account"}>
                  <Image
                    src={"/icons/user.png"}
                    alt="cart"
                    width={32}
                    height={32}
                  ></Image>
                </Link>
              )}
            </div>
          </div>
        </header>
        <hr />
      </section>
    </>
  ) : (
    ""
  );
};

export default Header;
