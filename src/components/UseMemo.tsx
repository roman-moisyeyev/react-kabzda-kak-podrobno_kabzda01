import React, {useMemo, useState} from "react";


export const UseMemo = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
        },[a]);


        for (let j = 1; j <= b; j++) {
            resultB = resultB * j
        }


        return (
            <div>
                <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
                <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
                <hr/>
                <div>Result for a:{resultA}</div>
                <div>Result for b:{resultB}</div>
            </div>
        )
    }