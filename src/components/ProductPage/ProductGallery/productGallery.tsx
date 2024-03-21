import React from "react";
import { Product } from "@/types/types";
import Image from "next/image";

const ProductGallery = ({
  product,
  device,
}: {
  product: Product;
  device: "mobile" | "tablet" | "desktop";
}) => {
  const pictures = Array.from(Object.values(product.gallery));


  return (
    <section>
      <ul className="grid gap-[0.8rem] md:h-[36.8rem] md:grid-cols-2 md:gap-[1.8rem] lg:h-[59.2rem] lg:gap-12">
        {pictures.map((picture, index) => (
          <li
            key={index}
            className={`overflow-hidden rounded md:last:col-start-2 md:last:row-span-2 md:last:row-start-1`}
          >
            <figure className="h-full">
              <Image
                quality={70}
                src={picture[device]}
                alt={`${product.name}`}
                width={1}
                height={1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="size-full object-cover"
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductGallery;
