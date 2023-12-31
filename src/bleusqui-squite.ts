import { AppBskyEmbedImages} from "@atproto/api";
import type { Image } from "@atproto/api/dist/client/types/app/bsky/embed/images.js";
import type { Record } from "@atproto/api/dist/client/types/app/bsky/feed/post.js";
import { fileTypeFromBuffer } from "file-type";
import fs from "fs";
import { Bleusqui } from "./bleusqui.ts";

export interface BleusquiSquiteRecord extends Record {
  embed?: AppBskyEmbedImages.Main;
}

export class BleusquiSquite extends Bleusqui {
  postRecord: BleusquiSquiteRecord = {
    text: "",
    createdAt: new Date().toISOString(),
    $type: "app.bsky.feed.post",
  };

  post(text: string): void {
    console.log(text);
  }

  async addPhoto(file: string | Buffer, alt: string): Promise<BleusquiSquite> {
    console.log("agent: " , this.agent)
    if (!alt) throw new Error("Alt text is required.");

    let buffer: Buffer;
    if (typeof file === "string") {
      buffer = fs.readFileSync(file);
    } else {
      buffer = file;
    }

    if (buffer.length > 1000000){
      throw new Error("Image too large.");
    }

    const uploadedBlob = await this.uploadPhoto(buffer);

    if(!uploadedBlob) throw new Error("Upload failed.");

    const image: Image = {
      // image: buffer as unknown as BlobRef,
      image: uploadedBlob.data.blob,
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

    return this;
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

  constructor(args:any){
    super(args);
  }
}
