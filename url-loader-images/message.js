const waitTime = new Promise((todoOk,todoMal) => {
    setTimeout(() => {
        todoOk('han pasado 3 segundos')
    },3000 )
})

module.exports = {
    firstMessage: 'hola mundo desde el modulo',
    delayedMessage: async () => {
        const message = await waitTime;
        console.log(message);
    }
}