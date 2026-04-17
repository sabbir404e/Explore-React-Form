import React from 'react';
import GrandPa from './GrandPa';
import './familyTree.css';

const FamilyTree = () => {

    const asset = 'dimond';
    return (
        <div className='family-tree'>
            <h3>Family Tree</h3>
            <GrandPa></GrandPa>
        </div>
    );
};

export default FamilyTree;