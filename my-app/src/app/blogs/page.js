import Navbar from "../navbar";
import Footer from "../footer";

export default function Blogs() {
  const resources = [1, 2, 3, 4, 5, 6];
  const Card = () => {
    return (
      <div className="bg-gray-300 rounded-lg p-4 flex">
        <div className="flex-none w-1/4">
          <div className="bg-gray-400 w-full h-32 flex items-center justify-center rounded-lg">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
              />
            </svg>
          </div>
        </div>
        <div className="flex-grow pl-4">
          <h3 className="font-bold text-xl">Lorem ipsum dolor sit</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <section className="">
          <div className="bg-red-600 w-full">
            <p className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-2xl font-bold p-2 text-left ">
              Resources
            </p>
          </div>
          <div className="">
            <div className="bg-gray-300 w-full h-64"></div>
            {/* Placeholder for the image */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <Card key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
