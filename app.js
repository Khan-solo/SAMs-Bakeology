var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require('mysql');

app.use(express.static("public"));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bakery"
});


var add = {
    ProductID: "9999",
    ProductName: "Poodle Cake",
    Category: "cake",
    Price: "RS 300"
}



connection.connect(function(error) {
    if (error) {
        console.log("Error while connecting to database")
    } else {

        // console.log("connected hia bhaaii");
        connection.query("SELECT * FROM products", function(err, result, fields) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                var row = result[i];
                console.log(row.ProductName, "costs", row.Price, "and its from category", row.Category);
            }
            // console.log(result);
        })
    }
});



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/products", function(req, res) {
    res.render("products");

});


app.get("/awards", function(req, res) {
    res.render("awards");
});


app.get("/services", function(req, res) {
    res.render("services");
});

app.get("/orders", function(req, res) {
    res.render("order");
});

app.get("/bakers", function(req, res) {
    res.render("bakers");
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

// var cakeArray = connection.query( "SELECT ProductName FROM products WHERE (Category = cake)");




app.get("/bread", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Bread' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("bread", { row: row, L: L });
    });
});

app.get("/cake", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Cake' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("cake", { row: row, L: L });
    });
});



app.get("/pie", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Pie' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("Pie", { row: row, L: L });
    });
});

app.get("/waffle", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Waffle' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("waffle", { row: row, L: L });
    });
});

app.get("/quiche", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Quiche' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("quiche", { row: row, L: L });
    });
});

app.get("/special", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Special' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("special", { row: row, L: L });
    });
});

app.get("/pastry", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Pastry' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("pastry", { row: row, L: L });
    });
});

app.get("/pancake", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Pancake' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("pancake", { row: row, L: L });
    });
});

app.get("/cookie", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Cookie' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("cookie", { row: row, L: L });
    });
});

app.get("/muffin", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Muffin' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("muffin", { row: row, L: L });
    });
});

app.get("/donut", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Donut' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("donut", { row: row, L: L });
    });
});

app.get("/bagel", function(req, res) {
    connection.query("SELECT * FROM products WHERE Category = 'Bagel' ORDER BY ProductName", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("bagel", { row: row, L: L });
    });
});


// app.post("/newuser", function(req, res) {
//     // get data from forms and add to campgrounds array..
//     var name = req.body.name;
//     var  = req.body.image;
//     var newCampground = { name: name, image: image };
//     campgrounds.push(newCampground);
//     res.redirect("/campgrounds");
// })
app.post("/newuser", function(req, res) {

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.psw;
    var city = req.body.city;
    var address = req.body.address;
    var country = req.body.country
    var pin = req.body.pin;
    var mobile = req.body.mobile;

    console.log(name, mobile, pin);
    var sql = `INSERT INTO user 
            (
                Name, Email, Address, City, Country, password, MobileNumber, Pin
            )
            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?, ?
            )`;
    connection.query(sql, [name, email, address, city, country, password, mobile, pin], function(err, data) {
        if (err) {
            console.log(err); // some error occured
        } else {
            console.log("data added to database") // successfully inserted into db;
        }
    });
    res.redirect("/");


})

app.get("/newuser", function(req, res) {
    res.render("newuser");
})


app.post("/newproduct", function(req, res) {
    // get data from forms and add to campgrounds array..
    var category = req.body.category;

    var name = req.body.name;
    var price = req.body.price;
    console.log(req.body);
    var abc = `INSERT INTO products 
            (
               ProductName, Category, Price
            )
            VALUES
            (   
             ?, ?, ?
            )`;
    connection.query(abc, [name, category, price], function(err, data) {
        if (err) {
            console.log(err); // some error occured
        } else {
            console.log("Product added to database") // successfully inserted into db;
        }
    });

    var cat = "/" + category.toLowerCase();

    res.redirect(cat);
});


app.get("/newproduct", function(req, res) {
    res.render("newproduct");
})

app.get("/table", function(req, res) {
    connection.query("SELECT * FROM products ORDER BY Category", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("table", { row: row, L: L });
    });
});
app.post("/edit", function(req, res) {

    var id = req.body.ID;
    var name = req.body.name;
    var cat = req.body.category;
    var price = req.body.price;

    var sql = "UPDATE products set ProductName =? , Category =?, Price =?  WHERE ProductID = ?";

    connection.query(sql, [name, cat, price, id], function(err, result) {
        console.log("Record Updated!!");

    });
    var page = "/" + cat.toLowerCase();
    res.redirect(page);
});






app.get("/edit", function(req, res) {
    connection.query("SELECT * FROM products ORDER BY Category", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("edit", { row: row, L: L });
    });
});

app.get("/delete", function(req, res) {
    connection.query("SELECT * FROM products ORDER BY Category", function(err, result, fields) {
        var R;
        var P;
        var L;
        var row = [];
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            L = result.length;
            row[i] = result[i];
            // console.log(row.ProductName, "costs", row.Price  );
        }
        res.render("delete", { row: row, L: L });
    });
});


app.post("/delete", function(req, res) {

    var id = req.body.id;

    var sql = (`DELETE FROM products where ProductID =?`);

    connection.query(sql, [id], function(req, res) {
        console.log("Delete ho gya!");
    })

    res.redirect("/table");
})




var port = process.env.port || 3000;


app.get("/login", function(req, res) {
    res.render("login");
});


app.post("/login", function(req, res) {

    var email = req.body.email;
    var password = req.body.psw;

    var sql = (`SELECT Password from users WHERE Email=? AND Password =?`);
    var check = connection.query(sql, [email, password], function(req, req) {
        result.redirect("/login");


    })
})

















app.listen(port, function() {
    console.log("The Bakery server has started");
});