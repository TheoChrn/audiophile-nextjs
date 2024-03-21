import { Product } from "@/types/types";

const ProductDetails = ({ product }: { product: Product }) => {
  const splitMidString = (string: string) => {
    // Trouver le milieu de la chaîne de caractères
    const middleIndex = Math.floor(string.length / 2);

    let splitIndex = -1;
    for (let i = middleIndex; i >= 0; i--) {
      if (string[i] === "." || string[i] === "!" || string[i] === "?") {
        splitIndex = i;
        break;
      }
    }

    if (splitIndex === -1) {
      splitIndex = middleIndex;
    }

    const firstPart = string.slice(0, splitIndex + 1).trim();
    const secondPart = string.slice(splitIndex + 1).trim();

    return [firstPart, secondPart];
  };

  const features = splitMidString(product.features);

  return (
    <section className="flex flex-col gap-x-[12.5rem] gap-y-48 lg:flex-row">
      <section className="flex flex-col gap-y-small lg:flex-[0_0_60%] lg:gap-y-medium ">
        <h2 className="text-h5 uppercase md:text-h3">Features</h2>
        <p className="text-base">
          {features[0]}
          <br />
          <br />
          {features[1]}
        </p>
      </section>
      <section className="flex flex-col gap-y-small md:flex-row lg:flex-auto lg:flex-col lg:gap-y-medium">
        <h2 className="text-h5 uppercase md:flex-[0_0_50%] md:text-h3 lg:flex-none">
          In the box
        </h2>
        <ul className="grid gap-y-[0.8rem] md:flex-auto lg:flex-none">
          {product.includes.map((include, index) => (
            <li key={index} className="flex gap-x-[2.1rem] text-base ">
              <span className="font-bold text-accent">{include.quantity}x</span>
              <p>{include.item}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProductDetails;
