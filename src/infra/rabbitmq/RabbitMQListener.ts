import * as Amqp from 'amqp-ts';

class RabbitMQListener {
  listen(url: string, callback: any) {

    var connection = new Amqp.Connection(url);

    var exchange = connection.declareExchange("amqp.direct");

    var queue = connection.declareQueue("whatsapp");

    queue.bind(exchange);

    queue.activateConsumer((callback));
  }
}

export default function rabbitmq() {
  return new RabbitMQListener();
}
