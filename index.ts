import { EconomySimulationService } from "./src/services/economySimulation.service";
import { getInitialEconomy } from "./src/util/util";

const initialEconomy = await getInitialEconomy();

console.log(initialEconomy.entities);

// const entities = [];
const entities = Object.keys(initialEconomy.entities).map((k) => {
  return initialEconomy.entities[k];
});
console.log(entities);

const economySimulationService = new EconomySimulationService();
const newEconomy = economySimulationService.conductTransaction(initialEconomy, {
  party: entities[0],
  counterparty: entities[1],
  amount: 100,
});

console.log(newEconomy);
