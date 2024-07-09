import Image from "next/image";
import nitroImages, { nitroImage } from "@/app/PhotoFeed/description";
import Modal from "@/components/modal"

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: nitroImage = nitroImages.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        alt={photo.id}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.name}</h3>
        <h3>{photo.id}</h3>
      </div>
    </Modal>
  );
}