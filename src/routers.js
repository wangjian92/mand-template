import _import_ from '@/util/import_res.js'
// import Home from './components/Home.vue'
// import AccountOpen from './components/AccountOpen/AccountOpen.vue'

const routers = [{
    path: '/',
    component: _import_('Home')
}, {
    path: '/home',
    name: 'home',
    component: _import_('Home')
}, { //二三类账户开户
    path: '/AccountOpen',
    name: 'AccountOpen',
    component: _import_('AccountOpen/AccountOpen')
}, { //转账
    path: '/Transfer',
    name: 'Transfer',
    component: _import_('Transfer/Transfer'),
    meta: {
        pageTitle: 'zz',
        keepAlive: true
    }
}, { //转账确认
    path: '/TransferConfirm',
    name: 'TransferConfirm',
    component: _import_('Transfer/TransferConfirm')
}, { //转账结果
    path: '/TransferResult',
    name: 'TransferResult',
    component: _import_('Transfer/TransferResult')
}, { //转账记录
    path: '/TransferRecord',
    name: 'TransferRecord',
    component: _import_('Transfer/TransferRecord')
}, { //转账详情
    path: '/TransferDetail',
    name: 'TransferDetail',
    component: _import_('Transfer/TransferDetail')
}, { //常用收款人维护
    path: '/PayeeMaintain',
    name: 'PayeeMaintain',
    component: _import_('Transfer/PayeeMaintain')
}, { //常用收款人维护
    path: '/FormComponent',
    name: 'FormComponent',
    component: _import_('Templates/FormComponent')
}, { // platform test
    path: '/FrameTest',
    name: 'FrameTest',
    component: _import_('Frame/FrameTest')
}]
export default routers