const express = require("express");
const user = require("./repositories/users");
const teacher = require("./repositories/teachers");
const student = require("./repositories/students");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/user", (req, res) => {
  user.getAll().then((results) => res.json(results));
});

app.get("/user/:id", (req, res) => {
  user.getOne(req.params.id).then((results) => res.json(results));
});

//  Register new user. 
// POST method that requires the email and password in a JSON format
app.post("/user", (req, res) => {
  if (!(req.body.email && req.body.password) || (req.body.email === "" && req.body.password === "")) {
    res.status(422).send('All fields are required (email, password)');
  } else {
    user.insert(req.body).then(result => {
      res.json({
        success: true, message: 'User was saved successfully'
      });
    }).catch(err => {
      res.json({ success: false, message: 'User was not saved correctly' });
    });
  }
});

// Change user data
// PUT method
app.put('/user/:id', function (req, res) {

  const { id } = req.params;

  if (!(req.body.email && req.body.password) || (req.body.email === "" && req.body.password === "")) {
    res.status(422).send('All fields are required (email, password)');
  } else {
    const replaced_data = {
      email: req.body.email,
      password: req.body.password
    }

    user.update(replaced_data, id).then(result => {
      res.json({
        success: true, message: 'User was saved successfully'
      });
    }).catch(err => {
      res.json({ success: false, message: 'User was not saved correctly' });
    })
  }
}
);

app.delete('/user/:id', (req, res) => {
  const { id } = req.params;

  if (id === teacher.getId(id)) {
    return res.status(500).json({
      message: "Users with a teacher id assigned cannot be removed",
    })
  }
  else try {
    //const { id } = req.params;
    (user.delete(id))
      .then(res.json({ success: true, message: 'User was deleted correctly' }));
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example server listening on http://localhost: ${port}`);
});