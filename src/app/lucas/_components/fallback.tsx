'use client';
import { useState, useEffect } from 'react';

const LoadingFallback = () => {

    return (
        <div className="flex flex-col items-center justify-between h-screen bg-black">
            <div className="w-full h-4 overflow-hidden mb-10">
                <div className="h-full rounded-full w-2/3 bg-white animate-slide"></div>
            </div>
            <h1 className="text-6xl font-bold text-white">
                Lucas's page
            </h1>
            <div></div>
        </div>
    );
};

export default LoadingFallback;