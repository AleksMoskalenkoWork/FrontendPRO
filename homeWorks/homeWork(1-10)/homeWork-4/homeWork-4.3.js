function countUserAge(yearOfBirthday) {
  const todayDate = new Date();
  const userAge = todayDate.getFullYear() - yearOfBirthday;
  return userAge;
}

function showUserLocation(location) {
  let locationMessage;
  const userLocation = location.trim().toLowerCase();
  switch (userLocation) {
    case 'киів':
      locationMessage = 'Ти живеш у столиці України!';
      break;
    case 'вашингтон':
      locationMessage = 'Ти живеш у столиці США!';
      break;
    case 'лондон':
      locationMessage = 'Ти живеш у столиці Великої Британії!';
      break;
    default:
      locationMessage = `Ти живеш у місті ${userLocation}`;
      break;
  }
  return locationMessage;
}

function showUserFavoriteSport(sport) {
  let sportMessage;
  const userFavoriteSport = sport.trim().toLowerCase();
  switch (userFavoriteSport) {
    case 'бокс':
      sportMessage = 'Круто! Хочеш стати як Олуксандр Усик?';
      break;
    case 'футбол':
      sportMessage = 'Круто! Хочеш стати як Андрій Шевченко?';
      break;
    case 'армрестлінг':
      sportMessage = 'Круто! Хочеш стати як Олег Петренко?';
      break;
    default:
      sportMessage = `Твій улюблений вид спорту ${userFavoriteSport}`;
      break;
  }
  return sportMessage;
}

function showUserInfo() {
  const userBirthdayYear = prompt('Який твій рік народження?');
  if (!userBirthdayYear) {
    alert('Шкода, що Ви не захотіли ввести свій(ю) дату народження');
  }

  const userLocation = prompt('В якому місті ти живеш?');
  if (!userLocation) {
    alert('Шкода, що Ви не захотіли ввести свій(ю) місто');
  }

  const userFavoriteSport = prompt('Який твій улюблений вид спорту');
  if (!userFavoriteSport) {
    alert('Шкода, що Ви не захотіли ввести свій(ю) вид спорту');
  }

  alert(
    `Ваш вік ${countUserAge(userBirthdayYear)}! \n${showUserLocation(
      userLocation
    )}\n${showUserFavoriteSport(userFavoriteSport)}`
  );
}

showUserInfo();
