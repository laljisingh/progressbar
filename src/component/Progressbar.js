import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../component/progress.css';
function Progressbar() {
    const [count, setCount] = useState(1);
    const p = document.getElementById('para');

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 0.1);
        }, 10);
        
        if (count > 1 && count < 30) {
            p.style.backgroundColor = 'hotpink';

        }
        if (count > 30 && count < 80) {
            p.style.backgroundColor = 'blue';
            document.getElementById('progress').style.color="white";
        }

        if (Math.floor(count) === 100) {
            p.style.backgroundColor = 'red';
            document.getElementById('load').innerText = 'Completed!';
            clearTimeout(timer);
        }


    }, [count]);


    const stl = {
        width: count + '%',
        height:'25px'
    }
    const main = {
        width: '50%',
        display:'flex',
    }
    return (
        <>
                <p style={{fontSize:'25px'}}>Progress Bar</p>
            <div style={main} class="relative mb-5 h-6.5 rounded-full bg-gray-200">
                <div id='para' class="h-full animate-pulse rounded-full" style={stl}>
                    <span id='progress' style={{color:'blueviolet'}} class="absolute inset-0 flex  items-center justify-center text-xs font-semibold text-white">{Math.floor(count)}%</span>
                </div>
            </div>
            <p id='load'>Loading...</p>
        </>
    );
}

export default Progressbar;