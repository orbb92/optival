const db = {
    Persons: {
        columns: [
            {field: 'id', headerName: 'ID', width: 70},
            {field: 'firstName', headerName: 'First name', width: 130},
            {field: 'lastName', headerName: 'Last name', width: 130},
            {
                field: 'age',
                headerName: 'Age',
                type: 'number',
                width: 90,
            },
            {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
            },
        ],
        rows: [{id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
            {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
            {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
            {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
            {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
            {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
            {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
            {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
            {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},]
    },
    Dogs: {
        columns: [
            {field: 'id', headerName: 'ID', width: 70},
            {field: 'name', headerName: 'Name', width: 130},
            {field: 'weight', headerName: 'Weight', width: 130,type: 'number'},
            {
                field: 'lifeSpan', headerName: 'Life span', type: 'number',
                width: 90,
            },

        ],
        rows: [
            {id: 1, name: 'Bulldog', weight:20 , lifeSpan: 10},
            {id: 2, name: 'German Shepherd', weight: 30, lifeSpan: 12},
            {id: 3, name: 'Labrador Retriever', weight: 32, lifeSpan: 11},
            {id: 4, name: 'Siberian Husky', weight: 27, lifeSpan: 15},
            {id: 5, name: 'Pomeranian', weight: 3, lifeSpan: 10},
           ]
    }
}

module.exports = db