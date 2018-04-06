import { PipeTransform, Pipe  } from '@angular/core';
@Pipe({
  name: 'startFrom'
})
export class TruncatePipe implements PipeTransform {
  transform(input: string, start: number): string {

    if (!input || !input.length) {
      return;
  }
  start = +start; // parse to int
  return input.slice(start);
    // return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

@Pipe({
  name: 'orderBy'
})
export class OrderBy implements PipeTransform {
  transform(input: string, start: number): string {

    if (!input || !input.length) {
      return;
  }
  start = +start; // parse to int
  return input.slice(start);
    // return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
