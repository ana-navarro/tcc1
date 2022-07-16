import React from 'react';
import { Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [{
        name: 'VGX',
        gerado: 4000,
        gasto: 2400,
        amt: 2400,
    },
    {
        name: 'MINERA',
        gerado: 3000,
        gasto: 1398,
        amt: 2210,
    },
    {
        name: 'UNIMONTES',
        gerado: 2000,
        gasto: 9800,
        amt: 2290,
    },
    {
        name: 'OAB',
        gerado: 2780,
        gasto: 3908,
        amt: 2000,
    },
    {
        name: 'AREA',
        gerado: 1890,
        gasto: 4800,
        amt: 2181,
    },
];

const getIntroOfPage = (label) => {
    if (label === 'Page A') {
        return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
        return "Page B is about women's dress";
    }
    if (label === 'Page C') {
        return "Page C is about women's bag";
    }
    if (label === 'Page D') {
        return 'Page D is about household goods';
    }
    if (label === 'Page E') {
        return 'Page E is about food';
    }
    if (label === 'Page F') {
        return 'Page F is about baby food';
    }
    return '';
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
        }

    return null;
};

export const BarChartGenerate = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                    <Card.Title><h2 className='flex justify-center items-center text-sm text-gray-500'>Gráfico Gasto/Gerado</h2></Card.Title>
                        <BarChart
                            width={700}
                            height={300}
                            data={data}
                            margin={{
                                top: 30,
                                right: 20,
                                left: 20,
                                bottom: 2,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Bar yAxisId="left" dataKey="gerado" fill="#8884d8" />
                            <Bar yAxisId="right" dataKey="gasto" fill="#82ca9d" />
                        </BarChart>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
