import Link from "next/link";
import description from "./description";
import Image from "next/image";

 function PhotoFeed() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New description of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {description.map(({ id, src, name }) => (
          <Link key={id} href={`/PhotoFeed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default PhotoFeed