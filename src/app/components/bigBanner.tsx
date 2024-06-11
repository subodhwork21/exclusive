import Image from "next/image";
import Button from "./button";

const BigBanner = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto  px-[135px] gap-[45px] mb-[71px] ">
      <div className="bg-blackprimary w-full flex justify-between items-center gap-[43px]">
        <div className="pt-[69px] pl-[56px] pb-[69px]">
          <p className="mb-8 text-[16px] text-greensecondary font-poppinssemibold">
            Categories
          </p>
          <h1 className=" font-semibold w-[443px] mb-8">
            Enhance Your Music Experience
          </h1>
          <div className="flex justify-left items-center gap-6 mb-10">
            <div className="p-4 rounded-full bg-white text-black w-[62px] h-[62px] flex justify-center items-center flex-col text-[11px]">
              <span className="text-[16px] font-poppinssemibold font-semibold block">
                23
              </span>
              <span className="block">Hours</span>{" "}
            </div>
            <div className="p-4 rounded-full bg-white text-black w-[62px] h-[62px] flex justify-center items-center flex-col text-[11px]">
              <span className="text-[16px] font-poppinssemibold font-semibold block">
                05
              </span>
              <span className="block">Days</span>{" "}
            </div>
            <div className="p-4 rounded-full bg-white text-black w-[62px] h-[62px] flex justify-center items-center flex-col text-[11px]">
              <span className="text-[16px] font-poppinssemibold font-semibold block">
                59
              </span>
              <span className="block">Minutes</span>{" "}
            </div>
            <div className="p-4 rounded-full bg-white text-black w-[62px] h-[62px] flex justify-center items-center flex-col text-[11px]">
              <span className="text-[16px] font-poppinssemibold font-semibold block">
                35
              </span>
              <span className="block">Seconds</span>{" "}
            </div>
          </div>
          <Button name="Buy Now" bgcolor="bg-greensecondary"></Button>
        </div>
        <div className="pr-[44px]">
          <Image
            src={"/images/speaker.png"}
            width={600}
            height={420}
            alt="speaker"
          ></Image>
        </div>
      </div>

      {/* <Image></Image> */}
    </section>
  );
};

export default BigBanner;
