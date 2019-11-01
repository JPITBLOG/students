export const getAllStudent = () => {
    return [{
        _id: "0123",
        address_one: "SultanaBad,Bhimpor,Surat..",
        address_two: "SultanaBad,Bhimpor,Surat..",
        city: "Surat..",
        dob: "2017-09-23",
        studentImage: "http://localhost:8001\\uploads\\student\\2019-10-30T08-46-45.643Zasus1.jpeg",
        fname: "Biren",
        isdelete: "0",
        lname: "Pithavala",
        marks: [{
            isdelete: "0",
            marks: "34",
            subjectId: "5dada92127bf5f0124f5aac0",
            _id: "5db15d02a234701cd4500d46"
        }, {
            isdelete: "0",
            marks: "36",
            subjectId: "5dada8f927bf5f0124f5aabf",
            _id: "5db15d02a234701cd4500d47"
        }]
    },{
        _id: "01234",
        address_one: "SultanaBad,Bhimpor,Surat",
        address_two: "SultanaBad,Bhimpor,Surat",
        city: "Surat",
        dob: "2017-09-23",
        studentImage: "http://localhost:8001\\uploads\\student\\2019-10-30T08-46-45.643Zasus1.jpeg",
        fname: "Biren",
        isdelete: "0",
        lname: "Pithavala",
        marks: [{
            isdelete: "0",
            marks: "34",
            subjectId: "5dada92127bf5f0124f5aac0",
            _id: "5db15d02a234701cd4500d46"
        }, {
            isdelete: "0",
            marks: "36",
            subjectId: "5dada8f927bf5f0124f5aabf",
            _id: "5db15d02a234701cd4500d47"
        }]
    }]
}

export const subjectData = () => {
    return [{subject: "Gujarati",
            _id: "5dada8f927bf5f0124f5aabf"},
            {subject: "Hindi",
                _id: "5dada92127bf5f0124f5aac0"}]
}

export const studentData = () => {
    return {
        _id: "0123",
        address_one: "SultanaBad,Bhimpor,Surat..",
        address_two: "SultanaBad,Bhimpor,Surat..",
        city: "Surat..",
        dob: "2017-09-23",
        studentImage: "http://localhost:8001\\uploads\\student\\2019-10-30T08-46-45.643Zasus1.jpeg",
        fname: "Biren",
        isdelete: "0",
        lname: "Pithavala",
        marks: [{
        isdelete: "0",
        marks: "34",
        subjectId: "5dada92127bf5f0124f5aac0",
        _id: "5db15d02a234701cd4500d46"
    }, {
        isdelete: "0",
        marks: "36",
        subjectId: "5dada8f927bf5f0124f5aabf",
        _id: "5db15d02a234701cd4500d47"
    }]
    }
}

export const setEditData = () => {
    return {
        _id: "01234",
            address_one: "SultanaBad,Bhimpor,Surat..",
        address_two: "SultanaBad,Bhimpor,Surat..",
        city: "Surat..",
        dob: "2017-09-23",
        studentImage: "http://localhost:8001\\uploads\\student\\2019-10-30T08-46-45.643Zasus1.jpeg",
        fname: "Biren",
        isdelete: "0",
        lname: "Pithavala",
        marks: [{
        isdelete: "0",
        marks: "34",
        subjectId: "5dada92127bf5f0124f5aac0",
        _id: "5db15d02a234701cd4500d46"
    }, {
        isdelete: "0",
        marks: "36",
        subjectId: "5dada8f927bf5f0124f5aabf",
        _id: "5db15d02a234701cd4500d47"
    }]
    }
}

export const matchAddElementState = () => {
    return [{_id:"5db15d02a234701cd4500d46",subject:"5dada92127bf5f0124f5aac0",marks:"34",isdelete:0},
            {_id:"5db15d02a234701cd4500d47",subject:"5dada8f927bf5f0124f5aabf",marks:"36",isdelete:0},
            {_id:null,subject:null,marks:null,isdelete:0}]
}

export const marksDetailData = () => {
    return [{_id:"123",subject:"gujarati",marks:20,isdelete:1},{_id:"234",subject:"hindi",marks:32,isdelete:0},
        {_id:"343",subject:"maths",marks:25,isdelete:1}]
}

export const errorData = () => {
    return {fname: "there is an error in fname",lname: "there is an error in lname",dob: "there is an error in dob",
        selectedFile: "there is an error in select file",address1: "there is an error in address1",
        address2: "there is an error in address2",state: "there is an error in state",city: "there is an error in city",
        zipcod: "there is an error in zipcode"}
}

export const stateData = () => {
    return {fname:"jigar",lname:"patel",dob:'23/8/1995',srcImage:"http://localhost:8001\\uploads\\student\\2019-10-30T08-46-45.643Zasus1.jpeg",
        address1:"this is my first address",address2:"this is my second address",cstat:"Gujarat",city:"Surat",zipcod:"395007"}
}