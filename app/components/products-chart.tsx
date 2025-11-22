"use client"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface ChartData {
    week: string;
    products: number;
}

export default function ProductsChart({data}: {data: ChartData[]}){
    console.log(data);
    
    return(
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{top:5, right:30, left:20, bottom:5}}> 
                    <defs>
                        <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                    <XAxis dataKey="week" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                        }}
                        labelStyle={{color: "#374151", fontWeight: "500"}}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="products" 
                        stroke="#8b5cf6" 
                        fill="url(#colorProducts)" 
                        strokeWidth={2} 
                        dot={{fill: "#8b5cf6", strokeWidth: 2, r:3}} 
                        activeDot={{fill: "#8b5cf6", strokeWidth: 2, r:5}}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}