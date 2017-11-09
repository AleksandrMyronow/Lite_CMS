import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const TABS = require ('../assets/tabs.json');

class App extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.data);
        this._sort = this._sort.bind(this);
        this._reset = this._reset.bind(this);
        this.state = {
            data: this.props.data,
        };
    }

    _sort () {
        const data = this.state.data;
        function sortById(tabA, tabB) {
            return tabA.id > tabB.id;
        }
        data.sort(sortById);
        this.setState({
            data: data,
        });
    };

    _reset () {
        const data = this.state.data;
        function sortByOrder(tabA, tabB) {
            return tabA.order - tabB.order;
        }
        data.sort(sortByOrder);
        this.setState({
            data: data,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <td onClick={this._sort}>Sort</td>
                            <td onClick={this._reset}>Reset</td>
                        </tr>
                        </thead>
                        <tbody >
                        {this.state.data.map((tab, index) => (
                            <tr
                                key={index}
                            ><td>
                                <Link to ={tab.id}>{tab.title}</Link>
                            </td>

                            </tr>
                        ))}
                        </tbody>

                    </table>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: TABS
});

const mapDispatchToProps = (dispatch) => ({
    sort: state => dispatch({
        type: '_sort',
        payload: {
            state
        }
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
