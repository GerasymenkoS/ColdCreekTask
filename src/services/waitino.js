import {data_waitino_take_aggregate as Waitino} from '../models';
import {pick} from 'lodash';
import constant from '../helpers/constant';

export default Object.freeze({
    getLast,
    collect    
  });

  async function getLast(){
    return Waitino.count()
            .then(count =>
              Waitino.findAll({
                orderBy: [['date', 'DESC']],
                offset: count - constant.PERIOD,  
              }))
            .then(result =>
              Promise.resolve(result)
            );
  }  
  function collect(data){
    return pick(data, ['id', 'value', 'date'])
  }

