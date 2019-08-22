import React from 'react';
import { shallow } from 'enzyme';
import Main from '../src/page/Main';

describe('Index page render', () => {
  it('should render page', () => {
    const page = shallow(<Main />);

    expect(page).toMatchSnapshot();
  });
});
