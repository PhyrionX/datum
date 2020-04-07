import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
      role: Model,
      project: Model
    },

    seeds(server) {
      server.create("user", { name: "John Doe" })
      server.create("user", { name: "Alice" })
      server.create("user", { name: "Bob" })

      server.create("role", { name: "Admin" })
      server.create("role", { name: "Editor" })
      server.create("role", { name: "Viewer" })

      server.create("project", { name: "Trip to space" })
      server.create("project", { name: "Assembly Ikea furniture" })
      server.create("project", { name: "Datumize Zentral" })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", schema => {
        return schema.users.all()
      })

      this.get("/roles", schema => {
        return schema.roles.all()
      })

      this.get("/projects", schema => {
        return schema.projects.all()
      })
    },
  })

  return server
}