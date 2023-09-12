

export type StatusType = "completed" | "incomplete"
export type ProviderContext = {
    create(title: string, status: StatusType): void;
    deleteTask(id: number): void;
    changeStatus(id: number, status: StatusType): void;
    changeTitle(id: number, title: string): void;
    getTasks(): Task[]
};

export type Task = {
    title: string;
    status: StatusType;
    id: number;
}


export type State = {
    tasks: Task[]
};