import React from 'react'
import List from './List/List'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

function Navbar(){
    return (
        <div className="Navbar-II">
            <div className="Landing-Page">
            <img src="public\Images\logo.png" />
                <h2>
                    Landing Page
                </h2>
            </div>
            <div className="List">
            <List />
            </div>
            <div className="Search">
                <SavedSearchIcon >Search</SavedSearchIcon>
            </div>
        </div>
    );
}

export default Navbar;