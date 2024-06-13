"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  console.log(path);

  return !path.includes("/studio") ? (
    <>
      <div className="max-w-[1440px] w-full mx-auto bg-blackprimary px-[135px] pt-[80px] flex justify-between items-start pb-[60px]">
        <div>
          <p className="text-[24px] mb-6 text-white font-interbold font-bold">
            Exclusive
          </p>
          <p className="text-[24px] text-white font-poppinsmedium mb-6">
            Subscribe
          </p>
          <p className="text-[16px] text-white mb-4">
            Get 10% off your first order
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your Email"
              className="z-[1] p-3 bg-blackprimary border-[1px] border-white rounded-[4px] text-white"
            />
            <span className="absolute top-3 right-3 z-[2]">
              <Image
                src="/icons/send.png"
                alt="send"
                width={24}
                height={24}
              ></Image>
            </span>
          </div>
        </div>
        <div className="text-white">
          <p className="font-poppinsmedium text-[20px] mb-6">Support</p>
          <p className="font-poppinsregular text-[16px] mb-4">
            Sanogaun, Lalitpur, Nepal
          </p>
          <p className="mb-4 text-[16px]">exclusive@gmail.com</p>
          <p className="text-[16px]">+88015-88888-9999</p>
        </div>
        <div className="text-white">
          <p className="font-poppinsmedium mb-6 text-[20px]">Account</p>
          <p className="text-[16px] mb-4">My Account</p>
          <p className="text-[16px] mb-4">Login / Register</p>
          <p className="text-[16px] mb-4">Cart</p>
          <p className="text-[16px] mb-4">Wishlist</p>
          <p className="text-[16px] mb-4">Shop</p>
        </div>
        <div className="text-white">
          <p className="font-poppinsmedium mb-6 text-[20px]">Quick Link</p>
          <p className="text-[16px] mb-4">Privacy Policy</p>
          <p className="text-[16px] mb-4">Terms Of Use</p>
          <p className="text-[16px] mb-4">FAQ</p>
          <p className="text-[16px] mb-4">Contact</p>
        </div>
        <div className="text-white">
          <p className="font-poppinsmedium mb-6 text-[20px]">Download App</p>
          <p className="font-poppinsmedium text-[12px] text-graysecondary mb-4">
            Save $3 with App New User Only
          </p>
          <div className="flex justify-start items-center gap-[26px]">
            <Image
              src={"/icons/fb.png"}
              alt="fb"
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/icons/twitter.png"}
              alt="twitter"
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/icons/insta.png"}
              alt="insta"
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/icons/link.png"}
              alt="link"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-[1440px] w-full mx-auto bg-blackprimary flex justify-center items-center pt-[16px] pb-[24px] text-gray-400">
        <p>
          <span className="mr-2 ">&copy;</span>Copyright Reserved 2022. All
          right reserved
        </p>
      </div>
    </>
  ) : (
    ""
  );
};

export default Footer;
