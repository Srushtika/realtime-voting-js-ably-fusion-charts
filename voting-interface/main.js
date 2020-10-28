const realtime = new Ably.Realtime({ key: "<YOUR-ABLY-API-KEY>" });
const myVotingChannel = realtime.channels.get("voting-channel");

function castVote(choice) {
  myVotingChannel.publish("vote", choice, (err) => {
    console.log(choice);
    console.log(err);
  });
}
