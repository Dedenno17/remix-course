import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content" className="text-center text-primary-10">
      <h1 className="font-bold text-[2rem]">
        A better way of keeping track of your notes
      </h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta" className="mt-[2rem]">
        <Link
          to="/notes"
          className="py-[0.5rem] px-[2rem] rounded-[4px] text-[1.5rem] bg-secondary-100 text-primary-800 hover:bg-secondary-200"
        >
          Try now!
        </Link>
      </p>
    </main>
  );
}
