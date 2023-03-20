import React, {useState, useEffect, Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Col,Row,Card,CardBody,CardHeader,Table} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux'
import {
    getList,
    filterWithCategory,
    filterWithLabel,
    filterWithStatus,
    addNewItem,
    markAllItems,
    removeItem,
    selectedItem
} from '../../../redux/todoapp/actions';
import { toast } from 'react-toastify';

const TodoApp = () => {

    const dispatch = useDispatch();
    const allTodoItems = useSelector(content => content.TodoApp.allTodoItems);
    const todoItems = useSelector(content => content.TodoApp.todoItems);


    const [category,setCategory] = useState('')
    const [markAll,setmarkAll] = useState(false)
    // eslint-disable-next-line
    const [status,setStatus] = useState('')
    const [task,setTask] = useState('')
    const [categories,setCategories] = useState('photos')
    const [labels,setLabels] = useState('Marriage')
    const [addTask,setaddTask] = useState('')
    const [Color,setColor] = useState('secondary')
    

    useEffect(() => {
        dispatch(getList());
    },[dispatch])

    const handleCategory = (ctgry) => {
        setCategory(ctgry)
        dispatch(filterWithCategory(ctgry));
    }

    const handleLabel = (e) => {
        var badges = document.querySelectorAll('.badge-pill');
        badges.forEach(function(badge){
            badge.classList.remove('active');
        });
        e.target.classList.add('active');
        dispatch(filterWithLabel(e.target.innerHTML))
    }

    const handleStatus = (sts) => {
        setStatus(sts)
        dispatch(filterWithStatus(sts));
    }

    const handleDelete = (itemId) => {
        dispatch(removeItem(itemId));
        toast.success("Deleted Task !");
    }

    const handleStatusUpdate = (itemId, itemStatus) => {
        if(itemStatus === 'completed'){
            dispatch(selectedItem(itemId, 'pending'));
            toast.error("Task In-completed !");
        }else{
            dispatch(selectedItem(itemId, 'completed'));
            toast.success("Task Completed !");
        }
    }

    const markAllStatus = () => {
        setmarkAll(!markAll)
        if(markAll === true){
            toast.error("All Task In-Completed !");
        }else{
            toast.success("All Task Completed !");
        }
        dispatch(markAllItems(markAll));
    }

    const openTaskWrapper = () => {
            setaddTask('visible')
    }
    const closeTaskWrapper = () => {
            setaddTask('')
    }

    const onTaskChanged = (e) =>{
        setTask(e.currentTarget.value)
    }

    const onCategoryChanged = (e) =>{
        setCategories(e.currentTarget.value)
    }

    const onLabelChanged = (e, color) =>{
        setLabels(e.currentTarget.value)
        setColor(color)
    }

    const addNewTask = () => {
        if(task === '') {
            document.querySelector('.task-msg').classList.remove('taskmag-hide')
            document.querySelector('.task-msg').classList.add('taskmag-show')
        }else{
            dispatch(addNewItem(task,categories, labels, Color))
            setaddTask('')
            setTask('')
            document.getElementById('newtask').value = '';
            document.querySelector('.task-msg').classList.add('taskmag-hide')
            document.querySelector('.task-msg').classList.remove('taskmag-show')
        }
    }

    return (
    (todoItems) ?
        <Fragment>
            <Breadcrumb title="To-do App" parent="To Do" />

            <Container fluid={true}>
                <Row>
                    <Col xl="9 xl-60">
                        <Card>
                            <CardHeader>
                                <h5>To-Do</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="todo">
                                    <div className="todo-list-wrapper">
                                        <div className="todo-list-container">
                                            <div className="mark-all-tasks">
                                                <div className="mark-all-tasks-container">
                                                    <span className="mark-all-btn" role="button" id="mark-all-finished">
                                                        <span className="btn-label">Mark all as finished</span>
                                                        <span className="action-box completed" onClick={() => markAllStatus()}>
                                                            {markAll &&
                                                            <i className="icon"><i className="icon-check"></i></i> }
                                                        </span>
                                                    </span>
                                                    <span className="mark-all-btn move-down" role="button" id="mark-all-incomplete">
                                                        <span className="btn-label">Mark all as Incomplete</span>
                                                        <span className="action-box">
                                                            <i className="icon"><i className="icon-check"></i></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="todo-list-body custom-scrollbar">
                                                <ul id="todo-list">
                                                    {todoItems.filter((item) => item.status !== 'deleted').map((item, i) =>
                                                        <li className={"task " + item.status} key={i}>
                                                        <div className="task-container">
                                                            <div className="table-responsive">
                                                                <Table borderless>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td><h4 className="task-label mb-0">{item.title}</h4></td>
                                                                        <td className="task-categories">{item.category}</td>
                                                                        <td className="task-badge"><span className={"badge badge-pill badge-"+item.labelColor}>{item.label}</span></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>

                                                            <span className="task-action-btn">
                                                                <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleDelete(item.id)}>
                                                                    <i className="icon"><i className="icon-trash"></i></i>
                                                                </span>
                                                                <span className="action-box large complete-btn" title="Mark Complete" onClick={() =>handleStatusUpdate(item.id, item.status)}>
                                                                    <i className="icon"><i className="icon-check"></i></i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="todo-list-footer">
                                                <div className="add-task-btn-wrapper">
                                                    <span className={"add-task-btn new-"+ addTask}>
                                                        <div href="" className="btn btn-primary" onClick={() => openTaskWrapper()}>
                                                                <i className="icon-plus"></i> Add new task
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className={"new-task-wrapper "+ addTask}>
                                                    <span className="text-danger task-msg taskmag-hide">Please Write Task First</span>
                                                    <textarea
                                                        id="newtask"
                                                        name="task"
                                                        placeholder="Enter new task here. . ."
                                                        defaultValue={task}
                                                        onChange={onTaskChanged}
                                                    />
                                                    <h6>Categories</h6>
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        id="category"
                                                        defaultChecked={true}
                                                        value="photos"
                                                        onChange={onCategoryChanged}
                                                        className="mr-1"
                                                    /><label htmlFor="category" className="mr-3">Photos</label>
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        id="category"
                                                        value="videos"
                                                        onChange={onCategoryChanged}
                                                        className="mr-1"
                                                    /><label htmlFor="category" className="mr-3">Videos</label>
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        id="category"
                                                        value="stories"
                                                        onChange={onCategoryChanged}
                                                        className="mr-1"
                                                    /><label htmlFor="category" className="mr-3">Stories</label>
                                                    <h6 className="mt-todo">Labels</h6>
                                                    <input
                                                        type="radio"
                                                        name="label"
                                                        id="label"
                                                        value="Marriage"
                                                        onChange={(e) => onLabelChanged(e, 'secondary')}
                                                        defaultChecked={true}
                                                        className="mr-1"
                                                    /><label htmlFor="label" className="mr-3">Marriage</label>
                                                    <input
                                                        type="radio"
                                                        name="label"
                                                        id="label"
                                                        value="Event"
                                                        onChange={(e) => onLabelChanged(e, 'primary')}
                                                        className="mr-1"
                                                    /><label htmlFor="label" className="mr-3">Event</label>
                                                    <input
                                                        type="radio"
                                                        name="label"
                                                        id="label"
                                                        value="Personal"
                                                        onChange={(e) => onLabelChanged(e, 'info')}
                                                        className="mr-1"
                                                    /><label htmlFor="label" className="mr-3">Personal</label>
                                                    <br />
                                                    <span className="btn btn-success mr-1 add-new-task-btn" id="add-task" onClick={() => addNewTask()}>Add Task</span>
                                                    <span className="btn btn-danger  cancel-btn" id="close-task-panel" onClick={() => closeTaskWrapper()} >Close</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-popup hide">
                                        <p>
                                            <span className="task"></span>
                                            <span className="notification-text"></span>
                                        </p>
                                    </div>
                                </div>
                                <script type="tect/template" id="task-template">
                                    <li className="task">
                                        <div className="task-container">
                                            <div className="table-responsive">
                                                <Table borderless>
                                                    <tbody>
                                                    <tr>
                                                        <td className="task-label mb-0"></td>
                                                        <td className="task-categories"></td>
                                                        <td className="task-badge"></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <span className="task-action-btn">
                                                <span className="action-box large delete-btn" title="Delete Task" >
                                                    <i className="icon"><i className="icon-trash"></i></i>
                                                </span>
                                                <span className="action-box large complete-btn" title="Mark Complete">
                                                    <i className="icon"><i className="icon-check"></i></i>
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                </script>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="3 xl-40">
                        <Card>
                            <CardBody>
                                <div className="todo-options">
                                    <h6>Status</h6>
                                    <ul>
                                        <li>
                                            <a href="#javaScript" onClick={() => handleStatus('')}><span className="m-r-5"><i className="fa fa-repeat"></i></span> All Tasks<span className="badge badge-pill pull-right mr-0">{allTodoItems.filter((item) => item.status !== 'deleted').length}</span></a>
                                        </li>
                                        <li>
                                            <a href="#javaScript" onClick={() => handleStatus('pending')}><span className="m-r-5"><i className="fa fa-refresh"></i></span> Pending Tasks<span className="badge badge-pill pull-right mr-0">{allTodoItems.filter((item) => { return (item.status === 'pending' && item.status !== 'deleted') }).length}</span></a>
                                        </li>
                                        <li>
                                            <a href="#javaScript" onClick={() => handleStatus('completed')}><span className="m-r-5"><i className="fa fa-check-square-o"></i></span> Completed Tasks<span className="badge badge-pill pull-right mr-0">{allTodoItems.filter((item) => { return (item.status === 'completed' && item.status !== 'deleted') }).length}</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="todo-options">
                                    <h6>Categories</h6>
                                    <div className="form-group custom-radio-ml mb-0">
                                        <div className="radio radio-primary">
                                            <input type="radio" name="radio" id="radio1" defaultChecked={category ==="photos"} onClick={() => handleCategory('photos')} />
                                                <label htmlFor="radio1">Photos</label>
                                        </div>
                                        <div className="radio radio-primary">
                                            <input type="radio" name="radio" id="radio2" defaultChecked={category ==="videos"} onClick={() => handleCategory('videos')} />
                                                <label htmlFor="radio2">Videos</label>
                                        </div>
                                        <div className="radio radio-primary">
                                            <input type="radio" name="radio" id="radio3" defaultChecked={category ==="stories"} onClick={() => handleCategory('stories')} />
                                                <label htmlFor="radio3" className="mb-0">Stories</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="todo-options">
                                    <h6>Labels</h6>
                                    <div className="badges-todo">
                                        <h6><span className="badge badge-pill badge-secondary" data-value="Marriage" onClick={handleLabel}>Marriage</span></h6>
                                        <h6><span className="badge badge-pill badge-primary" data-value="Event" onClick={handleLabel}>Event</span></h6>
                                        <h6><span className="badge badge-pill badge-info" data-value="Personal" onClick={handleLabel}>Personal</span></h6>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        : <div className="loading"></div>
    )
}


export default TodoApp;
