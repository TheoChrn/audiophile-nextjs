import useFindDevice from "@/hooks/useFindDevice";
import { imageLoader } from "@/lib/utils";
import { Product } from "@/types/types";
import Image from "next/image";

const ProductCard = ({
  product,
  className,
  textAlignment,
  children,
}: {
  product: Product;
  className?: string;
  textAlignment?: string;
  children: React.ReactNode;
}) => {
  const device = useFindDevice();

  return (
    <article
      className={`grid gap-y-medium md:gap-y-[5.2rem] lg:flex lg:gap-x-[12.5rem] lg:even:flex-row lg:odd:flex-row-re ${className}`}
    >
      <figure
        className={`relative h-[35.2rem] w-full overflow-hidden rounded lg:h-[56rem] lg:flex-[0_0_50%]`}
      >
        <Image
          src={product.image[device]}
          alt="image"
          fill
          className="object-cover"
          loader={imageLoader}
        />
      </figure>
      <div
        className={`flex flex-col justify-center gap-y-small lg:gap-y-16 ${textAlignment}`}
      >
        {product.new && (
          <p className="text-overline text-accent uppercase">New product</p>
        )}
        <h1 className="max-w-[15ch] text-h4 text-secondary md:text-h2">
          {product.name}
        </h1>
        <p className="text-base max-w-[57.2rem] lg:max-w-[none] text-primary-body ">
          {product.description}
        </p>

        {children}
      </div>
    </article>
  );
};

export default ProductCard;
