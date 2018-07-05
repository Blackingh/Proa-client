import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * componentes
 */
import '../css/ShowGrid.css'

class ShowGrid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        console.log(list);
        var keys = list.length > 0 ? Object.keys(list[0]) : [];
        return (
            <div className="table-grid container card d-inline-block w-75">
                <div className="row">
                    {keys.map((head, i) => <div key={i} className="col pt-1 pb-1 border bg-primary text-white ">{head}</div>)}
                </div>
                {list.map((item) => {
                    return (
                        <div className="row" key={item[keys[0]]}>
                            {
                                keys.map((key, i) => {
                                    return (
                                        <div key={i} className="col pt-2 pb-2 border border-secondary">{item[key]}</div>
                                    )
                                })
                            }
                        </div >
                    )
                }
                )

                }
            </div>
        );
    }
}

ShowGrid.propTypes = {
    list: PropTypes.array.isRequired
}

export default ShowGrid;