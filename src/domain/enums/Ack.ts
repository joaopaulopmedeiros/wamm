/**
 * Confira a documentação para mais detalhes dos tipos de Ack: https://github.com/orkestral/venom
 */
enum Ack {
  Read = 3,
  Received = 2,
  Sent = 1,
  Clock = 0,
}
