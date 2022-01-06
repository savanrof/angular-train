import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(posts: any[], filterText: string): any[] {
    if(!posts){
      return [];
    }
    if (!filterText){
      return posts;
    }
    filterText = filterText.toLowerCase();
    return posts.filter(it => {
      return it.title.toLocaleLowerCase().includes(filterText) || it.body.toLocaleLowerCase().includes(filterText);
    })
  }

}
