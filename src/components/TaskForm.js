import React, {Component} from 'react';

class TaskFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtNameJob: '',
            txtStatus: false
        }
    }
    
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'txtStatus') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    //Catch the event for form
    onSubmitRequest = (event) => {
        event.preventDefault();
        //Data transfer for App
        this.onClear();
        this.onCloseForm();
    }
    onSend = () => {
        this.props.onSubmit(this.state);
    }

    onClear = () => {
        this.setState({
            txtNameJob: '',
            txtStatus: false
        });
    }

    componentWillMount() {
        if(this.props.tasksEditing) {
            this.setState({
                id: this.props.tasksEditing.id,
                txtNameJob: this.props.tasksEditing.txtNameJob,
                txtStatus: this.props.tasksEditing.txtStatus
            });
        }
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops !== null && nextprops.tasksEditing !== null) {
            this.setState({
                id: nextprops.tasksEditing.id,
                txtNameJob: nextprops.tasksEditing.txtNameJob,
                txtStatus: nextprops.tasksEditing.txtStatus
            });
        } else if(nextprops.tasksEditing === null) {
            this.setState({
                id: '',
                txtNameJob: '',
                txtStatus: false
            });
        }
    }
    
    render() {
        var {id} = this.state;
        return(            
            <div className={id !== '' ? "panel panel-warning" : "panel panel-success"}>
                  <div className="panel-heading">
                        <h3 className="panel-title"> {id !== '' ? 'Chỉnh sửa công việc' : 'Thêm công việc'}
                            <span onClick={this.onCloseForm} className="fa fa-times-circle text-right"></span>
                        </h3>
                  </div>
                  <div className="panel-body">                        
                        <form onSubmit={this.onSubmitRequest}>                      
                            <div className="form-group">
                                <label htmlFor="txtNameJob">Tên công việc:</label>
                                <input type="text" className="form-control" onChange={this.onChange} value={this.state.txtNameJob} name="txtNameJob"></input>
                            </div>
                            <label htmlFor="txtStatus">Trạng thái:</label>
                            <select onChange={this.onChange} value={this.state.txtStatus} name="txtStatus" className="form-control">
                                <option value={false}>Ẩn</option>
                                <option value={true}>Kích hoạt</option>
                            </select>
                            <div className="text-center">
                                <button onClick={this.onSend} type="submit" className="btn btn-success mt-10">
                                    <span className="fa fa-floppy-o mr-5"></span> Lưu lại
                                </button>
                                <button onClick={this.onClear} type="submit" className="btn btn-danger mt-10 ml-5">
                                    <span className="fa fa-times mr-5"></span> Hủy bỏ
                                </button>
                            </div>
                        </form>
                  </div>
            </div>            
        );
    }
}

export default TaskFrom;