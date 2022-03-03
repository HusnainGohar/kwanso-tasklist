import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from 'react-redux'
import { fetchTasks } from "../../actions/tasksActions";

const TaskList = ({ fetchTasks, tasks }) => {
    const [notTaskColor] = useState(tasks.length === 0 ? 'text-danger' : '');
    useLayoutEffect(() => {
        fetchTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container className='my-3'>
            <h2 className={`my-3 text-center ${notTaskColor}`}>
                {tasks.length > 0 ? 'TASKS LIST' : 'NO TASKS TO SHOW'}
            </h2>
            <Row>
                {tasks.length > 0 && tasks.map(task =>
                    <Col md={3} key={task.id}>
                        <Card className='m-2 p-2'>
                            <Card.Body>
                                <Card.Title><h3>{task.name}</h3></Card.Title>
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

export default connect(mapStateToProps, { fetchTasks })(TaskList)
