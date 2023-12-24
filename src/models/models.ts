export type Economy = {
  id: string;
  entities: { [id: Entity["id"]]: Entity };
};

export type Entity = {
  id: string;
  money: number;
};

export type Item = {
  id: string;
  name: string;
  price: number;
};

export type Transaction = {
  id: string;
  party: Entity;
  counterparty: Entity;
  amount: number;
};
