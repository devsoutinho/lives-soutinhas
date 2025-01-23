"use client";
import * as React from "react";
import "dayjs/locale/pt-br";
import "dayjs/locale/de";
import * as locales from "@mui/material/locale";
import * as pickerLocales from "@mui/x-date-pickers/locales";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

type SupportedLocales = keyof typeof locales;

export default function BasicDateCalendar() {
  const [value, setValue] = React.useState(null);
  const [locale, setLocale] = React.useState<SupportedLocales>("ptBR");

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale], pickerLocales[locale]),
    [locale, theme]
  );

  const dayOfWeekFormatter = (weekday) => {
    console.log("weekday", weekday);
    return `${weekday.format('dd')}.`;
  }

  return (
    <>
      <select
        onChange={(event) => {
          setLocale(event.target.value as SupportedLocales);
        }}
        value="ptBR"
      >
        {Object.keys(locales).map((key, i) => (
          <option
            key={key}
          >
            {key}
          </option>
        ))}
      </select>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <ThemeProvider theme={themeWithLocale}>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            format="DD/MM/YYYY"
            dayOfWeekFormatter={dayOfWeekFormatter}
          />
          <DateCalendar
            dayOfWeekFormatter={dayOfWeekFormatter}
          />
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
}