import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="md:flex justify-center items-center">
        <div className="flex-1">
          <div className="font-semibold text-xl">Build faster together.</div>
          <div className="mt-3">
            Our goal is to provide top-quality services that help our customers
            save money and achieve their business objectives. We offer a range
            of consultation services, including website design and development,
            search engine optimization, and social media marketing.
          </div>
          <Link
            href={"/"}
            className="inline-block uppercase border border-black mt-8 border-x-4 border-b-8 border-r-8 py-3 px-8 rounded-xl font-bold whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </div>
        <div className="l:ml-6 mt-12 w-full mb-10 flex-1">
          <Image
            className="m-auto"
            width={500}
            height={640}
            src="/homepage-call-to-action-image.png"
            alt={""}
          />
        </div>
      </div>
      {/* Characteristcs */}
      <div className="w-full">
        <div className="font-semibold text-xl text-center">
          Customer Benefits & Features
        </div>
        <div className="flex flex-wrap border-2 border-black border-collapse">
          <div className="flex-1 flex-col md:flex-row bg-orange-500 px-8 pt-6">
            <div className="uppercase rounded-full mx-auto w-48 bg-black text-white text-center font-semibold p-4">
              Security
            </div>
            <ul className="list-disc mt-8 ">
              <li>Implement a strong identity foundation</li>
              <li>Secure your data and applications</li>
              <li>Protect against advanced threats</li>
              <li>
                Realtime analysis and AI Machine Learning to prevent frauds.
              </li>
              <li>Prevent bots from crawling your applicaiton.</li>
            </ul>
          </div>
          <div className="flex-1 flex-col md:flex-row bg-gray-200 px-8 pt-6  ">
            <div
              className="uppercase rounded-full mx-auto w-48 bg-gray-200
             text-black text-center font-semibold p-4 border-black border-2"
            >
              Development
            </div>
            <ul className="list-inside mt-8 ">
              <li className="text-lg font-semibold">Backend Development</li>
              <li>C Sharp Development</li>
              <li>Javascript/Typescript</li>
              <li className="text-lg font-semibold mt-4">
                Frontend Development
              </li>
              <li>React, NextJS 13 or above</li>
              <li>VueJS, NuxtJS</li>
              <li>Angular</li>
              <li className="text-lg font-semibold mt-4">Databases</li>
              <li>SQL Server, MySQL, MongoDB, Postgres</li>
              <li className="text-lg font-semibold mt-4">Cloud</li>
              <li>Azure, AWS</li>
              <li className="text-lg font-semibold mt-4">Other</li>
              <li>Containers, IaC, Pipelines, Migration for legacy apps.</li>
            </ul>
          </div>
          <div
            className=" flex-1 flex-col 
          md:flex-row bg-gray-100 px-8 pt-6 "
          >
            <div
              className="uppercase rounded-full mx-auto w-48 bg-gray-100
             text-black text-center font-semibold p-4 border-black border-2"
            >
              Performance
            </div>
            <ul className="list-inside mt-8 ">
              <li className="text-lg font-semibold">Backend Development</li>
              <li>C Sharp Development</li>
              <li>Javascript/Typescript</li>
              <li className="text-lg font-semibold mt-4">
                Frontend Development
              </li>
              <li>React, NextJS 13 or above</li>
              <li>VueJS, NuxtJS</li>
              <li>Angular</li>
              <li className="text-lg font-semibold mt-4">Databases</li>
              <li>SQL Server, MySQL, MongoDB, Postgres</li>
              <li className="text-lg font-semibold mt-4">Cloud</li>
              <li>Azure, AWS</li>
              <li className="text-lg font-semibold mt-4">Other</li>
              <li>Containers, IaC, Pipelines, Migration for legacy apps.</li>
            </ul>
          </div>
          <div
            className=" flex-1 flex-col 
          md:flex-row bg-gray-300 px-8 pt-6 "
          >
            <div
              className="uppercase rounded-full mx-auto w-48 bg-gray-300
             text-black text-center font-semibold p-4 border-black border-2"
            >
              Cost Optimization
            </div>
            <ul className="list-inside list-disc mt-8 ">
              <li>
                Implement cloud financial management Adopt a consumption model
              </li>
              <li>Adopt a consumption model</li>
              <li>Measure overall efficiency</li>
              <li>Stop spending money on undifferentiated heavy lifting</li>
              <li>Analyze and attribute expenditure</li>
            </ul>
          </div>{" "}
          <div
            className=" flex-1 flex-col 
          md:flex-row bg-marketing px-8 pt-6 "
          >
            <div
              className="uppercase rounded-full mx-auto w-48 bg-black
             text-white text-center font-semibold p-4 border-black border-2"
            >
              Marketing
            </div>
            <ul className="list-inside list-disc mt-8 text-white ">
              <li>
                Implement cloud financial management Adopt a consumption model
              </li>
              <li>Adopt a consumption model</li>
              <li>Measure overall efficiency</li>
              <li>Stop spending money on undifferentiated heavy lifting</li>
              <li>Analyze and attribute expenditure</li>
            </ul>
            <div className="text-white mt-12">
              <p className="text-8xl">1,2M</p>
              <p className="text-xl">Consents a day.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Company Logos */}
      <div className="bg-black flex flex-wrap p-8">
        <Image
          alt="Pitch Logo"
          src={"/logo-1.png"}
          height={228}
          width={228}
        ></Image>
        <Image
          alt="Wire Logo"
          src={"/logo-2.png"}
          height={228}
          width={228}
        ></Image>
        <Image
          alt="Job Line Logo"
          src={"/logo-3.png"}
          height={228}
          width={228}
        ></Image>
        <Image
          alt="Gabo Logo"
          src={"/logo-4.png"}
          height={228}
          width={228}
        ></Image>
        <Image
          alt="Real Wave Logo"
          src={"/logo-5.png"}
          height={228}
          width={228}
        ></Image>
        <Image
          alt="LoudNick Logo"
          src={"/logo-6.png"}
          height={228}
          width={228}
        ></Image>
      </div>
      {/* Team Features */}
      <div className="my-8">
        <h2 className="font-semibold text-xl text-center font-archivo mb-6">
          Team Features
        </h2>
        <p className="text-center text-md font-semibold">
          We are very excited to show you our top featuring within the team.
        </p>
      </div>
      {/* Feature Wrapper */}
      <div className="lg:flex my-8">
        {/* Feature Container */}
        <div className="border-2 bg-brand border-black p-4 pb-8 lg:max-w-sm mx-3 mb-8">
          <div className="">
            <Image
              height={250}
              width={350}
              alt="design illustration"
              src={"/team-features-02.png"}
            ></Image>
          </div>
          <div className=" font-semibold text-xl my-6">Design</div>
          <p className="">
            We are using utility first approach in our designs. Meaning that
            each design is built from the ground up using best practises and
            tools familiar to us.
          </p>
          <p className="mt-3 ">
            The problem with component based design libraries is that your brand
            can quickly become invisible because it looks like everyone else’s
            website or product.
          </p>
        </div>
        {/* Feature Container */}
        <div className="border-2 bg-marketing border-black p-4 pb-8 lg:max-w-sm mx-3 mb-8">
          <div className="">
            <Image
              height={250}
              width={350}
              alt="design illustration"
              src={"/team-features-02.png"}
            ></Image>
          </div>
          <div className="text-white font-semibold text-xl my-6">
            Cloud Based
          </div>
          <p className="text-white">
            It is no secret; that cloud computing is revolutionizing the IT
            industry. All our team members are certified by the end of their
            probation.
          </p>
          <p className="mt-3 text-white">
            Whenever you are planning to move to cloud or you are already there.
            We can help you by allocating the right resource for the right task,
            and securing your cloud so you can rest assure. We’re offering cloud
            native development as well.
          </p>
        </div>
        {/* Feature Container */}
        <div className="border-2 bg-black border-black p-4 pb-8 lg:max-w-sm mx-3 mb-8">
          <div className="">
            <Image
              height={250}
              width={350}
              alt="design illustration"
              src={"/team-features-03.png"}
            ></Image>
          </div>
          <div className="text-white font-semibold text-xl my-6">
            Flexible and Smart
          </div>
          <p className="text-white">
            We are offering On-Demand development services for all supported
            platforms long term support, so you can use our help to finish your
            sprints on time, and get into market quick.
          </p>
          <p className="mt-3 text-white">
            Our long term development contracts are already built in mind with
            E2E testing and leading industry practises so we can minimize risk
            for your brand and can continue to improve and innovate.
          </p>
        </div>
      </div>
    </main>
  );
}
