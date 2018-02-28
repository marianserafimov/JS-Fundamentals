function resttHouse(roomsArr, peopleArr) {
    let accomodationMap = new Map() //{numberOfRoom, [{name,age}, {name,age}]}
    let roomsMap = new Map()        //{numberOfRoom, new map{roomType, freeBeds}}

    for (let room of roomsArr) {
        if(room.type==="double-bedded"){
            if(!roomsMap.has(room.number)){
                roomsMap.set(room.number , new Map())
            }
            roomsMap.get(room.number).set({type : room.type, emptyBeds : 2})
        }
        if(room.type==="triple"){
            if(!roomsMap.has(room.number)){
                roomsMap.set(room.number, new Map())
            }
            roomsMap.get(room.number).set({type : room.type, emptyBeds : 3})
        }
    }
    console.log(roomsMap.get());
}
resttHouse(  [

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