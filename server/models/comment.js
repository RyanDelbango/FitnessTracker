const conn = require('./mysql_connection');

const model = {

    getAllE(cb){
        conn.query("SELECT log_id, firstName, lastName, comment FROM FT_ExerciseComments JOIN FT_Users on FT_ExerciseComments.id = FT_Users.id", (err, data) => {
            cb(err, data);  
        })
    
    },

    getE(log_id, cb){
        conn.query("SELECT log_id, firstName, lastName, comment FROM FT_ExerciseComments JOIN FT_Users on FT_ExerciseComments.id = FT_Users.id WHERE log_id = ?", log_id, (err, data) => {
            cb(err, data);  
        })
    
    },

    getAllF(cb){
        conn.query("SELECT log_id, firstName, lastName, comment FROM FT_FoodComments JOIN FT_Users on FT_FoodComments.id = FT_Users.id", (err, data) => {
            cb(err, data);  
        })
    
    },

    getF(log_id, cb){
        conn.query("SELECT log_id, firstName, lastName, comment FROM FT_FoodComments JOIN FT_Users on FT_FoodComments.id = FT_Users.id WHERE log_id = ?", log_id, (err, data) => {
            cb(err, data);  
        })
    
    },

    createE(userid, log_id, input, cb){
        conn.query("INSERT INTO FT_ExerciseComments (id, log_id, comment) VALUES (?)",
                    [[userid, log_id, input.comment]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return;
                        }
                         cb(err,data);
                     }
        )
    },
    
    createF(userid, log_id, input, cb){
        conn.query("INSERT INTO FT_FoodComments (id, log_id, comment) VALUES (?)",
                    [[userid, log_id, input.comment]],
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