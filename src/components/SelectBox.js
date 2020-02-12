import React, { useState } from 'react';
import ChartData from '../hooks/useChartData';

const SelectBox = ({coinData}) => {
    const [selected, setSelected] = ChartData('')

    const confirmSelection = e => {
        e.preventDefault();
        setSelected(selected)
    }
    return (
        <div>

        </div>
    )
}
export default SelectBox;
