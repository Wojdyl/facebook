import {map} from 'rxjs/operators';
import {IPostList} from '../interfaces/post-list.interface';

export function sortBy(collection, mapTo) {
  return collection.sort((item1, item2) => {
    const date1 = mapTo(item1);
    const date2 = mapTo(item2);
    if (date1 < date2) {
      return 1;
    } else if (date1 > date2) {
      return -1;
    } else {
      return 0;
    }
  });
}


export function sortByOperator ( key ) {
  return map((list) => {
    return sortBy(list, (item) => {
      return new Date(item[key]);
    });
  });
}
