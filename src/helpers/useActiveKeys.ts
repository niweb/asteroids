import { useEffect, useState} from "react";

export const useActiveKeys = () => {
    const [activeKeys, setActiveKeys] = useState<KeyboardEvent['key'][]>([]);

    const onKeydown = ({ key }: KeyboardEvent) => {
        setActiveKeys(prev => {
            if(!prev.includes(key)) {
                return [...prev, key];
            }
            return prev
        });
    }

    const onKeyup = ({ key }: KeyboardEvent) => {
        setActiveKeys(prev => prev.filter(k => k !== key));
    };

    useEffect(() => {
        window.addEventListener("keydown", onKeydown);
        window.addEventListener("keyup", onKeyup);
        return () => {
            window.removeEventListener("keydown", onKeydown);
            window.removeEventListener("keyup", onKeyup);
        };
    }, []);

    return activeKeys;
}
