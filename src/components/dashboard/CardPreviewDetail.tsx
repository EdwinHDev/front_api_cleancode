import { Card, CardBody } from "@nextui-org/react"
import { HTMLAttributes } from "react"
import { Chart, Config, Data } from "./chart"

interface Props extends HTMLAttributes<HTMLDivElement> {
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
  icon?: React.ReactNode
  title: string
  description: string
}

export const CardPreviewDetail = ({
  data,
  config,
  type = "area",
  xAxis = false,
  yAxis = false,
  grid = false,
  verticalGrid = false,
  tooltip = false,
  legend = false,
  height = 200,
  icon,
  title,
  description,
  ...props
}: Props) => {

  return (
    <div { ...props }>
      <Card className="w-full" isPressable>
        <CardBody>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center w-10 h-10">
              { icon }
            </div>
            <h4 className="text-lg font-semibold">{ title }</h4>
          </div>
          <p className="text-sm text-gray-500 ms-2 mb-2">{ description }</p>

          <Chart
            config={ config }
            data={ data }
            grid={ grid }
            verticalGrid={ verticalGrid }
            legend={ legend }
            tooltip={ tooltip }
            height={ height }
            type={ type }
            xAxis={ xAxis }
            yAxis={ yAxis }
          />
        </CardBody>
      </Card>
    </div>
  )
}
