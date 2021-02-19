{
  _id: "joe",
  name: "Joe Bookreader"
}

// documento do endereço
{
  user_id: "joe", // referencia o documento do usuário
  street: "123 Fake Street",
  city: "Faketon",
  state: "MA",
  zip: "12345"
}

db.users.insertOne({
  _id: "joe",
  name: "Joe Bookreader",
  address: {
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
  }
});

db.users.find({ _id: "joe" }).pretty();