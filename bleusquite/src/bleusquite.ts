import { BskyAgent, type PostRecord } from "@atproto/api";

export interface BleusquiteConfiguration {
  identifier: string;
  password: string;
}

export class Bleusquite {
  declare identifier: string;

  declare password: string;

  declare agent: BskyAgent;

  declare postRecord: PostRecord;

  constructor(config: BleusquiteConfiguration) {
    this.identifier = config.identifier;
    this.password = config.password;
    this.setAgent();
  }

  async setAgent() {
    if (!this.identifier || !this.password)
      throw new Error("Identifier or password not set");

    const agent = new BskyAgent({ service: "https://bsky.social" });
    await agent.login({ identifier: this.identifier, password: this.password });
    this.agent = agent;
  }

  post(text: string): void {
    console.log(text);
  }

  addPhoto(location: string, alt: string) {
    console.log(location, alt);

    return this;
  }
}
