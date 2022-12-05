import { Registry, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";

export {};

declare global {
  interface Window {
    server: Server<Registry<AnyModels, AnyFactories>>;
  }
}
