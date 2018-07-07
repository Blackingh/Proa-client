import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * componentes
 */
import '../css/ShowGrid.css'

class ShowGrid extends Component {

    handleInputEdit = (item) => {
        this.props.onEditRow(item);
    }

    handleInputDelete = (item) => {
        if (window.confirm('¿Estas seguro de querer eliminar a la persona?')){
            this.props.onDeleteRow(item);
        }
    }

    render() {
        const { list } = this.props;
        var keys = list.length > 0 ? Object.keys(list[0]) : [];
        return (
            <div className="table-grid">
                <div className="row header-table">
                    {keys.map((head, i) => <div key={i} className="col headers border">{head}</div>)
                }
                    <div key="Actions" className="col headers border">Acciones</div>
                </div>
                {list.map((item) => {
                    return (
                        <div className="row" key={item[keys[0]]}>
                            {
                                keys.map((key, i) => {
                                    return (
                                        <div key={i} className="col columns border pb-2 pt-2 card aline">{item[key]}</div>
                                    )
                                })
                            }
                            <div className="col columns border pb-2 pt-2 card">
                                <div className="row">
                                    <div className="col columns pb-2 pt-2 card" onClick={() => { this.handleInputEdit(item) }}>
                                        <i className="far fa-edit"></i>
                                    </div>
                                    <div className="col columns pb-2 pt-2 card" onClick={() => { this.handleInputDelete(item) }}>
                                        <i className="far fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
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