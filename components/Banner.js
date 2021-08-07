import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://i.imgur.com/pAEzleE.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-20 left-9 md:top-28 md:left-24 xl:top-52 xl:left-24 w-full">
        <div className="flex w-32 text-3xl md:text-4xl xl:text-6xl font-bold text-white">
          Olympian & Paralympian Online Experiences
        </div>
        <button className="text-black-500 bg-white px-3 py-2 xl:px-5 xl:py-2 rounded-md shadow-md  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Explore now
        </button>
      </div>
    </div>
  );
}

export default Banner;
