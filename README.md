
# Üye Yönetimi REST API

Bu proje, **GymPlus AI** staj değerlendirme süreci için NestJS kullanılarak geliştirilmiş, spor salonu üyelerini yönetmeyi amaçlayan RESTful API uygulamasıdır. 

* **Veri Kalıcılığı (Persistence):** Geçici dizi (array) yapısı kaldırılarak **TypeORM ve SQLite** entegrasyonu sağlanmıştır. Sistem her kapanıp açıldığında veriler `gymplus.sqlite` dosyasında güvenle saklanır.
* **Katı Girdi Doğrulama (Input Validation):** API'ye dışarıdan gelen verilerin güvenliği için DTO katmanına `class-validator` (@IsEmail, @IsEnum, @IsNotEmpty) eklenmiştir. Uygulama seviyesinde `ValidationPipe` aktif edilerek geçersiz veri girişleri engellenmiştir (HTTP 400 Bad Request).
* **Tip Güvenliği (Type Safety):** `tsconfig.json` üzerinden **TypeScript Strict Mode** aktifleştirilmiştir. `membershipType` ve `status` gibi belirli değerler alan veriler string olmaktan çıkarılıp **Enum** yapısına dönüştürülmüştür.
* **Birim Testleri (Unit Testing):** Jest kullanılarak `UsersService` katmanı için testler yazılmıştır. Veritabanı (Repository) katmanı mock'lanarak; kullanıcı oluşturma, olmayan ID ile hata fırlatma (NotFoundException), güncelleme ve silme senaryoları eksiksiz test edilmiştir.

##  Kullanılan Teknolojiler

* **Framework:** NestJS (Node.js)
* **Dil:** TypeScript (Strict Mode)
* **Veritabanı & ORM:** SQLite, TypeORM
* **Dokümantasyon:** Swagger (OpenAPI)
* **Test:** Jest

## Kurulum ve Çalıştırma

Projeyi lokal ortamınızda çalıştırmak için bilgisayarınızda **Node.js** yüklü olması yeterlidir.

1. Projeyi klonlayın ve klasöre girin:
```bash
git clone <repo-linki>
cd staj-case-api

```

2. Gerekli paketleri ve bağımlılıkları yükleyin:

```bash
npm install

```

3. Uygulamayı başlatın (Geliştirici modu):

```bash
npm run start:dev

```

*(Not: Uygulama ilk kez çalıştığında proje dizininde otomatik olarak `gymplus.sqlite` veritabanı dosyası oluşturulacak ve tablolar senkronize edilecektir.)*

## 📖 API Dokümantasyonu (Swagger)

Uygulama çalıştıktan sonra, Postman gibi harici bir araca ihtiyaç duymadan API'yi test etmek için aşağıdaki adrese gidebilirsiniz:

 **http://localhost:3000/api**

Bu interaktif arayüz üzerinden DTO kurallarını, validasyon hatalarını ve CRUD işlemlerini canlı olarak test edebilirsiniz.

##  Testlerin Çalıştırılması

Senaryo testlerini çalıştırmak için terminalde şu komutu kullanabilirsiniz:

```bash
npm run test

```

```

---
