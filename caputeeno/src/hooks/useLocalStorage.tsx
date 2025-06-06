import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const storedValue = localStorage.getItem(item);
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        }
    }, [item]);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(item, JSON.stringify(newValue));
        }
    };

    return {
        value,
        updateLocalStorage
    };
}