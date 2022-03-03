import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveTaskInLocalStorage } from "../../actions/tasksActions";
import { TASK_ADDED } from "../../actions/actionTypes";
import store from "../../store";

const AddTask = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    // FUNCTION FOR GENERATING ID FOR A NEW TASK
    const getRandom = () => [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    const [task, setTask] = useState({ id: getRandom(), name: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            saveTaskInLocalStorage(task);
            store.dispatch({
                type: TASK_ADDED,
                payload: task
            });
            navigate('/list-tasks')
        }
        setValidated(true);
    }
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className='my-3'>
            <h2 className='my-3 text-center'>CREATE A NEW TASK</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTask">
                    <Form.Label className='fw-bolder'>Task Name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control name={'name'} type="text" placeholder="enter your task" onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Task Name is Required
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Button variant="success" type="submit">Add Task</Button>
            </Form>
        </Container>
    );
};

export default AddTask;
