import { defineComponent, toDisplayString, ref } from "vue";
import { message } from "ant-design-vue";
import { cloneDeep } from "lodash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Curd",
  props: {
    primaryKey: null,
    r: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return toDisplayString(__props.r);
    };
  }
});
function to(promise, errorExt) {
  return promise.then(function(data) {
    return [null, data];
  }).catch(function(err) {
    if (errorExt) {
      Object.assign(err, errorExt);
    }
    return [err, void 0];
  });
}
function useForm(done, onSuccess, onFail, onReset = () => {
}) {
  const nFormRef = ref();
  const defaultFormData = ref({});
  const isSubmitting = ref(false);
  const isShow = ref(false);
  const formData = ref(cloneDeep(defaultFormData.value));
  async function save() {
    var _a;
    const formRef = (_a = nFormRef.value) == null ? void 0 : _a.formRef;
    if (!formRef)
      return;
    isSubmitting.value = true;
    const [error] = await to(formRef.validateFields());
    formRef.scrollToField("usersLoginname");
    if (null !== error) {
      isSubmitting.value = false;
      console.log(error);
      return;
    }
    try {
      const [error1, data1] = await to(done(formData.value));
      if (null !== error1) {
        isSubmitting.value = false;
        console.log(error1);
        return;
      }
      if (!Array.isArray(data1)) {
        throw '"\u68C0\u67E5done"\u7684\u8FD4\u56DE\u503C\u683C\u5F0F,\u9884\u671F[number,string]!';
      }
      const [isSuccess, msg] = data1;
      if (isSuccess) {
        message.success(msg);
        reset();
        onSuccess(formData.value);
      } else {
        message.error(msg);
        onFail(msg);
      }
      isShow.value = false;
    } catch (error2) {
      console.log(error2);
    } finally {
      isSubmitting.value = false;
    }
  }
  function reset() {
    var _a;
    onReset();
    (_a = nFormRef.value) == null ? void 0 : _a.reset();
  }
  function setDefault(formData2) {
    defaultFormData.value = formData2;
  }
  return {
    nFormRef,
    isShow,
    isSubmitting,
    save,
    reset,
    formData,
    setDefault
  };
}
function walkTree(nodes, each) {
  var _a;
  const stack = [];
  _filter(nodes, each, stack);
  while (stack.length > 0) {
    const node = stack.pop();
    if ((_a = node.children) == null ? void 0 : _a.length) {
      _filter(node.children, each, stack);
    }
  }
  function _filter(nodes2, each2, stack2) {
    let { length } = nodes2;
    for (let i = 0; i < length; i++) {
      const node = nodes2[i];
      if (void 0 === each2(node)) {
        nodes2.splice(i, 1);
        length--;
        i--;
      } else {
        stack2.push(node);
      }
    }
  }
}
function defineC(config) {
  return config;
}
function defineU(config) {
  return config;
}
function defineR(config) {
  return config;
}
function defineD(config) {
  return config;
}
export { _sfc_main as default, defineC, defineD, defineR, defineU, useForm, walkTree };
