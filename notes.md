### Authentication

```js
// hashing password
const hashedPassword = await bcrypt.hash(password, 10);
// comparing password
const isValid = await bcrypt.compare(password, user.password);
// generating token
const token = await jwt.sign({ userId: user._id }, SECRET, {
    expiresIn: "24h",
});
// validating token
const token = req.headers.authorization;
const decoded = jwt.verify(token, SECRET);
```
