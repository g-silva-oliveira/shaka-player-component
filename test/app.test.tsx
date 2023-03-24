import * as Enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { ReactPlayer as Player } from '../src/components/player';

Enzyme.configure({ adapter: new Adapter() });

describe("Player", () => {
  it("Should render correctly", () => {
    const tree = renderer.create(<Player />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should renders source[manifest] string correctly", () => {
    const props = { src: "this is sample src" };
    const tree = Enzyme.shallow(<Player {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("Should render className container correctly", () => {
    const props = { className: "container-class-name" };
    const tree = Enzyme.shallow(<Player {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("Should render playerClassName container correctly", () => {
    const props = { playerClassName: "player-class-name" };
    const tree = Enzyme.shallow(<Player {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("Should render container className and playerClassName container correctly", () => {
    const props = {
      className: "container-class-name",
      playerClassName: "player-class-name",
    };
    const tree = Enzyme.shallow(<Player {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
