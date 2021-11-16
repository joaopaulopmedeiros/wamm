import { create } from 'venom-bot';
import logger from './infra/logger';
import rabbitmq from './infra/rabbitmq/RabbitMQListener';
import RabbitMQUtils from './infra/rabbitmq/RabbitMQUtils';
import AckService from './services/AckService';
import SendMessageService from './services/SendMessageService';

class Chatbot {
  start() {
    create({
      session: 'whatsapp-chatbot',
      multidevice: false
    })
      .then((client) => {
        this.work(client);
        logger.info('Chatbot started successfully');
      })
      .catch((error) => {
        logger.info(error);
      });
  }

  /**
   * Ouve eventos de publicação em fila do rabbitmq
   * e envia mensagens automaticamente via whatsapp.
   * Além disso, é configurado para usar o cliente
   * do whatsapp para aferir se mensagem foi enviada,
   * lida etc. A isto, se dá o nome de acknowledgment
   * ou ack.
   * @param whatsapp
   */
  private work(whatsapp: any) {
    const broker = rabbitmq();

    broker.listen(RabbitMQUtils.getConnectionString(), (message: any) => {
      new SendMessageService(whatsapp).run(message);
    })

    whatsapp.onAck((item: any) => {
      new AckService().run(item.to, item.ack);
    });
  }
}

export default function chatbot() {
  return new Chatbot();
};
