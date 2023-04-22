import DownloadIcon from "@/components/icons/Download";

const DownLoadButton = () => {
  return (
    <button className="flex items-center gap-2 bg-gradient-to-r from-purple to-blue-primary text-white font-bold py-3 px-5 rounded-md">
      Download for Mac
      <DownloadIcon />
    </button>
  );
};

export default DownLoadButton;
