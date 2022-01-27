# <code >SQL vs NoSQL farkları nelerdir?</code>

<div align="center">

###  <code >SQL</code>

</div>

#### <code >Type</code>

<p>
SQL veritabanı genellikle İlişkisel veritabanı, yani RDBMS olarak sınıflandırılır.
</p>

#### <code >Language</code>

<p>
Bildiğimiz gibi SQL, SQL olarak tanımlanan CRUD işlemi için yapılandırılmış sorgu dilini kullanır. Bu, SQL veritabanının verileri daha yapılandırılmış biçimde depolamasını ve ayrıca karmaşık SQL sorgularıyla tamamlanabilecek daha karmaşık işlemler için tercih edilmesini sağlar.
</p>

#### <code >Scalability</code>

<p>
SQL veritabanı, RAM, CPU veya SSD gibi şeyleri artırarak tek sunucudaki kapasitesini genişletebilir, yani SQL dbs'nin dikey olarak ölçeklenebilir olduğunu söyleyebiliriz, çünkü aynı sunucu için depolama bileşenleri geliştirilerek depolamaları artırılabilir.
</p>

#### <code >Internal implementation</code>

<p>
SQL, Atomisite, Tutarlılık, İzolasyon ve Dayanıklılığın kısaltması olan işlemleri için ACID özelliklerini takip eder.
</p>

#### <code >Performance and suited for</code>

<p>
SQL veritabanları en çok karmaşık sorgular için uygundur ancak hiyerarşik büyük veri depolama için tercih edilmez.
</p>

#### <code >Examples</code>

<p>
SQL dbs, açık kaynak olarak Postgres & MySQL ve ticari olarak Oracle ve Sqlite gibi hem açık kaynak hem de ticari Veritabanında uygulanmaktadır.
</p>
<div align="center">

###  <code >NoSQL</code>

</div>

#### <code >Type</code>

<p>
NOSQL veritabanı ilişkisel olmayan veya dağıtılmış veritabanı olarak bilinir.
</p>

#### <code >Language</code>

<p>
NoSQL  yapılandırılmamış veriler için dinamik şemaya sahiptir. Bu tür veritabanında depolanan veriler yapılandırılmaz ve belge yönelimli, sütun yönelimli, grafik tabanlı veya KeyValue deposu olarak organize edilmiş formlardan herhangi birinde saklanabilir. Bu sözdizimi DB'den DB'ye değişebilir.
</p>

#### <code >Scalability</code>

<p>
NOSQL dbs'nin kapasitesini artırmak için ana sunucuya paralel yeni sunucular kurmamız gerekiyordu, yani NOSQL dbs yatay olarak ölçeklenebilirdi ve bu onları büyük veya sürekli değişen veri kümeleri için daha fazla tercih edilen bir seçenek haline getirdi.
</p>

#### <code >Internal implementation</code>

<p>
 NOSQL, temelde Tutarlılık, Kullanılabilirlik ve Bölüm toleransına odaklanan Brewers CAP teoremine dayanmaktadır..
</p>

#### <code >Performance and suited for</code>

<p>
NoSQL veritabanları, karmaşık sorgular için çok iyi değildir, çünkü bunlar SQL sorguları kadar güçlü değildir, ancak hiyerarşik büyük veri depolaması için en uygun olanıdır.
</p>

#### <code >Examples</code>

<p>
NOSQL tamamen açık kaynaktır ve MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB bunun ana uygulamasıdır.
</p>

