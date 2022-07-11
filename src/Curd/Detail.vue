<script setup lang="ts">
import { ref } from 'vue';
import { http } from '@/http';

type ResponseData = {
  userId: string;
  age: number;
  sex: number;
  realName: string;
  department: string;
  avatar: string;
  state: 0 | 1 | 2;
  joinDate: string;
  email: string;
  userName: string;
  position: string;
  roles: string[];
  roleIds: string[];
  positionId: string;
};

const isShow = ref(false);
const isLoading = ref(false);
const dataSource = ref<ResponseData | undefined>();
const STATE_MAP = {
  0: ['#999', '锁定'],
  1: ['#009688', '正常'],
  2: ['#f00', '离职'],
};

defineExpose({
  /**
   * 显示详情页面
   * @param userId 用户id
   */
  async show(userId: string) {
    isShow.value = true;
    isLoading.value = true;
    const { status, data } = await http.get('/user/' + userId);
    if (200 === status) {
      dataSource.value = data;
    }
    isLoading.value = false;
  },
});
</script>

<template>
  <a-drawer size="large" v-model:visible="isShow" title="详情">
    <a-skeleton :loading="isLoading">
      <a-avatar class="my-2" shape="square" :size="128" :src="dataSource?.avatar" alt="头像"> </a-avatar>
      <a-descriptions v-if="void 0 !== dataSource" :column="{ xs: 1, sm: 2 }">
        <a-descriptions-item label="账号">
          {{ dataSource.userName }}
          <a-tag class="ml-1" :color="STATE_MAP[dataSource.state][0]"> {{ STATE_MAP[dataSource.state][1] }}</a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="ID">{{ dataSource.userId }}</a-descriptions-item>

        <a-descriptions-item label="姓名">{{ dataSource.realName }}</a-descriptions-item>
        <a-descriptions-item label="性别">
          <a-tag v-if="1 === dataSource.sex" color="blue">男</a-tag>
          <a-tag v-else color="pink">女</a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="年龄">{{ dataSource.age }}</a-descriptions-item>
        <a-descriptions-item label="邮箱">{{ dataSource.email }}</a-descriptions-item>
        <a-descriptions-item label="职位">{{ dataSource.position }}</a-descriptions-item>

        <a-descriptions-item label="入职时间">{{ dataSource.joinDate }}</a-descriptions-item>
        <a-descriptions-item label="角色">
          <a-tag v-for="role in dataSource.roles">{{ role }}</a-tag>
        </a-descriptions-item>
      </a-descriptions>
    </a-skeleton>
  </a-drawer>
</template>