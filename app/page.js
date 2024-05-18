import LearnLink from "@/components/LearnLink";
import Image from "next/image";
import bg from "../public/ai.png";
import GlowingGradientButton from "@/components/GlowingGradientButton";
import GlowingATMcard from "@/components/GlowingATMcard";
export default function Home() {
  return (
    <div>
      <GlowingGradientButton />
      <GlowingATMcard />
      {/* responsive layout design first for mobile then for desktop */}
      {/* this is wavy animated heading strart*/}
      <div className="relative text-center  mx-auto w-[400px] h-[100px] flex justify-between items-center">
        <h2 className="">DeepDesignWeb</h2>
        <h2 className="">DeepDesignWeb</h2>
      </div>
      {/* this is wavy animated heading strart*/}

      <h1 className="mt-10 p-20 text-center py-2 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Layout Grid Practice
      </h1>

      {/* global container */}
      <div
        className="container mx-auto max-w-7xl p-4 md:p-10 bg-cover "
        style={{
          backgroundImage: "url(${bg})",
        }}
      >
        {/* grid conatiner */}
        <div className="text-zinc-300 grid gap-4 grid-cols-1 md:grid-cols-4">
          {/* box1 */}
          <div className="relative p-10 rounded-xl bg-purple-500 md:col-span-2">
            {/* quote svg image */}
            <Image
              src="/my_quote.svg"
              alt="svg"
              width={50}
              height={50}
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* header box */}
            <div className="flex z-10 space-x-2 items-center">
              <Image
                src="/foto1.jpg"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full ring-2"
              />
              <div className="text-sm">
                <h1 className="opacity-90">Saleem Khan</h1>
                <p className="opacity-50">verified graduate</p>
              </div>
            </div>
            {/* lage text */}
            <div>
              <p className="z-10 mt-6 relative text-xl">
                jsdbfjbsc schkk hsdhjsk sjhfkhsdkfkj jhfjksdhkhfsh dkshf s
              </p>
            </div>

            {/* small text */}
            <div>
              <p className="opacity-50 mt-6">
                ciology - The Discipline: (a) Modernity and social changes in
                Europe and emergence of Sociology. (b) Scope of the subject and
                comparison with other social sciences. (c) Sociology and common
                sense. Sociology as Science: (a) Science, scientific method, and
                critique. (b) Major theoretical strands of research methodology.
                (c) Positivism and its critique. (d) Fact value and objectivity.
                (e) Non-positivist methodologies
              </p>
            </div>
          </div>
          {/* box2 */}
          <div className="relative p-10 rounded-xl bg-purple-500 ">
            {/* quote svg image */}
            <Image
              src="/my_quote.svg"
              alt="svg"
              width={50}
              height={50}
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* header box */}
            <div className="flex z-10 space-x-2 items-center">
              <Image
                src="/foto1.jpg"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full ring-2"
              />
              <div className="text-sm">
                <h1 className="opacity-90">Saleem Khan</h1>
                <p className="opacity-50">verified graduate</p>
              </div>
            </div>
            {/* lage text */}
            <div>
              <p className="z-10 mt-6 relative text-xl">
                jsdbfjbsc schkk hsdhjsk sjhfkhsdkfkj jhfjksdhkhfsh dkshf s
              </p>
            </div>

            {/* small text */}
            <div>
              <p className="opacity-50 mt-6">
                ciology - The Discipline: (a) Modernity and social changes in
                Europe and emergence of Sociology. (b) Scope of the subject and
                comparison with other social sciences. (c) Sociology and common
                sense. Sociology as Science: (a) Science, scientific method, and
                critique. (b) Major theoretical strands of research methodology.
                (c) Positivism and its critique. (d) Fact value and objectivity.
                (e) Non-positivist methodologies
              </p>
            </div>
          </div>
          {/* box3 */}
          <div className="relative p-10 rounded-xl bg-purple-500 hidden md:block md:row-span-2">
            {/* quote svg image */}
            <Image
              src="/my_quote.svg"
              alt="svg"
              width={50}
              height={50}
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* header box */}
            <div className="flex z-10 space-x-2 items-center">
              <Image
                src="/foto1.jpg"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full ring-2"
              />
              <div className="text-sm">
                <h1 className="opacity-90">Saleem Khan</h1>
                <p className="opacity-50">verified graduate</p>
              </div>
            </div>
            {/* lage text */}
            <div>
              <p className="z-10 mt-6 relative text-xl">
                jsdbfjbsc schkk hsdhjsk sjhfkhsdkfkj jhfjksdhkhfsh dkshf s
              </p>
            </div>

            {/* small text */}
            <div>
              <p className="opacity-50 mt-6">
                ciology - The Discipline: (a) Modernity and social changes in
                Europe and emergence of Sociology. (b) Scope of the subject and
                comparison with other social sciences. (c) Sociology and common
                sense. Sociology as Science: (a) Science, scientific method, and
                critique. (b) Major theoretical strands of research methodology.
                (c) Positivism and its critique. (d) Fact value and objectivity.
                (e) Non-positivist methodologies
              </p>
            </div>
          </div>
          {/* box4 */}
          <div className="relative p-10 rounded-xl bg-purple-500 ">
            {/* quote svg image */}
            <Image
              src="/my_quote.svg"
              alt="svg"
              width={50}
              height={50}
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* header box */}
            <div className="flex z-10 space-x-2 items-center">
              <Image
                src="/foto1.jpg"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full ring-2"
              />
              <div className="text-sm">
                <h1 className="opacity-90">Saleem Khan</h1>
                <p className="opacity-50">verified graduate</p>
              </div>
            </div>
            {/* lage text */}
            <div>
              <p className="z-10 mt-6 relative text-xl">
                jsdbfjbsc schkk hsdhjsk sjhfkhsdkfkj jhfjksdhkhfsh dkshf s
              </p>
            </div>

            {/* small text */}
            <div>
              <p className="opacity-50 mt-6">
                ciology - The Discipline: (a) Modernity and social changes in
                Europe and emergence of Sociology. (b) Scope of the subject and
                comparison with other social sciences. (c) Sociology and common
                sense. Sociology as Science: (a) Science, scientific method, and
                critique. (b) Major theoretical strands of research methodology.
                (c) Positivism and its critique. (d) Fact value and objectivity.
                (e) Non-positivist methodologies
              </p>
            </div>
          </div>
          {/* box5 */}
          <div className="relative p-10 rounded-xl bg-purple-500 md:col-span-2 ">
            {/* quote svg image */}
            <Image
              src="/my_quote.svg"
              alt="svg"
              width={50}
              height={50}
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* header box */}
            <div className="flex z-10 space-x-2 items-center">
              <Image
                src="/foto1.jpg"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full ring-2"
              />
              <div className="text-sm">
                <h1 className="opacity-90">Saleem Khan</h1>
                <p className="opacity-50">verified graduate</p>
              </div>
            </div>
            {/* lage text */}
            <div>
              <p className="z-10 mt-6 relative text-xl">
                jsdbfjbsc schkk hsdhjsk sjhfkhsdkfkj jhfjksdhkhfsh dkshf s
              </p>
            </div>

            {/* small text */}
            <div>
              <p className="opacity-50 mt-6">
                ciology - The Discipline: (a) Modernity and social changes in
                Europe and emergence of Sociology. (b) Scope of the subject and
                comparison with other social sciences. (c) Sociology and common
                sense. Sociology as Science: (a) Science, scientific method, and
                critique. (b) Major theoretical strands of research methodology.
                (c) Positivism and its critique. (d) Fact value and objectivity.
                (e) Non-positivist methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
