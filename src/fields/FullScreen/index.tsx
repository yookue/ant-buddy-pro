
import React from 'react';
import {FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
import screenfull from 'screenfull';


const FullScreen: React.FC = () => {
    const toggleScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(document.documentElement);
        }
    };

    return (
        <>
            {
                React.createElement(screenfull.isFullscreen ? FullscreenOutlined : FullscreenExitOutlined, {
                    onClick: toggleScreen
                })
            }
        </>
    );
};

export default FullScreen;
