"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";


interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%"}: Props) => {


    return (
        <div style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: -15},
                visible: {opacity: 1, y: 0},
            }}
                initial="hidden"
                // animate="visible"
                whileInView="visible"
                transition={{ duration:0.5, delay:0.25}}
                viewport={{ once: true }}
            >{children}</motion.div>
        </div>
    )
}