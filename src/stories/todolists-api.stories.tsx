import React, {useEffect, useState} from 'react';
import {todolistAPI} from "../api/todolists-api";

// Todolist
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('new TD')
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f43a39cd-6cc8-48b4-9ffa-e7192a8c6fbf'
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '887eaf35-c8e0-4094-abe2-6800be6b6162'
        const title = 'updated TD'
        todolistAPI.updateTodolist(todolistId, title)
            .then((res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
// Task
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e1f2ef1a-6b2f-46a5-ad4a-c0012bb830e7'
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data.items)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)

    const deleteTask = () => {
        const todolistId = 'e1f2ef1a-6b2f-46a5-ad4a-c0012bb830e7';
        const taskId = 'fc354ebe-c501-48be-b44b-c290c7b1fa38';
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e1f2ef1a-6b2f-46a5-ad4a-c0012bb830e7'
        const title = 'new task'
        todolistAPI.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>('title 1')
    const [description, setDescription] = useState<string>('description')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')

    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const makeUpdate = () => {
        todolistAPI.updateTask(todolistId, taskId, {
            title: taskTitle,
            description: description,
            status: status,
            priority: priority,
            startDate: '',
            deadline: '',
        })
            .then((res) => {
                setState(res.data)
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
            <input placeholder={'taskTitle'} value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <input placeholder={'description'} value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
            <input placeholder={'status'} value={status} type='number' onChange={(e) => setStatus(+e.currentTarget.value)}/>
            <input placeholder={'priority'} value={priority} onChange={(e) => setPriority(+e.currentTarget.value)}/>
            <input placeholder={'startDate'} value={startDate} onChange={(e) => setStartDate(e.currentTarget.value)}/>
            <input placeholder={'deadline'} value={deadline} onChange={(e) => setDeadline(e.currentTarget.value)}/>
        </div>
        <button onClick={makeUpdate}>update task</button>
    </div>
}