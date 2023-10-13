import PortfolioCard from "@/components/PortfolioCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Here is th list of projects which i have done",
};

export default function Portfolio() {
  const staticData = [
    {
      description:
        "I have been working in a team where my task was remaking existing static website (HTML and CSS) on NextJS. There I was using React, TypeScript and MDX (to create new articles). Here I’ve learned how NextJS actually works. I dealt with routing, getStaticProps, getStaticPath, MDX and next-i18n.",
      href: "https://imhr.top/en",
      src: "/imhr.png",
      headline: "Website for stories of ukrainian refugees in Georgia",
    },
    {
      description:
        "Here I have worked in group of well experienced programmers. There were code reviews and trello tickets like in every IT company. I was fixing my code errors, and taking the experience from another coders. I improved my React, NextJS and SCSS knowledge.",
      href: "https://itstartline.com",
      src: "/itstartline.png",
      headline: "Website for IT-Courses in Berlin",
    },
  ];
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Portfolio</h1>
      {staticData.map((item) => (
        <PortfolioCard {...item} key={item.description} />
      ))}
    </>
  );
}
