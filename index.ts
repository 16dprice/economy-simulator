import { v4 as uuidv4 } from "uuid";
import { EconomySimulationService } from "./src/services/economySimulation.service";
import { getInitialEconomy } from "./src/util/util";

const initialEconomy = await getInitialEconomy();

console.log(initialEconomy.entities);

const entities = Object.keys(initialEconomy.entities).map((k) => {
  return initialEconomy.entities[k];
});
console.log(entities);

const economySimulationService = new EconomySimulationService();
const newEconomy = economySimulationService.conductTransaction(initialEconomy, {
  id: uuidv4(),
  party: entities[0],
  counterparty: entities[3],
  amount: 100,
});

console.log(newEconomy);
