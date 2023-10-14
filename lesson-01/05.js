// code
let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

switch (true) {
   case rule.length < 25:
      console.log("А что так можно было?");
      break;
   case rule.length === 25:
      console.log('50 на 50');
   default: {
      console.log('Все такие нет правил без исключения');
   };
}
