"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroGraphic: React.FC = () => {
  return (
    <div className="absolute left-1/3 right-0 top-0 -z-50 h-screen">
      {/* <div className="hidden"> */}
      {/* <Mask /> */}
      {/* <Shadow /> */}
      {/* </div> */}
      {/* <Image
        src="https://picsum.photos/540/240/"
        alt="Temp"
        fill
        className="[mask-image:url(#hero-shadow-group-1)] [mask-position:right] [mask-repeat:no-repeat] [mask-size:contain]"
      /> */}
      {/* <Image
        fill
        src="/shadow-mask.svg"
        alt=""
        className="fill-none object-contain object-right"
      /> */}
    </div>
  );
};

const Mask = () => {
  return (
    <svg
      width="522"
      height="1108"
      viewBox="0 0 522 1108"
      fill="none"
      className="absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="hero-mask">
        <motion.g
          transition={{ duration: 5, repeat: Infinity }}
          animate={{ translateY: [0, 100, 0] }}
          id="hero-mask-group-1"
        >
          <rect
            x="0.0126953"
            y="107.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
          <rect
            x="0.0126953"
            y="321.797"
            width="147"
            height="465"
            rx="27"
            fill="white"
          />
          <rect
            x="0.0126953"
            y="816.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
        </motion.g>
        <motion.g
          transition={{ duration: 5, repeat: Infinity }}
          animate={{ translateY: [0, 100, 0] }}
          id="hero-mask-group-2"
        >
          <rect
            x="187.013"
            y="0.797394"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
          <rect
            x="187.013"
            y="214.797"
            width="147"
            height="465"
            rx="27"
            fill="white"
          />
          <rect
            x="187.013"
            y="709.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
          <rect
            x="187.013"
            y="923.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
        </motion.g>
        <motion.g
          transition={{ duration: 5, repeat: Infinity }}
          animate={{ translateY: [0, 100, 0] }}
          id="hero-mask-group-3"
        >
          <rect
            x="374.013"
            y="107.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
          <rect
            x="374.013"
            y="321.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
          />
          <rect
            x="374.013"
            y="535.797"
            width="147"
            height="465"
            rx="27"
            fill="white"
          />
        </motion.g>
      </mask>

      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="url(#hero-image)"
        mask="url(#hero-mask)"
      />

      <image
        id="hero-image"
        x="0"
        y="0"
        width="200"
        height="200"
        xlinkHref="https://picsum.photos/540/240/"
      />
    </svg>
    // <svg
    //   id="hero-mask"
    //   width="522"
    //   height="1108"
    //   viewBox="0 0 522 1108"
    //   fill="none"
    //   className="absolute inset-0"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <motion.g
    //     transition={{ duration: 5, repeat: Infinity }}
    //     animate={{ translateY: [0, 100, 0] }}
    //     id="hero-mask-group-1"
    //   >
    //     <rect
    //       x="0.0126953"
    //       y="107.797"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="0.0126953"
    //       y="321.797"
    //       width="147"
    //       height="465"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="0.0126953"
    //       y="816.797"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //   </motion.g>
    //   <motion.g
    //     transition={{ duration: 5, repeat: Infinity }}
    //     animate={{ translateY: [0, 100, 0] }}
    //     id="hero-mask-group-2"
    //   >
    //     <rect
    //       x="187.013"
    //       y="0.797394"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="187.013"
    //       y="214.797"
    //       width="147"
    //       height="465"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="187.013"
    //       y="709.797"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="187.013"
    //       y="923.797"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //   </motion.g>
    //   <motion.g
    //     transition={{ duration: 5, repeat: Infinity }}
    //     animate={{ translateY: [0, 100, 0] }}
    //     id="hero-mask-group-3"
    //   >
    //     <rect
    //       x="374.013"
    //       y="107.797"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="374.013"
    //       y="321.797"
    //       width="147"
    //       height="184"
    //       rx="27"
    //       fill="white"
    //     />
    //     <rect
    //       x="374.013"
    //       y="535.797"
    //       width="147"
    //       height="465"
    //       rx="27"
    //       fill="white"
    //     />
    //   </motion.g>
    // </svg>
  );
};

const Shadow = () => {
  return (
    <svg
      id="hero-shadow"
      width="522"
      height="1108"
      viewBox="0 0 522 1108"
      fill="none"
      className="absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        transition={{ duration: 5, repeat: Infinity }}
        animate={{ translateY: [0, 100, 0] }}
        id="hero-shadow-group-1"
      >
        <g filter="url(#filter0_i_373_43)">
          <rect
            x="0.0126953"
            y="107.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter1_i_373_43)">
          <rect
            x="0.0126953"
            y="321.797"
            width="147"
            height="465"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter2_i_373_43)">
          <rect
            x="0.0126953"
            y="816.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
      </motion.g>
      <motion.g
        transition={{ duration: 5, repeat: Infinity }}
        animate={{ translateY: [0, 100, 0] }}
        id="hero-shadow-group-2"
      >
        <g filter="url(#filter3_i_373_43)">
          <rect
            x="187.013"
            y="0.797394"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter4_i_373_43)">
          <rect
            x="187.013"
            y="214.797"
            width="147"
            height="465"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter5_i_373_43)">
          <rect
            x="187.013"
            y="709.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter6_i_373_43)">
          <rect
            x="187.013"
            y="923.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
      </motion.g>
      <motion.g
        transition={{ duration: 5, repeat: Infinity }}
        animate={{ translateY: [0, 100, 0] }}
        id="hero-shadow-group-3"
      >
        <g filter="url(#filter7_i_373_43)">
          <rect
            x="374.013"
            y="107.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter8_i_373_43)">
          <rect
            x="374.013"
            y="321.797"
            width="147"
            height="184"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
        <g filter="url(#filter9_i_373_43)">
          <rect
            x="374.013"
            y="535.797"
            width="147"
            height="465"
            rx="27"
            fill="white"
            fill-opacity="0.01"
          />
        </g>
      </motion.g>
      <defs>
        <filter
          id="filter0_i_373_43"
          x="0.0126953"
          y="107.797"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter1_i_373_43"
          x="0.0126953"
          y="321.797"
          width="147"
          height="480"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter2_i_373_43"
          x="0.0126953"
          y="816.797"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter3_i_373_43"
          x="187.013"
          y="0.797394"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter4_i_373_43"
          x="187.013"
          y="214.797"
          width="147"
          height="480"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter5_i_373_43"
          x="187.013"
          y="709.797"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter6_i_373_43"
          x="187.013"
          y="923.797"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter7_i_373_43"
          x="374.013"
          y="107.797"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter8_i_373_43"
          x="374.013"
          y="321.797"
          width="147"
          height="199"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
        <filter
          id="filter9_i_373_43"
          x="374.013"
          y="535.797"
          width="147"
          height="480"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_373_43"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { HeroGraphic };
