import React from 'react';
import { useSelector } from 'react-redux';

const TabContent = () => {
    const content = useSelector((state) => state.tabs.content);
    const status = useSelector((state) => state.tabs.status);
    const error = useSelector((state) => state.tabs.error);

    let contentDisplay;

    if (status === 'loading') {
        contentDisplay = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        contentDisplay = (
            <div>
                <h2>{content.title}</h2>
                <p>{content.body}</p>
            </div>
        );
    } else if (status === 'failed') {
        contentDisplay = <div>{error}</div>;
    }

    return <div>{contentDisplay}</div>;
};

export default TabContent;
