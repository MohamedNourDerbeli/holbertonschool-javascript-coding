#!/usr/bin/env node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error fetching the API:', error);
        return;
    }

    let todos = JSON.parse(body);
    const completedTasksPerUserId = {};
    todos.forEach(todo => {
        if (todo.completed && !completedTasksPerUserId[todo.userId]) {
            completedTasksPerUserId[todo.userId] = 1;
        } else {
            completedTasksPerUserId[todo.userId]++;
        }
    });
    console.log(completedTasksPerUserId);

});
