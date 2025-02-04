import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-[url('/Images/Hero.jpg')] bg-cover bg-center w-full h-full object-cover flex justify-center">
        <div className="w-11/12 mx-auto flex justify-center flex-col py-5 px-2 font-bold text-white">
          <div className="w-2/4 mb-10">
            <h1 className="text-8xl font-bold">Farm Futsal Family</h1>
          </div>
          <div className="w-2/4 mb-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              tincidunt, lectus in imperdiet elementum, tellus leo mattis arcu,
              vitae efficitur eros erat ac lorem. Proin elementum, mi ac tempor
              rhoncus.
            </p>
          </div>
          <div>
            <Button className="rounded-full py-5 px-8 bg-white text-black font-bold">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
