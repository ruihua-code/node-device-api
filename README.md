### node.js 树莓派设备操作

#### pm2配置说明
 
 * "exec_mode": "cluster"默认是以集群模式启动应用程序
 
 * 可以改为：
    * "exec_mode": "fork"
    * 当使用fork模式时，PM2会为每个应用程序启动一个独立的进程。