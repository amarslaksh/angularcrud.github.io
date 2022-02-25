import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  /*Custom Pipe to filter using searchText
  * @param value will contain all the values*/
  transform(value: any, searchText: string): any {

    if (!searchText) {
      return value;
    }

    return value.filter(item => {
      return Object.keys(item).some(key => {
        if(typeof item[key] == 'string') {
          return String(item[key].toLowerCase()).includes(searchText.toLowerCase());
        }
      })
    })
  }

}
