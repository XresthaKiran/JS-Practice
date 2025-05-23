let year;

year = 1900;

((year % 4 === 0 && year % 100 !== 0 ) || year % 400 == 0)? console.log( year + " is a leap year " ): console.log(year + " is not a leap year " )