import Navbar from "../navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
            <span className="block mb-2 dark:text-violet-600">
              Mamba design system
            </span>
            <h1 className="text-5xl font-extrabold dark:text-gray-900">
              Build it with Mamba
            </h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-900">
                Modular and versatile.
              </span>
              Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
              cumque at.
            </p>
            <form noValidate="" action="" className="self-stretch space-y-3">
              <div>
                <label htmlFor="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Email address"
                  className="w-full rounded-md focus:ring focus:ring-violet-600 border-gray-50"
                />
              </div>
              <button
                type="button"
                className="w-full py-2 font-semibold rounded bg-violet-400 hover:bg-violet-600 text-gray-50"
              >
                Join the waitlist
              </button>
            </form>
          </div>
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
}
