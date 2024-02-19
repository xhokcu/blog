function Header() {
  return (
    <div className="flex flex-row justify-between gap-12 p-6 items-center">
      <div>
        <p className="font-sans font-medium text-sm md:text-lg">Helin Okcu</p>
      </div>
      <div className="flex gap-12 items-end justify-end">
        <a href="https://www.linkedin.com/in/helinokcu/">
          <p className="font-sans font-medium text-sm md:text-lg text-gray-400 hover:text-gray-200">
            LinkedIn
          </p>
        </a>
        <a href="https://medium.com/@helinokcu">
          <p className="font-sans font-medium text-sm md:text-lg text-gray-400 hover:text-gray-200">
            Medium
          </p>
        </a>
        <a href="https://github.com/xhokcu">
          <p className="font-sans font-medium text-sm md:text-lg text-gray-400 hover:text-gray-200">
            Github
          </p>
        </a>
      </div>
    </div>
  );
}

export default Header;
