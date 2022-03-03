import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./utils/Header";
import AddTaskPage from './Tasks/AddTask';
import RemoveTasksPage from './Tasks/RemoveTasks';
import TaskListPage from './Tasks/TaskList';

function AppRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<TaskListPage />} />
                <Route exact path='/list-tasks' element={<TaskListPage />} />
                <Route exact path='/create-task' element={<AddTaskPage />} />
                <Route exact path='/bulk-delete' element={<RemoveTasksPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes