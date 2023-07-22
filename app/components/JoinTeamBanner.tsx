import Link from "next/link";

export default function JoinTeamBanner() {
  return (
    <>
      <div className="absolute -mt-16  left-0 right-0">
        <div className="flex flex-col justify-between  bg-marketing max-w-2xl mx-auto border-black border-4 rounded-lg p-8 font-archivo text-white relative min-h-80">
          <h1 className="text-3xl  mb-6  font-semibold">Join Our Team</h1>
          <p className="text-md mb-4 whitespace-break-spaces">
            Want to be a part of the fast growing team? Check out our open
            Positions. <br />
            We serve excellent training for breakfast so you will be in a very
            good hands.
          </p>
          <div className="relative h-24 sm:h-16">
            <Link
              className="absolute right-2 bottom-0 flex-1 inline-block bg-brand p-4  border-black border-4 border-r-8 border-b-8 px-10 rounded-xl uppercase font-bold text-black"
              href="/careers"
            >
              Open Positions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
