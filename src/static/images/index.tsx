import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./logo.webp";

import HeroSlider1 from "./hero-slider-01.webp";
import HeroSlider2 from "./hero-slider-02.webp";
import HeroSlider3 from "./hero-slider-03.webp";
import HeroSlider4 from "./hero-slider-04.webp";
import HeroSlider5 from "./hero-slider-05.webp";
import HeroSlider6 from "./hero-slider-06.webp";
import HeroSlider7 from "./hero-slider-07.webp";
import HeroSlider8 from "./hero-slider-08.webp";

import InfiniteImg1 from "./katoennatie.webp";
import InfiniteImg2 from "./engie.webp";
import InfiniteImg3 from "./philips.webp";
import InfiniteImg4 from "./yummytreats.webp";


export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    HeroSlider4,
    HeroSlider5,
    HeroSlider6,
    HeroSlider7,
    HeroSlider8,
    InfiniteImg1,
    InfiniteImg2,
    InfiniteImg3,
    InfiniteImg4
};
