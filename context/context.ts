import { createContext } from "react";
import { ProviderContext } from "./types";

const defaultErrorMesssage = "Context hasn't been initialized yet.";

const defaultContext: ProviderContext = {
    create() {
        throw new Error(defaultErrorMesssage);
    },
    changeStatus() {
        throw new Error(defaultErrorMesssage);
    },
    changeTitle() {
        throw new Error(defaultErrorMesssage);
    },
    deleteTask() {
        throw new Error(defaultErrorMesssage);
    },
    getTasks() {
        throw new Error(defaultErrorMesssage);
    },
};
export const TaskContext = createContext<ProviderContext>(defaultContext);
