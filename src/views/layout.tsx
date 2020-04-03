import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

// 引入action
import { changeNumber } from '../redux/actions'
import { Menu } from 'antd';

// 引入组件
import './layout.less'
import { Home } from './home';
import { Rank } from './rank';
import { Find } from './find';
import { Recommend } from './recommend';

const mapStateToProps = (state: any) => {
  // console.log('state',state)
  const { title, testBumber } = state.ChangeNumber
  return {
    title,
    testBumber
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeNumber: () => dispatch(changeNumber())
  }
}

// 定义props类型
export interface ILayoutProps {
  title: string;
  testBumber: number;
  changeNumber: () => void;
}


class Layout extends React.Component<ILayoutProps, any> {
  constructor(props: ILayoutProps) {
    super(props);
    this.state = {
      currentMenu: 'home'
    }
  }

  render() {
    const { currentMenu } = this.state;
    const {
      title,
      testBumber,
      changeNumber
    } = this.props;

    return (
      <div className="layout">
        <div className="header">
          <h3 className="logo">{title}</h3>
          <Menu
            className="header-menu"
            mode="horizontal"
            selectedKeys={[currentMenu]}
            onClick={this.handleClickMenu}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="rank">Rank</Menu.Item>
            <Menu.Item key="find">Find</Menu.Item>
            <Menu.Item key="recommend">recommend</Menu.Item>
          </Menu>
        </div>
        <div className="container">
          {
            currentMenu === "home" && (
              <Home
                testBumber={testBumber}
                changeNumber={changeNumber}
              />
            )
          }
          {currentMenu === "rank" && <Rank />}
          {currentMenu === "find" && <Find />}
          {currentMenu === "recommend" && <Recommend />}
          </div>
      </div>
    );
  }

  private handleClickMenu = (e: any) => {
    this.setState({
      currentMenu: e.key
    });
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Layout);

/**
* compose
* compose的返回值还是一个函数，调用这个函数所传递的参数将会作为compose最后一个参数的参数，从而像’洋葱圈’似的，由内向外，逐步调用。
* 最后返回返回结果：compose(fn1, fn2, fn3) (...args) = > fn1(fn2(fn3(...args)));
*/
