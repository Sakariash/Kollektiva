import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-40">
      <Image
        href="/frontpage"
        className="min-h-full w-full"
        src="/assets/images/Logotype.svg"
        width="400px"
        height="100%"
      >
        {/* <Link href="/frontpage"></Link> */}
      </Image>
    </div>
  );
};

export default Logo;
