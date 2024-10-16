import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(3600);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timerId);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);


    const formatTime = (seconds: number) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    return (
        <div className="timer">
            <h1 className="font-semibold text-slate-600">{formatTime(time)}</h1>
        </div>
    );
};

export default Timer;
