import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {LineChart} from 'react-easy-chart';
const HEIGHT = 250;
const WIDTH = 450;
const styleLabelWeka = {
    maxWidth: '60px',
    padding: '4px 8px',
    marginLeft: '50px',
    backgroundColor: 'pink'
}
const styleLabelWaitino = {
    maxWidth: '60px',
    padding: '4px 8px',
    marginLeft: '50px',
    backgroundColor: 'cyan'
}

class Chart extends Component {
    prepare(array){
        return array.map((item, i) =>({
             x: moment(item.date).format('DD-MMM-YY HH:mm'), //`1-Jan-15 ${i+1}:00`, 
             y: item.value
            }));
    }
    width(){
        return typeof window === 'object' ? window.screen.width * 0.6 : WIDTH;
    }
    render() {        
        const {data} = this.props;
        let dataChart = [];
        if (Object.keys(data).length){
            dataChart = [                
                this.prepare([...this.props.data.weka]), 
                this.prepare([...this.props.data.waitino])                
            ];
        }       
        return (
           
                <div className='chart flex-b'>
                    {dataChart.length ? 
                        <div className='wrap-chart'>                
                            <LineChart
                                axisLabels={{x: 'Date', y: 'Value, m'}}                                
                                xType={'time'}
                                axes
                                interpolate={'cardinal'}
                                datePattern={'%d-%b-%y %H:%M'}                              
                                style={{ '.label': { fill: 'black' } }}
                                
                                grid
                                dataPoints
                                verticalGrid
                                
                                lineColors={['pink', 'cyan']}
                                width={this.width()}
                                height={HEIGHT}
                                data={dataChart}
                            /> 
                            <div style={styleLabelWeka}>Weka</div>
                            <div style={styleLabelWaitino}>Waitino</div>  
                        </div>
                        :
                        <div>...Loading</div>
                    }                
                    </div>                    
                                  
            
        );
    }
}

Chart.propTypes = {
    data: PropTypes.object.isRequired
};

export default Chart;