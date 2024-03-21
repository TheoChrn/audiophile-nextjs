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
      height: 160,
      width: 200,
    },
    {
      title: "Speakers",
      imageUrl: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      url: "/speakers",
      height: 160,
      width: 200,
    },
    {
      title: "Earphones",
      imageUrl: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      url: "/earphones",
      height: 160,
      width: 200,
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
            <div className="relative flex flex-col items-center justify-center gap-y-[1.5rem] py-[2.2rem] lg:py-[3rem] ">
              <figure className="absolute translate-y-[-40%] lg:translate-y-[-50%]">
                <Image
                  src={card.imageUrl}
                  alt={`Image produit ${card.title}`}
                  height={card.height}
                  width={card.width}
                />
              </figure>
              <span className="mt-[calc(8.8rem_-_1.1rem)] lg:mt-[calc(10.9rem_-_1.5rem)] text-base font-bold">
                {card.title}
              </span>
              <LinkButton
                href={card.url}
                variant="nav"
                customClassName="flex gap-[1.3rem] items-center hover:text-accent text-subtitle leading-subtitle tracking-subtitle hover:pl-small text-black/50 px-[0] py-[0] p-[0] border-0"
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
