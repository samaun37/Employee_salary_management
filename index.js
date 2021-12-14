import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import bcrypt from 'bcrypt'
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    console.log("running on port 3001");
});

mongoose.connect(
    'mongodb+srv://samaun_37:samaun_37@cluster0.lajkg.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

const userSchema = new mongoose.Schema({
    reg: String,
    name: String,
    age: String,
    department: String,
    salary: String,
})
const Employee = new mongoose.model("Employee", userSchema);

app.post("/addnew", async (req, res) => {
    console.log(req.body)

    const { reg,name, age, department, salary } = req.body;

    Employee.findOne({ name: name }, (err, emp) => {
        if (emp) {
            res.send({ message: "Employee already exists" })
        } else {
            const emp = new Employee({
                reg,
                name,
                age,
                department,
                salary,
            })
            emp.save(err => {
                if (err) {
                    res.send({ message: "Some Error Occured." })
                } else {
                    res.send({ message: "Employee Successfully Added." })
                }
            })
        }
    })
});

app.post("/query", async (req, res) => {
    console.log("hi")
    const {department} = req.body;
    Employee.find(
        {
            department: department
        },
        (e,result) => {
            console.log(result);
            if(e) res.send(e);
            else res.send(result);
        }
    )
});

app.get("/showrecords", async (req, res) => {
    Employee.find({}, (e, result) => {
        if (e) res.send(e);
        else res.send(result);
    });
});
app.get("/", async (req, res) => {
    res.send("Backend Api");
});
