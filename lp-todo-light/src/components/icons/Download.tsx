import Image from "next/image";
import path from "../../../public/svg/download.svg";

const DownloadIcon = () => {
  return <Image priority src={path} alt="download" />;
};

export default DownloadIcon;
