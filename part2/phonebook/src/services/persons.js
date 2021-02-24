import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return (
        axios
            .get(baseUrl)
            .then(response => response.data)
    )
}

const add = (personObject) => {
    return (
        axios
            .post(baseUrl, personObject)
            .then(response => response.data)
    )
}

const remove = (id) => {
    return (
        axios
            .delete(`${baseUrl}/${id}`)
    )
}

const update = (id, updatedPerson) => {
    return (
        axios
            .put(`${baseUrl}/${id}`, updatedPerson)
            .then(response => response.data)
    )
}

const services = {getAll, add, remove, update}

export default services