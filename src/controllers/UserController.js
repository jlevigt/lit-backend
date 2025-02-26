class UserController {
  constructor(userService) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
    this.listUsers = this.listUsers.bind(this);
  }

  async listUsers(request, response, next) {
    try {
      const usersList = await this.userService.listUsers();

      return response.json(usersList);
    } catch (error) {
      next(error);
    }
  }

  async createUser(request, response, next) {
    try {
      const postData = {
        username: request.body.username,
        email: request.body.email,
        phone_number: request.body.phone_number,
        cpf: request.body.cpf,
      };

      await this.userService.createUser(postData);

      return response.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
