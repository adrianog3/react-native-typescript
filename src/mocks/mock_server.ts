import { createServer } from "miragejs";
import { NODE_ENV } from "@env";

if (NODE_ENV === "development") {
  window.server = createServer({
    routes() {
      // Mock of your routes here
      // See official documentation for more details:
      // https://miragejs.com/quickstarts/react-native/development/
    },
  });
}
