import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTabContent } from "../tabs/tabsSlice";

const Tab = ({ tab }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchTabContent(tab));
    };

    return <button onClick={handleClick}>{tab}</button>;
};

export default Tab;