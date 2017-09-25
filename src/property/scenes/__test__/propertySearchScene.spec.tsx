import {shallow} from '../../../../test/enzymeWrapper';
import {SearchPage} from '../propertySearchScene';
import * as React from 'react';


describe('searchPage', () => {
  it('', () => {
    let searchPage = shallow(<SearchPage
      isLoading={false}
      request={{place_name: 'London'}}
      search={(str) => {console.log(str)}}
    />);

    expect(searchPage.find()).toBe('London');

  })
});