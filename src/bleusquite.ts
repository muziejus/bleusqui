import { AppBskyEmbedImages, BlobRef, BskyAgent } from "@atproto/api";
import type { Image } from "@atproto/api/dist/client/types/app/bsky/embed/images.js";
import type { Record } from "@atproto/api/dist/client/types/app/bsky/feed/post.js";
// import { fileTypeFromBuffer } from "file-type";
import fs from "fs";

export interface BleusquiteConfiguration {
  identifier: string;
  password: string;
}

export interface BleusquiteRecord extends Record {
  embed?: AppBskyEmbedImages.Main;
}

export class Bleusquite {
  declare identifier: string;

  declare password: string;

  declare agent: BskyAgent;

  postRecord: BleusquiteRecord = {
    text: "",
    createdAt: new Date().toISOString(),
    $type: "app.bsky.feed.post",
  };

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

  addPhoto(file: string | Buffer, alt: string): Bleusquite {
    if (!alt) throw new Error("Alt text is required");

    let buffer: Buffer;
    if (typeof file === "string") {
      buffer = fs.readFileSync(file);
    } else {
      buffer = file;
    }
    // this.uploadPhoto(buffer).then((blob) => {
    //   if (blob) {
    //
    //     this.photosNumber += 1;
    //
    const image: Image = {
      image: buffer as unknown as BlobRef,
      // image: blob.data.blob,
      alt,
    };

    if (!this.postRecord.embed) {
      const images: Image[] = [];
      this.postRecord["embed"] = {
        images,
        $type: "app.bsky.embed.images",
      } as AppBskyEmbedImages.Main;
    }

    if (this.postRecord.embed.images.length < 4) {
      this.postRecord.embed.images.push(image);
    } else {
      throw new Error("Too many photos");
    }
    //   return this;
    // });

    return this;
  }

  /*
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
  */
}
