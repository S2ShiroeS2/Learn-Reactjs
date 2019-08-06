import React, {Component} from 'react';
import '../App.css';

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }
    render() {
        //Take task and index of it from TaskList
        var {task, index} = this.props;
        return(
            <tr>
                <td className="text-center">{index}</td>
                <td className="text-center">{task.txtNameJob}</td>
                <td className="text-center">
                    <span onClick={this.onUpdateStatus} className={task.txtStatus ? 'label label-success' : 'label label-danger'}>{task.txtStatus === true ? 'Kích hoạt' : 'ẩn'}</span>
                </td>
                <td className="text-center">
                    <button onClick={this.onUpdate} type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    <button onClick={this.onDelete} type="button" className="btn btn-danger ml-5">
                        <span className="fa fa-trash mr-5"></span> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;