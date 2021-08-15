// ==UserScript==
// @name         Enroll Monster
// @namespace    http://www.boxifly.cn/
// @version      0.2
// @description  A utility for course enrolling in LGU by Philip Chu.
// @author       Philip Chu
// @match        http://sis.cuhk.edu.cn:81/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL*
// @match        http://sis.cuhk.edu.cn:81/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_ADD.GBL*
// @match        http://sis.cuhk.edu.cn:81/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_ADD.GBL*
// @match        http://sis.cuhk.edu.cn:81/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL*
// @match        https://sis.cuhk.edu.cn/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL*
// @match        https://sis.cuhk.edu.cn/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_ADD.GBL*
// @match        https://sis.cuhk.edu.cn/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_ADD.GBL*
// @match        https://sis.cuhk.edu.cn/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL*
// @grant        none
// ==/UserScript==

(function() {

    if (/Add Classes to Shopping Cart/i.test (document.body.innerHTML)||/Select classes to add/i.test (document.body.innerHTML)||/将课程添加到购物车/i.test (document.body.innerHTML)||/选择要添加的课程/i.test (document.body.innerHTML) ){

        var cap = prompt("Please enter the time to pre-filled the CAPTCHA code e.g. 135700:");
        var enr = prompt("Please enter the time to click ENROLL e.g. 140000:");
        alert ("Philip: All set! The script will help you fill in the CAPTCHA automatically. Now relax and wait till the enroll time!");
        //below is for step 1 of enrollment
       var time1 = setInterval(setTimeClick,1);
       var sett = 1;
       var settt = 1;
       function setTimeClick(){
           var setTime = cap;
           var setTimee = enr;
           var now = new Date();
           var hours = now.getHours().toString();
           var minutes = now.getMinutes().toString();
           var seconds = now.getSeconds().toString();
           var mili = now.getMilliseconds();
           if(hours.length==1){
               hours= "0"+hours;
           }
           if(minutes.length==1){
               minutes= "0"+minutes;
           }
           if(seconds.length==1){
               seconds= "0"+seconds;
           }
           var date = hours +minutes + seconds;
           if(date==setTime&&sett==1){
                   document.getElementById('inputValue').value = window.VCD;
                   document.getElementById('inputValue').oninput();
               if(sett<=2){
                   sett = sett+1;
               }
           }
           if(date==setTimee&&settt==1){
               submitAction_win0(document.win0,'DERIVED_REGFRM1_LINK_ADD_ENRL$82$');
               clearInterval(time1);
               if(sett<=2){
                   settt = settt+1;
               }
           }

}
    }
   else clearInterval(time1);


   if (/Confirm classes/i.test (document.body.innerHTML)||/确认课程/i.test (document.body.innerHTML) )
{

   'use strict';
   var time2 = setInterval(setTimeClicktwo,1000);
   var setttt = 0;
   function setTimeClicktwo(){
   if(/Confirm classes/i.test (document.body.innerHTML)||/确认课程/i.test (document.body.innerHTML)){
       if((setttt+1)%5==0) submitAction_win0(document.win0,'DERIVED_REGFRM1_SSR_PB_SUBMIT');
       setttt++;
       console.log(setttt);

}
       else clearInterval(time2);
/**
   if(sett==56){
       submitAction_win0(document.win0,'DERIVED_REGFRM1_SSR_PB_SUBMIT');
       console.log("SECOND SHOT")
       clearInterval(time1);
   }
   if(sett<=56){
       sett = sett+1;
       }
**/

}

}

})();
