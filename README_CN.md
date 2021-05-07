
# Enroll-Monster 中文说明
Enroll Monster 不支持显示语言为**繁體中文**的SIS界面, 请将其设为**English**或**简体中文**。Use at your own risk.

## 安装步骤
### **安装 Tampermonkey**

要使用Enroll Monster需要先安装 Tampermonkey, 在电脑的**Chrome**上打开 [这条link](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) 点 ```Install```.
(是Google的域名所以连上学校Wi-Fi再打开吧)  
### **安装 Enroll Monster**
* 安装完Tampermonkey之后，在Chrome上打开这条Link:

	```chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils```

* 在 ```Install from URL``` 输入框输入下面这条网址 然后点 ```Install```:

	```https://raw.githubusercontent.com/philipzhux/enroll-monster/main/src/enroll_monster.js```

## 使用步骤
### 预备
1. 点 [这条link](http://sis.cuhk.edu.cn:81/psp/csprd/?cmd=login) 登录 SIS **(谨记！只在Chrome上登录，要是在多个浏览器/设备登录会十分麻烦)**

2. 像往常一样把课加到Shopping Cart里边


### 使用
N.B. 记得在抢课时间前10分钟左右再用，因为每次SIS的Login Session只有20分钟。
1. 去 Enrollment -> Enrollment: Add Classes

2. 选择你的学期并点 ```continue```

3. 假使上面步骤安装成功了，就应该会弹出一个对话框:
> Please enter the time to pre-filled the CAPTCHA code e.g. 135700 (should be a few minutes ahead of the enroll time)

这是叫你填一个**让Enroll Monster 帮你填验证码的时间，这个时间应该比真正的开放抢课时间早那么几分钟**，比如说现在是20:52:00而21:00:00开始抢课，那你可以填20:57:00 (谨记用英文冒号，且按照HH:MM:SS
之格式)

4. 之后还会有一个对话框:
> Please enter the time to click ENROLL e.g. 140000:

这就是Enroll Monster把你抢课的时间啦，比如21:00:00
	
5. 最后会有提示:
> Philip: All set! The script will help you fill in the CAPTCHA automatically. Now relax and wait till the enroll time!

好了，一切就绪。


## 常见问题

1. 抢课的时候遇到 ```operataion too frequent``` 提示怎么办?
   
   啥也不需要做，甚至不需要点OK，因为Enroll Monster会按照系统的时间阈值自动帮你重试，你什么都不做就对了。

2. 为什么我用不了Enroll Monster呢?
   
   请确保你已经enable了Chrome里的Tampermonkey插件，而且你在Tampermonkey里enable了Enroll Monster。

3. 有没有需要我手动干预的情况?
   
   正常情况呢是不会有的，但是如果比如说你发现Enroll Monster验证码填错了（这种情况一般是不会出现的），那你或许就需要点一下更新验证码（不是刷新）然后自己填上正确的验证码上去比较保险，
   但是不需要自己点enroll哦。Enroll过程出现问题Enroll Monster会不断帮你在系统允许的最大频率内重试，如果你手动重试的话，就会打乱这个节奏，然后等五秒又五秒不知道多少个五秒啦
   
## Author

Developed by Philip Chu. Contact me at ```philipzhux@gmail.com```
