import mongoose from mongoose';

const userSchema = new mongoose.Schema([object Object]
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model(User', userSchema); 