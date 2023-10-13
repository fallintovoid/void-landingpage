import HorizontalLine from "@/components/HorizontalLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Void",
  description:
    "This website is about Illia Kurylenko - Ukraininan Frontend developer",
};

export default function Home() {
  return (
    <>
      <blockquote className="border-l-2 w-3/4 text-3xl border-black pl-3 justify-self-center mt-20 mb-20 md:w-2/3">
        The void in coding is not the absence of code, but the space for
        innovation
      </blockquote>
      <HorizontalLine />
      <h2 className="text-xl font-semibold">About me 💻</h2>
      <p>
        Hi! My name is Illia and I&apos;m a frontend developer from Ukraine 🇺🇦
        specializing in development on the React library and the whole ecosystem
        associated with it. At the moment I am on an internship (Ausbildung in
        German) at advanced store GmbH. I have already more than a year of
        experience in client side development and this is just the beginning :)
      </p>
      <p>
        Improving code quality and optimizing it are my main goals and my
        favorite thing to do.
      </p>
      <h2 className="text-xl font-semibold">Extra information 👋</h2>
      <p>
        After the war started in Ukraine, me and part of my family were forced
        to move to Berlin. There i met wonderful people who strongly motivated
        me to learn something new. There i started helping to organize and
        conduct mini workshops on programming for ukrainians and not only. I
        also have experience of directly conducting a lesson on the Git system.
        After all this, my circle of communication began to increase and with it
        my development experience.
      </p>
      <h2 className="text-xl font-semibold">Skills 💪</h2>
      <div className="flex gap-5">
        <ul className="list-disc">
          <h3 className="text-md font-semibold">Frontend Techniques</h3>
          <li className="ml-5">HTML</li>
          <li className="ml-5">CSS</li>
          <li className="ml-5">Javascript</li>
          <li className="ml-5">Typescript</li>
          <li className="ml-5">React</li>
          <li className="ml-5">NextJS</li>
          <li className="ml-5">Gatsby</li>
          <li className="ml-5">Tailwind</li>
        </ul>
        <ul className="list-disc">
          <h3 className="text-md font-semibold">Backend Techniques</h3>
          <li className="ml-5">NodeJS</li>
          <li className="ml-5">Express</li>
          <li className="ml-5">NestJS</li>
          <li className="ml-5">Postgres</li>
          <li className="ml-5">MySQL</li>
          <li className="ml-5">ORMs (Sequelize, TypeORM)</li>
        </ul>
        <ul className="list-disc">
          <h3 className="text-md font-semibold">Other</h3>
          <li className="ml-5">VsCode</li>
          <li className="ml-5">Git, Github</li>
          <li className="ml-5">Scrum</li>
        </ul>
      </div>
    </>
  );
}
