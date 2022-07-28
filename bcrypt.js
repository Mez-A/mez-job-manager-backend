import bcrypt from "bcrypt";


const password = 'abc123'

const salt = await bcrypt.genSalt();
console.log(salt);

const hash = await bcrypt.hash(password, salt)
console.log(hash);

const dbHash = '$2b$10$jfNAHkm8wjIPaNAR7zYd1uez7s8Iw.zagy51PPBql3UVuYgS9kcfq'

console.log(await bcrypt.compare(password, dbHash));