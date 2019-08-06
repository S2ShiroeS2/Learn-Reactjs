import React, {Component} from 'react';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';

class TaskControl extends Component {
    render() {
        return(
            <div className="row mt-15">
                <TaskSearch />
                <TaskSort sortBy={this.props.sortBy} sortValue={this.props.sortValue} onSort = {this.props.onSort} />
            </div>
        );
    }
}

export default TaskControl;