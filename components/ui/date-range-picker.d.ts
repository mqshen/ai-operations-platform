declare module "@/components/ui/date-range-picker" {
  import { ReactNode } from "react"
  
  interface DateRangePickerProps {
    dateRange: { start: Date; end: Date }
    onDateRangeChange: (range: { start: Date; end: Date }) => void
    className?: string
  }

  export function DateRangePicker(props: DateRangePickerProps): ReactNode
}