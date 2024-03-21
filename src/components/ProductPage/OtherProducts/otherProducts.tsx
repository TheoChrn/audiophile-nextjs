import LinkButton from "@/components/ui/linkButton";
import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";

const OtherProducts = ({
  othersProducts,
  device,
}: {
  othersProducts: Product["others"];
  device: "mobile" | "tablet" | "desktop";
}) => {
  return (
    <section>
      <h2 className="text-center text-h6 uppercase md:text-h3">
        You may also like
      </h2>
      <ul className="mt-16 flex flex-col gap-x-[1.1rem] gap-y-[5.6rem] sm:flex-row md:mt-[5.6rem]">
        {othersProducts.map((product) => (
          <li className="flex-1" key={product.slug}>
            <article className="flex flex-col items-center gap-y-small">
              <figure className="relative h-48 w-full sm:h-[31.8rem]">
                <Image
                  src={product.image[device]}
                  alt={`image product ${product.name}`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </figure>
              <h3 className="text-h6">{product.name}</h3>
              <LinkButton
                href={`/${product.category}/${product.slug}`}
                variant="accent"
                customClassName="w-fit"
              >
                See product
              </LinkButton>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherProducts;
