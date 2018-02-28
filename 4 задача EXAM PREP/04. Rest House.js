function restHouse(roomsArr, peopleArr) {
    let rooms = new Map()
    let accommodation = new Map()
    let guestsMovedToTheTeaHouse = 0;
    let roomSpaceMap = new Map()

    for (let currentRoom of roomsArr) {
        if(currentRoom.type ==="triple"){
            rooms.set(Number(currentRoom.number), currentRoom.type)
        }
        if(currentRoom.type ==="double-bedded"){
            rooms.set(Number(currentRoom.number), currentRoom.type)
        }
    }
    console.log(rooms);
    for (let [number, type] of rooms) {
        if(type ==="double-bedded"){
            roomSpaceMap.set(number, 2)
        }
        if(type ==="triple"){
            roomSpaceMap.set(number, 3)
        }

    }

    for (let people of peopleArr) {
        let firstPersonGender = people.first.gender
        let secondPersonGender = people.second.gender

        if(firstPersonGender==="female" &&secondPersonGender==="male"
        || firstPersonGender==="male" &&secondPersonGender==="female")
        {
            console.log(rooms);

            for (let [room, roomType] of rooms) {
                /*if(roomType==="double-bedded"){
                    accommodation.set(room, {name:})
                }*/


            }
        }

    }


}
restHouse(  [

            { number: '206', type: 'double-bedded' },
            { number: '311', type: 'triple' }

            ],

    [

        {   first: { name: 'Tanya Popova', gender: 'female', age: 24 },
            second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },

        {   first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } },

        {   first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } }


    ]
)