import JoinTeamBanner from "./JoinTeamBanner";
import { contactInfo } from "./companyInfo";
export default function Footer() {
  return (
    <footer className="bg-black min-h-[40rem]   mt-36 sm:mt-24 lg:mt-40">
      <div className="w-3/4 mx-auto relative">
        <JoinTeamBanner />
        <div className="h-72 sm:h-40 md:h-32"></div>
        <div className="mt-14">
          <h1 className="uppercase text-md tracking-[0.2rem]  font-semibold text-white mb-2">
            Address
          </h1>
          <p className="text-md text-white">
            Zdrave 2 <br />
            Kostinbrod <br />
            Bulgaria <br />
            VAT: BG206629258
          </p>
          <h1 className="uppercase text-md font-semibold tracking-[0.2rem] mt-5 text-white mb-2">
            Contact Us
          </h1>
          <p className="text-md text-white mb-14">
            <a href={"tel:" + contactInfo.telephone}>{contactInfo.telephone}</a>
            <br />
            <a href={"malito:" + contactInfo.email}>{contactInfo.email}</a>
          </p>
        </div>
        <hr></hr>

        <div className="text-white">
          Copyright © 2020-2023 Sunny Cloud Solutions
        </div>
      </div>
    </footer>
  );
}
