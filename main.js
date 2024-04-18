#! /usr/bin/env node 
import inquirer from "inquirer";
let todolist = [];
let condition = true;
console.log("\n \t Wellcome to ifra aslam todolist\n");
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "select an option you want to do: ",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-list", "Exit"],
            }
        ]);
        if (option.choices === "Add Task") {
            await addTask();
        }
        else if (option.choices === "Delete Task") {
            await deleteTask();
        }
        else if (option.choices === "Update Task") {
            await updateTask();
        }
        else if (option.choices === "View Todo-list") {
            await viewTask();
        }
        else if (option.choices === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :",
        }
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added sucessfully in todo-list`);
};
//Function to view all Todo-list tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Function to delte a task from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to delete:",
        }
    ]);
    let deletedTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task is deleted sucessfully from your Todo-list`);
};
//function to update a task
let updateTask = async () => {
    await viewTask();
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index no of your task you want to update",
        },
        {
            name: "new task",
            type: "input",
            message: "Now Enter new task name:",
        }
    ]);
    todolist[updateTaskIndex.index - 1] = updateTaskIndex.newTask;
    console.log(`\n Task at index no. ${updateTaskIndex.index - 1} updated sucessfully [for updated list check  option : "View todo-list"]`);
};
main();
