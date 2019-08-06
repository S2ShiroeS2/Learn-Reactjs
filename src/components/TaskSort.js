import React, { Component } from 'react'
import '../App.css';

class TaskSort extends Component {
    onClick = (sort_by, sort_value) => {
        this.props.onSort(sort_by, sort_value);
        // console.log(this.state);
    }
    render() {
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp xếp
                        <span className="fa fa-caret-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li onClick={() => this.onClick('txtNameJob', 1)}>
                            <a href="#/" role="button" className={this.props.sortBy === 'txtNameJob' && this.props.sortValue === 1 ? 'sort-selected' : ''}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('txtNameJob', -1)}>
                            <a href="#/" role="button" className={this.props.sortBy === 'txtNameJob' && this.props.sortValue === -1 ? 'sort-selected' : ''}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('txtStatus', -1)}>
                            <a href="#/" role="button" className={this.props.sortBy === 'txtStatus' && this.props.sortValue === -1 ? 'sort-selected' : ''}>
                                <span className="fa fa-eye-slash pr-5">
                                    Ẩn
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('txtStatus', 1)}>
                            <a href="#/" role="button" className={this.props.sortBy === 'txtStatus' && this.props.sortValue === 1 ? 'sort-selected' : ''}>
                                <span className="fa fa-check-circle-o pr-5">
                                    Kích hoạt
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskSort;
