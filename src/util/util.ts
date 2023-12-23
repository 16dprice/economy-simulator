import { v4 as uuidv4 } from "uuid";
import { Economy } from "../models/economy";
import { Entity } from "../models/entity";

export const getInitialEconomy = async (): Promise<Economy> => {
  const scenarioFilePath = process.env.SCENARIO_DATA_FILE_PATH;
  if (scenarioFilePath === undefined) throw new Error();

  const file = Bun.file(scenarioFilePath);
  const contents = await file.json<{ entities: Array<{ money: number }> }>();

  const economy: Economy = { entities: {} };
  contents.entities.forEach((entityInfo) => {
    const id = uuidv4();

    economy.entities[id] = {
      id,
      money: entityInfo.money,
    };
  });

  return economy;
};
