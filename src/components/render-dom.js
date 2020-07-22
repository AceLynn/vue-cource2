// 函数式组件
// 只传数据，不监听给它的状态
// 没有生命周期
// 没有状态、实例的组件

// 但，当组件放在vue中用的时候，vue会处理render 作为虚拟节点处理
export default {
  functional: true,
  props: {
    // name: String,
    number: Number,
    renderFunc: Function,
  },
  // ctx指代当前对象
  render: (h, ctx) => {
    // return ctx.props.renderFunc(h, ctx.props.name);
    return ctx.props.renderFunc(h, ctx.props.number);
  },
};
