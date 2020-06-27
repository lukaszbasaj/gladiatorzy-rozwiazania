// stwórz hook useSetState, w którym 
// odtworzysz możliwość zmiany state przez częściowe nadpisanie
// (identyczne działanie jak to co ma this.setState)

import { useState } from 'react';

const setPartialState = (initialState) =>{
    const [state, set] = useState(initialState);
    const setPartialState = (part) => {
        Object.assign(state, part);
        set(state);
    };

    return [state, setPartialState];
};

export default useSetState;
