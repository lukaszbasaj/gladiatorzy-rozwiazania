// stwórz hook useSetState, w którym 
// odtworzysz możliwość zmiany state przez częściowe nadpisanie
// (identyczne działanie jak to co ma this.setState)

import { useCallback, useState } from 'react';

const setPartialState = (initialState) => {
    const [state, set] = useState(initialState);
    const setPartialState = useCallback((part) => {
        set((prevState) => Object.assign({}, prevState, part instanceof Function ? part(prevState) : part));
        },
    [set]
    );
    return [state, setPartialState];
};

export default useSetState;
