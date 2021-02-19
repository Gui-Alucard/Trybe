db.users.insertOne({
  _id: "amanda",
  name: "Amanda Granger",
  addresses: [
    {
      street: "Sunset Boulevard",
      city: "Los Angeles",
      state: "CA",
      zip: "12345"
    },
    {
      street: "1 Some Other Street",
      city: "New York",
      state: "NY",
      zip: "12345"
    }
  ]
 }
);

db.users.find({ _id: "amanda" }).pretty();