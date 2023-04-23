const TodoLight = () => {
  return (
    <div className="w-80 h-[400px] bg-white bg-opacity-80 p-3 rounded-xl">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-md bg-[#ff6969]" />
        <div className="w-3 h-3 rounded-md bg-[#ffd645]" />
        <div className="w-3 h-3 rounded-md bg-[#86ff5b]" />
      </div>
      <div className="flex flex-col gap-3 p-3 mt-10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm border-2 border-solid border-gray-400" />
          <p className="text-gray-600 text-xl">Scroll Down</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm border-2 border-solid border-gray-400" />
          <p className="text-gray-600 text-xl">Design</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm border-2 border-solid border-gray-400" />
          <p className="text-gray-600 text-xl">Develop</p>
        </div>
      </div>
    </div>
  );
};

export default TodoLight;
