import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useChartData = (key, initialValue) => {
    const [selected, setSelected] = useLocalStorage(key, initialValue);

    const clickHandler = e => {
        e.preventDefault();
        return selected ? setSelected(false) : setSelected(e.target.value)
    };

    return [selected, setSelected, clickHandler];
}

export default useChartData;