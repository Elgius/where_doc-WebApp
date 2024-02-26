import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div className="p-10 w-full text-center">
        <p className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-rose-500/10">
          404
        </p>
        <p className="text-l lg-text-4xl md:text-2xl font-semibold">
          Sorry...We don&apos;t have the page{" "}
          <span className="font-extrabold text-teal-500">
            you&apos;re looking for
          </span>
        </p>
        <Button className="mt-3" variant={"outline"} asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
      <Image src="/404.png" width={700} height={700} alt="404 image" />
    </div>
  );
};

export default NotFound;
