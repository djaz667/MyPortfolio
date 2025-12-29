"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

// ==============================
// THEMES
// ==============================
const THEMES = { light: "", dark: ".dark" } as const

// ==============================
// TYPES
// ==============================
export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

// ==============================
// CONTEXT
// ==============================
const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

// ==============================
// CONTAINER
// ==============================
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

// ==============================
// STYLE
// ==============================
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, c]) => c.theme || c.color
  )

  if (!colorConfig.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

// ==============================
// TOOLTIP
// ==============================
const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent(
  props: (TooltipProps<any, any> & {
    payload?: Array<any>
    label?: string | number
    labelFormatter?: (value: any) => string
    formatter?: (value: any) => string
    color?: string
  }) &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
) {
  const {
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
  } = props

  const { config } = useChart()

  if (!active || !payload?.length) return null

  return (
    <div
      className={cn(
        "grid min-w-32 gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {payload.map((item: any, index: number) => {
        const key = `${nameKey || item.name || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)
        const indicatorColor = color || item.payload?.fill || item.color

        return (
          <div
            key={item.dataKey ?? index}
            className="flex items-center gap-2"
          >
            {!hideIndicator && (
              <div
                className={cn(
                  "shrink-0 rounded-[2px] border",
                  indicator === "dot" && "h-2.5 w-2.5",
                  indicator === "line" && "h-2.5 w-1",
                  indicator === "dashed" &&
                    "h-2.5 w-0 border-[1.5px] border-dashed"
                )}
                style={{
                  backgroundColor: indicator === "dashed" ? "transparent" : indicatorColor,
                  borderColor: indicatorColor,
                }}
              />
            )}

            <div className="flex flex-1 justify-between gap-4">
              <span className="text-muted-foreground">
                {itemConfig?.label || item.name}
              </span>
              <span className="font-mono font-medium tabular-nums">
                {item.value?.toLocaleString()}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ==============================
// LEGEND
// ==============================
const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  nameKey,
}: React.ComponentProps<"div"> & {
  hideIcon?: boolean
  nameKey?: string
  payload?: any[]
}) {
  const { config } = useChart()

  if (!payload?.length) return null

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className="flex items-center gap-1.5"
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// ==============================
// HELPER
// ==============================
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) return undefined

  const p =
    "payload" in payload && typeof payload.payload === "object"
      ? payload.payload
      : undefined

  let labelKey = key

  if (payload && key in payload) {
    labelKey = String((payload as any)[key])
  } else if (p && key in p) {
    labelKey = String((p as any)[key])
  }

  return config[labelKey] || config[key]
}

// ==============================
// EXPORTS
// ==============================
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
