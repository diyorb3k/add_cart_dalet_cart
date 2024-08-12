TypeScript JavaScript bilan noodatiy munosabatda bo'lib, JavaScript-ning barcha xususiyatlarini o'z ichiga oladi va ularga qo'shimcha ravishda TypeScript-ning turdagi tizimini taqdim etadi.
Masalan, name: stringva ni o'z ichiga olgan taxmin qilingan turdagi ob'ektni yaratish uchun id: numbersiz quyidagilarni yozishingiz mumkin:

const user = {
  name: "Hayes",
  id: 0,
};


Deklaratsiya yordamida ushbu ob'ektning shaklini aniq tasvirlashingiz mumkin interface:

interface User {
  name: string;
  id: number;
}

Keyin JavaScript ob'ekti o'zgaruvchi deklaratsiyasidan keyingi interfacesintaksisdan foydalanib, yangi ob'ektingiz shakliga mos kelishini e'lon qilishingiz mumkin :: TypeName

const user: User = {
  name: "Hayes",
  id: 0,
};




Agar siz taqdim etgan interfeysga mos kelmaydigan ob'ektni taqdim qilsangiz, TypeScript sizni ogohlantiradi:

interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};




JavaScript sinflar va ob'ektga yo'naltirilgan dasturlashni qo'llab-quvvatlaganligi sababli, TypeScript ham xuddi shunday. Siz sinflar bilan interfeys deklaratsiyasidan foydalanishingiz mumkin:

interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);