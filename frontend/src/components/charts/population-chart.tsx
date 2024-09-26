"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  data: {
    label: "year",
    color: "#AC94F4",
  },
} satisfies ChartConfig;

interface PopulationChartProps {
  data: Array<{
    year: number;
    value: number;
  }>;
}

export function PopulationChart({ data }: PopulationChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Population Chart</CardTitle>
        <CardDescription>
          Population evolution throughout the years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="value"
              type="natural"
              fill="var(--color-data)"
              fillOpacity={0.4}
              stroke="var(--color-data)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
