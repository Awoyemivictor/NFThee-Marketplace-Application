import {useEffect, useState} from "react";

export const useStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
        typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem(storageKey)) : fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};
