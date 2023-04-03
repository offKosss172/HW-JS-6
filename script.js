/* 
1.Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
-это для специальных символов и смайликов. /n перенос строки, так же есть табуляция и куча смайлов

2. Які засоби оголошення функцій ви знаєте?
не свсем понял правильно ли я понял вопрос, вроде как функции прошли уже и по обьектам вопросы, но еси я правильно понял вопрос то ответ:
- функцию оглашают прописывая function имя(параметры) {тут пишут условие и действия} ; 
- єкспресс функция - через постоянную которую приравнивают функции тем самым задают ей величину  
const = function имя(параметры) {тут пишут условие и действия} ...
- стрелочные функции (с ними если честно пока разбираюсь, мог с гугла или материаов вставить определение но не буду честно говорю пока 
  не понял в нашем курсе посмотрел но ничего не понял.. сейчас два курса по функциям смотрю в свободное время с целью понять их, и еще
  надеюсь разберусь в новом виде записи стрелочных функций (e)=>  видел что функции так задают но кронечно не понимаю еще, как-то туго у меня
  пошел джава скрипт)

3. Що таке hoisting, як він працює для змінних та функцій?
- джава скрипт сначала проходится по коду смотрит все функции и постоянные а потом уже повторно проходится и выполняет функции, и если
 вызывается функция которая задана ниже по коду - то она все равно вызывантся , так как позднее она будет задана а импрапретатор ее
  считал еще когда предварительно прошелся по коду

  */
  createNewUser()

function createNewUser() {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let birth = prompt("Enter your date of birth in dd.mm.yyyy format:");

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    birthday: birth,
    getAge: function() {
      let today = new Date();
      let birthDate = new Date(this.birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    getPassword: function() {
      let firstInitial = this.firstName.charAt(0).toUpperCase();
      let lastLower = this.lastName.toLowerCase();
      let birthYear = this.birthday.split('.')[2];
      return firstInitial + lastLower + birthYear;
    },
    getLogin: function() {
      let firstInitial = this.firstName.charAt(0).toLowerCase();
      let lastLower = this.lastName.toLowerCase();
      return firstInitial + lastLower;
    }
  };

  console.log(newUser);
  console.log("Age: " + newUser.getAge());
  console.log("Password: " + newUser.getPassword());

  return newUser;
}


