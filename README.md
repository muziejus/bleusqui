# Bleusquite

After Twitter destroyed the amusing community of bots that had grown up within it,
all of my bots were suddenly stranded.
I have been eager to port the bots over to [Bluesky](http://bsky.app),
especially after seeing how simple it is to use the 
[AT Protocol](https://github.com/bluesky-social/atproto),
which already has a full-featured library, 
[@atproto/api](https://github.com/bluesky-social/atproto/tree/main/packages/api),
for connecting to Bluesky (or any ATP service) with a Node application.

Bleusquite aims to focus the API on bots that post content,
leaving aside a lot of the API functionality,
so that people without a lot of knowledge of Node (or ATP, like myself)
can just wire something up that posts cute phrases or a picture.
As such, Bleusquite does _only_ three things:

- [ ] It posts skeets.
- [ ] It can attach a photo to a skeet.
- [ ] It can react to mentions.

Wiring in the content, setting the schedule via `cron`, etc.,
are left as exercises to the user's creative mind. That said, 
at the bottom of this README is a list of Bluesky bots that use Bleusquite.

## Installation

```
pnpm i bleusquite
```

## Use

This library exposes a class, `Bleusquite`, that has the three methods
mentioned above.

```ts
import {Bleusquite, BleusquiteConfiguration} from "bleusquite";


const config: BleusquiteConfiguration = {
  identifer: "email@example.com", // Obviously don't do this. Use dotenv.
  password: "myPassw0rd" // Obviously don't do this. Use dotenv.
};

const skeet = new Bleusquite(config);
skeet.addPhoto("capybara.jpg", "this is alt text")
  .post("This is so much easier than Twitter, @moacir.com!");
```

## Example Bots

- [@muziejus/camonhudson](https://github.com/muziejus/camonhudson) 
([@camonhudson.moacir.com](https://bsky.app/profile/camonhudson.moacir.com)) - 
A bot running on a Raspberry Pi Zero that takes a few photos a day
and posts them to Bluesky.
