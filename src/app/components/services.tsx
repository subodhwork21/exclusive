import Image from "next/image";

const Services = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto grid grid-cols-3 items-center justify-center flex-col px-[248px] gap-[45px] mb-[140px]">
      <div className="flex justify-center items-center flex-col gap-[24px]">
        <Image
          src={"/icons/Services.png"}
          alt="service"
          width={80}
          height={80}
        ></Image>
        <div>
          <p className="uppercase text-[20px] mb-2">Free and fast delivery</p>
          <p className="text-[14px]">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-[24px]">
        <Image
          src={"/icons/Services2.png"}
          alt="service"
          width={80}
          height={80}
        ></Image>
        <div>
          <p className="uppercase text-[20px] mb-2">24/7 customer service</p>
          <p className="text-[14px]">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-[24px]">
        <Image
          src={"/icons/Services3.png"}
          alt="service"
          width={80}
          height={80}
        ></Image>
        <div>
          <p className="uppercase text-[20px] mb-2">Money back guarantee</p>
          <p className="text-[14px]">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
