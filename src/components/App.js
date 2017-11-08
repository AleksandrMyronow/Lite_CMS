import React from 'react';
import '../App.css';
import { Link } from 'react-router';

const TABS = require ('../assets/tabs.json');

const App = ({children}) =>
    <div>
        <nav>
            <ul className="container">
                <li className='li'><Link to='/'>Home</Link></li>
                {TABS.map((tab, index) => (
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
