import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './TodoSearch.scss'
import React from "react";
import { TodoContext } from '../../contexts/TodoContext';

function TodoSearch() {


    const {
        searchvalue,
        setSearchValue
    } = React.useContext(TodoContext);

    const TodoSearch = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <React.Fragment>
            <h2>Search task</h2>
            <div className="input-container">
                <FontAwesomeIcon className="icon" icon={faSearch}/>
                <input placeholder='Search'
                    value={searchvalue}
                    onChange={TodoSearch}
                />
            </div>
        </React.Fragment>
    );
}

export { TodoSearch };