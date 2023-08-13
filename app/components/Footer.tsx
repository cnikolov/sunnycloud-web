"use client";
import { usePathname } from "next/navigation";
import JoinTeamBanner from "./JoinTeamBanner";
import { contactInfo } from "./companyInfo";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={classNames(
        "bg-black min-h-[32rem]",
        pathname == "careers" ? "mt-12" : "mt-36 sm:mt-24 lg:mt-40"
      )}
    >
      <div className="w-3/4 mx-auto relative pt-2">
        {!pathname.includes("careers") ? (
          <>
            <JoinTeamBanner />
            <div className="h-72 sm:h-40 md:h-52"></div>
          </>
        ) : null}

        <div className="mt-14">
          <div className="flex">
            <div>
              <h1
                className={classNames(
                  "uppercase text-md tracking-[0.2rem]  font-semibold text-white mb-2"
                )}
              >
                Address
              </h1>
              <p className="text-md text-white">
                Grunwaldzka
                <br />
                Ustka 76-270
                <br />
                Poland
              </p>
            </div>
            <div className="ml-20">
              <h1
                className={classNames(
                  "uppercase text-md tracking-[0.2rem]  font-semibold text-white mb-2"
                )}
              >
                Address 2
              </h1>
              <p className="text-md text-white">
                Zdrave 2 <br />
                Kostinbrod 2230 <br />
                Bulgaria <br />
              </p>
            </div>
          </div>

          <h1 className="uppercase text-md font-semibold tracking-[0.2rem] mt-5 text-white mb-2">
            Contact Us
          </h1>
          <div className="text-md text-white mb-14">
            <p>Julia (Polish, English) </p>
            <a href={"tel:" + contactInfo.telephone}>{contactInfo.telephone}</a>
            <br />
            <p>Christian Dev (English, Bulgarian)</p>
            <a href={"tel:" + contactInfo.telephone2}>
              {contactInfo.telephone2}
            </a>
            <br />
            <a href={"malito:" + contactInfo.email}>{contactInfo.email}</a>
          </div>
        </div>
        <hr></hr>

        <div className="text-white">
          Copyright © 2020-2023 Sunny Cloud Solutions Company Registration VAT
          BG206629258
        </div>
      </div>
    </footer>
  );
}
