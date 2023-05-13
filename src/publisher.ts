import { connect, StringCodec } from 'nats';

const servers = process.env.NATS_URL || 'nats://localhost:4222';
var i = 0;
const do_pub = () => {
  connect({
    servers: servers.split(','),
  }).then((nc) => {
    console.clear();
    console.log('Publisher Successfully connect, iteration: ', i++)
    const sc = StringCodec();
    const js = nc.jetstream();

    nc.drain();
  }).catch((error) => {
    console.log(error)
  });
};

