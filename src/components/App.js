import React from 'react';
import '../App.css';
import { Link } from 'react-router';

const TABS = require ('../assets/tabs.json');
const sortTABS = TABS.sort(function sortById(tabA, tabB) {
    return tabA.id > tabB.id;
});

const App = ({children}) =>
    <div>
        <nav>
            <ul className="container">
                {sortTABS.map((tab, index) => (
                    <li className='li'
                        key={index}
                    >
                        <Link to ={tab.id}>{tab.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <main>
            {children}
        </main>
    </div>;

export default App;