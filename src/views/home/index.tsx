import React, { useState } from 'react';
function Test(value: any) {
  const { testBumber } = value;
  const [count, setCount] = useState(testBumber)
  const [ hooks, setHooks ]  = useState('hooks');
  console.log('useState(hooks)', useState('hooks'))
  // console.log('setHooks', setHooks)

  let aa = () => {
    setCount(count + testBumber)
    setHooks('holle word')
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {hooks} </p>
      <button onClick={aa}>
        Click me
      </button>
    </div>
  );
}

// 定义props类型
export interface HomeProps {
  title: string;
  testBumber: number;
  changeNumber: () => void;
}

export class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      showModal: false
    }
    // this.change = this.change.bind(this);
  }
  public render() {
    const { testBumber } = this.props;
    console.log('this.props',this.props)
    return (
      <div className="hh">
        首页首页首页
        <Test testBumber={testBumber}/>
      </div>
    );
  }
  async componentDidMount() {
    // console.log(this)
    await this.test();
    console.log('componentDidMount',2);
  }

  change(e: string) {
    this.setState({
      value: e
    })
  }
  
  async test() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('test',1);
        resolve();
      })
    })
  }
}
