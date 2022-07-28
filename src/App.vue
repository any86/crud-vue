<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { h, reactive, ref, resolveComponent } from 'vue';
import Curd, { defineC, defineD, defineR, defineU } from '@/lib';
import http from '@/http';
interface KV<T = any> {
  [k: string | number]: T;
}
type Row = {
  userId: string;
  userName: string;
  age: number;
  sex: 1 | 2;
  realName: string;
  department: string;
  avatar: string;
  state: 0 | 1 | 2;
  joinDate: string;
  email: string;
  position: string;
  role: string;
};

/**
 * 获取职位列表
 * @returns promise 列表
 */
function usePositionOptions() {
  const optionsRef = ref<{ label: string; value: string }[]>();

  async function get() {
    if (!optionsRef.value) {
      const { data } = await http.get<{ id: string; name: string }[]>('/global/position');
      optionsRef.value = data.map(({ id, name }) => {
        return { label: name, value: id };
      });
    }
    return optionsRef;
  }

  return [optionsRef, get] as const;
}

/**
 * 获取部门列表
 * @returns promise 列表
 */
function useDepartmentOptions() {
  const optionsRef = ref<{ label: string; value: string }[]>();

  async function get() {
    if (!optionsRef.value) {
      const { data } = await http.get<{ id: string; name: string }[]>('/global/department');
      optionsRef.value = data.map(({ id, name }) => {
        return { label: name, value: id };
      });
    }
    return optionsRef;
  }

  return [optionsRef, get] as const;
}

/**
 * 获取角色列表
 * @returns promise 列表
 */
function useRoleOptions() {
  const optionsRef = ref<{ label: string; value: string }[]>();

  async function get() {
    if (!optionsRef.value) {
      const { data } = await http.get<{ id: string; name: string }[]>('/global/role');
      optionsRef.value = data.map(({ id, name }) => {
        return { label: name, value: id };
      });
    }
    return optionsRef;
  }

  return [optionsRef, get] as const;
}



const primaryKey = 'userId';
const [roleOptions, getRoleOptions] = useRoleOptions();
const [departmentOptions, getDepartmentOptions] = useDepartmentOptions();
const [positionOptions, getPositionOptions] = usePositionOptions();

const r = defineR({
  // async before() {
  //   const { data } = await http.get('/global/menu');
  // },
  columns: [
    {
      title: '姓名',
      dataIndex: 'realName',
    },
    {
      title: '账户',
      dataIndex: 'userName',
    },
    {
      title: '部门',
      dataIndex: 'department',
    },
    {
      title: '性别',
      customRender({ record }: { record: Row }) {
        const { sex } = record;
        const map = {
          1: ['blue', '男'],
          2: ['pink', '女'],
        } as const;

        const color = map[sex][0];
        const text = map[sex][1];
        // 插槽的内容用函数性能更优
        return h(resolveComponent('a-tag'), { color }, () => text);
      },
    },

    {
      title: '年龄',
      dataIndex: 'age',
    },

    {
      title: '角色',
      dataIndex: 'role',
    },

    {
      title: '岗位',
      dataIndex: 'position',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },

    {
      title: '入职日期',
      dataIndex: 'joinDate',
    },
    {
      title: '状态',
      customRender({ record }: { record: Row }) {
        const { state } = record;
        const map = {
          0: ['#999', '锁定'],
          1: ['#009688', '正常'],
          2: ['#f00', '离职'],
        };
        const type = map[state][0];
        const text = map[state][1];
        return h(resolveComponent('a-badge'), { color: type, text });
      },
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 250,
    },
  ],
  conditionItems: () => {
    return [{ is: 'a-input', name: 'name', label: '用户名' }];
  },
  async done(params) {
    const { data } = await http('/user', { params });
    return data;
  },
});
const c = defineC({
  async before(row) {
    await Promise.all([getRoleOptions(), getDepartmentOptions(), getPositionOptions()]);
  },
  async done(formData) {
    const { status, data } = await http.post('/user', formData);
    return [200 === status, data.msg];
  },
  formProps: { labelCol: { span: 2 } },

  items: () => [
    { is: 'a-input', name: 'userName', label: '账号', rules: [{ required: true, message: '必填项' }] },
    { is: 'a-input', name: 'realName', label: '姓名' },
    {
      is: 'a-radio-group',
      name: 'sex',
      label: '性别',
      defaultValue: 1,
      props: {
        options: [
          { label: '男', value: 1 },
          { label: '女', value: 2 },
        ],
      },
    },
    { is: 'a-input-number', name: 'age', label: '年龄' },
    { is: 'a-input', name: 'email', label: '邮箱' },
    {
      is: 'a-select',
      name: 'departmentId',
      label: '部门',
      props: { options: departmentOptions.value, placeholder: '请选择部门' },
    },
    {
      is: 'a-select',
      name: 'roleIds',
      label: '角色',
      props: { options: roleOptions.value, mode: 'multiple', placeholder: '请选择角色' },
    },
    {
      is: 'a-select',
      name: 'positionId',
      label: '职位',
      props: { options: positionOptions.value, placeholder: '请选择职位' },
    },
    {
      is: 'a-radio-group',
      name: 'state',
      label: '状态',
      props: {
        options: [
          { label: '正常', value: 1 },
          { label: '离职', value: 2 },
          { label: '锁定', value: 0 },
        ],
      },
    },
  ],
});

const u = defineU({
  drawerProps: {
    getContainer,
    style: { position: 'absolute' },
  },
  async before(row) {
    const { data } = await http.get('/user/' + row[primaryKey]);
    await Promise.all([getRoleOptions(), getDepartmentOptions(), getPositionOptions()]);
    return data;
  },
  formProps: { labelCol: { span: 2 } },
  async done(formData) {
    const { [primaryKey]: id, ...kv } = formData;
    const { data, status } = await http.put('/user/' + id, kv);
    return [200 === status, data.msg];
  },

  items: c.items,
});

const d = defineD({
  async done(idList) {
    if (1 < idList.length) {
      const { data, status } = await http.delete('/user/', {
        params: {
          idList,
        },
      });
      return [200 === status, data.msg];
    } else {
      const { data, status } = await http.delete('/user/' + idList[0]);
      return [200 === status, data.msg];
    }
  },
});

function getContainer() {
  return document.getElementById('box');
}
</script>

<template>
  <a-config-provider :locale="zhCN" :getPopupContainer="getContainer">
    <h1 class="title" align="center">v-curd</h1>
    <p align="center">🚀"增删改查"更简单 <a-button type="link"><a href="https://github.com/any86/v-curd" target="_new">⚡文档</a></a-button></p>
    
    <div class="box" id="box">
      <curd v-bind="{ primaryKey, c, u, r, d }"></curd>
    </div>
  </a-config-provider>
</template>

<style lang="scss">
#app {
  font-family: 微软雅黑, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  margin: 0;
  font-size: 32px;
}

.box {
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
  margin: 0 auto 10vh;
  overflow-x: hidden;
}

::-webkit-scrollbar-track {
  background: hsla(0, 0%, 100%, 0.15);
  border-radius: 3px;
  box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
</style>
