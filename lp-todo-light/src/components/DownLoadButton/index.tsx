import DownloadIcon from "@/components/icons/Download";

const DownLoadButton = () => {
  return (
    <button className="flex items-center gap-2 bg-gradient-to-r from-purple to-blue-primary text-white font-bold text-xl py-5 px-12 rounded-lg shadow-[0_8px_20px_0px_#5f00bd66] transition duration-300 hover:opacity-80">
      Download for Mac
      <DownloadIcon />
    </button>
  );
};

export default DownLoadButton;
