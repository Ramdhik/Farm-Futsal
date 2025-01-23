const Facilities = () => {
  return (
    <div className="w-full h-96 bg-emerald-600 flex justify-center">
      <div className="w-11/12 mx-auto my-auto flex justify-center py-5 px-2 text-white">
        <div className="w-full flex justify-between">
          <div className="w-2/6 h-72 rounded-2xl flex flex-col justify-between">
            <h1 className="text-3xl font-bold mb-5">Our Facilities</h1>
            <div className="flex-grow rounded-2xl bg-gray-300"></div>
          </div>
          <div className="flex flex-col w-3/5 ml-10">
            <div className="flex-grow rounded-2xl bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
