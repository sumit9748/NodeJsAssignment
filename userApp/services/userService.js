import fs from 'fs';

const DATA_FILE = "./data/UserData.json"

const readData = () => {
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

export const createUser = (user) => {
    let users = readData();
    users.push(user);
    saveData(users);
}
export const addUserPreference = (bookType, userId) => {
    let users = readData();
    let user = users.find(u => u.id == userId);
    if (user) {
        user.preferences.push(bookType);
    } else {
        console.log(err);
    }
}

export const getAllUser = () => {
    return readData();
}