<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { h, reactive } from "vue";
import arr2tree from "@any86/array-to-tree";
import Curd, { defineC, defineD, defineR, defineU } from "@/lib";
import axios from "axios";
interface KV<T = any> {
  [k: string | number]: T;
}

const http = axios.create({
  // 配置
  baseURL: "http://127.0.0.1:4523/m1/486559-0-default/api/",
});
const primaryKey = "id";

let treeData = reactive<KV[]>([]);
async function onBeforeMount() {
  const { data } = await http.get("/global/menu");
  treeData = arr2tree(data, {
    transform(node: any) {
      node.title = node.name;
      node.key = node.id;
      return node;
    },
  });
}

const r = defineR({
  columns: [
    {
      title: "id",
      dataIndex: "id",
    },

    {
      title: "名称",
      dataIndex: "name",
      children: [
        { title: "A1", dataIndex: "a1", key: "a1" },
        { title: "A2", dataIndex: "a2", key: "a2" },
        { title: "A3", dataIndex: "a3", key: "a3" },
        { title: "A4", dataIndex: "A4", key: "A4" },
        { title: "A5", dataIndex: "A5", key: "A5" },
      ],
    },

    // {
    //   title: "状态",
    //   customRender({ record }: any) {
    //     if (1 === record.state) {
    //       return h(Tag, { color: "success" }, () => `开启`);
    //     } else {
    //       return h(Tag, { color: "error" }, () => `关闭`);
    //     }
    //   },
    // },

    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 250,
    },
  ],

  async done() {
    const { data } = await http("/role");
    return data;
  },
});
const c = defineC({
  async done(formData) {
    formData.state = formData.state ? 1 : 0;
    const { data } = await http.post("/role", formData);
    return data.msg;
  },

  items: () => [
    { is: "a-input", name: "name", label: "角色名" },
    { is: "a-switch", name: "state", label: "是否开启", modelName: "checked" },
    {
      is: "a-tree",
      name: "menuId",
      modelName: "checkedKeys",
      label: "菜单",
      props: {
        treeData,
        checkable: true,
        defaultExpandAll: true,
        // selectable:true,
        // autoExpandParent:true,
      },
    },
  ],
});

const u = defineU({
  async before(formData) {
    const { data } = await http.get("/role/" + formData[primaryKey]);
    data.state = Boolean(data.state);
    return data;
  },

  async done(formData) {
    const { id, ...kv } = formData;
    const { data } = await http.put("/role/" + id, kv);
    return data.msg;
  },

  items: c.items,
});

const d = defineD({
  async done(idList) {
    if (1 < idList.length) {
      const { data } = await http.delete("/role/", {
        params: {
          idList,
        },
      });
      return data.msg;
    } else {
      const { data } = await http.delete("/role/" + idList[0]);
      return data.msg;
    }
  },
});
</script>

<template>
  <a-config-provider :locale="zhCN">
    <curd v-bind="{ primaryKey, onBeforeMount, c, u, r, d }"></curd>
  </a-config-provider>
</template>
