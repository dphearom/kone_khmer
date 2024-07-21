import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
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
      <Footer/>
    </div>
  );
}
