import { BskyAgent } from "@atproto/api";

export interface BleusquiConfiguration {
  identifier: string;
  password: string;
}

export class Bleusqui {
  private declare agent: BskyAgent;

  constructor(config: BleusquiConfiguration) {
    this.setAgent(config);
  }

  private async setAgent(config: BleusquiConfiguration) {
    if (!config.identifier || !config.password)
      throw new Error("Identifier or password not set");

    const agent = new BskyAgent({ service: "https://bsky.social" });
    await agent.login(config);
    this.agent = agent;
  }
}
