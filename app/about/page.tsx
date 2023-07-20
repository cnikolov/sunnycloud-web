import Image from "next/image";
import { contactInfo } from "../components/companyInfo";
export default function About() {
  return (
    <div className="text-center mt-14 h-screen bg-brand">
      <div className="h-[55vh] lg:mb-32">
        <div className="bg-line-pattern bg-indigo-600  flex flex-col align-text-bottom justify-center">
          <div>
            <h1 className="text-4xl mb-12 mt-4 text-white">About Us</h1>
          </div>
          <div className="mx-auto  h-96 p-12 mb-4">
            <Image
              width={900}
              className=""
              height={900}
              alt="application flow"
              src={"/app-flow.png"}
            ></Image>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="font-archivo p-6">
          Our services include custom software development, web and mobile app
          development, and cloud solutions. We have extensive experience working
          with a variety of technologies, including .NET CORE, NodeJS, React,
          and AWS, and are always up-to-date on the latest industry trends and
          best practices.
        </p>
        <p>
          In addition to our technical expertise, we are committed to providing
          excellent customer service and support. We work closely with our
          clients to understand their needs and provide ongoing support to
          ensure the success of their projects.
        </p>
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="font-archivo">
            <a href={"tel:" + contactInfo.telephone}>{contactInfo.telephone}</a>
            <br />
            <a className="text-marketing" href={"mailto:" + contactInfo.email}>
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
