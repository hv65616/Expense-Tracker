const Expense = require("../models/expenseModel");
const addexpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = Expense({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    if (amount <= 0 || amount === "number") {
      return res.status(400).json({ msg: "Amount must be a postitive number" });
    }
    await income.save();
    res.status(200).json({
      status: "success",
      message: "Expense data saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error From Add Expense" });
  }
};

const getexpense = async (req, res) => {
  try {
    const income = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Server Error From Get Expense" });
  }
};

const deleteexpense = (req, res) => {
  const { id } = req.params;
  Expense.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error" });
    });
};
module.exports = { addexpense, getexpense, deleteexpense };
