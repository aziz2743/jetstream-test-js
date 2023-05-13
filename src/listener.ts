import { connect, StringCodec } from "nats";
const servers = process.env.NATS_URL || "nats://localhost:4222";
var i = 0;
const do_listen = () => {
  connect({
    servers: servers.split(','),
  }).then(async (nc) => {
    console.clear();
    console.log('Listener Successfully connect, iteration:', i++);
    const sc = StringCodec();
    nc.drain();
  }).catch((error) => {
    console.log(error)
  });
};
