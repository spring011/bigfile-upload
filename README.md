# 大文件上传
[示例](https://spring011.github.io/bigfile-upload/dist/production/)
## 特性
1. 分片
2. 秒传
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
请求3个接口：<br>
<img width="741" style="margin-bottom:12" height="61" alt="微信图片_20250818103410_10" src="https://github.com/user-attachments/assets/bb2e03fb-6024-4702-b0d9-c69ef2498da2" /><br><br>
GET /system/file/uploadChunk请求参数: <br>
<img width="774" height="247" alt="微信图片_20250818103417_11" src="https://github.com/user-attachments/assets/25b120fb-fa2a-431c-b585-9fc25a823c75" /><br><br>
接口响应数据: <br>
<img width="773" height="171" alt="微信图片_20250818103424_12" src="https://github.com/user-attachments/assets/6d45263b-9eb8-4374-a3ca-581e44a1e1d8" /><br><br>
POST /system/file/uploadChunk请求数据（返回数据为true或false): <br>
<img width="738" height="216" alt="微信图片_20250818111351_16" src="https://github.com/user-attachments/assets/5f05461e-2cea-4715-bd51-a6eb6c9c4c50" /><br><br>
POST /system/file/merge请求数据: <br>
<img width="741" height="143" alt="微信图片_20250818111355_17" src="https://github.com/user-attachments/assets/5b642ab0-15fc-4f04-98db-e13acf4c89f3" /><br><br>

## 大文件上传(分片)
## 秒传
请求2个接口：<br>
<img width="735" height="41" alt="微信图片_20250818110511_13" src="https://github.com/user-attachments/assets/10b2e7cc-25ea-4f6f-91af-8d7641145360" /><br><br>
GET /system/file/uploadChunk请求参数: <br>
<img width="744" height="245" alt="微信图片_20250818110516_14" src="https://github.com/user-attachments/assets/8a24c2bd-fe28-4f2b-9837-a18360a228c8" /><br><br>
接口响应数据:  <br>
<img width="741" height="169" alt="微信图片_20250818110520_15" src="https://github.com/user-attachments/assets/519a1afa-19ad-4b6c-8ef6-0b1b2e1c17e5" /><br><br>
POST /system/file/merge请求数据: <br>
<img width="741" height="144" alt="微信图片_20250818111359_18" src="https://github.com/user-attachments/assets/3ef2792f-2dba-4881-bc23-770cace39452" />






