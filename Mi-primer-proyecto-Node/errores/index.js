//diferentes mensajes x consola

/*console.log("hola estoy trabajando con node")
console.info("hola este es un msj info")
console.debug("esto es un mensaje de debu")
console.warn("este es un msj de advertencia")
console.error("este es un mensaje de error")*/

//Winston libreria para gestionar errores

const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug', //nos va a tomar solo los niveles que esten por debajo del nivel que le pasemos (debug 5,info 2, warn 1, error 0)
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //Los transport son todas las acciones q se ejecutaran cada vez q haya un logger
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    // nos va a crear un archivo en donde se guardan los errores
     //con esto nos muestra todo en pantalla tambien
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console(),
  ],
});


//logger.log("hola estoy trabajando con node")
logger.info("hola este es un msj info")
logger.debug("esto es un mensaje de debu")
logger.warn("este es un msj de advertencia")
logger.error("este es un mensaje de error")
