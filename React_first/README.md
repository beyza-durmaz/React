# REACT GİRİŞ
İlk olarak npm init yaparak bir package.json dosyası oluşturdum. Sonra app.js dosyası oluşturdum. Ardından npm install axios diyerek axios kütüphanesini app.js içine aktardım. 

getData adında bir async function tanımladım. User id'sinin parametresini number olarak aldım. Sonrasında try-catch yapısını kullandım ki istek gönderirken eğer bir hata oluşursa hata yakalansın ve konsola yazdırılsın. 

Kullanıcı datalarını almak için users adresine axios ile istek gönderdim ve sonucu users değişkenine atadım. Posts datalarını almak için de aynı şekilde yaptım. Sonra users ve posts datalarını konsola yazdırdım ve getData fonksiyonunu export ettim. 

Daha sonra index.js içerisine app.js içindeki getData fonksiyonunu import ettim ve konsola getData fonksiyonunun id'sini ekleyerek yazdırdım.

## Bu bir [patika.dev](https://www.patika.dev/tr) ödevidir. 
## Teşekkürler [patika.dev](https://www.patika.dev/tr)
