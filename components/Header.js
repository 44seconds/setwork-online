import Image from "next/image";

function Header() {
  return (
    <header>
      <div
        className="relative flex items-center h-10 cursor-pointer 
      my-auto"
      >
        <Image
          src="https://setwork.ai/images/Setwork4-logo-new-tiny.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
