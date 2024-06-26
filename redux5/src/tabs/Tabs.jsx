import React from 'react';
import Tab from "../components/Tab";
import TabContent from "../components/TabContent";

const Tabs = () => {
    const tabs = ['Frontend', 'Backend', 'iOS', 'Android', 'UX/UI'];

    return (
        <div>
            <div>
                {tabs.map((tab) => (
                    <Tab key={tab} tab={tab} />
                ))}
            </div>
            <TabContent />
        </div>
    );
};

export default Tabs;
