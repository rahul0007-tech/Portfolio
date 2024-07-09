import { StaticImageData } from "next/image";

import photo1 from "./Photos/photo1.jpg"
import photo2 from "./Photos/photo2.jpg"
import photo3 from "./Photos/photo3.jpg"

export type nitroImage = {
    id: string;
    name: string;
    src: StaticImageData;
};

const nitroImages: nitroImage[] = [
    {
        id: "1",
        name: "firstImage",
        src: photo1
    },
    {
        id: "2",
        name: "secondImage",
        src: photo2
    },
    {
        id: "3",
        name: "thirdImage",
        src: photo3
    }
]

export default nitroImages