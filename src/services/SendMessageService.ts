import logger from '../infra/logger';
import Mapper from '../utils/Mapper';

/**
 * Serviço para envio de mensagens via whatsapp
 */
class SendMessageService {
  private client: any;

  constructor(whatsappClient: any) {
    this.client = whatsappClient;
  }

  run(queueMessage: any) {
    queueMessage.ack();
    const message: IMessage = Mapper.map(queueMessage);
    logger.info(`Attempt to send message via whatsapp to number ${message.recipient}`)
    this.client.sendText(message.recipient, message.body);
  }
}

export default SendMessageService;
