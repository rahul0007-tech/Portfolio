import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/register'}>Go to register page</Link>
    </div>
  );
}
