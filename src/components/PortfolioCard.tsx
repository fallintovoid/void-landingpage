import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  description: string;
  href: string;
  headline: string;
};

const PortfolioCard = ({ src, description, href, headline }: Props) => {
  return (
    <Link href={href} target="_blank">
      <div className="w-full p-4 rounded-lg shadow-sm hover:shadow-md duration-150 border-2 border-slate-100 flex flex-col gap-2">
        <Image
          src={src}
          alt={description}
          width={600}
          height={600}
          className="w-full aspect-video rounded-lg"
        />
        <h3 className="font-semibold text-xl">{headline}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default PortfolioCard;
