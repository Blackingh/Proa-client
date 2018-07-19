import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * componentes
 */

class ShowGridReturnRental extends Component {

    render() {
        const { list } = this.props;
        var keys = list.length > 0 ? Object.keys(list[0]) : [];
        return (
            <div className="table-grid">
                <div className="row header-table">
                    <div key="Actions" className="col headers border">Seleccion</div>
                    {keys.map((head, i) => <div key={i} className="col headers border">{head}</div>)
                    }
                </div>
                {list.map((item) => {
                    return (
                        <div className="row" key={item[keys[0]]}>
                            <div className="col columns border pb-2 pt-2 card">
                                <input
                                    type="checkbox"
                                    className="checkmark"
                                    onChange={()=> this.props.onChangeBook(item)}
                                />
                            </div>
                            {
                                keys.map((key, i) => {
                                    return (
                                        <div key={i} className="col columns border pb-2 pt-2 card aline">{item[key]}</div>
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

ShowGridReturnRental.propTypes = {
    list: PropTypes.array.isRequired
}

export default ShowGridReturnRental;