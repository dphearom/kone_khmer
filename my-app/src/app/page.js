import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  const QuoteCard = () => {
    return (
      <div className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center">
        <div className="flex-none w-full md:w-1/4 mb-4 md:mb-0">
          <div className="bg-gray-300 w-full h-32 flex items-center justify-center rounded-lg">
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
        <div className="flex-grow md:pl-4 text-center md:text-left">
          <h3 className="font-bold text-xl text-red-600">Bigger Quote</h3>
          <p className="text-gray-700">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-1/2 p-6">
            <div className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#FF204E]">
              Bigger Quote
            </div>
            <div className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </div>
            <div className="flex flex-row space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-lg bg-[#A0153E] hover:bg-[#FF204E] focus:ring-4 focus:ring-black"
              >
                Meet the Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-2 justify-center px-5 py-3 text-base font-medium border-black text-black rounded-lg hover:bg-[#FF204E] hover:text-white focus:ring-2 focus:ring-black"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
              alt=""
              className="object-cover w-full h-full rounded-md dark:bg-gray-500"
            />
          </div>
        </div>
      </section>
      <section className="bg-red-600 text-white text-center p-12">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </section>
      <div className="w-full">
        <div className="p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuoteCard />
            <QuoteCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
