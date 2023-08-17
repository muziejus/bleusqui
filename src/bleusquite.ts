import { BskyAgent, type PostRecord } from "@atproto/api";
import { fileTypeFromBuffer } from "file-type";
import fs from "fs";

export interface BleusquiteConfiguration {
  identifier: string;
  password: string;
}

export class Bleusquite {
  declare identifier: string;

  declare password: string;

  declare agent: BskyAgent;

  declare postRecord: PostRecord;

  photosNumber = 0;

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
    this.uploadPhoto(fs.readFileSync(location)).then((blob) => {
      // if (blob) {
      this.photosNumber += 1;
      // }

      console.log(blob, alt);
      return this;
    });
  }

  private async uploadPhoto(buffer: Buffer) {
    const fileType = await fileTypeFromBuffer(buffer);
    if (fileType) {
      try {
        const blob = await this.agent.uploadBlob(buffer, {
          encoding: fileType.mime,
        });
        return blob;
      } catch (e) {
        console.log(e);
      }
    }

    return null;
  }
}
