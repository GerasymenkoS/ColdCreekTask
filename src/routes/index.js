import main from './main';
import api from './api';

export default function(app) {    
    app.use('/', main);
    app.use('/api', api);
};
