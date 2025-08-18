# 大文件上传
[示例](https://spring011.github.io/bigfile-upload/dist/production/)
## 特性
1. 分片
2. 妙传
3. 断点续传
4. 显示上传进度
## 接口
需要3个接口：<br>
1. GET /system/file/uploadChunk
2. POST /system/file/uploadChunk
3. POST /system/file/merge
### GET /system/file/uploadChunk
### POST /system/file/uploadChunk
### POST /system/file/merge
## 小文件上传(单个)
接口：<br>
<img width="741" style="margin-bottom:12" height="61" alt="微信图片_20250818103410_10" src="https://github.com/user-attachments/assets/bb2e03fb-6024-4702-b0d9-c69ef2498da2" /><br><br>
GET /system/file/uploadChunk: <br>
<img width="774" height="247" alt="微信图片_20250818103417_11" src="https://github.com/user-attachments/assets/25b120fb-fa2a-431c-b585-9fc25a823c75" /><br><br>
接口响应数据: <br>
<img width="773" height="171" alt="微信图片_20250818103424_12" src="https://github.com/user-attachments/assets/6d45263b-9eb8-4374-a3ca-581e44a1e1d8" />
## 大文件上传(分片)
