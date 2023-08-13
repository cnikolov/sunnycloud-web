import Image from "next/image";
import { contactInfo } from "../components/companyInfo";
export default function Careers() {
  return (
    <div className="text-center mt-14 min-h-screen bg-brand">
      <div className="">
        <div className="flex flex-col align-text-bottom justify-center">
          <h1 className="text-4xl mb-12 mt-4 text-black">Job Openings</h1>
        </div>
        <p>
          At Sunny Cloud Solutions, we believe that our employees are the key to
          our success. That’s why we strive to create a work environment that is
          both challenging and rewarding, and that provides opportunities for
          growth and development.
        </p>
      </div>
      <div className="max-w-3xl mx-auto rounded-lg border-black border-2 border-r-4">
        <h2 className="text-lg font-semibold text-left ml-4 mt-4">
          Application guides
        </h2>
        <div className="max-w-screen-xl mx-auto px-5  min-h-sceen">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 ">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Software Developer application guide</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  If you’re a software developer who is looking for a place
                  where you can make a difference, we encourage you to consider
                  joining our team. Here are just a few reasons why working for
                  us might be the right fit for you:
                </p>
                <ul className="list-disc list-inside text-neutral-600 mt-3 group-open:animate-fadeIn">
                  <li>
                    Exciting projects: As a software developer at SCS, you’ll
                    have the opportunity to work on a wide range of projects,
                    from developing new software applications to improving
                    existing ones. No two days will be the same, and you’ll
                    always have the chance to learn and grow.
                  </li>
                  <li>
                    Collaborative team: We believe that teamwork is essential to
                    success, and we encourage our developers to collaborate and
                    share ideas. You’ll have the support of your colleagues and
                    the freedom to explore your own creative solutions to
                    problems.
                  </li>
                  <li>
                    Competitive benefits: We offer a comprehensive benefits
                    package that includes healthcare, 401(k) matching, and
                    generous paid time off. We also offer flexible work
                    arrangements to help you balance your work and personal
                    life.
                  </li>
                  <li>
                    Growth opportunities: At SCS, we believe in investing in our
                    employees. We offer ongoing training and development
                    programs, as well as opportunities for advancement within
                    the company.
                  </li>
                </ul>
                <br />
                We believe that our team is what sets us apart from the
                competition. If you’re ready to join a dynamic and innovative
                team, we encourage you to apply for one of our open software
                development positions.
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Other Positions</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Coming Soon.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
