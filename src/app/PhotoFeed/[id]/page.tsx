import Image from "next/image";
import nitroImages, { nitroImage } from "../description";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: nitroImage = nitroImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3>{photo.id}</h3>
          <h3>{photo.name}</h3>
        </div>
      </div>
    </div>
  );
}