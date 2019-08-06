import React, {Component} from 'react';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import './App.css';
// import { includes, filter } from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            tasksEditing: null,
            filter: {
                name: '',
                status: -1
            },
            sort_by: 'txtNameJob',
            sort_value: 1
            
        };
    }

    componentWillMount() {
        if(localStorage !== null && localStorage.getItem('tasks') !== null) {
            //converted into object
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }
    //Custom Random Id type string
    randomString() {
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }
    GenerateID() {
        return this.randomString() + this.randomString() + '-' + this.randomString() + '-' + this.randomString() + this.randomString() + '-' + this.randomString() + '-' + this.randomString() + '-' + this.randomString();
    }
    //Open and close Form when click button
    onDisplayForm = () => {
        if(this.state.isDisplayForm === true && this.state.tasksEditing !== null) {
            this.setState({
                isDisplayForm: true,
                tasksEditing: null
            });
        } else {
            this.setState({
                isDisplayForm: !this.isDisplayForm,
                tasksEditing: null
            });
        }
    }

    onOpenForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }
    //
    onSubmitRequest = (data) => {
        var {tasks} = this.state;
        if(data.id === '') {
            //Add data from form to list
            data.id = this.GenerateID();
            tasks.push(data);
        } else {
            //Editing data
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            tasksEditing: null
        });
        // //Using LocalStorage for save data
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    //Find the index of id wants to change status
    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((tasks, index) => {
            if(tasks.id === id) {
                result = index;
            }
        });
        return result;
    }

    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].txtStatus = !tasks[index].txtStatus;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            //splice: xóa phần tử trong mảng theo index và số lượng phần tử muốn xóa
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var tasksEditing = tasks[index];
        this.setState({
            tasksEditing : tasksEditing
        });
        this.onOpenForm();
    }
    //Filter
    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                //Convert string to lowercase
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
        
    }
    //Sort
    onSort = (sort_by, sort_value) => {
        this.setState({
            sort_by: sort_by,
            sort_value: sort_value
        });
    }
    render() {
        //ES6 event open and close form
        var {tasks, isDisplayForm, tasksEditing, filter, sort_by, sort_value } = this.state; // ~ var tasks = this.state.tasks;
        if(filter !== null) {
            //Filter name
            if(filter.name !== '') {
                tasks = tasks.filter((task) => {
                    return task.txtNameJob.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            //Filter status
            tasks = tasks.filter((task) => {
                if(filter.status === -1) {
                    return task;
                } else {
                    return task.txtStatus === (filter.status === 1 ? true : false);
                }
            });
        }
        //Sort
        //Name
        if(sort_by === 'txtNameJob') {
            tasks.sort((ob1,ob2) => {
                if(ob1.txtNameJob > ob2.txtNameJob) {
                    return sort_value;
                } else {
                    if(ob1.txtNameJob < ob2.txtNameJob) {
                        return -sort_value;
                    } else {
                        return 0;
                    }
                }
            });
        } else {
            tasks.sort((ob1,ob2) => {
                if(ob1.txtStatus > ob2.txtStatus) {
                    return -sort_value;
                } else {
                    if(ob1.txtStatus < ob2.txtStatus) {
                        return sort_value;
                    } else {
                        return 0;
                    }
                }
            });
        }
        console.log(sort_by+' - '+sort_value);
        var elementDisplayForm = isDisplayForm === true ? <TaskForm tasksEditing={tasksEditing} onSubmit={this.onSubmitRequest} onCloseForm={this.onCloseForm}/> : '';
        return(
        <div className="container">
            <div className="text-center">
                <h1>Quản lý công việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                    {elementDisplayForm}
                </div>               
                <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                    <button onClick={this.onDisplayForm} type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5"></span>Thêm công việc
                    </button>
                    <TaskControl sortBy={sort_by} sortValue={sort_value} onSort={this.onSort}/>
                    <TaskList tasks={tasks} onFilter={this.onFilter} onUpdate={this.onUpdate} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete}/>
                </div>  
            </div>
        </div>
        );
    }
}

export default App;
