function medenka(strArr) {
    let countAttackOfWhite = 0;
    let countAttackOfDark = 0;

    for (let line of strArr) {
        let [countOfAtacks, position] = line.split(" ")
        if(position==="white"){
            countAttackOfWhite += Number(countOfAtacks)
        }else {
            countAttackOfDark += Number(countOfAtacks)
        }
    }

    let damagaFromVitkor = countAttackOfWhite*60
    let damageFromNaskor = 0

    for (var i = 1; i <= countAttackOfDark; i++) {
        if(i%5===0){
            damageFromNaskor+= 4.5*60
        }else {
            damageFromNaskor+=60
        }

    }

    if (damageFromNaskor>damagaFromVitkor){
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${damageFromNaskor}`);
    }else {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${damagaFromVitkor}`);
    }

}
medenka([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas)'
])