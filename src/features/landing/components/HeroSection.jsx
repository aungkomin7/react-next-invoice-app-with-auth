const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          Create Amazing
          <span className="text-blue-600 dark:text-blue-400 block transition-colors duration-300">
            Digital Experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
          We help businesses build beautiful and functional websites that drive
          growth and engage users. Let&apos;s bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
            Get Started
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
            View Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
              500+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
              98%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
              10+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Years
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
