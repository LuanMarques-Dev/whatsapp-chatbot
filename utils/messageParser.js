function parseMessage(message) {
    if (message.toLowerCase().includes('olá')) {
        return 'Oi! Como posso te ajudar hoje?';
    }
    if (message.toLowerCase().includes('ajuda')) {
        return 'Estou aqui para ajudar! O que você precisa saber?'
    }
    return 'Desculpa, não entendi. Pode reformular?'
}

module.exports = { parseMessage };
