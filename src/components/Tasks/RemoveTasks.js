import React, { useLayoutEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { deleteTasks, fetchTasks } from "../../actions/tasksActions";

const RemoveTasks = ({ deleteTasks, tasks }) => {
    const [notTaskColor] = useState(tasks.length === 0 ? 'text-danger' : '');
    const navigate = useNavigate();
    const [tasksToDelete, setTasksToDelete] = useState([])
    const handleChange = (id) => {
        if (tasksToDelete.includes(id))
            setTasksToDelete(tasksToDelete.filter(task => task !== id))
        else
            setTasksToDelete([...tasksToDelete, id])
    }
    const handleClick = () => {
        deleteTasks(tasksToDelete)
        navigate('/')
    }

    useLayoutEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Container className='my-3'>
            <h2 className={`my-3 text-center ${notTaskColor}`}>{tasks.length > 0 ? 'TASKS TO DELETE' : 'NO TASKS TO DELETE'}</h2>
            {tasksToDelete.length > 0 && (
                <Button variant="danger" className='float-right' onClick={handleClick}>Remove Tasks</Button>
            )}
            <Row>
                {tasks.length > 0 && tasks.map(task =>
                    <Col md={3} key={task.id}>
                        <Card className='m-2 px-2 py-1'>
                            <Card.Body as={Row}>
                                <input className='col-md-2 col-sm-2 mt-2' type="checkbox" placeholder='' onChange={() => handleChange(task.id)} />
                                <Card.Title as={Col} md={10} sm={2}><h3>{task.name}</h3></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        msg: state.tasksReducer.msg,
    }
};

export default connect(mapStateToProps, { deleteTasks, fetchTasks })(RemoveTasks)
