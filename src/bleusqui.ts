import { BskyAgent } from "@atproto/api";

export interface BleusquiConfiguration {
  identifier: string;
  password: string;
}

export class Bleusqui {
  declare agent: BskyAgent;

  constructor(config: BleusquiConfiguration) {
    this.setAgent(config);
  }

  private async setAgent(config: BleusquiConfiguration) {
    if (!config.identifier || !config.password)
      throw new Error("Identifier or password not set");

    this.agent = new BskyAgent({ service: "https://bsky.social" });
    await this.agent.login(config);
  }
}
