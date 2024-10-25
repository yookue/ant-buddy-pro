/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import {red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey} from '@ant-design/colors';
import {RandomUtils} from '@yookue/ts-lang-utils';


/**
 * Utilities for React particles
 *
 * @see https://github.com/tsparticles/react/#readme
 * @see https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
 * @see https://github.com/tsparticles/website/tree/main/presets
 * @see https://particles.js.org/samples/presets/index.html
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class ParticleUtils {
    /**
     * Returns a random particles options with the given background image
     *
     * @param bgImage the background image
     *
     * @returns a random particles options with the given background image
     */
    public static randomOptions = (bgImage?: string): object => {
        const effect = RandomUtils.randomElement(['chaos', 'fountain', 'snow']) as string;
        switch (effect) {
            case 'chaos':
                return this.chaosOptions(bgImage);
            case 'fountain':
                return this.fountainOptions(bgImage);
            case 'snow':
            default:
                return this.snowOptions(bgImage);
        }
    }

    /**
     * Returns a chaos particles options with the given background image
     *
     * @param bgImage the background image
     *
     * @returns a chaos particles options with the given background image
     */
    public static chaosOptions = (bgImage?: string): object => {
        return {
            background: {
                image: !bgImage ? undefined : `url('${bgImage}')`,
                position: '50% 50%',
                repeat: 'no-repeat',
                size: 'cover',
            },
            backgroundMask: {
                enable: false,
            },
            delay: 0,
            detectRetina: true,
            fullScreen: {
                enable: true,
                zIndex: -9999,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    }
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 80,
                        duration: 0.4,
                    }
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                    }
                },
                color: {
                    value: '#fff',
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacityMin: 0.1,
                        sync: false,
                    }
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        sizeMin: 0.1,
                        sync: false,
                    }
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: undefined,
                    random: false,
                    straight: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    }
                }
            }
        };
    }

    /**
     * Returns a fountain particles options with the given background image
     *
     * @param bgImage the background image
     *
     * @returns a fountain particles options with the given background image
     */
    public static fountainOptions = (bgImage?: string): object => {
        return {
            delay: 0,
            detectRetina: true,
            fullScreen: {
                enable: true,
                zIndex: -999,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    }
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 80,
                        duration: 0.4,
                    }
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            particles: {
                bounce: {
                    vertical: {
                        value: {
                            min: 0.75,
                            max: 0.85,
                        },
                    },
                },
                color: {
                    value: [
                        red.primary,
                        volcano.primary,
                        gold.primary,
                        yellow.primary,
                        lime.primary,
                        green.primary,
                        cyan.primary,
                        blue.primary,
                        geekblue.primary,
                        purple.primary,
                        magenta.primary,
                        grey.primary,
                    ],
                },
                number: {
                    value: 0,
                },
                destroy: {
                    mode: 'split',
                    split: {
                        count: 2,
                        factor: {
                            value: {
                                min: 1.1,
                                max: 2,
                            },
                        },
                        rate: {
                            value: {
                                min: 2,
                                max: 3,
                            },
                        },
                    },
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: {
                        min: 10,
                        max: 20,
                    },
                },
                move: {
                    enable: true,
                    gravity: {
                        enable: true,
                        maxSpeed: 50,
                    },
                    speed: {
                        min: 10,
                        max: 20,
                    },
                    direction: undefined,
                    random: false,
                    straight: false,
                    outModes: {
                        bottom: "split" as 'split',
                        default: "bounce" as 'bounce',
                        top: "none" as 'none',
                    },
                    trail: {
                        enable: true,
                        fill: {
                            image: bgImage,
                        },
                        length: 3,
                    },
                },
            },
            emitters: {
                direction: "top" as 'top',
                life: {
                    count: 0,
                    duration: 0.15,
                    delay: 3,
                },
                rate: {
                    delay: 0.1,
                    quantity: 5,
                },
                size: {
                    width: 0,
                    height: 0,
                },
            },
        };
    }

    /**
     * Returns a snow particles options with the given background image
     *
     * @param bgImage the background image
     *
     * @returns a snow particles options with the given background image
     */
    public static snowOptions = (bgImage?: string): object => {
        return {
            background: {
                image: !bgImage ? undefined : `url('${bgImage}')`,
                position: '50% 50%',
                repeat: 'no-repeat',
                size: 'cover',
            },
            delay: 0,
            detectRetina: true,
            fullScreen: {
                enable: true,
                zIndex: -9999,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'repulse',
                    },
                    onHover: {
                        enable: true,
                        mode: 'bubble',
                    }
                },
                modes: {
                    grab: {
                        distance: 400,
                        lineLinked: {
                            opacity: 0.5,
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 4,
                        duration: 0.3,
                        opacity: 1,
                        speed: 3,
                    },
                    repulse: {
                        distance: 120,
                    },
                    push: {
                        particlesNb: 4,
                    },
                    remove: {
                        particlesNb: 2,
                    }
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            particles: {
                number: {
                    value: 260,
                    density: {
                        enable: true,
                    }
                },
                color: {
                    value: '#fff',
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacityMin: 0.1,
                        sync: false,
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 20,
                        sizeMin: 0.1,
                        sync: false,
                    }
                },
                lineLinked: {
                    enable: false,
                    distance: 500,
                    color: '#fff',
                    opacity: 0.4,
                    width: 2,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "bottom" as 'bottom',
                    random: false,
                    straight: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    }
                },
                wobble: {
                    distance: 20,
                    enable: true,
                    speed: {
                        min: -5,
                        max: 1.5,
                    },
                }
            }
        };
    }
}
