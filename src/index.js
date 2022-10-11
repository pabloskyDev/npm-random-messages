const messages = [
    "oscar",
    "Juan",
    "Diego",
    "Maria",
    "Julia",
    "Nicolas",
    "Carmen",
    "Leonardo",
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };