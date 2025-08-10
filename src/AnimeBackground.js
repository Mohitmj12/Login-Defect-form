// src/AnimeBackground.js
import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadBasic } from '@tsparticles/basic';

const AnimeBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadBasic(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: { value: "#0d1117" } },
                particles: {
                    number: { value: 50 },
                    size: { value: 3 },
                    color: { value: "#ffffff" },
                    links: {
                        enable: true,
                        distance: 120,
                        color: "#ffffff",
                        opacity: 0.4
                    },
                    move: {
                        enable: true,
                        speed: 1
                    }
                }
            }}
        />
    );
};

export default AnimeBackground;
