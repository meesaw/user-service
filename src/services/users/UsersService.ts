import {Service} from "@tsed/common";
import { User } from "src/interfaces/User";
import {
    CognitoUserPool,
    CognitoUser,
    CognitoUserAttribute,
  } from "amazon-cognito-identity-js";

@Service()
export class UsersService {

  /**
   * Register a new User
   * @param user
   * 
   */
  async signup(user: User): Promise<User> {

    //TODO: have to read it from config.
    const poolData = {
        UserPoolId : '...', // Your user pool id here
        ClientId : '...' // Your client id here
    };
    const userPool: CognitoUserPool = new CognitoUserPool(poolData);
    const attributeList: CognitoUserAttribute[] = [];
     const dataEmail = {
        Name : 'email',
        Value : user.email
    };

    const dataPhoneNumber = {
        Name : 'phone_number',
        Value : user.phone_number
    };

    const dataName = {
        Name : 'name',
        Value : user.name
    };

    //const address = {
      //  Name : 'address',
       // Value : user.address.street_address
   // };
    const dataGender = {
        Name : 'gender',
        Value : user.gender
    };
    const dataPreferedUserName = {
        Name : 'preferred_username',
        Value : user.preferred_username
    };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    //const attributeAddress = new CognitoUserAttribute(address);
    const attributeGender = new CognitoUserAttribute(dataGender);
    const attributeName= new CognitoUserAttribute(dataName);
    const attributePreferred = new CognitoUserAttribute(dataPreferedUserName);
    
 
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);
    attributeList.push(attributeGender);
    //attributeList.push(attributeAddress);
    attributeList.push(attributePreferred);

    userPool.signUp(dataEmail.Value, 'test132', attributeList, attributeList,
     (error, result) => {
         if(error) {
            console.log(error);
            return;
         }
        if(result) {
            const user: CognitoUser = result.user;
            console.log(user);
        }

        
    });
    console.log(user);
    return user;
  }

}
