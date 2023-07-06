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
          <div className="content-center w-full">
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
      {/* Mobile Features */}
      <div className="xl:flex  py-8 mt-14 justify-center align-middle">
        <div className="flex-1 relative w-full h-[800px] mb-9">
          <Image
            className="absolute top-0 left-0 right-0 mx-auto bg-paint-pattern bg-center bg-cover"
            width={800}
            alt="app illustration on a mobile device"
            height={800}
            src={"/saas_mobile_001.png"}
          ></Image>
        </div>
        <div className="flex-1 ml-9 font-archivo">
          <p className="text-marketing font tracking-widest uppercase font-semibold text-md mb-3">
            Mobile
          </p>
          <h2 className="font-semibold text-3xl  font-archivo mb-6">
            Take it on the go
          </h2>
          <p className=" text-md font-semibold">
            We love mobile native technologies, let your app grow for FREE
          </p>
          <p className="mt-3 ">
            Native mobile apps are designed to work seamlessly with the hardware
            and software of a particular platform, which can result in strong
            performance and fewer maintenance issues.
          </p>
          <ul className="list-disc list-inside mt-8">
            <li>Speedup development. </li>
            <li> We use JavaScript. - Friendly to use and maintain</li>
            <li>Requires a small dev team to start.</li>
          </ul>
        </div>
      </div>
      {/* Short Term Pricing */}
      <div className="lg:flex w-full font-archivo h-[50vh] lg:h-[120vh] relative">
        <div className="flex-1 bg-black text-white p-8">
          <div className="font-semibold text-sm uppercase tracking-widest text-marketing my-4">
            Pricing
          </div>
          <h2 className="font-semibold text-lg my-8">
            A Short-Term Plan For Dynamic Business Needs
          </h2>
          <p className="flex-1 text-gray-400">
            By using our services, our customers can save money in a number of
            ways. First, we offer competitive pricing on all of our services, so
            businesses can get the support they need at an affordable cost.
            Additionally, our customers can save even more money by using more
            of our services, as we offer discounts for multi-service packages.
          </p>
        </div>
        <div className="flex-1 relative w-full h-full">
          <Image
            className="w-max h-max "
            layout="fill"
            alt="people designing a product in office"
            src={"/team-gathered-in-office.jpg"}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-orange-400  via-orange-600 to-orange-500 opacity-70"></div>
        </div>
        <div className="absolute lg:bottom-0  top-72  lg:w-full ">
          <div className="grid lg:grid-cols-3  md:grid-cols-1  text-white p-6  mx-auto w-full">
            <div className="lg:max-w-xs bg-gray-700 p-6 outline-2 outline-black">
              <h2 className="font-semibold text-md uppercase tracking-widest text-gray-100 my-4">
                Junior
              </h2>
              <h1 className="font-semibold text-lg my-3 tracking-widest text-gray-100">
                $8-13$/h approx.
              </h1>
              <p className="text-gray-200">
                We are the curious ones, always learning and improving, we are
                best suited in experienced teams.
              </p>
              <div className="w-full border-b border-gray-500"></div>
              <div className="p-8">
                <ul className="list-inside list-disc">
                  <li>Website Building - Design & Development</li>
                  <li>Troubleshooting</li>
                  <li>SEO</li>
                  <li>Admin Tasks</li>
                  <li>Development backed by Senior or Lead</li>
                </ul>
                <Link
                  href={"/"}
                  className="inline-block uppercase border border-white mt-8 border-x-4 border-b-8 border-r-8 py-3 px-8 rounded-xl font-bold whitespace-nowrap"
                >
                  Contract Us
                </Link>
                {/* Contact us button*/}
              </div>
            </div>
            <div className="lg:max-w-xs bg-marketing p-6">
              <h2 className="font-semibold text-md uppercase tracking-widest text-gray-100 my-4">
                Senior
              </h2>
              <h1 className="font-semibold text-lg my-3 tracking-widest text-gray-100">
                $19-28$/h approx.
              </h1>
              <p className="text-gray-200">
                We are well balanced team with at least three years of
                experience in the software development industry.
              </p>
              <div className="w-full border-b border-gray-500"></div>
              <div className="p-8">
                <ul className="list-inside list-disc">
                  <li>Full - Stack development.</li>
                  <li>Advanced Troubleshooting</li>
                  <li>Optimization and bug fixing.</li>
                  <li>Cloud Deployment</li>
                  <li>Upgrading Legacy Systems</li>
                  <li>Build Applications from ground up</li>
                  <li>Always Backed by Tech Leader</li>
                </ul>
                <Link
                  href={"/"}
                  className="inline-block uppercase border border-black text-black bg-gray-50 mt-8 border-x-4 border-b-8 border-r-8 py-3 px-8 rounded-xl font-bold whitespace-nowrap"
                >
                  Contract Us
                </Link>
                {/* Contact us button*/}
              </div>
            </div>
            <div className="lg:max-w-xs  bg-black p-6">
              <h2 className="font-semibold text-md uppercase tracking-widest text-gray-100 my-4">
                Tech Leader
              </h2>
              <h1 className="font-semibold text-lg my-3 tracking-widest text-gray-100">
                $45-59$/h approx.
              </h1>
              <p className="text-gray-200">
                We are also called solution architects in the industry, our task
                is to design and develop workflows that works best for you, so
                that you never have to make the same mistakes by automating and
                protecting the areas of failure.
              </p>
              <p className="text-gray-200">All Senior skills included; </p>
              <p className="text-gray-200">Plus + </p>
              <div className="w-full border-b border-gray-500"></div>
              <div className="p-8">
                <ul className="list-inside list-disc">
                  <li>CI/CD Pipelines.</li>
                  <li>High Availability & Failure Tolerant Deployments</li>
                  <li>Automated E2E Testing.</li>
                  <li>Security Reports</li>
                  <li>Cost Optimization</li>
                  <li>Budget Forecasting</li>
                  <li>Training</li>
                </ul>
                <Link
                  href={"/"}
                  className="inline-block uppercase border border-white text-white bg-black  mt-8 border-x-4 border-b-8 border-r-8 py-3 px-8 rounded-xl font-bold whitespace-nowrap"
                >
                  Contract Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
