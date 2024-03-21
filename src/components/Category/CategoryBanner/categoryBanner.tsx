import Wrapper from "../../Wrapper/wrapper";

const CategoryBanner = ({ value }: { value: string }) => {
  return (
    <section className="h-40 w-full  bg-secondary md:h-[24.6rem]">
      <Wrapper className="flex h-full items-center justify-center">
        <h1 className="text-h4 uppercase text-secondary-foreground md:text-h2">
          {value}
        </h1>
      </Wrapper>
    </section>
  );
};

export default CategoryBanner;
