import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string ) {
    if (filterString === "") {
      return value;
    }
    const annonces = [];
    
    for ( const annonce of value) {
      //console.log('--filterstring---')
        // console.log(filterString)
         //console.log('--value---')
         //console.log(value)
         
      
      if (annonce['titre_anc'].startsWith(filterString)) {
         annonces.push(annonce)
         //console.log('-----------')
         //console.log(value)
      }
    }
    return annonces;
  }

  }
