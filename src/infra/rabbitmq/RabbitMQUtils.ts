import * as dotenv from 'dotenv';

dotenv.config();
class RabbitMQUtils {
  static getConnectionString(): string {
    const connection = process.env.AMQP_CONNECTION;

    if (!connection) {
      throw new Error('AMQP Connection must be setted');
    }

    return connection;
  }
}

export default RabbitMQUtils;
