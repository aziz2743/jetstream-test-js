import { AckPolicy, connect, Empty } from 'nats';

const do_list = async () => {


  const nc = await connect();
  const jsm = await nc.jetstreamManager();

  // list all the streams, the `next()` function
  // retrieves a paged result.
  let streams = await jsm.streams.list().next();
  streams.forEach((si) => {
    console.log(si);
  });

  console.log('Deleting streams')
  streams.forEach(async (si) => {

    await jsm.streams.delete(si.config.name);
  })

  await nc.close();


  // find a stream that stores a specific subject:
  // const name = await jsm.streams.find("mystream.A");

  // retrieve info about the stream by its name
  // const si = await jsm.streams.info(name);

  // list all consumers for a stream:
  // const consumers = await jsm.consumers.list(stream).next();
  // consumers.forEach((ci) => {
  //   console.log(ci);
  // });

};

// do_list();

