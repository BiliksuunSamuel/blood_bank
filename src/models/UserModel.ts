import PersonModel from "./PersonModel";

export default interface UserModel extends PersonModel {
  role: number;
  status: number;
}
