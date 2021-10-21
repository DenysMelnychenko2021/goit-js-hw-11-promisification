console.log(
  "============================Функция toggleUserState()===================================="
);

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

/* const toggleUserState1 = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  callback(updatedUsers);
}; */

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return Promise.resolve(updatedUsers);
};

const logger = (updatedUsers) => console.table(updatedUsers);

/* toggleUserState1(users, "Mango", logger);
toggleUserState1(users, "Lux", logger); */

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
