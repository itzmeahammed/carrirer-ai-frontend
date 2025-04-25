// src/components/ToDoList.js
import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import Sidebar from "./sidebar"; // Import Sidebar component
import "./ToDoList.css"; // Add your custom styles here

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, status: "todo" }, // Default status is "To Do"
      ]);
      setNewTask("");
    }
  };

  // Move task between columns
  const moveTask = (taskId, status) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  };

  // Create a list of tasks filtered by their status
  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className='todo-container'>
      <Sidebar /> {/* Include Sidebar here */}
      <div className='todo-content'>
        <h2 className='todo-header'>To-Do List</h2>
        <div className='task-input-container'>
          <input
            type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Add a new task'
            className='task-input'
          />
          <button onClick={addTask} className='add-task-button'>
            Add Task
          </button>
        </div>

        <div className='columns-container'>
          <TaskColumn
            title='To Do'
            tasks={getTasksByStatus("todo")}
            moveTask={moveTask}
            status='todo'
          />
          <TaskColumn
            title='In Progress'
            tasks={getTasksByStatus("in-progress")}
            moveTask={moveTask}
            status='in-progress'
          />
          <TaskColumn
            title='Done'
            tasks={getTasksByStatus("done")}
            moveTask={moveTask}
            status='done'
          />
        </div>
      </div>
    </div>
  );
};

const TaskColumn = ({ title, tasks, moveTask, status }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      moveTask(item.id, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`task-column ${isOver ? "drag-over" : ""}`}>
      <h3>{title}</h3>
      <div className='task-list'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} moveTask={moveTask} />
        ))}
      </div>
    </div>
  );
};

const Task = ({ task, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`task ${isDragging ? "dragging" : ""}`}
      style={{ cursor: "move" }}
    >
      <div className='task-content'>{task.text}</div>
      <div className='task-actions'>
        <button onClick={() => moveTask(task.id, "in-progress")}>
          In Progress
        </button>
        <button onClick={() => moveTask(task.id, "done")}>Done</button>
      </div>
    </div>
  );
};

export default ToDoList;
