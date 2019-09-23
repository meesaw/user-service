import {BodyParams, Controller, Post, } from "@tsed/common";
import { User } from "../../interfaces/User";
import { UsersService } from "src/services/users/UsersService";
import { Returns } from "@tsed/swagger";



/**
 * Add @Controller annotation to declare your class as Router controller.
 * The first param is the global path for your controller.
 * The others params is the controller dependencies.
 *
 * In this case, EventsCtrl is a dependency of CalendarsCtrl.
 * All routes of EventsCtrl will be mounted on the `/calendars` path.
 */
@Controller("/users")
export class UserController {

  constructor(private usersService: UsersService) {

  }

  /**
   * @param user
   * @returns {Promise<User>}
   */
  @Post("/user")
  @Returns(User)
  async update(@BodyParams() user: User): Promise<User> {
    return this.usersService.signup(user);
  }

}
