const request = require("supertest");
const app = require("../index.js");

describe("testing/tasks", () => {
    const task = {
      title: "Title Test",
      completed: "false"
    };
   
    test("Create a task", async () => {
      const res = await request(app)
        .post("/tasks/create")
        .send(task)
        .expect(201)
           const sendTask = {
            ...task,
            __v: res.body.task.__v,
            _id: res.body.task._id,
            title: res.body.task.title,
            completed: res.body.task.completed,
            createdAt: res.body.task.createdAt,
            updatedAt: res.body.task.updatedAt,
          };
          const newTask = res.body.task;
          expect(newTask).toEqual(sendTask);
    });
  });
  