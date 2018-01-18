import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('getBinaryToDecimal', () => {
  it('should return a decimal number from binary', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.instance().getBinaryToDecimal('1001')).toEqual(9);
  });
});

describe('addOrSubTwoNumbers', () => {
  it('should add or subtract two binaries given the op and return decimal', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.instance().addOrSubTwoNumbers('1001', '0001', 'add')).toEqual(10);
    expect(wrapper.instance().addOrSubTwoNumbers('1001', '0001', 'sub')).toEqual(8);
  });
});

describe('getDecimalToBinary', () => {
  it('should return Binary number', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.instance().getDecimalToBinary(9)).toEqual('1001');
  });
});

describe('getDecimalToHex', () => {
  it('should convert decimal to hex string', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.instance().getDecimalToHex(11)).toEqual('b');
  });
});
