var posts=["2020/03/21/CPU使用率低负载高的原因分析/","2020/04/10/JDK1.6-1.8方法区的变化/","2017/06/12/JavaWeb中的Cookie介绍和使用/","2017/05/26/Java常用类的概述和使用/","2021/12/10/Log4j远程代码执行漏洞复现/","2017/05/26/String类的概述和使用/","2017/05/28/可变字符串类和日期相关类/","2017/05/26/正则表达式的概述和使用/","2017/05/29/集合类库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };