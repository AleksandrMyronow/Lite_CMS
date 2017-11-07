import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// const TABS = require('assets/tabs.json');
import DummyTable from './tabs/dummyTable';
import DummyList from './tabs/dummyList';
import DummyChart from './tabs/dummyChart';

const TABS = [
    {"id": "dummyTable", "title": "Dummy Table", "order": 1, "path": "tabs/dummyTable.js"},
    {"id": "dummyChart", "title": "Dummy Chart", "order": 2, "path": "tabs/dummyChart.js"},
    {"id": "dummyList", "title": "Dummy List", "order": 0, "path": "tabs/dummyList.js"}
];

class App extends Component {

    render() {

        return (
            <div>
                <div className='navbar'>
                    <div className='navbar.header'>
                        <div className='navbar.brand'>
                            React Simple CMS App
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-4'>
                            <h3>Select a dummy</h3>
                            <Header />
                        </div>
                        <div className='col-md-8 col-sm-8'>
                            <h3>Your choice</h3>
                            <Main />
                        </div>

                    </div>
                    { this.props.children }
                </div>
            </div>

        );
    }
}

// const Header = () => (
//     <header>
//         <nav>
//             <ul>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to="/dummyChart">Chart</Link></li>
//                 <li><Link to="/dummyList">List</Link></li>
//                 <li><Link to="/dummyTable">Table</Link></li>
//             </ul>
//         </nav>
//     </header>
// );

class Header extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
        };
    }

    render() {
        const activeTab = this.state.activeTab;
        return (
            <header>
                <nav>
                    <ul className="container">
                        <li className='li'><Link to='/'>Home</Link></li>
                        {TABS.map((tab, index) => (
                            <li className='li'
                                key={index}
                                onClick={() => {
                                    this.setState({ activeTab: index })

                                }}
                            >
                                <Link to ={tab.id}>{tab.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </header>

        );
    }
}

// const Main = () => (
//     <main>
//         <Switch>
//             <Route exact path='/'/>
//             <Route path='/dummyTable' component={DummyTable} />
//             <Route path='/dummyChart' component={DummyChart} />
//             <Route path='/dummyList' component={DummyList} />
//         </Switch>
//     </main>
// );


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/'/>
                    {TABS.map((tab, index) => (
                        <Route
                            key={index}
                            path={`/${tab.id}`}
                            component={DummyTable}
                            // component={`./${tab.path}`}
                        >
                        </Route>

                    ))
                    }
                </Switch>

            </main>

        );
    }
}

export default App;
