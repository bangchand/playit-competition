import { Link } from "react-router-dom";
import { Cover } from "../../components/Cover";
import { HoverBorderGradient } from "../../components/HoverBorderGradient";

const Page404 = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <h1 className="text-center text-4xl md:text-4xl lg:text-6xl font-semibold mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Something Went Wrong <br /> 404 <Cover>Page Not Found</Cover>
        </h1>
        <div className="flex justify-center text-center">
          <Link to="/">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2"
            >
              &lt; Back To Home
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
