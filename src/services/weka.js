import {data_weka_take_aggregate as Weka} from '../models';
import constant from '../helpers/constant';

export default Object.freeze({
    getLast,    
}); 

async function getLast(){
  return Weka.count()
          .then(count =>
            Weka.findAll({
              orderBy: [['date', 'DESC']],
              offset: count - constant.PERIOD,  
            }))
          .then(result =>
            Promise.resolve(result)
          );
}  

