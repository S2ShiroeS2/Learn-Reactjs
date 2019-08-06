import React, {Component} from 'react';
import TaskItem from './TaskItem';
import '../App.css';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        //Data transfer for app component
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
            );
        //Save data after transfer for app component
        this.setState({
            [name] : value
        });
    }
    render() {
        var {tasks} = this.props; //~ var tasks = this.props.tasks;
        var elementTaskItem = tasks.map((item, index) => {
            return <TaskItem onUpdate={this.props.onUpdate} onUpdateStatus={this.props.onUpdateStatus} onDelete={this.props.onDelete} key={item.id} index={index + 1} task={item} />
        });
        //for Sort
        var {filterName, filterStatus} = this.state;
        return(
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên công việc</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input onChange={this.onChange} value={filterName} type="text" className="form-control" name="filterName" />
                                </td>
                                <td>
                                    <select onChange={this.onChange} value={filterStatus} name="filterStatus" className="form-control">
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elementTaskItem}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;