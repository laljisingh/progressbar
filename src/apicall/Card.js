import React from 'react';

function Card({ login, imgsrc }) {
    return (
        <div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={imgsrc} alt="" />
                </a>
                <div class="p-5">
                    <p class="mb-3 font-normal text-5 text-red-900 dark:text-red-900">{login}</p>
                </div>
            </div>

        </div>
    );
}

export default Card;