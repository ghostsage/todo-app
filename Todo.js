import React, { useState } from 'react'
import { Modal,List,ListItem,ListItemText,ListItemAvatar, Paper, Button } from '@material-ui/core';
import './Todo.css'
import db from './Firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    paper:{
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        padding:theme.spacing(2,4,3),
    }
}))

function Todo(props) {
    const classes = useStyle();
    const [open,setOpen] = useState(false)
    const [input,setInput] = useState('');
    const handleOpen = () => {
        setOpen(true)
    }
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo:input,
        },{merge:true})
        setOpen(false)
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Update</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Todo..."/>
            </ListItem>
            <Button color="secondary" onClick={e => setOpen(true)}>Edit</Button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
