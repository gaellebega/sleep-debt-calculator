 function getSleepHours(day){
    if (day == 'monday'){
        return 8;
    }
        else if (day == 'tuesday'){
            return 3;
        }
    else if(day == 'wednesday'){
        return 4;
    }
    else if (day == 'thursday'){
        return 2;
    }
    else if( day == 'friday'){
        return 9;
    }
    else if( day == 'saturday'){
        return 13;
    }
    else if ( day == 'sunday'){
        return 11;
    }
    else{
        return 0;
    }
    }
    console.log(getSleepHours('tuesday'));

    const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('tuesday')+ getSleepHours('wednesday')+getSleepHours('thursday')+ getSleepHours('friday')+
    getSleepHours('saturday')+ getSleepHours('sunday');
    const getIdealSleepHours = () => {
      var idealHours =6;
      return idealHours * 7;
    };
   console.log( " sleeping hours in the week:" + getActualSleepHours());
   console.log(" sleeping hours in the week:" + getIdealSleepHours());

  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' well done');
  }
  else if(actualSleepHours > idealSleepHours)
  {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) . Get less rest.');

  }
  else if (actualSleepHours < idealSleepHours){
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) . Get some rest.');
}
else{
console.log('nothing to display');
}
};
console.log(calculateSleepDebt());
