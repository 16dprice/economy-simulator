import { Entity } from "./entity";

export type Economy = {
  entities: { [id: Entity["id"]]: Entity };
};
