"use client";

import { motion, useDragControls } from 'framer-motion';

export default function IntroWindow() {
    const controls = useDragControls();

    return (
        <motion.div
            drag
            dragListener={false}
            dragControls={controls}
            dragConstraints={{ left: -400, right: 400, top: -200, bottom: 200 }}
            className="w-100 h-40 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
        >
        {/* Title bar */}
        <div
            onPointerDown={(e) => controls.start(e)}
            className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2 cursor-grab"
        >
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-neutral-400">intro.txt</span>
        </div>

        {/* Content */}
        <div className="p-4 text-neutral-200 text-xl">
            <p>Hi, I&apos;m Maria!</p>
            <p className="text-sm pt-3">I am really really cool please hire me please <br/> I can code kinda haha</p>
        </div>
        </motion.div>
    );
}

export function InterestWindow(){
    const controls = useDragControls();

    return (
        <motion.div
            drag
            dragListener={false}
            dragControls={controls}
            dragConstraints={{ left: -400, right: 400, top: -200, bottom: 200 }}
            className="w-72 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
        >
        {/* Title bar */}
        <div
            onPointerDown={(e) => controls.start(e)}
            className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2 cursor-grab"
        >
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-neutral-400">interests.txt</span>
        </div>

        {/* Content */}
        <div className="p-4 text-neutral-200 text-sm">
            <p>CS undergrad @ Berkeley; I love robots heh</p>
        </div>
        </motion.div>
    );
}