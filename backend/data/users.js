import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'test@test.com',
    password: bcrypt.hashSync('#2021dev', 10),
    isAdmin: true,
  },
  {
    name: 'Shahnewaz',
    email: 'shahnewaz@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tameem',
    email: 'tameem@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
