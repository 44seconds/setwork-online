import Image from "next/image";

function LargeCard({ img, name, job, location, price, stars }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12 text-white">
        <h3 className="text-4xl mb-3 w-64 text-white">
          Find Filmmakers Near You
        </h3>
        <p>Pro Filmmakers seleted by Setwork.</p>
        <button className="text-sm text-[#0c5ea3] bg-white py-2 px-4 rounded-lg mt-5 hover:scale-105 transform transition duration-100 ease-out">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
