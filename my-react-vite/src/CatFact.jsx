import {useEffect, useState} from "react";

function CatFact() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        (async () => {
            const res = await fetch('https://catfact.ninja/fact');
            const data = await res.json();
            setFact(data.fact);
        })();
    }, []);

    return <p>{fact}</p>;
}
export default CatFact;