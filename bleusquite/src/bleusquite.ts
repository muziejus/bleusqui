import { BskyAgent, PostRecord } from "@atproto/api";

export interface BleusquiteConfiguration {
  identifier: string;
  password: string;
}

export default class Bleusquite {
  declare agent: BskyAgent;

  declare postRecord: PostRecord;

  post(text: string): void {
    console.log(text);
  }

  addPhoto(location: string, alt: string) {
    console.log(location, alt);

    return this;
  }
}
