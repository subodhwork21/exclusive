import Image from "next/image";

interface cartProps {
  name: string;
  image: string;
  price: string;
  subtotal: string;
  quantity: string;
}

const CartItem = ({ name, image, price, subtotal, quantity }: cartProps) => {
  return (
    <div className="px-10 py-6 text-[16px] grid grid-cols-4 justify-between items-center w-full shadow-cart group">
      <div className="flex justify-left items-center gap-[22px] relative">
        <Image src={image} width={50} height={39} alt="monitor"></Image>
        <p className="text-[16px]">{name}</p>
        <Image
          className="absolute -top-2 -left-2 group-hover:block hidden cursor-pointer"
          src={"/icons/cancel.png"}
          alt="cancel"
          width={24}
          height={24}
        ></Image>
      </div>
      <p className="text-[16px] text-center">${price}</p>
      <div className="flex justify-center items-center text-center">
        <input
          value={quantity}
          type="number"
          placeholder="01"
          className="w-[72px] h-[44px] p-2 border-[1px] border-blackprimary rounded-[4px]"
        />
      </div>

      <p className="text-[16px] text-right">${subtotal}</p>
    </div>
  );
};

export default CartItem;
