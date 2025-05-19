"use client"

import { DateRange } from "react-day-picker"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

interface DateRangePickerProps {
  dateRange: { start: Date; end: Date }
  onDateRangeChange: (range: { start: Date; end: Date }) => void
  className?: string
}

export function DateRangePicker({
  dateRange,
  onDateRangeChange,
  className,
}: DateRangePickerProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[260px] justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange.start ? (
              dateRange.end ? (
                <>
                  {format(dateRange.start, "yyyy-MM-dd")} -{" "}
                  {format(dateRange.end, "yyyy-MM-dd")}
                </>
              ) : (
                format(dateRange.start, "yyyy-MM-dd")
              )
            ) : (
              <span>选择日期范围</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={{ from: dateRange.start, to: dateRange.end }}
            onSelect={(range) => {
              if (range?.from && range?.to) {
                onDateRangeChange({
                  start: range.from,
                  end: range.to
                })
              }
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}