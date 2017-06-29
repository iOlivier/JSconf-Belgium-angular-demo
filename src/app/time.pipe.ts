import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})

export class TimePipe implements PipeTransform {

  transform(value: any, format: string): any {
    if (!value) return "00:00";
    if (typeof value !== "number") value = parseInt(value, 10);

    return this.two(Math.floor(value / 100) % 100) + ":" + this.quarters(value, format); 
  }

  private quarters(nr, format): string {
    if (format && format === "round") {
      nr = Math.floor((nr % 100) / 15);
      return (nr % 4 === 0) ? 
          "00" : ((nr % 4 === 1) ? "15" : ((nr % 4 === 2) ? "30" : "45"));
    } else {
      return this.two(nr % 100);
    }
  }

  private two(nr): string {
    return  (nr < 10) ? "0"+nr : ""+nr;
  }
}