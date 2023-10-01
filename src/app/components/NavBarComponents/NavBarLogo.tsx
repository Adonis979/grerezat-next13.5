import Image from "next/image";

const NavBarLogo = () => {
  return (
    <Image
      src={"/images/GrerezatLogo.jpg"}
      width={179}
      height={60}
      alt="logo"
    />
  );
};

export default NavBarLogo;
