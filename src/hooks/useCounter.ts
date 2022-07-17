import { useCallback, useState } from 'preact/hooks';

export const useCounter = () => {
    const [count, setCount] = useState<number>(0)

    const increase = useCallback(() => {
        const number = count + 1
        setCount(number)
    }, [count])

    const decrease = useCallback(( ) => {
        const number = count - 1
        setCount(number)
    }, [count])

    return {count, increase, decrease}
}
