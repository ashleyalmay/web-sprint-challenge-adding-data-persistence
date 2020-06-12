const express = require('express');
const ProjectRouter = require('./projects/project-router');
const ResourcesRouter = require('./resources/resources-router');
const TasksRouter = require('./tasks/tasks-router');
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);
module.exports = server;