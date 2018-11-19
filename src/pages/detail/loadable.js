import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'), //异步加载当前文件夹的index文件
  loading() {
    return <div>加载</div>
  }
});

export default () => <LoadableComponent/>;
