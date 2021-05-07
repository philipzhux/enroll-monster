
# Enroll-Monster
For Chinese version please refer to [here](https://github.com/philipzhux/enroll-monster/blob/main/README_CN.md).
## Installation
### **Installing Tampermonkey**

Tampermonkey is required for the use of EnrollMonster. To install Tampermonkey, go to [this link](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) on **Chrome**  on *Mac OS* or *Windows* and click ```INSTALL```.
  
### **Importing the Script**
* Open this URL with Chrome:

	```chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils```

* Input the following URL in the ```Install from URL``` field and click ```Install```:

	```https://raw.githubusercontent.com/philipzhux/enroll-monster/main/src/enroll_monster.js```

## Usage
### Preparation
1. Click [here](http://sis.cuhk.edu.cn:81/psp/csprd/?cmd=login) to login to SIS **(REMEMBER! Login to SIS on Chrome only, logining in multiple browser will casue disaster for your enrollment!!!)**

2. Like usual, add all you desired classes in the the cart by class search.


### Using the Script
1. Go to Enrollment -> Enrollment: Add Classes

2. Select your term and click ```continue```

3. There should be a prompt to ask you input like:
> Please enter the time to pre-filled the CAPTCHA code e.g. 135700 (should be a few minutes ahead of the enroll time)

This is the time at which the script auto-fills the CAPTCHA (i.e. verification code), it should be about 3-4 minutes ahead of your enrolling time because in this way you can have 3-4 minutes of flexible time if the script does not go right to fill the code as expected
The time should be in format of ```HHMMSS```, e.g. ```135700``` for **13:57:00**

4. There should be another prompt to ask you input like:
> Please enter the time to click ENROLL e.g. 140000:

This is the time at which the script auto-click the button ENROLL ,it should be the exact time of enrollment  (you may add extra one second to gurantee that the enrollment system has been open, then you will be one second later, this is a trade-off fully up to you)

The time should be in format of ```HHMMSS```, e.g. ```140000``` for **14:00:00**
	
5. Finally there will be an alert saying that:
> Philip: All set! The script will help you fill in the CAPTCHA automatically. Now relax and wait till the enroll time!

Now sit back and relax. All set.


## Frequently Asked Questions

1. How to deal with the ```operataion too frequent``` problem?
   
   You don't need to do anything when this problem arises (even no need to click OK), the script will automatically retry in 5 seconds until a successful request is made.

2. Why doesn't the script work on my computer?
   
   Please make sure that you have **Enabled** both the Tampermonkey and the script, and that you are using Chrome

3. Is there any situation where I need to operate manually?
   
   It should not be. But if you find the script fill the CAPTCHA wrongly, then you need to correct it by yourself. In the first step of enrollment, the script will NOT automatically retry if any error occurs, which means that you need to manually click ```Enroll``` in that senario.

## Author

Developed by Philip Chu. Contact me at ```philipzhux@gmail.com```
