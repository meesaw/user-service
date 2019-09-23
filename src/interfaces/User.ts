import { Required, Email, Property } from "@tsed/common";

export class Address {
    @Required()
    street_address: string;
    @Property()
    locality?: string;
    @Property()
    region?: string;
    @Property()
    country?: string;
    @Property()
    postal_code?: string;
}
export class User {
    @Required()
    name: string;
    @Required()
    preferred_username: string;
    @Required()
    @Email()
    email: string;
    @Required()
    gender: string;
    @Required()
    phone_number: string;
   // @Required()
    //@PropertyType(Address)
    //address: Address; 
  }
  