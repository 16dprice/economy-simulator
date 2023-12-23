import { Entity } from "./entity";

export type Transaction = {
  party: Entity;
  counterparty: Entity;
  amount: number;
};
