exports.up = (pgm) => {
  pgm.createTable("users", {
    id: "id",
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
    phone_number: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
    cpf: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
  });
};
