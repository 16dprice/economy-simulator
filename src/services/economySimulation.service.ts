import { Economy } from "../models/economy";
import { Transaction } from "../models/transaction";

export class EconomySimulationService {
  conductTransaction(economy: Economy, transaction: Transaction): Economy {
    const { party, counterparty, amount } = transaction;

    if (party.id === counterparty.id) {
      throw new Error("party and counterparty can't be the same");
    }

    if (
      !(party.id in economy.entities) ||
      !(counterparty.id in economy.entities)
    ) {
      throw new Error("entities aren't in the economy");
    }

    if (amount > party.money) {
      throw new Error("party doesn't have enough money");
    }

    economy.entities[party.id].money = party.money - amount;
    economy.entities[counterparty.id].money = counterparty.money + amount;

    return economy;
  }
}
