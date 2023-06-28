import http from 'http';
import https from 'https';
import { config } from "./config"
import fs from 'fs';
import app from './app';
import router from "./src/routes/index"

app.use('/', router)

const httpport = config.server.httpport || 'error';
const httpsport = config.server.httpsport || 'error';
const useHttps = process.env.USE_HTTPS === 'true';

if(useHttps) {
    const privateKey = fs.readFileSync('localhost-key.pem', 'utf8');
    const certificate = fs.readFileSync('localhost.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen( httpsport, () => {
        console.log(`HTTPS Server running on port ${httpsport}`);
    })
} else {
    const httpServer = http.createServer(app);
    httpServer.listen( httpport, () => {
        console.log(`HTTP Server running on port ${httpport}`);
    })
}
// const initialSyncDB = async () => {
//     await sequelize.sync ({ force: true })
// }