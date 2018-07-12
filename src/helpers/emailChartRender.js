import React from 'react';
import { renderToString } from 'react-dom/server';
import Chart from '../client/components/Chart'

export default function (data) { 
    console.log(Chart)  
    const content = renderToString(<Chart data={data}/>)
    
    return `
        <html>
        <head>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        </html>
    `;
}