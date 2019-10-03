import { MyDatePipe } from './my-date.pipe';
import {async, TestBed} from '@angular/core/testing';
import {HomePageComponent} from '../../core/pages/home-page/home-page.component';
import {PostListComponent} from '../../posts/components/post-list/post-list.component';
import {PostListItemComponent} from '../../posts/components/post-list-item/post-list-item.component';
import {SharedModule} from '../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe = null;

  beforeEach(() => {
     pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should works', () => {
    const input = 'Wed Oct 03 2222 10:14:13 GMT+0200 (czas środkowoeuropejski standardowy)';
    const output = pipe.transform(input);
    expect(output).toEqual('3 października 2222, 10:14');
  });

  it('should return empty string for falsy values', () => {
    const falsyValues = ['', null, 0, false, undefined, NaN];
    // const output = pipe.transform(falsyValues);

    falsyValues.forEach( (input) => {
      const output = pipe.transform(input as string);
      expect(output).toEqual('');
    });
  });
  it('should return empty string for non date-strings', () => {
    const input = 'asdfasdas';
    const output = pipe.transform(input);

    expect(output).toEqual('');
  });
});
