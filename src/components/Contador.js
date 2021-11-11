import React, { useState } from "react";

export default function Contador(){

    const [num, setNum] = useState(0);

    return(
        <>
            <h1>Contador xd</h1>
            <h2>Você clicou {num} vezes</h2>

            <button onClick={() => {setNum(num + 1)}}>Mais</button>
            <button onClick={() => {setNum(num - 1)}}>Menos</button>
        </>
    )
}