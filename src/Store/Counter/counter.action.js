import { ADD, SUBSTRACT } from "./counter.action.types";

export const add = (payload=1) => ({type:ADD, payload});
export const substract = (payload=1) => ({type:SUBSTRACT, payload});