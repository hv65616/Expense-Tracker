const Income = require("../models/incomeModel");
const addincome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = Income({
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
      message: "Income data saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error From Add Income" });
  }
  // console.log(income);
};

const getincome = async (req, res) => {
  try {
    const income = await Income.find().sort({ createdAt: -1 });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Server Error From Get Income" });
  }
};

const deleteincome = (req, res) => {
  const { id } = req.params;
  Income.findByIdAndDelete(id).then((income) => {
    res.status(200).json({ message: "Income deleted" })
  }).catch((err)=>{
    res.status(500).json({message:"Server error"})
  })
};
module.exports = { addincome, getincome, deleteincome };
