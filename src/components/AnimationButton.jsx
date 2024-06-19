// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const AnimatedButton = ({ text, onClick, style }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onClick}
            style={style}
            className="rounded ml-5 border-2 border-neutral-50 px-4 sm:px-6 pb-2 sm:pb-3 pt-2 sm:pt-3 text-sm sm:text-base font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
            {text}
        </motion.button>
    );
};

const YourComponent = () => {

    return (
        <div style={{
            position: "relative",
            right: "2%"
        }}>
            <AnimatedButton text="Contact" href="/contact" />
        </div>
    );
};

export default YourComponent;
