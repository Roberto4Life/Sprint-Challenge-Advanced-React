import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('key', false);
    console.log(useLocalStorage)
    useEffect(() => {
        const body = window.document.body;
            if (value) {
                return body.classList.add('dark-mode')
            } else {
                return body.classList.remove('dark-mode')
            }
    },[value])
    return[value, setValue]
}
export default useDarkMode;