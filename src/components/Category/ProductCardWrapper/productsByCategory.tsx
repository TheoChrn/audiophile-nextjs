import ProductCardsWrapper from "./productCardsWrapper";

const ProductsByCategory = ({ category }: { category: string }) => {
  return (
    <section>
      <ul className="flex flex-col gap-y-48 lg:gap-y-64">
        <ProductCardsWrapper category={category} />
      </ul>
    </section>
  );
};

export default ProductsByCategory;
