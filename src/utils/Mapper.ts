class Mapper {
  static map(queueMessage: any) {
    const message = JSON.parse(queueMessage.content.toString());
    message.Payload = JSON.parse(message.Payload);
    const result: IMessage = {
      recipient: String(message.Payload.Recipient),
      body: String(message.Payload.Body)
    }
    return result;
  }
}

export default Mapper;
