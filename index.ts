import { Hooks } from "@yarnpkg/core";
import { config } from "dotenv";
import findConfig from "find-config";

export const hooks: Hooks = {
  async setupScriptEnvironment(_project, scriptEnv) {
    const env = config({
      path: findConfig(".env") ?? undefined,
    });
    console.log(env);
    return Object.assign(scriptEnv, env.parsed);
  },
};
