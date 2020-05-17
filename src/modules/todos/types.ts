import { ActionType } from "typesafe-actions";
import { actions } from "./acions";

export type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
