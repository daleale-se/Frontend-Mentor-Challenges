const fs = require('fs');

const readCsv = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').map(row => {
        const [username, title, checked, id] = row.split(',');
        return { username, title, checked: checked === 'true', id };
    });
};

const writeCsv = (filePath, data) => {
    const rows = data.map(todo => `${todo.username},${todo.title},${todo.checked},${todo.id}`);
    fs.writeFileSync(filePath, rows.join('\n'));
};

module.exports = { readCsv, writeCsv };
