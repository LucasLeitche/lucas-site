import { FaFileDownload, FaTimes } from "react-icons/fa";

export function CvModal({ close, chosed }: any) {
  return (
    <>
      <div className="fixed bg-black/40 left-0 top-0 w-screen h-screen z-50"></div>
      <div className="fixed left-1/2 top-1/2 bg-primary w-11/12 lg:w-full border border-white/10 flex flex-col lg:flex-row items-center p-5 gap-8 justify-center max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md lg:h-[300px] z-50">
        <button
          className="absolute right-3 top-3 text-xl lg:text-2xl"
          onClick={() => close()}
        >
          <FaTimes></FaTimes>
        </button>

        <button
          className="flex flex-col justify-center items-center border hover:bg-accent duration-75 hover:text-primary transition-all border-white/10  bg-black/20 h-[100px] w-[100px] rounded-md text-accent text-4xl"
          onClick={() => chosed("en")}
        >
          <FaFileDownload className="mb-2"></FaFileDownload>
          <span className="text-lg">EN</span>
        </button>
        <button
          className="flex flex-col justify-center items-center border hover:bg-accent duration-75 hover:text-primary transition-all border-white/10  bg-black/20 h-[100px] w-[100px] rounded-md text-accent text-4xl"
          onClick={() => chosed("pt")}
        >
          <FaFileDownload className="mb-2"></FaFileDownload>
          <span className="text-lg">PT</span>
        </button>
      </div>
    </>
  );
}
