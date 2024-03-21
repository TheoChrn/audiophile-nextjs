import useFindDevice from "@/hooks/useFindDevice";
import { imageLoader } from "@/lib/utils";
import { Product } from "@/types/types";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";

const ProductCard = ({
  product,
  className,
  children,
}: {
  product: Product;
  className?: string;
  children: React.ReactNode;
}) => {
  const device = useFindDevice();

  return (
    <section>
      <article
        className={`grid gap-y-medium md:gap-y-[5.2rem] lg:flex lg:gap-x-[12.5rem] ${className}`}
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
        <div className="flex flex-col justify-center gap-y-small text-start lg:gap-y-16">
          {product.new && (
            <p className="text-subtitle text-accent">New product</p>
          )}
          <h1 className="max-w-[15ch] text-h4 text-secondary md:text-h2">
            {product.name}
          </h1>
          <p className="text-base">{product.description}</p>
          <p className="text-h6">$ {product.price.toLocaleString("en-US")}</p>
          {children}
        </div>
      </article>
    </section>
  );
};

export default ProductCard;
