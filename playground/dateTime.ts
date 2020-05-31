import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date()), currentDayOfYear());
