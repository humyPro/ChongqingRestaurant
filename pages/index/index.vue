<template>
	<view class="content">
    <view class="background-img">
      <u-image src="/static/img/loginBack.png" mode="widthFix"></u-image>
    </view>
    <view class="login-form">
      <view class="welcome-words">欢迎登陆</view>
      <view class="form">
        <u-form v-model="form">
          <u-form-item label="账号:"><u-input v-model="form.username" placeholder="请输入账号" /></u-form-item>
          <u-form-item label="密码:"><u-input v-model="form.password" placeholder="请输入密码"/></u-form-item>
          <view class="checkbox-container">
            <u-checkbox-group>
              <u-checkbox
                  v-model="form.rememberMe"
                  size="20"
                  label-size="20"
              >自动登陆</u-checkbox>
            </u-checkbox-group>
          </view>
        </u-form>
        <u-button :custom-style="{backgroundColor: '#1184ff',marginTop:'66rpx',height:'86rpx'}" type="primary">登陆</u-button>
      </view>
      <view class="tips"><span>若忘记密码？请联系管理员</span><span class="text-link">13560842923</span><span>重置</span></view>

    </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
				  username:undefined,
				  password:undefined,
          rememberMe:false
        }
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	* {
    margin: 0;
    padding: 0;
    font-family: MicrosoftYaHei-Bold;
  }
</style>
<style scoped lang="scss">
.content{
  height: 100vh;
  width: 100vw;

  .background-img{
    z-index: -1;
  }

  .login-form {
    width: 86%;
    margin: -160rpx 7% 0 7%;
    z-index: 22;
    position: absolute;
    padding: 54rpx 0 90rpx 0;
    background-color: #ffffff;
    box-shadow: 0 5rpx 25rpx 0 rgba(34, 83, 134, 0.1);
    border-radius: 20px;

    .form {
      padding: 0 64rpx 0 64rpx;
    }

    .checkbox-container{
      margin-top: 22rpx;
    }
    .welcome-words {
      width:100%;
      text-align: center;
      font-size: 40rpx;
      font-weight: normal;
      font-stretch: normal;
      line-height: 44rpx;
      letter-spacing: 1rpx;
      color: #262626;

      margin-bottom: 34rpx;
    }
  }

  .tips {
    font-size: 26rpx;
    line-height: 44rpx;
    letter-spacing: 0;
    color: #a1a2a2;
    margin-top: 164rpx;
    width: 100%;
    text-align: center;
    position: absolute;

    &:before {
      content: "*";
      color: #fe2121;
    }
  }

  .text-link {
    color: #3397ff;
  }
}
</style>
