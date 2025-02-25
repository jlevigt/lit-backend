
import BadRequestError from "../errors/BadRequestError.js";

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(postData) {
    if (!postData.username || !postData.email || !postData.phone_number || !postData.cpf) {
      throw new BadRequestError("BadRequest blank");
    }

    await this.checkUniqueUsername(postData.username);
    await this.checkUniqueEmail(postData.email);


    await this.userRepository.insertUser(postData);

    return;
  }

  async checkUniqueUsername(username) {
    const storedUser = await this.userRepository.findUserByUsername(username);
    if (storedUser) {
      throw new BadRequestError("BadRequest username");
    }
  }

  async checkUniqueEmail(email) {
    const storedUser = await this.userRepository.findUserByEmail(email);
    if (storedUser) {
      throw new BadRequestError("BadRequest email");
    }
  }
}

export default UserService;
