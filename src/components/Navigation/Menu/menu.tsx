"use client";

import LinkButton from "@/components/ui/linkButton";
import { navigations } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();
  return (
    <>
      {navigations.map(([title, url]) => (
        <li key={url} className="h-full">
          <LinkButton
            href={url}
            customClassName={`h-full flex items-center hover:text-accent  ${
              pathName === url && "text-accent"
            }`}
            variant="nav"
          >
            {title}
          </LinkButton>
        </li>
      ))}
    </>
  );
};

export default Menu;
