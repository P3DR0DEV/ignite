import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return { message: "Hello world" };
});

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("[INFO]: Server is running on port 3000");
  });
