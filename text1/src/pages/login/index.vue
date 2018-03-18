<template>
  <div class="login">
         <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline">
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="输入用户名">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="输入密码">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import { loginRoute } from '@/router/routes'
export default {
    data () {
            return {
                formInline: {
                    user: 'admin',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            //点击事件
            handleSubmit(name) {
                console.log(123)
                var vm = this
                //如果内容符合规则
                vm.$refs[name].validate((valid) => {
                    //发送请求
                    if (valid) {
                        console.log(1)
                        //true
                        // fuehqianduanaynzheng 
                        vm.$ajax.post('/loginUrl', vm.formInline)
                        .then(function (response) {
                            console.log(response);
                            // response.data
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                        vm.$Message.success('登陆成功!');
                        vm.$router.push({name: 'main'})
                    } else {
                    //false
                    vm.$Message.error('失败!');
                    }
                 })
            }
        }
    }
        

</script>

<style>
    .login{
        background-image: url(../../images/login_bg.jpg);
        height: 100%;
        width: 100%;
    }
    .login-con{
        background: #fff;
        width: 300px;
        right:200px;
        top: 50%;
        position: absolute;
    }
</style>
