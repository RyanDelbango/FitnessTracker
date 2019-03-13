const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, email, bio, interests, quotes, heroes FROM FT_Users JOIN FT_Profiles on FT_Users.id = FT_Profiles.id", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){
        conn.query("SELECT FT_Users.id, firstName, lastName, email, bio, interests, quotes, heroes FROM FT_Users JOIN FT_Profiles on FT_Users.id = FT_Profiles.id where FT_Users.id = ?", id, (err, data) => {
            cb(err, data);  
        })
    
    },

    
    edit(input, cb){
        if(!input.id){
            cb(Error('An id is required.'))
            console.log(Error);
            return;
        }
        conn.query("Replace INTO FT_Profiles (id, bio, interests, quotes, heroes) VALUES (?)",
                    [[input.id, input.bio, input.interests, input.quotes, input.heroes]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return;
                        }
                         cb(err,data);
                     }
        )
    }
};

module.exports = model;