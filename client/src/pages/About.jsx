export default function About() {
  return (
    <div className="h-screen w-screen relative">
      <div className="opacity-60 bg-cover bg-center h-full w-full absolute top-0 left-0">
        <img
          className="w-1/1 center rounded-lg slide-in-right"
          src="couple2.png"
          alt=""
        />
      </div>
      <div className="py-20 px-4 max-w-6xl mx-auto w-full relative slide-in-left">
        <h1 className="text-5xl font-bold mb-4 text-slate-800 relative z-10">
          About DreamscapeDwellings
        </h1>
        <p className="mb-4 text-slate-700 relative z-10">
          DreamscapeDwellings is a leading real estate company specializing in
          luxury properties, condos, and townhouses. We have been building our
          reputation for providing exceptional service and quality homes for
          over 20 years.
        </p>
        <p className="mb-4 text-slate-700 relative z-10">
          We strive to create a welcoming and inspiring atmosphere for our
          clients, by providing high-quality property listings, personalized
          recommendations, and a safe and supportive community. We believe that
          every home should be a place where you can truly relax and unwind, and
          we are committed to helping our clients achieve that goal.
        </p>
        <p className="mb-4 text-slate-700 relative z-10">
          Contact us today to find out more about our services, or to schedule a
          consultation with our team.
          <a
            href="mailto:info@dreamscapedwellings.com"
            className="text-blue-600"
          >
            info@dreamscapedwellings.com
          </a>
        </p>
      </div>
    </div>
  );
}
