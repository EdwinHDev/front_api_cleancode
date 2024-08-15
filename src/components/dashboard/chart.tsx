"use client"

import { Bar, BarChart, AreaChart, Area, XAxis, CartesianGrid, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ChartValues {
  [key: string]: string | number
}

export interface Data {
  chartValues: ChartValues[]
}

export interface Config extends ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface Props {
  data: Data
  config: Config
  type?: "area" | "bar"
  xAxis?: boolean
  yAxis?: boolean
  grid?: boolean
  verticalGrid?: boolean
  tooltip?: boolean
  legend?: boolean
  height?: number
}

export function Chart({
  xAxis = false,
  yAxis = false,
  grid = false,
  verticalGrid = false,
  tooltip = false,
  legend = false,
  type = "area",
  config,
  data,
  height
}: Props) {

  const xAxisDataKey = Object.keys(data.chartValues[0])[0]

  return (
    <ChartContainer config={ config } className="w-full" style={{ height }}>
      <AreaChart
        accessibilityLayer
        data={ data.chartValues }
      >
        { grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" strokeWidth={0.2} strokeOpacity={0.5} /> }
        { xAxis && <XAxis
            dataKey={ xAxisDataKey }
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            scale="auto"
            padding={{ left: 0, right: 0 }}
          />
        }
        { yAxis && <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
        }
        { tooltip && <ChartTooltip content={<ChartTooltipContent />} /> }
        { legend && <ChartLegend content={<ChartLegendContent />} /> }
        {
          Object.keys(config).map((key) => (
            <Area
              key={ key }
              type="natural"
              dataKey={ config[key].label.toLowerCase() }
              fill={ config[key].color }
              stroke={ config[key].color }
              radius={4}
            />
          ))
        }
      </AreaChart>
    </ChartContainer>
  )
}
