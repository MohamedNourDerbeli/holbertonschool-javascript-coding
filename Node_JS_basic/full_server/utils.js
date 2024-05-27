const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            
            try {
                const database = JSON.parse(data);
                const fields = Object.keys(database);
                const result = {};

                fields.forEach(field => {
                    result[field] = database[field].map(student => student.firstname);
                });

                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    });
}

module.exports = { readDatabase };
