"use client"

import { delay, motion } from "framer-motion"
import * as React from "react"
import { SVGProps } from "react"


const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={1932}
    // height={891}
    viewBox="0 0 1932 891"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <motion.path
        fill="url(#b)"
        d="M307.5 60.333a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334Zm-.354 721.021a.502.502 0 0 0 .708 0l3.182-3.182a.502.502 0 0 0-.708-.708l-2.828 2.829-2.828-2.829a.502.502 0 0 0-.708.708l3.182 3.182ZM307 63v44.875h1V63h-1Zm0 134.625v89.75h1v-89.75h-1Zm0 179.5v89.75h1v-89.75h-1Zm0 179.5v89.75h1v-89.75h-1Zm0 179.5V781h1v-44.875h-1Z"
        animate={{ y:-100}}
        transition={{delay: 1}}
      />
    </g>
    <g filter="url(#c)">
      <motion.path
        fill="url(#d)"
        d="M8.5 114.333a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334Zm-.354 603.021a.5.5 0 0 0 .708 0l3.182-3.182a.501.501 0 0 0-.708-.708L8.5 716.293l-2.828-2.829a.5.5 0 0 0-.708.708l3.182 3.182ZM8 117v37.5h1V117H8Zm0 112.5v75h1v-75H8Zm0 150v75h1v-75H8Zm0 150v75h1v-75H8Zm0 150V717h1v-37.5H8Z"
        animate={{ y:100}}
        transition={{delay: 0.9}}
      />
    </g>
    <g filter="url(#e)">
      <motion.path
        fill="url(#f)"
        d="M1324 .333A2.671 2.671 0 0 0 1321.33 3c0 1.473 1.2 2.667 2.67 2.667s2.67-1.194 2.67-2.667c0-1.473-1.2-2.667-2.67-2.667Zm-.35 882.021c.19.195.51.195.7 0l3.19-3.182a.511.511 0 0 0 0-.708.504.504 0 0 0-.71 0l-2.83 2.829-2.83-2.829a.504.504 0 0 0-.71 0 .511.511 0 0 0 0 .708l3.19 3.182ZM1323.5 3v43.95h1V3h-1Zm0 131.85v87.9h1v-87.9h-1Zm0 175.8v87.9h1v-87.9h-1Zm0 175.8v87.9h1v-87.9h-1Zm0 175.8v87.9h1v-87.9h-1Zm0 175.8V882h1v-43.95h-1Z"
        animate={{ y:-100}}
        transition={{delay: 1.2}}
      />
    </g>
    <g filter="url(#g)">
      <motion.path
        fill="url(#h)"
        d="M607.5.333a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334Zm-.354 882.021a.502.502 0 0 0 .708 0l3.182-3.182a.502.502 0 0 0-.708-.708l-2.828 2.829-2.828-2.829a.502.502 0 0 0-.708.708l3.182 3.182ZM607 3v43.95h1V3h-1Zm0 131.85v87.9h1v-87.9h-1Zm0 175.8v87.9h1v-87.9h-1Zm0 175.8v87.9h1v-87.9h-1Zm0 175.8v87.9h1v-87.9h-1Zm0 175.8V882h1v-43.95h-1Z"
        transition={{delay: 1.1}}
        animate={{ y:100}}
      />
    </g>
    <g filter="url(#i)">
      <motion.path
        fill="url(#j)"
        d="M1624 60.333a2.671 2.671 0 0 0-2.67 2.667c0 1.473 1.2 2.667 2.67 2.667s2.67-1.194 2.67-2.667c0-1.473-1.2-2.667-2.67-2.667Zm-.35 721.021c.19.195.51.195.7 0l3.19-3.182a.511.511 0 0 0 0-.708.504.504 0 0 0-.71 0l-2.83 2.829-2.83-2.829a.504.504 0 0 0-.71 0 .511.511 0 0 0 0 .708l3.19 3.182ZM1623.5 63v44.875h1V63h-1Zm0 134.625v89.75h1v-89.75h-1Zm0 179.5v89.75h1v-89.75h-1Zm0 179.5v89.75h1v-89.75h-1Zm0 179.5V781h1v-44.875h-1Z"
        transition={{delay: 1.3}}
        animate={{ y:100}}
      />
    </g>
    <g filter="url(#k)">
      <motion.path
        fill="url(#l)"
        d="M1924 114.333a2.671 2.671 0 0 0-2.67 2.667c0 1.473 1.2 2.667 2.67 2.667s2.67-1.194 2.67-2.667c0-1.473-1.2-2.667-2.67-2.667Zm-.35 603.021c.19.195.51.195.7 0l3.19-3.182a.511.511 0 0 0 0-.708.504.504 0 0 0-.71 0l-2.83 2.829-2.83-2.829a.504.504 0 0 0-.71 0 .511.511 0 0 0 0 .708l3.19 3.182ZM1923.5 117v37.5h1V117h-1Zm0 112.5v75h1v-75h-1Zm0 150v75h1v-75h-1Zm0 150v75h1v-75h-1Zm0 150V717h1v-37.5h-1Z"
        transition={{delay: 1.4}}
        animate={{ y:-100}}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={307}
        x2={307}
        y1={63}
        y2={781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" stopOpacity={0.48} />
        <stop offset={0.52} stopColor="#fff" />
        <stop offset={1} stopColor="#999" stopOpacity={0.53} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={8}
        x2={8}
        y1={117}
        y2={717}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" stopOpacity={0.48} />
        <stop offset={0.52} stopColor="#fff" />
        <stop offset={1} stopColor="#999" stopOpacity={0.53} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={1323.5}
        x2={1323.5}
        y1={3}
        y2={882}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" stopOpacity={0.48} />
        <stop offset={0.52} stopColor="#fff" />
        <stop offset={1} stopColor="#999" stopOpacity={0.53} />
      </linearGradient>
      <linearGradient
        id="h"
        x1={607}
        x2={607}
        y1={3}
        y2={882}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" stopOpacity={0.48} />
        <stop offset={0.52} stopColor="#fff" />
        <stop offset={1} stopColor="#999" stopOpacity={0.53} />
      </linearGradient>
      <linearGradient
        id="j"
        x1={1623.5}
        x2={1623.5}
        y1={63}
        y2={781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" stopOpacity={0.48} />
        <stop offset={0.52} stopColor="#fff" />
        <stop offset={1} stopColor="#999" stopOpacity={0.53} />
      </linearGradient>
      <linearGradient
        id="l"
        x1={1923.5}
        x2={1923.5}
        y1={117}
        y2={717}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#999" stopOpacity={0.48} />
        <stop offset={0.52} stopColor="#fff" />
        <stop offset={1} stopColor="#999" stopOpacity={0.53} />
      </linearGradient>
      <filter
        id="a"
        width={15.364}
        height={729.167}
        x={299.818}
        y={60.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_23" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_23"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        width={15.364}
        height={611.167}
        x={0.818}
        y={114.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_23" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_23"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        width={15.364}
        height={890.167}
        x={1316.32}
        y={0.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_23" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_23"
          result="shape"
        />
      </filter>
      <filter
        id="g"
        width={15.364}
        height={890.167}
        x={599.818}
        y={0.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_23" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_23"
          result="shape"
        />
      </filter>
      <filter
        id="i"
        width={15.364}
        height={729.167}
        x={1616.32}
        y={60.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_23" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_23"
          result="shape"
        />
      </filter>
      <filter
        id="k"
        width={15.364}
        height={611.167}
        x={1916.32}
        y={114.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_23" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_23"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export { SvgComponent as LandingLines }
