
import Weka from '../services/weka';
import Waitino from '../services/waitino';
import mailtrap from './mailtrap';
import emailChartRender from './emailChartRender';
import constant from './constant';
import {slice} from 'lodash';
require('dotenv').config()

export default async function () {    
    try{
        let [weka, waitino] = await Promise.all([
            Weka.getLast(),
            Waitino.getLast()
        ]);
        weka =  weka.map(item => Waitino.collect(item));
        waitino = waitino.map(item => Waitino.collect(item));
        
        //if 00:00:00 send chart
        const hour = new Date().getHours();
        if (hour === parseInt(process.env.MIDNIGHT)){
            const message = emailChartRender({ weka, waitino });            
            mailtrap({message});
            console.log('Sent chart');
        }
        //if alarm send error        
        if (process.env.ERROR_SEND === constant.ON){                               
            let countError = slice(weka, - process.env.COUNT_VALUE_FOR_ERROR).reduce((collection, item, sum=0)=>{               
                if (item.value === parseInt(process.env.ERROR_VALUE)){     
                    sum = sum + 1;
                }
                return sum;
            });  
            if (countError === parseInt(process.env.COUNT_VALUE_FOR_ERROR)){
                mailtrap({message: `<div>Attention level of the Weka at zero!</div>`});
                console.log('Sent - Attention level of the Weka at zero!');
            } 
            countError = slice( waitino,  - process.env.COUNT_VALUE_FOR_ERROR).reduce((collection, item, sum=0)=>{ 
                if (item.value === parseInt(process.env.ERROR_VALUE)){     
                    sum = sum + 1;
                }
                return sum;
            });
            
            if (countError === parseInt(process.env.COUNT_VALUE_FOR_ERROR)){                
                mailtrap({message: `<div>Attention level of the Waitino at zero!</div>`});
                console.log('Sent - Attention level of the Waitino at zero!');
            }
            
        }
       
    }
    catch(err){
        throw err;
    }
}