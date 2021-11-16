import logger from '../infra/logger';

/**
 * Serviço de Acknowledgment. Gera log do status atual de uma mensagem,
 * isto é, se foi enviada, lida pelo usuário etc.
 */
class AckService {
  run(recipient: string, status: Ack) {
    logger.info(`Message sent to ${recipient} was received with status ${status}`);
  }
}

export default AckService;
