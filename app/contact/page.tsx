import Image from "next/image";
import { contactInfo } from "../components/companyInfo";
export default function Contact() {
  return (
    <div className="text-center mt-14 h-screen bg-brand mb-24">
      <h1 className="text-4xl mb-12">Get In Touch</h1>
      <div className="border-2 border-black  max-w-3xl mx-auto">
        <div className="bg-gradient-to-t from-indigo-700 to-orange-600">
          <Image
            width={500}
            className="mx-auto"
            height={500}
            alt="telephone cable"
            src={"/contact-us-integration-pic.png"}
          ></Image>
        </div>

        <p className="font-archivo p-6">
          Share your challenger with us, We understand that choosing the right
          implementation can be a challenging decision, and we want to make sure
          you have all the information you need to make an informed choice. Our
          specialists have a thorough understanding of our products and services
          and can answer any questions you may have about its features,
          capabilities, and compatibility with your business needs. They can
          also provide personalized recommendations based on your specific
          business requirements.
        </p>
        <div className=" p-6">
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