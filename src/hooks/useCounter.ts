import { useCallback, useState } from 'preact/hooks';

export const useCounter = () => {
    const [count, setCount] = useState<number>(0)

    const increase = useCallback(() => {
        setCount(n => n + 1)
    }, [count])

    const decrease = useCallback(( ) => {
        setCount(n => n - 1)
    }, [count])

    return {count, increase, decrease}
}
