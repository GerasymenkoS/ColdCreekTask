import express from 'express';
const router = express.Router();
import Weka from '../services/weka';
import Waitino  from'../services/waitino';

router.post('/data', async (req, res, next) => {
    try{
        const [weka, waitino] = await Promise.all([
                Weka.getLast(),
                Waitino.getLast()
        ]);
        res.status(200).send({
                weka: weka.map(item => Waitino.collect(item)),
                waitino: waitino.map(item => Waitino.collect(item)),
        });
    }
    catch(err){
        res.status(500).send({error: err.message});        
    }
});

module.exports = router;