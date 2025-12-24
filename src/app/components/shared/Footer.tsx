export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#ethics" className="hover:text-white transition-colors">
              AI Ethics
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <p>Demo version • Not for production use</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
