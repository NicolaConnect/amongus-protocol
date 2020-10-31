import {
    AmongusClient,
    MapID,
    MasterServers
} from "../index.js"

import { Int2Code } from "../lib/util/Codes.js";

(async () => {
    const client = new AmongusClient({
        debug: true
    });

    const server = MasterServers.NA[0];

    await client.connect(server[0], server[1], "weakeyes");

    const game = await client.host();

    await client.join(game.code, {
        doSpawn: false
    });

    console.log(game);
    console.log(Int2Code(game.code));
})();