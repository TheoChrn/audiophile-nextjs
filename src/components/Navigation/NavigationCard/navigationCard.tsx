import ArrowIcon from "@/components/Icons/arrowIcon";
import LinkButton from "@/components/ui/linkButton";
import { imageLoader } from "@/lib/utils";
import Image from "next/image";

const NavigationCard = () => {
  const cards = [
    {
      title: "Headphones",
      imageUrl:
        "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      url: "/headphones",
      height: 1,
      width: 160,
    },
    {
      title: "Speakers",
      imageUrl: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      url: "/speakers",
      height: 1,
      width: 160,
    },
    {
      title: "Earphones",
      imageUrl: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      url: "/earphones",
      height: 1,
      width: 160,
    },
  ];
  return (
    <menu className="flex flex-wrap justify-between gap-y-[6.8rem]  uppercase">
      {cards.map((card, index) => {
        return (
          <li
            key={index}
            className="relative flex-[0_0_100%] rounded bg-card md:flex-[0_0_32%]"
          >
            <div className="relative flex flex-col items-center justify-center gap-y-[1.7rem] py-12 ">
              <figure className="absolute translate-y-[-55%]">
                <Image
                  src={card.imageUrl}
                  alt={`Image produit ${card.title}`}
                  height={card.height}
                  width={card.width}
                />
              </figure>
              <span className="mt-[8.6rem] text-base font-bold">
                {card.title}
              </span>
              <LinkButton
                href={card.url}
                variant="nav"
                customClassName="flex gap-[1.3rem] items-center hover:text-accent text-subtitle leading-subtitle tracking-subtitle hover:pr-small"
              >
                <span>shop</span>
                <ArrowIcon />
              </LinkButton>
            </div>
          </li>
        );
      })}
    </menu>
  );
};

export default NavigationCard;
