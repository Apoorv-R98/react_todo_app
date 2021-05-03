import { Button, List, ListItem, ListItemText, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge:true });
        setInput('');
        setOpen(false);
    }

  return (
    <>
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
            <h1>I am a modal</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
            <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>

      <List className="todo_list">
        <ListItem>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          {" "}
          Delete Me
        </Button>
      </List>
    </>
  );
}

export default Todo;