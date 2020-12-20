import React, { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext(null);

export function ApiProvider(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('/api/usResources')
            .then((response) => response.json())
            .then((payload) => setData(payload));
    }, []);
    return <ApiContext.Provider value={data}>{props.children}</ApiContext.Provider>;
}
