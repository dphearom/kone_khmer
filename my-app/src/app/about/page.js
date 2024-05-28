import Navbar from "../navbar";
import Footer from "../footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a')",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="bg-gray-300 p-6 rounded shadow-md max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h1 className="text-black text-3xl font-bold mb-2">Our Mission</h1>
            <p className="text-black">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h1 className="text-2xl">Meet our Team</h1>
      </div>
      <Footer />
    </div>
  );
}
