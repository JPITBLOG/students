export const getAllStudent = () => {
    return [{
        "_id": "5db15d02a234701cd4500d45",
        "fname": "Biren",
        "lname": "Pithavala",
        "dob": "2017-09-23",
        "studentImage": "http://localhost:8001\\uploads\\student\\2019-10-24T08-12-50.250Zacer1.jpeg",
        "address_one": "SultanaBad,Bhimpor,Surat",
        "address_two": "SultanaBad,Bhimpor,Surat",
        "state": "Gujarat",
        "city": "Surat",
        "zipcod": "343432",
        "isdelete": "0",
        "marks": [
            {
                "_id": "5db15d02a234701cd4500d46",
                "subjectId": "5dada92127bf5f0124f5aac0",
                "marks": "34",
                "isdelete": "0"
            },
            {
                "_id": "5db15d02a234701cd4500d47",
                "subjectId": "5dada8f927bf5f0124f5aabf",
                "marks": "36",
                "isdelete": "0"
            }
        ]
    },
        {
            "_id": "5dadafb927bf5f0124f5aac7",
            "fname": "Tejash",
            "lname": "Prajapati",
            "dob": "2018-09-13",
            "studentImage": "http://localhost:8001\\uploads\\student\\2019-10-21T13-16-41.396Zacer5.jpeg",
            "address_one": "Nanpura,Surat,Gujarat",
            "address_two": "Nanpura,Surat,Gujarat",
            "state": "Gujarat",
            "city": "Surat",
            "zipcod": "395007",
            "isdelete": "0",
            "marks": [
                {
                    "_id": "5dadafb927bf5f0124f5aac8",
                    "subjectId": "5dada94127bf5f0124f5aac2",
                    "marks": "30",
                    "isdelete": "0"
                },
                {
                    "_id": "5dadafb927bf5f0124f5aac9",
                    "subjectId": "5dada93527bf5f0124f5aac1",
                    "marks": "35",
                    "isdelete": "0"
                }
            ]
        }]
}

export const editData = () => {
    return [{
        '_id':"0123",
        'fname': "fname",
        'lname': "lname",
        'dob': "11-8-95",
        'studentImage': "there is image file",
        'address_one': "this is my first address",
        'address_two': "this is my first address",
        'state': "Gujarat",
        'city': "Surat",
        'zipcod': "122211",
        'isdelete': 0,
        'marks':[{_id:"1",subject:"Gujarati",marks:23,isdelete: 0},
            {_id:"2",subject:"Maths",marks:40,isdelete: 1}]
    }]
}

export const passSubject = () => {
    return [
        {
            "_id": "5dada8f927bf5f0124f5aabf",
            "subject": "Gujarati"
        },
        {
            "_id": "5dada92127bf5f0124f5aac0",
            "subject": "Hindi"
        },
        {
            "_id": "5dada93527bf5f0124f5aac1",
            "subject": "English"
        },
        {
            "_id": "5dada94127bf5f0124f5aac2",
            "subject": "Maths"
        }
    ]
}