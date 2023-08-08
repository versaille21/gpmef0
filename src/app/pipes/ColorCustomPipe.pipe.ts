import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPipesCall',
})
export class ColorPipe implements PipeTransform {
  transform(value: string): string {
    return (
      value.substring(0, 3).toUpperCase() +
      value.substring(3, value.length).toLowerCase()
    );
  }
}
