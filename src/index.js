import 'babel-polyfill';
import express from 'express';
import cron from "node-cron";
import cronWorker from './helpers/cron';
import mainRoutes from './routes/index';

const app = express();

app.use(express.static('public'));

mainRoutes(app);

// schedule tasks to be run on the server   
cron.schedule("0 */1 * * *", function() {
  cronWorker();
});

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
