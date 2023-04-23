import type { NextPage } from "next";
import DownLoadButton from "@/components/DownLoadButton";
import H1 from "@/components/H1";
import TodoLight from "@/components/TodoLight";
import VSCode from "@/components/VSCode";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center w-full h-screen">
        <div className="h-full ml-auto px-20">
          <div className="mt-56">
            <H1 />
          </div>
          <p className="font-bold text-blue-text text-xl leading-8">
            The simplest todo list.
            <br />
            Placed in the front of the
            <br />
            window, its simple functionality
            <br />
            makes it easy to manage tasks.
          </p>
          <div className="mt-20">
            <DownLoadButton />
          </div>
        </div>
        <div className="relative bg-mv-bg bg-no-repeat bg-[mv-bg] bg-cover w-3/5 h-screen">
          <VSCode />
          <div className="absolute bottom-0 left-80">
            <TodoLight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
