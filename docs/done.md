# done

点击"确定"按钮后触发, 主要用来和接口对接.

```typescript
{
  items: [
    { is: 'a-input', name: 'userName', label: '账号'},
  ],

  done(formData){
    console.log(formData); // {userName:'你的输入'}
    axios.post('/xx', formData);
  }
}
```
