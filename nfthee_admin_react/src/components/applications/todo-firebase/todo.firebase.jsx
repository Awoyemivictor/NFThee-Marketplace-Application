import React, {useState, useEffect, Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Col,Row,Card,CardBody,CardHeader,Table,Button} from 'reactstrap'
import firebase from '../../../data/base';
import { deleteList, creatTodoList, updateTask, markAllTask } from '../../../services/todo-firebase.service';
import { toast } from 'react-toastify';

const TodoFirebaseApp = () => {
    
    const [todoList, setTodoList] = useState([]);
    const [markAll,setmarkAll] = useState(false)
    const [task,setTask] = useState('')
    const [addTask,setaddTask] = useState('')
    

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('todo').onSnapshot((snapshot) => {
            const newItem = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTodoList(newItem)
        })
        return () => unsubscribe();

    },[])


    const handleDelete = (itemId) => {
        toast.success("Deleted Task !");
        deleteList(itemId)
    }

    const handleStatusUpdate = (itemId, itemStatus) => {
        if (itemStatus.completed ===  false) {
            toast.success("Task Completed !");
        }
        if(itemStatus.completed ===  true){
        toast.error("Task In-completed !");
        }
        itemStatus.completed = !itemStatus.completed;
        updateTask(itemStatus);
    }

    const markAllStatus = (checked) => {
        if(checked === true){
            toast.success("All Task Completed !");
        }else{
            toast.error("All Task In-Completed !");
        }
        setmarkAll(checked);
        markAllTask(checked)
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


    const addNewTask = () => {
        if(task === '') {
            document.querySelector('.task-msg').classList.remove('taskmag-hide')
            document.querySelector('.task-msg').classList.add('taskmag-show')
        }else{
            creatTodoList(task);
            setaddTask('')
            setTask('')
            document.getElementById('newtask').value = '';
            document.querySelector('.task-msg').classList.add('taskmag-hide')
            document.querySelector('.task-msg').classList.remove('taskmag-show')
        }
    }

    return (
        <Fragment>
            <Breadcrumb title="To-Do Firebase App" parent="To Do" />
            <Container fluid={true}>
                <Row>
                    <Col xl="12">
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
                                                        <span className="action-box completed" onClick={() => markAllStatus(!markAll)}>
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
                                                {todoList.length > 0 ?
                                                    todoList.map((todoData, index) =>
                                                        <li className={"task " + (todoData.completed ? 'completed' : '')} key={index}>
                                                        <div className="task-container">
                                                            <div className="table-responsive">
                                                                <Table borderless>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td><h4 className="task-label mb-0">{todoData.task}</h4></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                            <span className="task-action-btn">
                                                                <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleDelete(todoData.id)}>
                                                                    <i className="icon"><i className="icon-trash"></i></i>
                                                                </span>
                                                                <span className="action-box large complete-btn" title="Mark Complete" onClick={() =>handleStatusUpdate(index, todoData)}>
                                                                    <i className="icon"><i className="icon-check"></i></i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                   ) : ''}
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
                                                    <Button color="success" className="mr-1 add-new-task-btn" id="add-task" onClick={() => addNewTask()}>Add Task</Button>
                                                    <Button color="danger" className="cancel-btn" id="close-task-panel" onClick={() => closeTaskWrapper()} >Close</Button>
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
                </Row>
            </Container>
        </Fragment>
    )
}
export default TodoFirebaseApp;
